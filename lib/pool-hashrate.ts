// Per-pool ETC hashrate — derived from recent block coinbase attribution
//
// Approach: fetch the last 1,000 blocks from Blockscout, count blocks per miner
// address, map known addresses to pool IDs, then scale by current network hashrate.
//
// ISR: revalidate every 3600s — matches the hashrate chart cadence.
// On any failure → returns empty record; table displays "—" gracefully.

import { fetchHashrateTHs } from '@/lib/hashrate'
import poolAddresses from './pool-addresses.json'

const BLOCKSCOUT = 'https://etc.blockscout.com/api/v2'

// Known ETC mining pool payout addresses → pool_id, in lib/pool-addresses.json so scripts/pool-history.mjs
// reads the same list. A pool's address is the miner of the last block MiningPoolStats credits to it; a pool
// that changes address drops out of the shares until it is added there.
const POOL_ADDRESSES: Record<string, string> = poolAddresses

const BLOCKS_TO_SAMPLE = 1000

/** The share above which a miner no listed pool claims is reported, since it means an address is missing. */
const UNMATCHED_WARNING_SHARE = 0.05

interface BlockscoutBlocksPage {
  items: Array<{ miner?: { hash?: string } }>
  /** Query parameters for the next page, passed through as given: their keys are Blockscout's. */
  next_page_params: Record<string, string | number> | null
}

async function fetchMinerCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {}
  let cursor: Record<string, string | number> | null = null
  let total = 0

  while (total < BLOCKS_TO_SAMPLE) {
    const params = new URLSearchParams({ type: 'block' })
    for (const [key, value] of Object.entries(cursor ?? {})) params.set(key, String(value))
    const res = await fetch(`${BLOCKSCOUT}/blocks?${params}`, { next: { revalidate: 3600 } })
    if (!res.ok) {
      console.warn(`pool-hashrate: Blockscout answered ${res.status} after ${total} of ${BLOCKS_TO_SAMPLE} blocks`)
      break
    }
    const page: BlockscoutBlocksPage = await res.json()
    for (const block of page.items ?? []) {
      const addr = block.miner?.hash?.toLowerCase()
      if (addr) {
        counts[addr] = (counts[addr] ?? 0) + 1
        total++
      }
    }
    cursor = page.next_page_params ?? null
    if (!cursor) break
  }

  return counts
}

export type PoolHashrates = Record<string, number>

export async function fetchPoolHashrates(): Promise<PoolHashrates> {
  try {
    const [minerCounts, networkTHs] = await Promise.all([
      fetchMinerCounts(),
      fetchHashrateTHs(),
    ])
    const totalBlocks = Object.values(minerCounts).reduce((a, b) => a + b, 0)
    if (!totalBlocks || !networkTHs) return {}

    const result: PoolHashrates = {}
    for (const [addr, count] of Object.entries(minerCounts)) {
      const poolId = POOL_ADDRESSES[addr]
      if (!poolId && count / totalBlocks > UNMATCHED_WARNING_SHARE) {
        console.warn(`pool-hashrate: ${addr} mined ${count} of ${totalBlocks} sampled blocks and matches no listed pool`)
      }
      if (poolId) {
        const share = count / totalBlocks
        const ths = Math.round(share * networkTHs * 100) / 100
        result[poolId] = Math.round(((result[poolId] ?? 0) + ths) * 100) / 100
      }
    }
    return result
  } catch {
    return {}
  }
}

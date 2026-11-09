import { fetchNetworkNow } from '@/lib/hashrate'
import { fetchExchangeRates } from '@/lib/exchange-rates'
import { CURRENT_ERA, getBlockRewardForEra } from '@/app/research/data/emission'

/**
 * The security figures on /research/network, each computed from live data:
 * - what renting the network's hashrate for an hour would cost at NiceHash's Etchash price, the measure
 *   of a 51% attack's cost by rented hashpower, and how much of that hashrate NiceHash offers at all;
 * - the block rewards miners earn in an hour, which honest hashrate is paid from;
 * - whether blocks are arriving normally: the latest block's age, Blockscout's average block time and the
 *   deepest recent reorganization Blockscout recorded.
 * A figure whose source cannot be reached is null, and the page shows it as unavailable.
 */

const BLOCKSCOUT = 'https://etc.blockscout.com/api/v2'
const NICEHASH_ORDER_BOOK = 'https://api2.nicehash.com/main/api/v2/hashpower/orderBook?algorithm=ETCHASH&size=100'

export interface RentalCost {
  /** USD to rent the network's hashrate for one hour at the price below. */
  usdPerHour: number
  /** The highest price an active NiceHash order pays for Etchash, in BTC per TH/s per day. */
  btcPerThsDay: number
  /** NiceHash's Etchash hashpower in use, as a share of the network's, 0 to 1. */
  nicehashShare: number
}

export interface BlockProduction {
  /** When Blockscout served the block list, as an ISO string. */
  readAt: string
  /** Seconds between the latest block and the time Blockscout served it. */
  latestBlockAge: number
  /** Blockscout's average block time, in seconds. */
  avgBlockTime: number
  /** The longest run of consecutive heights among Blockscout's recently reorganized blocks. */
  deepestReorg: number
  /** How far back those reorganized blocks reach, in hours. */
  reorgWindowHours: number
  normal: boolean
  /** What is out of the ordinary when `normal` is false. */
  issues: string[]
}

export interface NetworkSecurity {
  readAt: string
  hashrateTHs: number | null
  rental: RentalCost | null
  hourlyRewardUsd: number | null
  production: BlockProduction | null
}

async function getJson<T>(url: string, revalidate: number): Promise<T | null> {
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' }, next: { revalidate } })
    return response.ok ? ((await response.json()) as T) : null
  } catch {
    return null
  }
}

/**
 * Reads JSON with the time the server sent it. A cached response keeps the server's Date header, so an age
 * measured from it is the age when the response was fresh, not the age of the cache entry.
 */
async function getJsonAt<T>(url: string, revalidate: number): Promise<{ body: T; servedAt: number } | null> {
  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' }, next: { revalidate } })
    if (!response.ok) return null
    const servedAt = Date.parse(response.headers.get('date') ?? '')
    return { body: (await response.json()) as T, servedAt: Number.isFinite(servedAt) ? servedAt : Date.now() }
  } catch {
    return null
  }
}

interface OrderBook {
  stats?: Record<string, { totalSpeed?: string; orders?: { price?: string; acceptedSpeed?: string; alive?: boolean }[] }>
}

async function rentalCost(hashrateTHs: number, btcUsd: number | null): Promise<RentalCost | null> {
  if (!btcUsd) return null
  const book = await getJson<OrderBook>(NICEHASH_ORDER_BOOK, 3600)
  const market = book?.stats?.BTC
  if (!market) return null
  const prices = (market.orders ?? [])
    .filter((order) => order.alive && Number(order.acceptedSpeed) > 0)
    .map((order) => Number(order.price))
    .filter((price) => price > 0)
  if (prices.length === 0) return null
  const btcPerThsDay = Math.max(...prices)
  return {
    usdPerHour: (hashrateTHs * btcPerThsDay * btcUsd) / 24,
    btcPerThsDay,
    nicehashShare: Number(market.totalSpeed ?? 0) / hashrateTHs,
  }
}

async function blockProduction(): Promise<BlockProduction | null> {
  const [stats, latest, reorgs] = await Promise.all([
    getJson<{ average_block_time?: number }>(`${BLOCKSCOUT}/stats`, 3600),
    getJsonAt<{ items?: { timestamp: string }[] }>(`${BLOCKSCOUT}/blocks?type=block`, 3600),
    getJson<{ items?: { height: number; timestamp: string }[] }>(`${BLOCKSCOUT}/blocks?type=reorg`, 3600),
  ])
  const latestTime = latest?.body.items?.[0]?.timestamp
  if (!latest || !stats?.average_block_time || !latestTime || !reorgs?.items) return null
  const servedAt = latest.servedAt
  const latestBlockAge = Math.max(0, (servedAt - Date.parse(latestTime)) / 1000)
  const avgBlockTime = stats.average_block_time / 1000
  const heights = [...new Set(reorgs.items.map((item) => item.height))].sort((a, b) => a - b)
  let deepestReorg = heights.length ? 1 : 0
  for (let i = 1, run = 1; i < heights.length; i++) {
    run = heights[i] === heights[i - 1] + 1 ? run + 1 : 1
    deepestReorg = Math.max(deepestReorg, run)
  }
  const oldest = reorgs.items.reduce((min, item) => Math.min(min, Date.parse(item.timestamp)), servedAt)
  const issues: string[] = []
  if (latestBlockAge > 180) issues.push(`No new block on Blockscout for ${Math.round(latestBlockAge / 60)} minutes`)
  if (avgBlockTime < 10 || avgBlockTime > 16) issues.push(`Average block time of ${avgBlockTime.toFixed(1)} seconds`)
  if (deepestReorg > 3) issues.push(`A reorganization ${deepestReorg} blocks deep`)
  return {
    readAt: new Date(servedAt).toISOString(),
    latestBlockAge,
    avgBlockTime,
    deepestReorg,
    reorgWindowHours: Math.max(1, Math.round((servedAt - oldest) / 3_600_000)),
    normal: issues.length === 0,
    issues,
  }
}

export async function fetchNetworkSecurity(): Promise<NetworkSecurity> {
  const [now, rates, production] = await Promise.all([fetchNetworkNow(), fetchExchangeRates(), blockProduction()])
  const hashrateTHs = now.live ? now.hashrateTHs : null
  const etcUsd = rates.etc.usd ?? null
  const hourlyRewardUsd =
    now.live && etcUsd ? getBlockRewardForEra(CURRENT_ERA) * (3600 / now.blockTimeSeconds) * etcUsd : null
  return {
    readAt: new Date().toISOString(),
    hashrateTHs,
    rental: hashrateTHs ? await rentalCost(hashrateTHs, rates.btc_usd) : null,
    hourlyRewardUsd,
    production,
  }
}

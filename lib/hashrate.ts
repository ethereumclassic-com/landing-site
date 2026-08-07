import { NOMINAL_BLOCK_TIME_SECONDS } from './chain'
// ETC network hashrate — current value + multi-timeframe history
// ISR: revalidates at most once per hour
// Sources:
//   Current:  Blockscout /api/v2/blocks/{height} → difficulty / avg_block_time → TH/s
//   History:  same formula, sampled across NUM_POINTS evenly-spaced blocks

const BLOCKSCOUT = 'https://etc.blockscout.com/api/v2'
// Only used to convert a lookback WINDOW into a block count. The hashrate
// figure itself divides by Blockscout's own reported average_block_time, so
// what the site shows matches what Blockscout reports.
const ETC_NOMINAL_BLOCK_TIME_S = NOMINAL_BLOCK_TIME_SECONDS
export const FALLBACK_HASHRATE_THS = 150
// Difficulty and hashrate are not independent: FALLBACK_THS * nominal block
// time is the difficulty that would produce it, so the two fallbacks agree
// instead of describing two different networks.
const FALLBACK_DIFFICULTY_PH =
  Math.round((FALLBACK_HASHRATE_THS * 1e12 * ETC_NOMINAL_BLOCK_TIME_S) / 1e15 * 1000) / 1000
const NUM_POINTS = 14

export type TimePeriod = 'week' | 'month' | 'year' | 'all'

export interface HashratePoint {
  label: string
  hashrateTHs: number
  /**
   * Network difficulty at the same block, in petahash-equivalents (1e15).
   *
   * Carried on the same point rather than fetched separately: hashrate is
   * DERIVED from difficulty, so every block this module already reads to build
   * the hashrate series carries the difficulty too. A parallel difficulty
   * module would double the upstream cost (56 block reads per timeframe set)
   * to re-fetch bytes this one already has in hand.
   */
  difficultyPH: number
}

export type HashrateHistories = Record<TimePeriod, HashratePoint[]>

interface BlockscoutBlock {
  difficulty: string
  timestamp: string
  height: number
}

interface BlockscoutStats {
  total_blocks: string
  /** Milliseconds. Blockscout's own rolling average. */
  average_block_time?: number
}

const TIMEFRAME_BLOCKS: Record<TimePeriod, (h: number) => number> = {
  week:  () => Math.round((7 * 24 * 3600) / ETC_NOMINAL_BLOCK_TIME_S),
  month: () => Math.round((30 * 24 * 3600) / ETC_NOMINAL_BLOCK_TIME_S),
  year:  () => Math.round((365 * 24 * 3600) / ETC_NOMINAL_BLOCK_TIME_S),
  all:   (h) => h,
}

/** Blockscout reports average_block_time in ms; fall back to nominal. */
function blockTimeSeconds(stats: BlockscoutStats | null): number {
  const ms = stats?.average_block_time
  return ms && ms > 0 ? ms / 1000 : ETC_NOMINAL_BLOCK_TIME_S
}

function toTHs(difficulty: number, blockTimeS: number): number {
  return Math.round((difficulty / blockTimeS / 1e12) * 10) / 10
}

/** Raw difficulty → petahash-equivalents, the scale ETC difficulty reads at. */
function toPH(difficulty: number): number {
  return Math.round((difficulty / 1e15) * 1000) / 1000
}

function formatLabel(isoTimestamp: string, period: TimePeriod): string {
  const d = new Date(isoTimestamp)
  const month = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
  const day = d.getUTCDate()
  const year = d.getUTCFullYear()
  const hours = d.getUTCHours()
  if (period === 'week')  return hours === 0 ? `${month} ${day}` : `${month} ${day} 12:00`
  if (period === 'month') return `${month} ${day}`
  return `${month} '${String(year).slice(2)}`
}

/**
 * Current network state, all three figures read from one block and one /stats
 * call so they are mutually consistent by construction. Reading hashrate and
 * difficulty from separate calls lets them describe different blocks.
 */
export interface NetworkNow {
  hashrateTHs: number
  difficultyPH: number
  /** Blockscout's own rolling average, in seconds. */
  blockTimeSeconds: number
  height: number
  /** False when every figure below is a fallback, not a live reading. */
  live: boolean
}

export async function fetchNetworkNow(): Promise<NetworkNow> {
  try {
    const statsRes = await fetch(`${BLOCKSCOUT}/stats`, { next: { revalidate: 3600 } })
    if (!statsRes.ok) throw new Error(`stats ${statsRes.status}`)
    const stats: BlockscoutStats = await statsRes.json()
    const currentHeight = parseInt(stats.total_blocks, 10)
    if (!currentHeight) throw new Error('no height')
    const block = await fetchBlock(currentHeight)
    if (!block) throw new Error('no block')
    const difficulty = parseFloat(block.difficulty)
    if (!difficulty) throw new Error('no difficulty')
    const blockTimeS = blockTimeSeconds(stats)
    return {
      hashrateTHs: toTHs(difficulty, blockTimeS),
      difficultyPH: toPH(difficulty),
      blockTimeSeconds: blockTimeS,
      height: currentHeight,
      live: true,
    }
  } catch {
    return {
      hashrateTHs: FALLBACK_HASHRATE_THS,
      difficultyPH: FALLBACK_DIFFICULTY_PH,
      blockTimeSeconds: ETC_NOMINAL_BLOCK_TIME_S,
      height: 0,
      live: false,
    }
  }
}

export async function fetchHashrateTHs(): Promise<number> {
  return (await fetchNetworkNow()).hashrateTHs
}

async function fetchBlock(height: number): Promise<BlockscoutBlock | null> {
  try {
    const res = await fetch(`${BLOCKSCOUT}/blocks/${height}`, { next: { revalidate: 3600 } })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

async function fetchHistoryFor(
  period: TimePeriod,
  currentHeight: number,
  blockTimeS: number,
): Promise<HashratePoint[]> {
  const totalBlocks = TIMEFRAME_BLOCKS[period](currentHeight)
  const intervalBlocks = Math.floor(totalBlocks / (NUM_POINTS - 1))
  const blocks = await Promise.all(
    Array.from({ length: NUM_POINTS }, (_, i) => {
      const stepsBack = NUM_POINTS - 1 - i
      return fetchBlock(Math.max(1, currentHeight - stepsBack * intervalBlocks))
    }),
  )
  const points: HashratePoint[] = []
  for (const block of blocks) {
    if (!block) continue
    const difficulty = parseFloat(block.difficulty)
    if (!difficulty) continue
    points.push({
      label: formatLabel(block.timestamp, period),
      hashrateTHs: toTHs(difficulty, blockTimeS),
      difficultyPH: toPH(difficulty),
    })
  }
  return points
}

export async function fetchAllHashrateHistories(): Promise<HashrateHistories> {
  let currentHeight = 0
  let blockTimeS = ETC_NOMINAL_BLOCK_TIME_S
  try {
    const res = await fetch(`${BLOCKSCOUT}/stats`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const data: BlockscoutStats = await res.json()
      currentHeight = parseInt(data.total_blocks, 10)
      blockTimeS = blockTimeSeconds(data)
    }
  } catch { /* fall through */ }

  if (!currentHeight) return { week: [], month: [], year: [], all: [] }

  const [week, month, year, all] = await Promise.all([
    fetchHistoryFor('week', currentHeight, blockTimeS),
    fetchHistoryFor('month', currentHeight, blockTimeS),
    fetchHistoryFor('year', currentHeight, blockTimeS),
    fetchHistoryFor('all', currentHeight, blockTimeS),
  ])
  return { week, month, year, all }
}

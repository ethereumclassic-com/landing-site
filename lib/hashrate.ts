// ETC network hashrate — current value + multi-timeframe history
// ISR: revalidates at most once per hour
// Sources:
//   Current:  Blockscout /api/v2/blocks/{height} → difficulty / avg_block_time → TH/s
//   History:  same formula, sampled across NUM_POINTS evenly-spaced blocks

const BLOCKSCOUT = 'https://etc.blockscout.com/api/v2'
const ETC_AVG_BLOCK_TIME_S = 13
const FALLBACK_THS = 210
const NUM_POINTS = 14

export type TimePeriod = 'week' | 'month' | 'year' | 'all'

export interface HashratePoint {
  label: string
  hashrateTHs: number
}

export type HashrateHistories = Record<TimePeriod, HashratePoint[]>

interface BlockscoutBlock {
  difficulty: string
  timestamp: string
  height: number
}

interface BlockscoutStats {
  total_blocks: string
}

const TIMEFRAME_BLOCKS: Record<TimePeriod, (h: number) => number> = {
  week:  () => Math.round((7 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
  month: () => Math.round((30 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
  year:  () => Math.round((365 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
  all:   (h) => h,
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

export async function fetchHashrateTHs(): Promise<number> {
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
    return Math.round((difficulty / ETC_AVG_BLOCK_TIME_S / 1e12) * 10) / 10
  } catch {
    return FALLBACK_THS
  }
}

async function fetchBlock(height: number): Promise<BlockscoutBlock | null> {
  try {
    const res = await fetch(`${BLOCKSCOUT}/blocks/${height}`, { next: { revalidate: 3600 } })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

async function fetchHistoryFor(period: TimePeriod, currentHeight: number): Promise<HashratePoint[]> {
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
      hashrateTHs: Math.round((difficulty / ETC_AVG_BLOCK_TIME_S / 1e12) * 10) / 10,
    })
  }
  return points
}

export async function fetchAllHashrateHistories(): Promise<HashrateHistories> {
  let currentHeight = 0
  try {
    const res = await fetch(`${BLOCKSCOUT}/stats`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const data: BlockscoutStats = await res.json()
      currentHeight = parseInt(data.total_blocks, 10)
    }
  } catch { /* fall through */ }

  if (!currentHeight) return { week: [], month: [], year: [], all: [] }

  const [week, month, year, all] = await Promise.all([
    fetchHistoryFor('week', currentHeight),
    fetchHistoryFor('month', currentHeight),
    fetchHistoryFor('year', currentHeight),
    fetchHistoryFor('all', currentHeight),
  ])
  return { week, month, year, all }
}

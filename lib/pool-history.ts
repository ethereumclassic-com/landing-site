import history from '@/app/mining/data/pool-history.json'
import poolAddresses from './pool-addresses.json'
import { POOL_DISPLAY_NAMES } from './pool-distribution'

/**
 * Each pool's weekly share of Ethereum Classic's blocks, from the sample scripts/pool-history.mjs reads from
 * Blockscout. Addresses are named here, when the site builds, so an address added to lib/pool-addresses.json
 * re-attributes its history without regenerating the data.
 */

/** Pools with a band of their own; the rest are summed as "Other pools". */
const NAMED_POOLS = 6

export const OTHER_POOLS = 'Other pools'
export const UNIDENTIFIED = 'Unidentified'

export interface PoolHistoryWeek {
  /** The Monday the week starts on, YYYY-MM-DD (UTC). */
  week: string
  /** Blocks sampled that week. */
  sampled: number
  /** Percent of the week's sampled blocks, by series. */
  shares: Record<string, number>
}

export interface PoolHistory {
  /** Band names, largest pool first, then "Other pools" and "Unidentified". */
  series: string[]
  weeks: PoolHistoryWeek[]
  /** First and last sampled days, YYYY-MM-DD. */
  from: string
  through: string
  sampledBlocks: number
  sampleStep: number
  sampleSize: number
}

const ADDRESSES: Record<string, string> = poolAddresses

function mondayOf(day: string): string {
  const date = new Date(`${day}T00:00:00Z`)
  date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 6) % 7))
  return date.toISOString().slice(0, 10)
}

export function poolHistoryByWeek(): PoolHistory | null {
  const days = history.days
  if (days.length === 0) return null
  const poolOf = (minerIndex: number) => ADDRESSES[history.miners[minerIndex] ?? ''] ?? null

  const totals = new Map<string, number>()
  for (const day of days) {
    for (const [minerIndex, blocks] of day.miners) {
      const pool = poolOf(minerIndex)
      if (pool) totals.set(pool, (totals.get(pool) ?? 0) + blocks)
    }
  }
  const named = [...totals].sort((a, b) => b[1] - a[1]).slice(0, NAMED_POOLS).map(([pool]) => pool)
  const nameOf = (pool: string | null) =>
    pool === null ? UNIDENTIFIED : named.includes(pool) ? (POOL_DISPLAY_NAMES[pool] ?? pool) : OTHER_POOLS

  const byWeek = new Map<string, { sampled: number; blocks: Map<string, number> }>()
  for (const day of days) {
    const week = mondayOf(day.day)
    const entry = byWeek.get(week) ?? { sampled: 0, blocks: new Map<string, number>() }
    entry.sampled += day.sampled
    for (const [minerIndex, blocks] of day.miners) {
      const name = nameOf(poolOf(minerIndex))
      entry.blocks.set(name, (entry.blocks.get(name) ?? 0) + blocks)
    }
    byWeek.set(week, entry)
  }

  const series = [...named.map((pool) => POOL_DISPLAY_NAMES[pool] ?? pool), OTHER_POOLS, UNIDENTIFIED]
  const weeks = [...byWeek].map(([week, { sampled, blocks }]) => ({
    week,
    sampled,
    shares: Object.fromEntries(series.map((name) => [name, Math.round(((blocks.get(name) ?? 0) / sampled) * 1000) / 10])),
  }))

  return {
    series,
    weeks,
    from: days[0].day,
    through: days[days.length - 1].day,
    sampledBlocks: days.reduce((sum, day) => sum + day.sampled, 0),
    sampleStep: history.sampleStep,
    sampleSize: history.sampleSize,
  }
}

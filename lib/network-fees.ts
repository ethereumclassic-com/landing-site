/**
 * Fees observed on Ethereum Classic, read from Blockscout's stats service: one point per UTC
 * day for each series. Every fee figure the site shows comes from here, so none is typed into a
 * page, and when the service does not answer the result is null rather than a stand-in number.
 *
 * Two facts about the series decide the arithmetic, both checked against Blockscout's block
 * data: a block's reward already includes its transaction fees (1.6384 ETC plus that block's
 * fees), so the fees' share of miner revenue is fees over block rewards; and network
 * utilization is a fraction of the gas limit (average gas used over average gas limit).
 */

const STATS_SERVICE_URL = 'https://etc.blockscout.com/stats-service/api/v1/lines'

/** Blockscout's own charts of the same series, for a reader who wants to check a figure. */
export const FEE_SOURCE_URL = 'https://etc.blockscout.com/stats'

/** The reading window. Today's point is partial and marked approximate, so it is left out. */
export const FEE_WINDOW_DAYS = 30

/** How often a page reading these series refetches them, in seconds. */
export const FEE_REVALIDATE_SECONDS = 3600

const SERIES = {
  fees: 'txnsFee',
  transactions: 'newTxns',
  blocks: 'newBlocks',
  blockReward: 'averageBlockRewards',
  gasPrice: 'averageGasPrice',
  utilization: 'networkUtilization',
} as const

type SeriesKey = keyof typeof SERIES

export interface FeeDay {
  /** UTC date, YYYY-MM-DD. */
  date: string
  /** ETC paid in transaction fees. */
  fees: number
  transactions: number
  blocks: number
  /** Mean ETC per block paid to its miner, fees included. */
  blockReward: number
  /** Mean gas price, in gwei. */
  gasPrice: number
  /** Fraction of the gas limit used. */
  utilization: number
}

export interface NetworkFees {
  /** Full days only, oldest first. */
  days: FeeDay[]
  totals: {
    fees: number
    transactions: number
    blocks: number
    /** ETC paid to miners: block rewards with the fees they include. */
    minerRevenue: number
  }
  /** Fraction of miner revenue paid as transaction fees. */
  feeShare: number
  feesPerDay: number
  feePerTransaction: number
  /** Gas price weighted by transactions, in gwei. */
  gasPrice: number
  /** Utilization weighted by blocks, as a fraction of the gas limit. */
  utilization: number
}

interface LinePoint {
  date: string
  value: string
  is_approximate?: boolean
}

const DAY_MS = 86_400_000

function utcDay(time: number): string {
  return new Date(time).toISOString().slice(0, 10)
}

async function fetchSeries(id: string, from: string, to: string): Promise<Map<string, number> | null> {
  try {
    const response = await fetch(`${STATS_SERVICE_URL}/${id}?resolution=DAY&from=${from}&to=${to}`, {
      next: { revalidate: FEE_REVALIDATE_SECONDS },
    })
    if (!response.ok) return null
    const body = (await response.json()) as { chart?: LinePoint[] }
    const points = new Map<string, number>()
    for (const point of body.chart ?? []) {
      if (point.is_approximate) continue
      const value = Number(point.value)
      if (Number.isFinite(value)) points.set(point.date, value)
    }
    return points
  } catch (error) {
    console.error(`Blockscout stats series ${id} failed:`, error)
    return null
  }
}

/** The last FEE_WINDOW_DAYS full days, or null when any series is unavailable or empty. */
export async function fetchNetworkFees(): Promise<NetworkFees | null> {
  const now = Date.now()
  const from = utcDay(now - FEE_WINDOW_DAYS * DAY_MS)
  const to = utcDay(now - DAY_MS)

  const keys = Object.keys(SERIES) as SeriesKey[]
  const results = await Promise.all(keys.map((key) => fetchSeries(SERIES[key], from, to)))
  const series = {} as Record<SeriesKey, Map<string, number>>
  for (const [index, key] of keys.entries()) {
    const points = results[index]
    if (!points) return null
    series[key] = points
  }

  // A day counts only when every series has a full reading for it.
  const dates = [...series.fees.keys()].filter((date) => keys.every((key) => series[key].has(date))).sort()
  if (dates.length === 0) return null

  const days: FeeDay[] = dates.map((date) => ({
    date,
    fees: series.fees.get(date)!,
    transactions: series.transactions.get(date)!,
    blocks: series.blocks.get(date)!,
    blockReward: series.blockReward.get(date)!,
    gasPrice: series.gasPrice.get(date)!,
    utilization: series.utilization.get(date)!,
  }))

  const totals = days.reduce(
    (sum, day) => ({
      fees: sum.fees + day.fees,
      transactions: sum.transactions + day.transactions,
      blocks: sum.blocks + day.blocks,
      minerRevenue: sum.minerRevenue + day.blocks * day.blockReward,
    }),
    { fees: 0, transactions: 0, blocks: 0, minerRevenue: 0 },
  )
  if (totals.minerRevenue <= 0 || totals.blocks <= 0) return null

  const weighted = days.reduce(
    (sum, day) => ({
      gasPrice: sum.gasPrice + day.gasPrice * day.transactions,
      utilization: sum.utilization + day.utilization * day.blocks,
    }),
    { gasPrice: 0, utilization: 0 },
  )

  return {
    days,
    totals,
    feeShare: totals.fees / totals.minerRevenue,
    feesPerDay: totals.fees / days.length,
    feePerTransaction: totals.transactions > 0 ? totals.fees / totals.transactions : 0,
    gasPrice: totals.transactions > 0 ? weighted.gasPrice / totals.transactions : 0,
    utilization: weighted.utilization / totals.blocks,
  }
}

/** A figure to a few significant digits, so a share of 0.0087% reads as such and not as 0.00%. */
export function formatSignificant(value: number, digits = 2): string {
  return new Intl.NumberFormat('en-US', { maximumSignificantDigits: digits }).format(value)
}

/** A fraction as a percentage, to a few significant digits. */
export function formatShare(fraction: number, digits = 2): string {
  return `${formatSignificant(fraction * 100, digits)}%`
}

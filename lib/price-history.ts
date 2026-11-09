/**
 * ETC/USD price history for the price chart.
 *
 * Up to a year back the series is CoinGecko's, the same source as the price itself: its keyless API
 * serves at most 365 days of history (a longer request fails with error 10012). The full history since
 * trading began in July 2016 is Kraken's ETC/USD market, weekly closes, which Kraken serves without a key.
 * Each series names its source, so the chart can say which one it shows.
 */

export type ChartRange = '24h' | '7d' | '30d' | '90d' | '1y' | 'all'

export const CHART_RANGES: ChartRange[] = ['24h', '7d', '30d', '90d', '1y', 'all']

export interface PricePoint {
  /** Milliseconds since the epoch. */
  t: number
  /** USD. */
  price: number
}

export interface PriceSeries {
  range: ChartRange
  points: PricePoint[]
  source: 'coingecko' | 'kraken'
  sourceLabel: string
}

const COINGECKO_DAYS: Record<Exclude<ChartRange, 'all'>, number> = { '24h': 1, '7d': 7, '30d': 30, '90d': 90, '1y': 365 }

/** How long each range is cached upstream and at the edge, in seconds. */
export const CHART_REVALIDATE: Record<ChartRange, number> = {
  '24h': 300,
  '7d': 1800,
  '30d': 3600,
  '90d': 6 * 3600,
  '1y': 12 * 3600,
  all: 24 * 3600,
}

/** At most this many points reach the browser: enough for a smooth line, small enough to send. */
const MAX_POINTS = 180

function downsample(points: PricePoint[]): PricePoint[] {
  if (points.length <= MAX_POINTS) return points
  const step = (points.length - 1) / (MAX_POINTS - 1)
  return Array.from({ length: MAX_POINTS }, (_, i) => points[Math.round(i * step)])
}

async function fetchCoinGecko(range: Exclude<ChartRange, 'all'>): Promise<PriceSeries | null> {
  const days = COINGECKO_DAYS[range]
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/ethereum-classic/market_chart?vs_currency=usd&days=${days}`,
    { headers: { Accept: 'application/json' }, next: { revalidate: CHART_REVALIDATE[range] } },
  )
  if (!response.ok) return null
  const data: { prices?: [number, number][] } = await response.json()
  const points = (data.prices ?? [])
    .filter(([t, price]) => Number.isFinite(t) && price > 0)
    .map(([t, price]) => ({ t, price }))
  if (points.length < 2) return null
  return { range, points: downsample(points), source: 'coingecko', sourceLabel: 'CoinGecko, ETC/USD across markets' }
}

async function fetchKrakenWeekly(): Promise<PriceSeries | null> {
  // interval=10080 is one week in minutes; Kraken returns up to 720 candles, which reach back to its
  // first ETC/USD week (July 21, 2016). Each row: [time, open, high, low, close, vwap, volume, count].
  const response = await fetch('https://api.kraken.com/0/public/OHLC?pair=ETCUSD&interval=10080', {
    headers: { Accept: 'application/json' },
    next: { revalidate: CHART_REVALIDATE.all },
  })
  if (!response.ok) return null
  const data: { error?: string[]; result?: Record<string, unknown> } = await response.json()
  if (data.error?.length || !data.result) return null
  const rows = Object.entries(data.result).find(([key]) => key !== 'last')?.[1]
  if (!Array.isArray(rows)) return null
  const points = rows
    .map((row) => ({ t: Number(row[0]) * 1000, price: parseFloat(row[4]) }))
    .filter((point) => Number.isFinite(point.t) && point.price > 0)
  if (points.length < 2) return null
  return { range: 'all', points: downsample(points), source: 'kraken', sourceLabel: 'Kraken ETC/USD, weekly closes' }
}

/** The series for a range, or null when its source could not be reached. */
export async function fetchPriceSeries(range: ChartRange): Promise<PriceSeries | null> {
  try {
    return range === 'all' ? await fetchKrakenWeekly() : await fetchCoinGecko(range)
  } catch {
    return null
  }
}

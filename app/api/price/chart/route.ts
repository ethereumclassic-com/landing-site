import { NextResponse } from 'next/server'
import { CHART_RANGES, CHART_REVALIDATE, fetchPriceSeries, type ChartRange } from '@/lib/price-history'

/**
 * GET /api/price/chart?range=7d
 *
 * ETC/USD history for the site's price chart, from CoinGecko up to a year back and from Kraken's weekly
 * closes for the full history (lib/price-history). Part of this site's own data layer, not a public API:
 * a range whose source cannot be reached answers 503, and the chart says the data is unavailable.
 */
export async function GET(request: Request) {
  const range = new URL(request.url).searchParams.get('range') ?? '7d'
  if (!CHART_RANGES.includes(range as ChartRange)) {
    return NextResponse.json({ error: 'Invalid range', supported: CHART_RANGES }, { status: 400 })
  }
  const series = await fetchPriceSeries(range as ChartRange)
  if (!series) {
    return NextResponse.json(
      { error: 'Price history unavailable' },
      { status: 503, headers: { 'Cache-Control': 'public, s-maxage=60' } },
    )
  }
  const maxAge = CHART_REVALIDATE[range as ChartRange]
  return NextResponse.json(series, {
    headers: { 'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}` },
  })
}

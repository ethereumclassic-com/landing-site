/**
 * Each listed exchange's 24-hour ETC trading volume, in US dollars, from CoinGecko.
 *
 * The figure is the sum of CoinGecko's ETC tickers on that exchange, keyed by
 * CoinGecko's market identifier, which each listing in
 * app/buy/data/exchanges.ts carries as `coingeckoId`. Tickers CoinGecko flags
 * as anomalous or stale are left out, as CoinGecko leaves them out of its own
 * totals: on November 5, 2026 that dropped thin side pairs, such as Binance's
 * ETC/BTC, last traded nearly a week before, and kept every exchange's main
 * pair.
 *
 * One request covers every listing, filtered to their identifiers, because the
 * public API answers a burst with HTTP 429: a build renders the exchange pages
 * on many workers at once, and a second page of tickers per worker was enough
 * to trip it. A 429 is retried after the wait CoinGecko asks for.
 *
 * Read on the server and revalidated hourly. When CoinGecko cannot be reached
 * the result is null, the pages show no volume, and the listings keep the
 * order of the data file.
 */
import { exchanges } from '@/app/buy/data/exchanges'

const TICKERS = 'https://api.coingecko.com/api/v3/coins/ethereum-classic/tickers'
const IDS = [...new Set(exchanges.flatMap((exchange) => (exchange.coingeckoId ? [exchange.coingeckoId] : [])))].sort()
/** CoinGecko pages tickers 100 at a time; the listed exchanges had 58 on November 5, 2026. */
const PAGE_SIZE = 100
const MAX_PAGES = 3
const RETRIES = 2

interface Ticker {
  market: { identifier: string }
  converted_volume: { usd?: number }
  is_anomaly: boolean
  is_stale: boolean
}

export type ExchangeVolumes = Record<string, number>

async function tickers(page: number, attempt = 0): Promise<Ticker[]> {
  const response = await fetch(`${TICKERS}?exchange_ids=${IDS.join(',')}&order=volume_desc&depth=false&page=${page}`, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 3600 },
  })
  if (response.status === 429 && attempt < RETRIES) {
    const wait = Math.min(Number(response.headers.get('retry-after')) || 20, 60)
    await new Promise((resolve) => setTimeout(resolve, wait * 1000))
    return tickers(page, attempt + 1)
  }
  if (!response.ok) throw new Error(`CoinGecko tickers page ${page}: HTTP ${response.status}`)
  return ((await response.json()) as { tickers: Ticker[] }).tickers
}

export async function fetchExchangeVolumes(): Promise<ExchangeVolumes | null> {
  try {
    const volumes: ExchangeVolumes = {}
    for (let page = 1; page <= MAX_PAGES; page++) {
      const batch = await tickers(page)
      for (const ticker of batch) {
        if (ticker.is_anomaly || ticker.is_stale) continue
        const id = ticker.market.identifier
        volumes[id] = (volumes[id] ?? 0) + (ticker.converted_volume.usd ?? 0)
      }
      if (batch.length < PAGE_SIZE) break
    }
    return volumes
  } catch (error) {
    console.error('exchange volumes: CoinGecko unavailable, showing listings without volume.', error)
    return null
  }
}

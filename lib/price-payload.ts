import { fetchExchangeRates, type ExchangeRates } from './exchange-rates'

/**
 * The /api/price response body, built once.
 *
 * Shared by the route handler and by server components that seed usePrice, so
 * a server-rendered figure and the value the hook fetches a moment later are
 * produced by the same code rather than two copies that round differently.
 */

/**
 * Market cap, 24-hour volume and the 24-hour high and low are CoinGecko's own figures, carried in USD
 * and converted at the price's own rate. With Blockscout standing in, only the market cap is known.
 * A figure no source supplies is null: pages show it as unavailable, never as an estimate.
 */
function marketFigures(rates: ExchangeRates, price: number | null) {
  const market = rates.market
  const usd = rates.etc.usd
  if (!market || !usd || price === null) {
    return { marketCap: null, volume24h: null, high24h: null, low24h: null }
  }
  const rate = price / usd
  const scale = (value: number | null) => (value === null ? null : value * rate)
  return {
    marketCap: market.market_cap_usd * rate,
    volume24h: scale(market.volume_24h_usd),
    high24h: scale(market.high_24h_usd),
    low24h: scale(market.low_24h_usd),
  }
}

const round = (value: number | null, places: number) =>
  value === null ? null : Math.round(value * 10 ** places) / 10 ** places

export function formatPricePayload(rates: ExchangeRates, currency: string) {
  const key = currency.toLowerCase()
  const price = rates.etc[key] ?? null
  const change24h = rates.etc_24h_change[key] ?? (key === 'usd' ? null : rates.etc_24h_change.usd ?? null)
  const { marketCap, volume24h, high24h, low24h } = marketFigures(rates, price)

  return {
    price: round(price, 2),
    change24h: round(change24h, 2),
    marketCap: round(marketCap, 0),
    volume24h: round(volume24h, 0),
    high24h: round(high24h, 2),
    low24h: round(low24h, 2),
    currency: key,
    timestamp: rates.lastUpdated,
    source: rates.source,
    prices: rates.etc,
    changes: rates.etc_24h_change,
    eth_usd: rates.eth_usd,
    btc_usd: rates.btc_usd,
    fiat_to_usd: rates.fiat_to_usd,
  }
}

export type PricePayload = ReturnType<typeof formatPricePayload>

/** Fetch and format in one step, for server components seeding usePrice. */
export async function fetchPricePayload(currency = 'usd') {
  return formatPricePayload(await fetchExchangeRates(), currency)
}

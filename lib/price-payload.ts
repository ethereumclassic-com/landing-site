import { fetchExchangeRates, type ExchangeRates } from './exchange-rates'

/**
 * The /api/price response body, built once.
 *
 * Shared by the route handler and by server components that seed usePrice, so
 * a server-rendered figure and the value the hook fetches a moment later are
 * produced by the same code rather than two copies that round differently.
 */

/** Approximate circulating supply, for the fallback only. Moves slowly; see research/data/emission for the derived figure. */
const CIRCULATING_SUPPLY = 148_300_000

/**
 * Market cap, 24-hour volume and the 24-hour high and low are CoinGecko's own
 * figures, carried in USD and converted at the price's own rate. Only when
 * CoinGecko cannot be reached, and the price itself is the fallback, are they
 * estimated from the price.
 */
function marketFigures(rates: ExchangeRates, price: number) {
  const market = rates.market
  const usd = rates.etc.usd
  if (market && usd) {
    const rate = price / usd
    return {
      marketCap: market.market_cap_usd * rate,
      volume24h: market.volume_24h_usd * rate,
      high24h: market.high_24h_usd * rate,
      low24h: market.low_24h_usd * rate,
    }
  }
  const marketCap = price * CIRCULATING_SUPPLY
  return { marketCap, volume24h: marketCap * 0.03, high24h: price * 1.02, low24h: price * 0.98 }
}

export function formatPricePayload(rates: ExchangeRates, currency: string) {
  const price = rates.etc[currency] ?? rates.etc.usd
  const change24h = rates.etc_24h_change[currency] ?? rates.etc_24h_change.usd ?? 0
  const { marketCap, volume24h, high24h, low24h } = marketFigures(rates, price)

  return {
    price: Math.round(price * 100) / 100,
    change24h: Math.round(change24h * 100) / 100,
    marketCap: Math.round(marketCap),
    volume24h: Math.round(volume24h),
    high24h: Math.round(high24h * 100) / 100,
    low24h: Math.round(low24h * 100) / 100,
    currency: currency.toLowerCase(),
    timestamp: rates.lastUpdated,
    source: rates.source,
    prices: rates.etc,
    changes: rates.etc_24h_change,
    eth_usd: rates.eth_usd,
    btc_usd: rates.btc_usd,
    fiat_to_usd: rates.fiat_to_usd,
  }
}

/** Fetch and format in one step, for server components seeding usePrice. */
export async function fetchPricePayload(currency = 'usd') {
  return formatPricePayload(await fetchExchangeRates(), currency)
}

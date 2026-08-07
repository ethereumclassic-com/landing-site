import { fetchExchangeRates, type ExchangeRates } from './exchange-rates'

/**
 * The /api/price response body, built once.
 *
 * Shared by the route handler and by server components that seed usePrice, so
 * a server-rendered figure and the value the hook fetches a moment later are
 * produced by the same code rather than two copies that round differently.
 */

/** Approximate circulating supply. Moves slowly; see research/data/emission for the derived figure. */
const CIRCULATING_SUPPLY = 148_300_000

export function formatPricePayload(rates: ExchangeRates, currency: string) {
  const price = rates.etc[currency] ?? rates.etc.usd
  const change24h = rates.etc_24h_change[currency] ?? rates.etc_24h_change.usd ?? 0
  const marketCap = price * CIRCULATING_SUPPLY
  // Estimated at ~3% of market cap, typical for ETC.
  const volume24h = marketCap * 0.03

  return {
    price: Math.round(price * 100) / 100,
    change24h: Math.round(change24h * 100) / 100,
    marketCap: Math.round(marketCap),
    volume24h: Math.round(volume24h),
    high24h: Math.round(price * 1.02 * 100) / 100, // Estimated
    low24h: Math.round(price * 0.98 * 100) / 100, // Estimated
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

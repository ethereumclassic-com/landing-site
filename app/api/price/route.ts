import { NextResponse } from 'next/server'
import { fetchExchangeRates, getFallbackRates, type ExchangeRates } from '@/lib/exchange-rates'

/**
 * ETC Price API - Returns live price data from CoinGecko
 *
 * GET /api/price?currency=usd
 *
 * Supports currencies: usd, eur, gbp, jpy, krw, cad, aud, try, brl, cny, inr, rub, btc, eth, bnb
 *
 * Cache: 60 seconds (server-side), 5 minutes stale-while-revalidate
 */

const validCurrencies = ['usd', 'eur', 'gbp', 'jpy', 'krw', 'cad', 'aud', 'try', 'brl', 'cny', 'inr', 'rub', 'btc', 'eth', 'bnb']

function formatResponse(rates: ExchangeRates, currency: string) {
  const price = rates.etc[currency] ?? rates.etc.usd
  const change24h = rates.etc_24h_change[currency] ?? rates.etc_24h_change.usd ?? 0

  // Calculate market cap (price * circulating supply ~148M)
  const circulatingSupply = 148300000 // Approximate, updates slowly
  const marketCap = price * circulatingSupply

  // Estimate 24h volume as ~3% of market cap (typical for ETC)
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
    // All available prices for reference
    prices: rates.etc,
    changes: rates.etc_24h_change,
    // Cross-asset USD prices (derived from ETC/ETH and ETC/BTC ratios in the same CoinGecko call)
    eth_usd: rates.eth_usd,
    btc_usd: rates.btc_usd,
    fiat_to_usd: rates.fiat_to_usd,
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const currency = (searchParams.get('currency') || 'usd').toLowerCase()

  // Validate currency
  if (!validCurrencies.includes(currency)) {
    return NextResponse.json(
      {
        error: 'Invalid currency',
        supported: validCurrencies,
        message: `Supported currencies: ${validCurrencies.join(', ')}`
      },
      { status: 400 }
    )
  }

  try {
    // Fetch live rates from CoinGecko (with 24h caching)
    const rates = await fetchExchangeRates()
    const data = formatResponse(rates, currency)

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        'X-Data-Source': rates.source,
        'X-Last-Updated': rates.lastUpdated,
      },
    })
  } catch (error) {
    console.error('Price API error:', error)

    // Return fallback data on error
    const fallback = getFallbackRates()
    const data = formatResponse(fallback, currency)

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        'X-Data-Source': 'fallback',
        'X-Error': 'API unavailable, using cached data',
      },
    })
  }
}

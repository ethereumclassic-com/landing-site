import { NextResponse } from 'next/server'
import { fetchExchangeRates, getFallbackRates } from '@/lib/exchange-rates'
import { formatPricePayload as formatResponse } from '@/lib/price-payload'

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

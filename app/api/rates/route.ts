import { NextResponse } from 'next/server'
import {
  fetchExchangeRates,
  getFallbackRates,
  formatRatesResponse,
  convertCurrency,
} from '@/lib/exchange-rates'

/**
 * GET /api/rates
 * Returns exchange rates for ETC and supported currencies
 *
 * Query params:
 * - convert: Optional. Format: "100,USD,EUR" to convert 100 USD to EUR
 *
 * Cache Strategy:
 * - Data is cached for 24 hours to minimize CoinGecko API calls
 * - Uses file-based caching that persists across server restarts
 * - Falls back to static data if API is unavailable
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const convertParam = searchParams.get('convert')

    // Fetch rates (will use cache if available)
    const rates = await fetchExchangeRates()
    const formatted = formatRatesResponse(rates)

    // Handle conversion request
    if (convertParam) {
      const parts = convertParam.split(',')
      if (parts.length === 3) {
        const amount = parseFloat(parts[0])
        const from = parts[1].toUpperCase()
        const to = parts[2].toUpperCase()

        if (!isNaN(amount)) {
          const result = convertCurrency(amount, from, to, rates)

          return NextResponse.json(
            {
              conversion: {
                amount,
                from,
                to,
                result,
                rate: result !== null ? result / amount : null,
              },
              ...formatted,
            },
            {
              headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
              },
            }
          )
        }
      }
    }

    return NextResponse.json(formatted, {
      headers: {
        // Cache for 1 hour on CDN, allow stale for 2 hours
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Rates API error:', error)

    // Return fallback rates on error
    const fallback = getFallbackRates()
    const formatted = formatRatesResponse(fallback)

    return NextResponse.json(
      {
        ...formatted,
        error: 'Using fallback rates due to API error',
      },
      {
        status: 200, // Return 200 with fallback data
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    )
  }
}

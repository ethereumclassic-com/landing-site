import { NextResponse } from 'next/server'

// Mock price data - in production, this would fetch from CoinGecko or similar
const getMockPriceData = (currency: string = 'usd') => {
  // Base prices in USD
  const basePrice = 25.42
  const change24h = 3.5
  const marketCap = 3650000000
  const volume24h = 185000000
  const high24h = 26.10
  const low24h = 24.80

  // Currency conversion rates (simplified)
  const conversionRates: Record<string, number> = {
    usd: 1,
    eur: 0.92,
    gbp: 0.79,
    jpy: 148.5,
    cny: 7.19,
    btc: 0.00059,
    eth: 0.011,
  }

  const rate = conversionRates[currency.toLowerCase()] || 1

  return {
    price: Math.round(basePrice * rate * 100) / 100,
    change24h,
    marketCap: Math.round(marketCap * rate),
    volume24h: Math.round(volume24h * rate),
    high24h: Math.round(high24h * rate * 100) / 100,
    low24h: Math.round(low24h * rate * 100) / 100,
    currency: currency.toLowerCase(),
    timestamp: new Date().toISOString(),
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const currency = searchParams.get('currency') || 'usd'

  // Validate currency
  const validCurrencies = ['usd', 'eur', 'gbp', 'jpy', 'cny', 'btc', 'eth']
  if (!validCurrencies.includes(currency.toLowerCase())) {
    return NextResponse.json(
      { error: 'Invalid currency. Supported: usd, eur, gbp, jpy, cny, btc, eth' },
      { status: 400 }
    )
  }

  const data = getMockPriceData(currency)

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      'X-RateLimit-Limit': '100',
      'X-RateLimit-Remaining': '99',
    },
  })
}

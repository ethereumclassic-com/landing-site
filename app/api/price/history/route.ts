import { NextResponse } from 'next/server'

// Generate mock historical price data
const generateHistoricalData = (days: number, currency: string = 'usd') => {
  const basePrice = 25.42
  const volatility = 0.05 // 5% daily volatility

  // Currency conversion rates
  const conversionRates: Record<string, number> = {
    usd: 1,
    eur: 0.92,
    gbp: 0.79,
    jpy: 148.5,
    cny: 7.19,
  }

  const rate = conversionRates[currency.toLowerCase()] || 1
  const prices: { timestamp: string; price: number }[] = []

  let currentPrice = basePrice * rate
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    date.setHours(0, 0, 0, 0)

    // Add some random walk
    const change = (Math.random() - 0.5) * 2 * volatility * currentPrice
    currentPrice = Math.max(currentPrice + change, currentPrice * 0.5)

    prices.push({
      timestamp: date.toISOString(),
      price: Math.round(currentPrice * 100) / 100,
    })
  }

  return {
    prices,
    currency: currency.toLowerCase(),
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const daysParam = searchParams.get('days')
  const currency = searchParams.get('currency') || 'usd'

  // Parse and validate days
  let days = 7
  if (daysParam) {
    days = parseInt(daysParam, 10)
    if (isNaN(days) || days < 1) {
      return NextResponse.json(
        { error: 'Invalid days parameter. Must be a positive integer.' },
        { status: 400 }
      )
    }
    if (days > 365) {
      return NextResponse.json(
        { error: 'Maximum days is 365.' },
        { status: 400 }
      )
    }
  }

  // Validate currency
  const validCurrencies = ['usd', 'eur', 'gbp', 'jpy', 'cny']
  if (!validCurrencies.includes(currency.toLowerCase())) {
    return NextResponse.json(
      { error: 'Invalid currency. Supported: usd, eur, gbp, jpy, cny' },
      { status: 400 }
    )
  }

  const data = generateHistoricalData(days, currency)

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      'X-RateLimit-Limit': '100',
      'X-RateLimit-Remaining': '99',
    },
  })
}

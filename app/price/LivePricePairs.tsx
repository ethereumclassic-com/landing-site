'use client'

import Link from 'next/link'
import { useAllPrices } from '@/app/hooks/usePrice'
import { getPopularPairs } from '../markets/data/markets'
import type { PriceData } from '@/app/hooks/usePrice'

/**
 * Popular pairs. Seeded from the server so the figures are in the initial HTML;
 * useAllPrices still refreshes them on its interval.
 */
export default function LivePricePairs({ initialData }: { initialData?: PriceData | null }) {
  const popularPairs = getPopularPairs()
  const { prices, loading } = useAllPrices({ initialData })

  const formatPairPrice = (quote: string): string => {
    if (loading || !prices) return '...'
    const currency = quote.toLowerCase()
    const price = prices[currency]
    if (!price) return '...'

    switch (quote) {
      case 'USD':
      case 'USDT':
      case 'USDC':
        return `$${price.toFixed(2)}`
      case 'BTC':
        return `${price.toFixed(6)} BTC`
      case 'ETH':
        return `${price.toFixed(4)} ETH`
      default:
        return `${price.toFixed(2)} ${quote}`
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {popularPairs.map((pair) => (
        <Link
          key={pair.id}
          href={`/price/${pair.id}`}
          className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 transition-all hover:border-[var(--color-primary)]/30"
        >
          <p className="text-xs text-[var(--color-text-muted)]">{pair.displayName}</p>
          <p className="font-semibold text-[var(--text-primary)]">
            {formatPairPrice(pair.quote)}
          </p>
        </Link>
      ))}
    </div>
  )
}

'use client'

import { usePrice, type PriceData } from '@/app/hooks/usePrice'
import { PriceStat } from './components/PriceDisplay'

/**
 * Currency formatting specific to this page: always $-prefixed, carries a
 * trillions tier, and uses different precision from lib/format-network-stats.
 * Deliberately not shared with that one — they look alike but produce
 * different strings, and unifying them would silently change what renders.
 */
function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`
  return `$${num.toFixed(2)}`
}

/** Live market stats grid. Client-side because it re-fetches on an interval. */
export default function LiveMarketStatsGrid({ initialPrice }: { initialPrice?: PriceData | null }) {
  const { data, loading } = usePrice('usd', { initialData: initialPrice })

  const changeStr = data ? `${data.change24h >= 0 ? '+' : ''}${data.change24h.toFixed(2)}%` : undefined
  const changeDir: 'up' | 'down' | 'neutral' = data ? (data.change24h >= 0 ? 'up' : 'down') : 'neutral'

  const stats: Array<{
    label: string
    value: string
    change?: string
    changeDirection?: 'up' | 'down' | 'neutral'
    tooltip?: string
  }> = [
    {
      label: 'Price',
      value: data ? `$${data.price.toFixed(2)}` : '...',
      change: changeStr,
      changeDirection: changeDir,
    },
    {
      label: 'Market Cap',
      value: data ? formatLargeNumber(data.marketCap) : '...',
      change: changeStr,
      changeDirection: changeDir,
      tooltip: 'Circulating supply × current price',
    },
    {
      label: '24h Volume',
      value: data ? formatLargeNumber(data.volume24h) : '...',
      tooltip: 'Trading volume in last 24 hours',
    },
    {
      label: 'Circulating Supply',
      value: '148.3M ETC',
      tooltip: 'Total ETC in circulation',
    },
    {
      label: 'All-Time High',
      value: '$176.16',
      tooltip: 'May 6, 2021',
    },
    {
      label: 'All-Time Low',
      value: '$0.45',
      tooltip: 'July 25, 2016',
    },
  ]

  if (loading && !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 animate-pulse">
            <div className="h-4 w-16 bg-[var(--border)] rounded mb-2" />
            <div className="h-6 w-24 bg-[var(--border)] rounded" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
        >
          <PriceStat
            label={stat.label}
            value={stat.value}
            change={stat.change}
            changeDirection={stat.changeDirection}
            tooltip={stat.tooltip}
          />
        </div>
      ))}
    </div>
  )
}

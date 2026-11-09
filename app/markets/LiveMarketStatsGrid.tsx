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

  const change = data?.change24h ?? null
  const changeStr = change !== null ? `${change >= 0 ? '+' : ''}${change.toFixed(2)}%` : undefined
  const changeDir: 'up' | 'down' | 'neutral' = change !== null ? (change >= 0 ? 'up' : 'down') : 'neutral'
  // '...' until the first answer arrives; '—' when it arrives without the figure.
  const shown = (value: number | null | undefined, format: (n: number) => string) =>
    !data ? '...' : value === null || value === undefined ? '—' : format(value)

  const stats: Array<{
    label: string
    value: string
    change?: string
    changeDirection?: 'up' | 'down' | 'neutral'
    tooltip?: string
  }> = [
    {
      label: 'Price',
      value: shown(data?.price, (p) => `$${p.toFixed(2)}`),
      change: changeStr,
      changeDirection: changeDir,
    },
    {
      label: 'Market Cap',
      value: shown(data?.marketCap, formatLargeNumber),
      change: changeStr,
      changeDirection: changeDir,
      tooltip: 'Circulating supply × current price',
    },
    {
      label: '24h Volume',
      value: shown(data?.volume24h, formatLargeNumber),
      tooltip: 'Trading volume in last 24 hours',
    },
    {
      label: 'Circulating Supply',
      value: shown(data?.price && data.marketCap ? data.marketCap / data.price : null, (s) => `~${(s / 1e6).toFixed(1)}M ETC`),
      tooltip: 'Total ETC in circulation',
    },
    {
      label: 'All-Time High',
      value: '$167.09',
      tooltip: 'May 6, 2021',
    },
    {
      label: 'All-Time Low',
      value: '$0.615',
      tooltip: 'July 24, 2016',
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

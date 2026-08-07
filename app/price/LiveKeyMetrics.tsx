'use client'

import { usePrice, type PriceData } from '@/app/hooks/usePrice'

function formatMarketCap(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`
  return `$${num.toFixed(2)}`
}

/** Live key metrics. Client-side because it refreshes on an interval. */
export default function LiveKeyMetrics({ initialPrice }: { initialPrice?: PriceData | null }) {
  const { data, loading, source } = usePrice('usd', { initialData: initialPrice })

  if (loading && !data) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
            <div className="h-4 w-20 bg-[var(--bg)] rounded mb-2" />
            <div className="h-8 w-24 bg-[var(--bg)] rounded" />
          </div>
        ))}
      </div>
    )
  }

  const stats: Array<{
    label: string
    value: string
    change?: string
    changeDirection?: 'up' | 'down' | 'neutral'
    tooltip?: string
  }> = data
    ? [
        {
          label: 'Price',
          value: `$${data.price.toFixed(2)}`,
          change: `${data.change24h >= 0 ? '+' : ''}${data.change24h.toFixed(2)}%`,
          changeDirection: data.change24h >= 0 ? 'up' : 'down',
        },
        {
          label: 'Market Cap',
          value: formatMarketCap(data.marketCap),
          change: `${data.change24h >= 0 ? '+' : ''}${data.change24h.toFixed(2)}%`,
          changeDirection: data.change24h >= 0 ? 'up' : 'down',
          tooltip: 'Circulating supply × current price',
        },
        {
          label: '24h Volume',
          value: formatMarketCap(data.volume24h),
          tooltip: 'Trading volume in the last 24 hours',
        },
        {
          label: '24h High',
          value: `$${data.high24h.toFixed(2)}`,
        },
        {
          label: '24h Low',
          value: `$${data.low24h.toFixed(2)}`,
        },
        {
          label: 'Circulating Supply',
          value: '148.3M ETC',
          tooltip: 'Total ETC in circulation',
        },
      ]
    : []

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
          >
            <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</p>
              {stat.change && (
                <span className={`text-sm font-medium ${
                  stat.changeDirection === 'up' ? 'text-[var(--color-success)]' :
                  stat.changeDirection === 'down' ? 'text-[var(--color-error)]' : 'text-[var(--text-muted)]'
                }`}>
                  {stat.change}
                </span>
              )}
            </div>
            {stat.tooltip && (
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.tooltip}</p>
            )}
          </div>
        ))}
      </div>
      {source && (
        <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
          Live data from{' '}
          <a
            href="https://www.coingecko.com/en/coins/ethereum-classic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            CoinGecko
          </a>
        </p>
      )}
    </>
  )
}

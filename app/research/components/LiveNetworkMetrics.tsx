'use client'

import { useNetworkStats } from '@/app/hooks/useNetworkStats'

interface LiveMetric {
  label: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  description: string
}

function MetricCard({ metric }: { metric: LiveMetric }) {
  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
    >
      <p className="text-xs text-[var(--color-text-muted)]">{metric.label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-2xl font-bold text-[var(--text-primary)]">{metric.value}</p>
        {metric.change && (
          <span className={`text-sm font-medium ${
            metric.changeType === 'positive' ? 'text-[var(--color-success)]' :
            metric.changeType === 'negative' ? 'text-[var(--color-error)]' : 'text-[var(--text-muted)]'
          }`}>
            {metric.change}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{metric.description}</p>
    </div>
  )
}

export default function LiveNetworkMetrics() {
  const { stats, formatted, loading } = useNetworkStats()

  if (loading || !stats || !formatted) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
            <div className="h-3 w-24 bg-[var(--bg)] rounded mb-2" />
            <div className="h-7 w-20 bg-[var(--bg)] rounded mb-2" />
            <div className="h-3 w-32 bg-[var(--bg)] rounded" />
          </div>
        ))}
      </div>
    )
  }

  const metrics: LiveMetric[] = [
    {
      label: 'ETC Price',
      value: formatted.price,
      change: formatted.priceChange,
      changeType: stats.priceChange24h >= 0 ? 'positive' : 'negative',
      description: 'Current market price from CoinGecko',
    },
    {
      label: 'Market Cap',
      value: formatted.marketCap,
      changeType: 'neutral',
      description: 'Total market capitalization',
    },
    {
      label: 'Total Transactions',
      value: formatted.transactions,
      changeType: 'positive',
      description: 'All-time on-chain transactions',
    },
    {
      label: 'Block Height',
      value: `#${formatted.blockHeight}`,
      changeType: 'neutral',
      description: 'Current blockchain height',
    },
    {
      label: 'Block Time',
      value: formatted.blockTime,
      changeType: 'neutral',
      description: 'Average time between blocks (~13.5s target)',
    },
    {
      label: 'Block Reward',
      value: formatted.blockReward,
      changeType: 'neutral',
      description: 'Current mining reward per block',
    },
  ]

  return (
    <>
      <div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div
        className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
        </span>
        Live data from{' '}
        <a href="https://etc.blockscout.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Blockscout</a>
        {' '}&amp;{' '}
        <a href="https://www.coingecko.com/en/coins/ethereum-classic" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CoinGecko</a>
      </div>
    </>
  )
}

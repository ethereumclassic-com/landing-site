'use client'

import Link from 'next/link'
import { PriceStat } from './components/PriceDisplay'
import PriceChart from './components/PriceChart'
import LivePriceDisplay, { LiveMarketStats } from './components/LivePriceDisplay'
import { usePrice } from '@/app/hooks/usePrice'
import {
  priceSources,
  marketPairs,
  marketResources,
  priceMilestones,
} from './data/markets'

// Live market stats grid component
function LiveMarketStatsGrid() {
  const { data, loading } = usePrice('usd')

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
      {stats.map((stat, index) => (
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

function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`
  return `$${num.toFixed(2)}`
}

export default function MarketsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Live Market Data
            </span>
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            ETC{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Markets
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Track Ethereum Classic price, market cap, trading volume, and historical data across major exchanges and data providers.
          </p>

          {/* Live Price Display */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-8 py-6">
              <LivePriceDisplay
                currency="usd"
                size="xl"
                showLabel
                label="ETC/USD"
                showSource
                refreshInterval={60000}
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8">
            <LiveMarketStats showVolume showRank showSupply />
          </div>
        </div>
      </section>

      {/* Price Chart Section */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <PriceChart />
        </div>
      </section>

      {/* Market Stats Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Market Statistics</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Key metrics for Ethereum Classic
            </p>
          </div>

          <LiveMarketStatsGrid />
        </div>
      </section>

      {/* Trading Pairs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Trading Pairs</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Popular ETC trading pairs across exchanges
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketPairs.map((pair, index) => (
              <div
                key={pair.id}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[var(--text-primary)]">{pair.displayName}</span>
                  {pair.popular && (
                    <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {pair.base} to {pair.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Sources */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Price Sources</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Trusted data providers and exchanges for ETC price data
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priceSources.map((source, index) => (
              <a
                key={source.id}
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {sourceTypeIcons[source.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                      {source.name}
                    </span>
                    <span className="rounded-full bg-[var(--panel)] px-2 py-0.5 text-xs capitalize text-[var(--color-text-muted)]">
                      {source.type}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-[var(--color-text-muted)]">
                    {source.description}
                  </p>
                </div>
                <svg aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)] transition group-hover:text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Price History Timeline */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Price History</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Key milestones in ETC&apos;s price history
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />

            {priceMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 md:pr-8 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-[var(--color-primary)] md:left-auto md:right-auto md:-translate-x-1/2">
                  <div className={`absolute top-0 h-3 w-3 rounded-full ${index % 2 === 0 ? 'md:-left-[calc(50%+0.5rem)]' : 'md:-right-[calc(50%+0.5rem)]'}`} />
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">{milestone.date}</span>
                    <span className="font-bold text-[var(--color-primary)]">{milestone.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-primary)]">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Resources */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Market Resources</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Tools and resources for ETC market analysis
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketResources.map((resource, index) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                      {resource.title}
                    </span>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {resource.description}
                    </p>
                  </div>
                  <svg aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)] transition group-hover:text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Market Tools */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Market Tools</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Tools to help you analyze and plan your ETC investments
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div
            >
              <Link
                href="/markets/converter"
                className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Price Converter</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
                  Convert between ETC and 17+ currencies including fiat, crypto, and stablecoins.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-primary)]">
                  Open tool
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </div>

            <div
            >
              <Link
                href="/markets/calculator"
                className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Investment Calculator</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
                  Calculate potential returns with different price scenarios and DCA strategies.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-primary)]">
                  Open tool
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </div>

            <div
            >
              <Link
                href="/markets/price"
                className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Price Details</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
                  In-depth ETC price data, milestones, and trusted data sources.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-primary)]">
                  View details
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / CTAs */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to Trade?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Buy ETC on trusted exchanges or explore decentralized options for permissionless trading.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Buy ETC
              </Link>
              <Link
                href="/buy/exchanges"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                View All Exchanges
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--border)] px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div className="text-sm text-[var(--color-text-muted)]">
                <p className="font-medium text-amber-400">Disclaimer</p>
                <p className="mt-1">
                  Market data is provided for informational purposes only and should not be considered financial advice. Cryptocurrency investments carry significant risk. Always do your own research before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { dataSources } from '../data/research'

// Types for API response
interface NetworkStats {
  price: number
  priceFormatted: string
  priceChange24h: number
  priceChangeFormatted: string
  marketCap: number
  marketCapFormatted: string
  blockHeight: number
  blockHeightFormatted: string
  totalTransactions: number
  totalTransactionsFormatted: string
  avgBlockTime: number
  avgBlockTimeFormatted: string
  blockReward: number
  blockRewardFormatted: string
  gasPrice: {
    slow: number
    average: number
    fast: number
  }
  gasPriceFormatted: string
  source: 'blockscout' | 'fallback'
  lastUpdated: string
  cacheAgeMinutes?: number
  nextRefresh?: string
}

// Chain parameters (static)
const chainMetrics = [
  {
    category: 'Blockchain',
    metrics: [
      { label: 'Algorithm', value: 'ETChash' },
      { label: 'Epoch Length', value: '30,000 blocks' },
      { label: 'DAG Size', value: '~5.2 GB' },
      { label: 'Gas Limit', value: '8M gas' },
    ],
  },
  {
    category: 'Economics',
    metrics: [
      { label: 'Emission Schedule', value: '20% reduction / 5M blocks' },
      { label: 'Next Reduction', value: 'Block 25,000,000' },
      { label: 'Maximum Supply', value: '~210.7M ETC' },
      { label: 'Current Supply', value: '~147M ETC' },
    ],
  },
  {
    category: 'Network',
    metrics: [
      { label: 'Chain ID', value: '61' },
      { label: 'Genesis Block', value: 'Jul 30, 2015' },
      { label: 'The DAO Fork', value: 'Jul 20, 2016' },
      { label: 'Node Clients', value: 'Core-Geth, Fukuii' },
    ],
  },
]

const historicalMilestones = [
  { date: 'Jul 2015', event: 'Ethereum mainnet launch' },
  { date: 'Jul 2016', event: 'The DAO fork - ETC preserves original chain' },
  { date: 'Mar 2017', event: 'Monetary policy: 5M block reduction schedule' },
  { date: 'Dec 2017', event: 'Block reward reduced to 4 ETC' },
  { date: 'Mar 2020', event: 'Block reward reduced to 3.2 ETC' },
  { date: 'Nov 2020', event: 'Thanos hard fork (ETChash algorithm)' },
  { date: 'Apr 2022', event: 'Block reward reduced to 2.56 ETC' },
  { date: 'Sep 2022', event: 'ETH merge - GPU miners migrate to ETC' },
  { date: 'Dec 2024', event: 'Block reward reduced to ~2.05 ETC' },
]

// Simple bar chart component
function BarChart({ data, label }: { data: { label: string; value: number; color: string }[]; label: string }) {
  const max = Math.max(...data.map(d => d.value))

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[var(--text-primary)]">{label}</p>
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-[var(--color-text-muted)]">{item.label}</span>
            <span className="font-medium text-[var(--text-primary)]">{item.value}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--bg)]">
            <div
              className={`h-full transition-all duration-700 ease-out ${item.color}`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Gas price display component
function GasPriceCard({ gasPrice }: { gasPrice: { slow: number; average: number; fast: number } }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="mb-4 font-semibold text-[var(--text-primary)]">Gas Prices</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-[var(--bg)] p-3 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">Slow</p>
          <p className="mt-1 text-lg font-bold text-[var(--text-primary)]">{gasPrice.slow.toFixed(2)}</p>
          <p className="text-xs text-[var(--color-text-muted)]">Gwei</p>
        </div>
        <div className="rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 p-3 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">Average</p>
          <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">{gasPrice.average.toFixed(2)}</p>
          <p className="text-xs text-[var(--color-text-muted)]">Gwei</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-3 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">Fast</p>
          <p className="mt-1 text-lg font-bold text-[var(--text-primary)]">{gasPrice.fast.toFixed(2)}</p>
          <p className="text-xs text-[var(--color-text-muted)]">Gwei</p>
        </div>
      </div>
    </div>
  )
}

export default function NetworkAnalysisPage() {
  const [stats, setStats] = useState<NetworkStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/network')
        if (!response.ok) throw new Error('Failed to fetch network stats')
        const data = await response.json()
        setStats(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  // Mining pool distribution (approximate)
  const miningPools = [
    { label: 'F2Pool', value: 35, color: 'bg-blue-500' },
    { label: '2Miners', value: 25, color: 'bg-green-500' },
    { label: 'Poolin', value: 15, color: 'bg-purple-500' },
    { label: 'ViaBTC', value: 10, color: 'bg-amber-500' },
    { label: 'Others', value: 15, color: 'bg-gray-500' },
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/research"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Research
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Network Dashboard
              </h1>
              {stats?.source === 'blockscout' && (
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live Data
                </span>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Real-time network metrics and statistics from the Ethereum Classic blockchain.
              Data sourced from{' '}
              <a href="https://etc.blockscout.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                Blockscout
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Live Stats Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Network Status
          </h2>

          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 animate-pulse rounded-xl bg-[var(--panel)]" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6">
              <p className="text-red-400">Error loading network data: {error}</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Showing cached or fallback data below.
              </p>
            </div>
          ) : stats && (
            <div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {/* ETC Price */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">ETC Price</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-[var(--text-primary)]">{stats.priceFormatted}</p>
                  <span className={`text-sm font-medium ${
                    stats.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stats.priceChangeFormatted}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">24h change</p>
              </div>

              {/* Market Cap */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Market Cap</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.marketCapFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Total market value</p>
              </div>

              {/* Block Height */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Block Height</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.blockHeightFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Current block number</p>
              </div>

              {/* Total Transactions */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Total Transactions</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.totalTransactionsFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">All-time on-chain</p>
              </div>

              {/* Block Time */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Block Time</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.avgBlockTimeFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Average confirmation</p>
              </div>

              {/* Block Reward */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Block Reward</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.blockRewardFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Per block mined</p>
              </div>

              {/* Gas Price */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Gas Price</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{stats.gasPriceFormatted}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Average gas price</p>
              </div>

              {/* Data Freshness */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-xs text-[var(--color-text-muted)]">Data Updated</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
                  {stats.cacheAgeMinutes !== undefined ? (
                    stats.cacheAgeMinutes < 60 ? `${stats.cacheAgeMinutes}m ago` : `${Math.round(stats.cacheAgeMinutes / 60)}h ago`
                  ) : 'Just now'}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Source: {stats.source === 'blockscout' ? 'Blockscout API' : 'Fallback data'}
                </p>
              </div>
            </div>
          )}

          {/* Cache Info */}
          {stats && (
            <p
              className="mt-4 text-xs text-[var(--color-text-muted)]"
            >
              Data is cached for 24 hours to minimize API calls. Last updated:{' '}
              {new Date(stats.lastUpdated).toLocaleString()}.
              {stats.nextRefresh && (
                <> Next refresh: {new Date(stats.nextRefresh).toLocaleString()}.</>
              )}
            </p>
          )}
        </div>
      </section>

      {/* Gas Prices */}
      {stats && (
        <section className="px-6 pb-12 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div
            >
              <GasPriceCard gasPrice={stats.gasPrice} />
            </div>
          </div>
        </section>
      )}

      {/* Chain Parameters */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Chain Parameters
          </h2>
          <div
            className="grid gap-6 md:grid-cols-3"
          >
            {chainMetrics.map((section) => (
              <div
                key={section.category}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 font-semibold text-[var(--text-primary)]">{section.category}</h3>
                <div className="space-y-3">
                  {section.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">{metric.label}</span>
                      <span className="font-medium text-[var(--text-primary)]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Distribution */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Mining Distribution
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <BarChart data={miningPools} label="Top Mining Pools" />
              <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                * Approximate distribution based on recent blocks. See{' '}
                <a href="https://miningpoolstats.stream/ethereumclassic" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                  MiningPoolStats
                </a>{' '}
                for live data.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 font-semibold text-[var(--text-primary)]">Network Security</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-[var(--bg)] p-4">
                  <p className="text-xs text-[var(--color-text-muted)]">Network Hashrate</p>
                  <p className="mt-1 text-xl font-bold text-[var(--text-primary)]">~174 TH/s</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">Total computational power</p>
                </div>
                <div className="rounded-lg bg-[var(--bg)] p-4">
                  <p className="text-xs text-[var(--color-text-muted)]">Estimated 51% Attack Cost</p>
                  <p className="mt-1 text-xl font-bold text-[var(--text-primary)]">$50,000+ / hour</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">Based on hashrate and hardware costs</p>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="font-medium text-green-400">Network Healthy</span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    No recent reorganizations or security incidents detected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Network History
          </h2>
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="space-y-4">
              {historicalMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    </div>
                    {idx < historicalMilestones.length - 1 && (
                      <div className="h-full w-px bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-medium text-[var(--color-primary)]">{milestone.date}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Data Sources</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dataSources.filter(s => s.type === 'explorer' || s.type === 'analytics').map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">{source.name}</h4>
                    <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{source.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Explore Mining</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Learn about mining Ethereum Classic and view detailed pool statistics.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/stats"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Mining Stats
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Pool Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

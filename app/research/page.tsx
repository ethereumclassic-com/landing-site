'use client'

import Link from 'next/link'
import { reports, ecosystemStats, dataSources, getLatestReports } from './data/research'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'

const categoryIcons: Record<string, React.ReactNode> = {
  network: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ecosystem: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  market: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  technical: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  network: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  ecosystem: { bg: 'bg-[var(--color-success-bg)]', text: 'text-[var(--color-success)]' },
  market: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  technical: { bg: 'bg-[var(--color-warning-bg)]', text: 'text-[var(--color-warning)]' },
}

function ReportCard({ report }: { report: typeof reports[0] }) {
  const colors = categoryColors[report.category]

  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}>
          {categoryIcons[report.category]}
          {report.category.charAt(0).toUpperCase() + report.category.slice(1)}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">{report.readTime} read</span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">{report.title}</h3>
      <p className="mb-4 text-sm text-[var(--color-text-muted)]">{report.description}</p>

      <div className="mb-4 space-y-2">
        {report.highlights.slice(0, 3).map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          {report.author} &middot; {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <Link
          href={`/research/reports/${report.slug}`}
          className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
        >
          Read Report
          <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

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
            metric.changeType === 'negative' ? 'text-[var(--color-error)]' : 'text-gray-400'
          }`}>
            {metric.change}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{metric.description}</p>
    </div>
  )
}

// Live Network Metrics component
function LiveNetworkMetrics() {
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

export default function ResearchPage() {
  const latestReports = getLatestReports(4)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Research Hub
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                In-depth research and analysis of the Ethereum Classic ecosystem. Network statistics,
                market reports, and technical documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Link
              href="/block-reward-countdown"
              className="group rounded-xl border border-[var(--brand-green)]/40 bg-[var(--brand-green)]/5 p-4 transition-colors hover:border-[var(--brand-green)]/60 hover:bg-[var(--brand-green)]/10"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
                </span>
                <span className="rounded-full bg-[var(--brand-green)]/15 px-2 py-0.5 text-xs font-medium text-[var(--brand-green)]">Live Countdown</span>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Block Reward Countdown</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Live countdown to the next fifthing under ECIP-1017</p>
            </Link>
            <Link
              href="/research/emission-schedule"
              className="group rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/10"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Emission Schedule</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Charts, era history &amp; ECIP-1017 explainer</p>
            </Link>
            <Link
              href="/research/network"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                {categoryIcons.network}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Network Analysis</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Hashrate, transactions, and on-chain metrics</p>
            </Link>
            <Link
              href="/research/supply"
              className="group rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-4 transition-colors hover:border-[var(--color-primary)]/50"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Supply Tracker</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Emission schedule &amp; Fifthing countdown</p>
            </Link>
            <Link
              href="/research/fees"
              className="group rounded-xl border border-[var(--color-warning-border)] bg-[var(--color-warning)]/5 p-4 transition-colors hover:border-[var(--color-warning)]/50"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-warning)]/20 text-[var(--color-warning)]">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-warning)]">Fee Market</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Gas prices &amp; miner revenue analysis</p>
            </Link>
            <Link
              href="/research/ecosystem"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-success-bg)] text-[var(--color-success)]">
                {categoryIcons.ecosystem}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Ecosystem</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">DeFi, infrastructure, and community growth</p>
            </Link>
            <Link
              href="/research/reports"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                {categoryIcons.market}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Reports</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Market analysis and research papers</p>
            </Link>
            <Link
              href="/mining/stats"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-error-bg)] text-[var(--color-error)]">
                {categoryIcons.technical}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Mining Stats</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Network hashrate and mining data</p>
            </Link>
            <Link
              href="/research/ethereum-ico"
              className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Ethereum 2014 ICO</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Presale data, ROI history &amp; tokenomics</p>
            </Link>
            <Link
              href="/research/dao-fork"
              className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">2016 DAO Fork</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">How the original Ethereum chain became Ethereum Classic, and who tried to suppress it</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Network Metrics - Live Data */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Network Metrics
          </h2>
          <LiveNetworkMetrics />
        </div>
      </section>

      {/* Latest Reports */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-6 flex items-center justify-between"
          >
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">Latest Reports</h2>
            <Link
              href="/research/reports"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              View All Reports
            </Link>
          </div>
          <div
            className="grid gap-6 md:grid-cols-2"
          >
            {latestReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Ecosystem Overview
          </h2>
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ecosystemStats.map((section) => (
              <div
                key={section.category}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <h3 className="mb-3 font-semibold text-[var(--text-primary)]">{section.category}</h3>
                <div className="space-y-2">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">{stat.label}</span>
                      <span className="font-medium text-[var(--text-primary)]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Access raw data and analytics from these trusted sources:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dataSources.map((source) => (
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Stay Informed</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Follow the latest developments in the Ethereum Classic ecosystem through our news and research updates.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Latest News
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

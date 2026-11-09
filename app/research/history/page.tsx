import Link from 'next/link'
import HistoryCharts from './HistoryCharts'
import { fetchChainHistory, fetchActivityHistory } from '@/lib/chain-history'
import { fetchPriceSeries } from '@/lib/price-history'

// The series change once a month, and the price chart once a week: a daily read is enough.
export const revalidate = 86400

const monthName = (month: string) =>
  new Date(`${month}-01T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })

export default async function HistoricalDataPage() {
  const [priceSeries, chain, activity] = await Promise.all([
    fetchPriceSeries('all'),
    fetchChainHistory(),
    fetchActivityHistory(),
  ])
  const peak = chain.reduce<(typeof chain)[number] | null>((best, row) => (!best || row.hashrateTHs > best.hashrateTHs ? row : best), null)
  const lastMonth = chain[chain.length - 1]?.month

  const milestones = [
    { label: 'Genesis', value: 'July 30, 2015', note: 'The original Ethereum launch' },
    { label: 'The DAO Fork', value: 'July 20, 2016', note: 'ETC continues the original chain' },
    { label: 'All-Time High', value: '$167.09', note: 'May 6, 2021 (CoinGecko)' },
    ...(peak
      ? [{ label: 'Highest Monthly Hashrate', value: `${peak.hashrateTHs.toFixed(1)} TH/s`, note: monthName(peak.month) }]
      : []),
  ]

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
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

            <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">Historical Data</h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Ethereum Classic&apos;s price, hashrate and network activity over time, with key milestones from the
              chain&apos;s history.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-sm text-[var(--color-text-muted)]">
            <p className="font-medium text-[var(--text-primary)]">Where the figures come from</p>
            <p className="mt-1">
              Prices are weekly closes on{' '}
              <a href="https://www.kraken.com/prices/ethereum-classic" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                Kraken
              </a>
              &apos;s ETC/USD market. Hashrate, difficulty, transactions and fees are monthly, from{' '}
              <a href="https://etc.blockscout.com/stats" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                Blockscout
              </a>
              {lastMonth ? `, from August 2015 through ${monthName(lastMonth)}` : ''}. The page updates daily.
            </p>
          </div>
        </div>
      </section>

      <HistoryCharts price={priceSeries?.points ?? null} chain={chain} activity={activity} />

      {/* Key Statistics */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">Key Historical Milestones</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                <p className="mt-1 text-xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Related Research</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/research/network"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-[var(--text-primary)]">Network Stats</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Live network metrics and activity</p>
              </Link>
              <Link
                href="/research/supply"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-[var(--text-primary)]">Supply Analysis</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Emission schedule and circulation</p>
              </Link>
              <Link
                href="/mining/fees"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-[var(--text-primary)]">Network Fees</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Fees paid, gas prices and block space used</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

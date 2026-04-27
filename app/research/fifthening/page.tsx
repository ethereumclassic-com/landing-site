'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FadeIn } from '@/app/components/ui/FadeIn'
import FiftheningCountdown from '@/app/components/FiftheningCountdown'
import { useFifthening } from '@/app/hooks/useFifthening'
import {
  getDaysSinceLastFifthening,
  getAnnualInflationRate,
  getExpectedFiftheningDate,
} from './data/fiftheningChartData'
import EraHistoryTable from './components/EraHistoryTable'
import ECIP1017Explainer from './components/ECIP1017Explainer'
import RelatedLinks from './components/RelatedLinks'

// Load chart components client-side only (Recharts requires DOM)
const EmissionCurveChart = dynamic(() => import('./components/EmissionCurveChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
})
const EmissionRateChart = dynamic(() => import('./components/EmissionRateChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
})
const SupplyScarcitySection = dynamic(() => import('./components/SupplyScarcitySection'), {
  ssr: false,
  loading: () => <ChartSkeleton height={420} />,
})

function ChartSkeleton({ height = 360 }: { height?: number }) {
  return (
    <div
      className="animate-pulse rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]"
      style={{ height }}
    />
  )
}

function StatCell({
  label,
  value,
  loading,
  sub,
}: {
  label: string
  value: string
  loading?: boolean
  sub?: string
}) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4">
      <p className="text-xs text-[var(--text-muted)]">{label}</p>
      {loading ? (
        <div className="mt-2 h-5 w-20 animate-pulse rounded bg-[var(--border-subtle)]" />
      ) : (
        <p className="mt-1 font-mono text-base font-semibold text-[var(--text-primary)]">{value}</p>
      )}
      {sub && <p className="mt-0.5 text-xs text-[var(--text-muted)]">{sub}</p>}
    </div>
  )
}

export default function FiftheningPage() {
  const { status, currentBlock, blocksRemaining, progress, currentReward, nextReward, loading } = useFifthening()

  const expectedDate = getExpectedFiftheningDate(blocksRemaining)
  const daysSinceEra4 = currentBlock ? getDaysSinceLastFifthening(currentBlock) : null
  const inflationRate = currentBlock ? getAnnualInflationRate(currentBlock) : null

  return (
    <main className="min-h-screen bg-[var(--background)] pb-16 pt-24">
      {/* Breadcrumb */}
      <div className="px-6 pb-2 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Research
          </Link>
        </div>
      </div>

      {/* Hero — countdown */}
      <FadeIn>
        <section className="px-6 pb-10 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                <h1 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Fifth Fifthening</h1>
              </div>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Block 25,000,000 · ECIP-1017 · {currentReward ?? '…'} ETC → {nextReward ?? '…'} ETC
              </p>
            </div>
            <FiftheningCountdown variant="card" />
          </div>
        </section>
      </FadeIn>

      {/* Key stats strip */}
      <FadeIn delay={100}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              <StatCell
                label="Current Block"
                value={loading ? '…' : (currentBlock?.toLocaleString() ?? '—')}
                loading={loading}
                sub="live from Blockscout"
              />
              <StatCell label="Current Era" value="Era 5" sub="of infinite eras" />
              <StatCell label="Block Reward" value="2.048 ETC" sub="→ 1.6384 ETC next era" />
              <StatCell
                label="Expected Date"
                value={loading ? '…' : expectedDate}
                loading={loading}
                sub="at 13s avg block time"
              />
              <StatCell
                label="Days in Era 5"
                value={loading || !daysSinceEra4 ? '…' : `${daysSinceEra4.toLocaleString()}d`}
                loading={loading}
                sub="since Fourth Fifthening"
              />
              <StatCell
                label="Annual Inflation"
                value={loading || !inflationRate ? '…' : `${inflationRate}%`}
                loading={loading}
                sub="current era issuance rate"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Emission curve chart */}
      <FadeIn delay={150}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <EmissionCurveChart />
          </div>
        </section>
      </FadeIn>

      {/* Emission rate chart */}
      <FadeIn delay={150}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <EmissionRateChart />
          </div>
        </section>
      </FadeIn>

      {/* Supply scarcity (S2F) */}
      <FadeIn delay={150}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <SupplyScarcitySection />
          </div>
        </section>
      </FadeIn>

      {/* Era history table */}
      <FadeIn>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">Era History</h2>
            <EraHistoryTable
              blocksRemaining={blocksRemaining}
              progress={progress}
              currentBlock={currentBlock}
              loading={loading}
              expectedDate={expectedDate}
            />
          </div>
        </section>
      </FadeIn>

      {/* ECIP-1017 explainer */}
      <FadeIn>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <ECIP1017Explainer />
          </div>
        </section>
      </FadeIn>

      {/* Related links */}
      <FadeIn>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">Related</h2>
            <RelatedLinks />
          </div>
        </section>
      </FadeIn>

      {/* Data sources */}
      <div className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs text-[var(--text-muted)]">
            Block height: <a href="https://etc.blockscout.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">Blockscout</a>
            {' · '}
            Emission schedule: <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">ECIP-1017</a>
            {' · '}
            {status === 'pending' && blocksRemaining !== null && (
              <>Expected date estimated at 13s avg block time · </>
            )}
            All supply figures exclude uncle rewards.
          </p>
        </div>
      </div>
    </main>
  )
}

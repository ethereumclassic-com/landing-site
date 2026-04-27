'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { useFifthing } from '@/app/hooks/useFifthing'
import FifthingCountdown from '@/app/components/FifthingCountdown'
import EraHistoryTable from '../fifthing/components/EraHistoryTable'
import ECIP1017Explainer from '../fifthing/components/ECIP1017Explainer'
import RelatedLinks from '../fifthing/components/RelatedLinks'
import { getExpectedFifthingDate } from '../fifthing/data/fifthingChartData'

const EmissionCurveChart = dynamic(() => import('../fifthing/components/EmissionCurveChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
})
const EmissionRateChart = dynamic(() => import('../fifthing/components/EmissionRateChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
})
const SupplyScarcitySection = dynamic(
  () => import('../fifthing/components/SupplyScarcitySection'),
  {
    ssr: false,
    loading: () => <ChartSkeleton height={420} />,
  }
)

function ChartSkeleton({ height = 360 }: { height?: number }) {
  return (
    <div
      className="animate-pulse rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]"
      style={{ height }}
    />
  )
}

export default function EmissionSchedulePage() {
  const { currentBlock, currentEra, blocksRemaining, progress, loading } = useFifthing()

  const expectedDate = getExpectedFifthingDate(blocksRemaining)

  return (
    <main className="min-h-screen bg-[var(--background)] pb-16 pt-24">
      {/* Breadcrumb */}
      <div className="px-6 pb-2 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Research
          </Link>
        </div>
      </div>

      {/* Page header */}
      <FadeIn>
        <section className="px-6 pb-8 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              ETC Emission Schedule
            </h1>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              ECIP-1017 · 20% block reward reduction every 5,000,000 blocks
              {currentEra != null && !loading && (
                <> · Currently Era {currentEra}</>
              )}
            </p>
            <div className="mt-6">
              <FifthingCountdown variant="card" />
            </div>
            <div className="mt-4">
              <Link
                href="/block-reward-countdown"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--brand-green)] transition-colors hover:underline"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                Live countdown to next fifthing
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Emission curve chart */}
      <FadeIn delay={100}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <EmissionCurveChart />
          </div>
        </section>
      </FadeIn>

      {/* Annual issuance + inflation rate chart */}
      <FadeIn delay={120}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <EmissionRateChart />
          </div>
        </section>
      </FadeIn>

      {/* Supply scarcity / S2F */}
      <FadeIn delay={140}>
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
            Block height:{' '}
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)]"
            >
              Blockscout
            </a>
            {' · '}
            Emission schedule:{' '}
            <a
              href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)]"
            >
              ECIP-1017
            </a>
            {' · '}
            Future era dates estimated at 13s avg block time · All supply figures exclude uncle
            rewards.
          </p>
        </div>
      </div>
    </main>
  )
}

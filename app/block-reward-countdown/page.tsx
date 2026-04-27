'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import FiftheningCountdown from '@/app/components/FiftheningCountdown'
import { useFifthening } from '@/app/hooks/useFifthening'
import {
  getExpectedFiftheningDate,
  getAnnualInflationRate,
  getDaysSinceLastFifthening,
} from '@/app/research/fifthening/data/fiftheningChartData'

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

export default function BlockRewardCountdownPage() {
  const {
    status,
    currentBlock,
    currentEra,
    nextEra,
    targetBlock,
    blocksRemaining,
    currentReward,
    nextReward,
    loading,
  } = useFifthening()

  const expectedDate = getExpectedFiftheningDate(blocksRemaining)
  const daysSinceLastFifthing = currentBlock ? getDaysSinceLastFifthening(currentBlock) : null
  const inflationRate = currentBlock ? getAnnualInflationRate(currentBlock) : null

  return (
    <main className="min-h-screen bg-[var(--background)] pb-16 pt-24">
      {/* Hero heading */}
      <FadeIn>
        <section className="px-6 pb-8 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--brand-green)]">
                Live Countdown
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              {loading
                ? 'ETC Fifthing Countdown'
                : `Era ${currentEra ?? '…'} → Era ${nextEra ?? '…'} Fifthing`}
            </h1>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              ECIP-1017 · Block {targetBlock?.toLocaleString() ?? '…'} · Reward{' '}
              {currentReward ?? '…'} → {nextReward ?? '…'} ETC
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Countdown card */}
      <FadeIn delay={50}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <FiftheningCountdown variant="card" />
          </div>
        </section>
      </FadeIn>

      {/* Stats strip */}
      <FadeIn delay={100}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <StatCell
                label="Current Block"
                value={loading ? '…' : (currentBlock?.toLocaleString() ?? '—')}
                loading={loading}
                sub="live from Blockscout"
              />
              <StatCell
                label="Current Era"
                value={loading ? '…' : `Era ${currentEra ?? '—'}`}
                loading={loading}
                sub="of infinite eras"
              />
              <StatCell
                label="Block Reward"
                value={loading ? '…' : `${currentReward ?? '—'} ETC`}
                loading={loading}
                sub={nextReward != null ? `→ ${nextReward} ETC next era` : undefined}
              />
              <StatCell
                label="Expected Date"
                value={loading ? '…' : expectedDate}
                loading={loading}
                sub="at 13s avg block time"
              />
              <StatCell
                label="Days in Era"
                value={loading || !daysSinceLastFifthing ? '…' : `${daysSinceLastFifthing.toLocaleString()}d`}
                loading={loading}
                sub="since last fifthing"
              />
              <StatCell
                label="Annual Inflation"
                value={loading || !inflationRate ? '…' : `${inflationRate}%`}
                loading={loading}
                sub="current era issuance"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Brief explainer */}
      <FadeIn delay={150}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">What is a Fifthing?</h2>
              <div className="space-y-3 text-sm text-[var(--text-muted)]">
                <p>
                  Under{' '}
                  <a
                    href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-green)] hover:underline"
                  >
                    ECIP-1017
                  </a>
                  , Ethereum Classic reduces its block reward by 20% every 5,000,000 blocks — an
                  event called a{' '}
                  <strong className="text-[var(--text-primary)]">fifthing</strong>. This creates a
                  predictable, verifiable emission curve that makes ETC progressively more scarce
                  over time without any human intervention.
                </p>
                <p>
                  Each era lasts approximately 2 years at 13s average block time. The 20% reduction
                  compounds across eras: Era 1 started at 5 ETC per block, and each era is exactly
                  80% of the previous. The total ETC supply asymptotically approaches ~210.7M ETC —
                  a fixed, knowable ceiling.
                </p>
                <p>
                  Unlike Bitcoin&apos;s 50% halving, ETC&apos;s gentler 20% reduction extends
                  miner viability longer while still enforcing scarcity. The emission schedule is
                  encoded directly in the protocol — immutable and automatic.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/research/emission-schedule"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  View emission schedule &amp; charts
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
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
                <a
                  href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Read ECIP-1017
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Footer note */}
      <div className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
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
            {status === 'pending' && blocksRemaining !== null && (
              <> · Expected date estimated at 13s avg block time</>
            )}
            {' · '}All supply figures exclude uncle rewards.
          </p>
        </div>
      </div>
    </main>
  )
}

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { fetchNetworkStats } from '@/lib/blockscout'
import { calculateSupplyStats, EMISSION_CONSTANTS } from '@/app/research/data/emission'
import {
  getExpectedFifthingDate,
  getAnnualInflationRate,
  getNextEraInflationRate,
  getDaysSinceLastFifthing,
} from '@/app/research/fifthing/data/fifthingChartData'
import BlockRewardCountdownClient, { type InitialFifthingData } from './BlockRewardCountdownClient'
import ECIP1017Explainer from '@/app/research/fifthing/components/ECIP1017Explainer'
import RelatedLinks from '@/app/research/fifthing/components/RelatedLinks'

export const revalidate = 600

export default async function BlockRewardCountdownPage() {
  const networkStats = await fetchNetworkStats()
  const currentBlock = networkStats?.totalBlocks ?? 21_000_000

  const supply = calculateSupplyStats(currentBlock)
  const currentEra = supply.currentEra
  const nextEra = currentEra + 1
  const targetBlock = currentEra * EMISSION_CONSTANTS.ERA_LENGTH
  const blocksRemaining = supply.blocksUntilNextEra

  const initial: InitialFifthingData = {
    currentBlock,
    currentEra,
    nextEra,
    targetBlock,
    blocksRemaining,
    currentReward: supply.currentBlockReward,
    nextReward: supply.nextEraReward,
    expectedDate: getExpectedFifthingDate(blocksRemaining),
    daysSinceLastFifthing: getDaysSinceLastFifthing(currentBlock),
    inflationRate: getAnnualInflationRate(currentBlock),
    nextInflationRate: getNextEraInflationRate(currentBlock),
    progress: supply.percentThroughEra,
  }

  return (
    <main className="hero-gradient noise-overlay grid-overlay relative min-h-screen overflow-hidden pb-16 pt-12">

      {/* Hero heading — server-rendered for SEO */}
      <FadeIn>
        <section className="px-6 pb-8 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
              Ethereum Classic
              <br />
              <span className="text-[var(--brand-green)]">Block Reward</span> Reduction
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)] md:text-xl">
              Emission Fifthing: Era {currentEra} → Era {nextEra}
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
                </span>
                Live Countdown
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Countdown card + stats strip — client shell for live updates */}
      <BlockRewardCountdownClient initial={initial} />

      {/* What is a Fifthing? — pure static content for SEO */}
      <FadeIn delay={150}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
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
                  , Ethereum Classic reduces its block reward by 20% every 5,000,000 blocks. This
                  event is called a{' '}
                  <strong className="text-[var(--text-primary)]">fifthing</strong>. It creates a
                  predictable, verifiable emission curve that makes ETC progressively more scarce
                  over time without any human intervention.
                </p>
                <p>
                  Each era lasts approximately 2 years at 13s average block time. The 20% reduction
                  compounds across eras: Era 1 started at 5 ETC per block, and each era is exactly
                  80% of the previous. The total ETC supply asymptotically approaches ~210.7M ETC,
                  a fixed, knowable ceiling.
                </p>
                <p>
                  Unlike Bitcoin&apos;s 50% halving, ETC&apos;s gentler 20% reduction extends
                  miner viability longer while still enforcing scarcity. The emission schedule is
                  encoded directly in the protocol. It is immutable and automatic.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/research/emission-schedule"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  View emission schedule &amp; charts
                  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Read ECIP-1017
                  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What is ECIP-1017? + ETC Fifthing vs. BTC Halving */}
      <FadeIn delay={170}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <ECIP1017Explainer />
          </div>
        </section>
      </FadeIn>

      {/* Related */}
      <FadeIn delay={180}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">Related</h2>
            <RelatedLinks />
          </div>
        </section>
      </FadeIn>

    </main>
  )
}

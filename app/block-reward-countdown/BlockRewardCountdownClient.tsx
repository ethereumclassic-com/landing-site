'use client'

import dynamic from 'next/dynamic'
import { FadeIn } from '@/app/components/ui/FadeIn'
import FifthingCountdown from '@/app/components/FifthingCountdown'
import EraHistoryTable from '@/app/research/fifthing/components/EraHistoryTable'
import { useFifthing } from '@/app/hooks/useFifthing'

function ChartSkeleton() {
  return <div className="h-[360px] animate-pulse rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]" />
}

const EmissionRateChart = dynamic(
  () => import('@/app/research/fifthing/components/EmissionRateChart'),
  { ssr: false, loading: () => <ChartSkeleton /> }
)
import {
  getExpectedFifthingDate,
  getAnnualInflationRate,
  getNextEraInflationRate,
  getDaysSinceLastFifthing,
} from '@/app/research/fifthing/data/fifthingChartData'

export interface InitialFifthingData {
  currentBlock: number
  currentEra: number
  nextEra: number
  targetBlock: number
  blocksRemaining: number
  currentReward: number
  nextReward: number
  expectedDate: string
  daysSinceLastFifthing: number
  inflationRate: number
  nextInflationRate: number
  progress: number
}

function StatCell({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4">
      <p className="text-xs text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 font-mono text-base font-semibold text-[var(--text-primary)]">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-[var(--text-muted)]">{sub}</p>}
    </div>
  )
}

export default function BlockRewardCountdownClient({ initial }: { initial: InitialFifthingData }) {
  const { currentBlock, currentEra, blocksRemaining, currentReward, nextReward, progress, loading } = useFifthing()

  const block = loading ? initial.currentBlock : (currentBlock ?? initial.currentBlock)
  const era = loading ? initial.currentEra : (currentEra ?? initial.currentEra)
  const reward = loading ? initial.currentReward : (currentReward ?? initial.currentReward)
  const rewardNext = loading ? initial.nextReward : (nextReward ?? initial.nextReward)
  const remaining = loading ? initial.blocksRemaining : (blocksRemaining ?? initial.blocksRemaining)
  const prog = loading ? initial.progress : (progress ?? initial.progress)

  const expectedDate = loading ? initial.expectedDate : getExpectedFifthingDate(remaining)
  const daysSince = loading ? initial.daysSinceLastFifthing : getDaysSinceLastFifthing(block)
  const inflationRate = loading ? initial.inflationRate : getAnnualInflationRate(block)
  const nextInflationRate = loading ? initial.nextInflationRate : getNextEraInflationRate(block)

  return (
    <>
      {/* Countdown card */}
      <FadeIn delay={50}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <FifthingCountdown variant="card" />
          </div>
        </section>
      </FadeIn>

      {/* Stats strip */}
      <FadeIn delay={100}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <StatCell label="Current Block" value={block.toLocaleString()} sub="live from Blockscout" />
              <StatCell label="Current Era" value={`Era ${era}`} sub="of infinite eras" />
              <StatCell label="Block Reward" value={`${reward} ETC`} sub={`→ ${rewardNext} ETC next era`} />
              <StatCell label="Expected Date" value={expectedDate} sub="at 13s avg block time" />
              <StatCell label="Days in Era" value={`${daysSince.toLocaleString()}d`} sub="since last fifthing" />
              <StatCell label="Annual Inflation" value={`${inflationRate}%`} sub={`${nextInflationRate}% next era`} />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Era history table — needs live block data */}
      <FadeIn delay={120}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">ETC Total Supply by Era</h2>
            <EraHistoryTable
              blocksRemaining={remaining}
              progress={prog}
              currentBlock={block}
              loading={loading}
              expectedDate={expectedDate}
            />
          </div>
        </section>
      </FadeIn>

      {/* Annual Issuance & Inflation Rate chart */}
      <FadeIn delay={140}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <EmissionRateChart />
          </div>
        </section>
      </FadeIn>
    </>
  )
}

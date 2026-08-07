'use client'

import MetricAreaChart, {
  type MetricHistories,
} from '@/app/components/charts/MetricAreaChart'

export interface DifficultyData {
  currentDifficultyPH: number
  currentTHs: number
  blockTimeSeconds: number
  histories: MetricHistories
}

/**
 * Difficulty over time, with the two figures it is mechanically tied to.
 *
 * The three cards are shown together deliberately: difficulty alone is a number
 * with no intuitive scale, and it is only meaningful next to the block time it
 * targets and the hashrate it implies.
 */
export default function DifficultyChart({ data }: { data: DifficultyData }) {
  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">
            {data.currentDifficultyPH.toFixed(2)}
            <span className="ml-1 text-base font-semibold">PH</span>
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Network Difficulty</div>
        </div>
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">
            {data.blockTimeSeconds.toFixed(1)}
            <span className="ml-1 text-base font-semibold">s</span>
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Average Block Time</div>
        </div>
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">
            {data.currentTHs.toFixed(1)}
            <span className="ml-1 text-base font-semibold">TH/s</span>
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Implied Hashrate</div>
        </div>
      </div>

      <MetricAreaChart
        histories={data.histories}
        dataKey="difficultyPH"
        title="Network Difficulty"
        unit="PH"
        seriesName="Difficulty"
        precision={2}
        height={220}
        gradientId="diffGrad"
      />
    </div>
  )
}

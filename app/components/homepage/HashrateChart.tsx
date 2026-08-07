'use client'

import { useState, useEffect } from 'react'
import { cachedFetchJson } from '@/lib/client-fetch'
import MetricAreaChart, {
  type MetricHistories,
} from '@/app/components/charts/MetricAreaChart'

export interface HashrateData {
  currentTHs: number
  histories: MetricHistories
}

/**
 * Pass `initial` from a server component wherever possible. One ISR-cached
 * server fetch is shared by every visitor; the client fallback below costs one
 * upstream round trip per visitor and exists only for client-only parents.
 */
export default function HashrateChart({ initial }: { initial?: HashrateData }) {
  const [data, setData] = useState<HashrateData | null>(initial ?? null)

  useEffect(() => {
    if (initial) return
    cachedFetchJson<HashrateData>('/api/hashrate')
      .then(setData)
      .catch(() => {})
  }, [initial])

  if (!data) {
    return (
      <div className="mt-8 w-full space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="h-[72px] animate-pulse rounded-xl bg-[var(--bg-elevated)]" />
          <div className="h-[72px] animate-pulse rounded-xl bg-[var(--bg-elevated)]" />
          <div className="h-[72px] animate-pulse rounded-xl bg-[var(--bg-elevated)]" />
        </div>
        <div className="h-[148px] animate-pulse rounded-xl bg-[var(--bg-elevated)]" />
      </div>
    )
  }

  return (
    <div className="mt-8 w-full space-y-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">
            {data.currentTHs.toFixed(1)}
            <span className="ml-1 text-base font-semibold">TH/s</span>
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Network Hashrate</div>
        </div>
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">ETChash</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Mining Algorithm</div>
        </div>
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-4">
          <div className="text-2xl font-bold text-[var(--brand-green)]">GPU + ASIC</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Compatible Hardware</div>
        </div>
      </div>

      <MetricAreaChart
        histories={data.histories}
        dataKey="hashrateTHs"
        title="Network Hashrate"
        unit="TH/s"
        seriesName="Hashrate"
        gradientId="hrGrad"
      />
    </div>
  )
}

export type HashrateChartData = HashrateData

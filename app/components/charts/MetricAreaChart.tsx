'use client'

import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export type TimePeriod = 'week' | 'month' | 'year' | 'all'

/**
 * One point carries every metric read from the same block, so a chart switching
 * between them is switching keys on one series rather than fetching a second.
 */
export interface MetricPoint {
  label: string
  hashrateTHs: number
  difficultyPH: number
}

export type MetricHistories = Record<TimePeriod, MetricPoint[]>

const PERIODS: { key: TimePeriod; label: string }[] = [
  { key: 'week', label: '7D' },
  { key: 'month', label: '30D' },
  { key: 'year', label: '1Y' },
  { key: 'all', label: 'All' },
]

const GREEN = 'var(--brand-green)'

interface Props {
  histories: MetricHistories
  /** Which series to plot. Both live on the same point. */
  dataKey: 'hashrateTHs' | 'difficultyPH'
  /** Caption above the plot, e.g. "Network Difficulty". */
  title: string
  /** Unit suffix in the tooltip, e.g. "TH/s" or "PH". */
  unit: string
  /** Tooltip series name. */
  seriesName: string
  /** Decimal places for tick and tooltip values. */
  precision?: number
  height?: number
  defaultPeriod?: TimePeriod
  /** Distinct gradient id — two charts on one page must not share one. */
  gradientId: string
}

/**
 * The period-switching area plot shared by the hashrate and difficulty charts.
 *
 * Extracted rather than copied: the two differ only in which key they read and
 * how they label it, and a second copy of this file is where the two would
 * drift apart in axis behavior or empty-state handling.
 */
export default function MetricAreaChart({
  histories,
  dataKey,
  title,
  unit,
  seriesName,
  precision = 1,
  height = 100,
  defaultPeriod = 'week',
  gradientId,
}: Props) {
  const [period, setPeriod] = useState<TimePeriod>(defaultPeriod)

  const points = histories?.[period] ?? []
  const values = points.map((d) => d[dataKey])
  const min = values.length ? Math.min(...values) : 0
  const max = values.length ? Math.max(...values) : 1
  // Pad relative to the series' own scale: difficulty in PH sits near 1.9 while
  // hashrate sits near 130, so a fixed floor would flatten one of them.
  const pad = Math.max((max - min) * 0.2, max * 0.02)

  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 pb-3 pt-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand-green)]">
          {title}
        </p>
        <div className="flex gap-0.5 rounded-lg border border-[var(--border-default)] p-0.5">
          {PERIODS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`rounded-md px-2.5 py-1 font-mono text-[10px] transition-colors duration-150 ${
                period === key
                  ? 'bg-[var(--brand-green)] font-semibold text-white dark:text-[var(--brand-green-foreground)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {points.length > 0 ? (
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={points} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={GREEN} stopOpacity={0.18} />
                <stop offset="95%" stopColor={GREEN} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="label"
              tick={{ fill: 'var(--text-muted)', fontSize: 9, fontFamily: 'monospace' }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              domain={[Math.max(0, min - pad), max + pad]}
              tick={{ fill: 'var(--text-muted)', fontSize: 9, fontFamily: 'monospace' }}
              axisLine={false}
              tickLine={false}
              width={40}
              tickFormatter={(v: number) => v.toFixed(precision === 1 ? 0 : precision)}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 8,
                fontSize: 11,
                fontFamily: 'monospace',
                color: 'var(--text-primary)',
              }}
              formatter={(value) => [
                `${Number(value).toFixed(precision)} ${unit}`,
                seriesName,
              ]}
              labelStyle={{ color: 'var(--text-muted)', marginBottom: 2 }}
              cursor={{ stroke: GREEN, strokeWidth: 1, strokeDasharray: '4 2' }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={GREEN}
              strokeWidth={1.5}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{ r: 3, fill: GREEN, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p className="py-8 text-center font-mono text-xs text-[var(--text-muted)]">
          Chart unavailable
        </p>
      )}
    </div>
  )
}

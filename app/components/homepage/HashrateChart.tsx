'use client'

import { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type TimePeriod = 'week' | 'month' | 'year' | 'all'

interface HashratePoint {
  label: string
  hashrateTHs: number
}

type HashrateHistories = Record<TimePeriod, HashratePoint[]>

interface HashrateData {
  currentTHs: number
  histories: HashrateHistories
}

const PERIODS: { key: TimePeriod; label: string }[] = [
  { key: 'week',  label: '7D' },
  { key: 'month', label: '30D' },
  { key: 'year',  label: '1Y' },
  { key: 'all',   label: 'All' },
]

const GREEN = 'var(--brand-green)'

export default function HashrateChart() {
  const [data, setData] = useState<HashrateData | null>(null)
  const [period, setPeriod] = useState<TimePeriod>('week')

  useEffect(() => {
    fetch('/api/hashrate')
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

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

  const points = data.histories[period]
  const min = points?.length ? Math.min(...points.map((d) => d.hashrateTHs)) : 0
  const max = points?.length ? Math.max(...points.map((d) => d.hashrateTHs)) : 100
  const pad = Math.max((max - min) * 0.2, 5)

  return (
    <div className="mt-8 w-full space-y-3">
      {/* Stat cards */}
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

      {/* Chart */}
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 pb-3 pt-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand-green)]">
            Network Hashrate
          </p>
          <div className="flex gap-0.5 rounded-lg border border-[var(--border-default)] p-0.5">
            {PERIODS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] transition-colors duration-150 ${
                  period === key
                    ? 'bg-[var(--brand-green)] font-semibold text-white dark:text-black'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {points && points.length > 0 ? (
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={points} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={GREEN} stopOpacity={0.18} />
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
                width={36}
                tickFormatter={(v: number) => v.toFixed(0)}
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
                formatter={(value) => [`${Number(value).toFixed(1)} TH/s`, 'Hashrate']}
                labelStyle={{ color: 'var(--text-muted)', marginBottom: 2 }}
                cursor={{ stroke: GREEN, strokeWidth: 1, strokeDasharray: '4 2' }}
              />
              <Area
                type="monotone"
                dataKey="hashrateTHs"
                stroke={GREEN}
                strokeWidth={1.5}
                fill="url(#hrGrad)"
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
    </div>
  )
}

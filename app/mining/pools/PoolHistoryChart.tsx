'use client'

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { PoolHistory } from '@/lib/pool-history'
import { OTHER_POOLS, UNIDENTIFIED } from '@/lib/pool-history'

const POOL_COLORS = [
  'var(--brand-green)',
  'var(--color-info)',
  'var(--color-purple)',
  'var(--color-orange)',
  'var(--color-pink)',
  'var(--color-yellow)',
]

function colorFor(name: string, index: number): string {
  if (name === OTHER_POOLS) return 'var(--text-muted)'
  if (name === UNIDENTIFIED) return 'var(--border-default)'
  return POOL_COLORS[index % POOL_COLORS.length] ?? 'var(--text-muted)'
}

const dayLabel = (day: string, options: Intl.DateTimeFormatOptions) =>
  new Date(`${day}T00:00:00Z`).toLocaleDateString('en-US', { ...options, timeZone: 'UTC' })

interface TooltipProps {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: string
}

function ShareTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length || !label) return null
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 shadow-lg">
      <p className="text-sm font-medium text-[var(--text-primary)]">
        Week of {dayLabel(label, { month: 'short', day: 'numeric', year: 'numeric' })}
      </p>
      {[...payload].reverse().map((entry) => (
        <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
          {entry.name}: {entry.value.toFixed(1)}%
        </p>
      ))}
    </div>
  )
}

export default function PoolHistoryChart({ history }: { history: PoolHistory }) {
  const data = history.weeks.map((week) => ({ week: week.week, ...week.shares }))
  const axis = { stroke: 'var(--text-muted)', tick: { fill: 'var(--text-muted)', fontSize: 12 } }
  const from = dayLabel(history.from, { month: 'long', day: 'numeric', year: 'numeric' })
  const through = dayLabel(history.through, { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">Pool Shares Over Time</h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        Each pool&apos;s weekly share of blocks, {from} to {through}.
      </p>
      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="week"
              tickFormatter={(week: string) => dayLabel(week, { month: 'short', year: '2-digit' })}
              minTickGap={32}
              {...axis}
            />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={(value: number) => `${value}%`} {...axis} />
            <Tooltip content={<ShareTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {history.series.map((name, index) => (
              <Area
                key={name}
                type="monotone"
                dataKey={name}
                name={name}
                stackId="shares"
                stroke={colorFor(name, index)}
                fill={colorFor(name, index)}
                fillOpacity={0.6}
                isAnimationActive={false}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        From Blockscout block data: {history.sampleSize} consecutive blocks every {history.sampleStep}, about ten
        samples a day across its hours, {history.sampledBlocks.toLocaleString('en-US')}{' '}blocks in all. A share of
        blocks follows a pool&apos;s hashrate and its luck. {UNIDENTIFIED} counts miners whose address matches no pool
        listed here.
      </p>
    </div>
  )
}

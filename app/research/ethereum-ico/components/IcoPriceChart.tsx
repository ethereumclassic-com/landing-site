'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts'
import { ETH_ICO_PRICE_SCHEDULE } from '@/app/research/data/ethereumIco'

interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: number
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null
  const rate = payload[0].value
  return (
    <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-[var(--text-primary)]">Day {label}</p>
      <p className="mt-0.5 text-[var(--text-muted)]">{rate.toLocaleString()} ETH per BTC</p>
      <p className="mt-0.5 font-mono text-[var(--color-orange)]">₿{(1 / rate).toFixed(6)} per ETH</p>
    </div>
  )
}

export default function IcoPriceChart() {
  return (
    <div className="mt-8">
      <h3 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">ICO Sale Rate — Jul 22 to Sep 2, 2014</h3>
      <p className="mb-4 text-xs text-[var(--text-muted)]">
        ~31,529 BTC raised over 42 days. Early bird rate (days 1–14): 2,000 ETH per BTC, then linearly declining to 1,337 ETH per BTC by the final day.
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={ETH_ICO_PRICE_SCHEDULE} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <ReferenceArea
            x1={1}
            x2={14}
            fill="var(--color-orange)"
            fillOpacity={0.08}
            label={{ value: 'Early bird', position: 'insideTop', fontSize: 10, fill: 'var(--color-orange)', dy: 4 }}
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            ticks={[1, 7, 14, 21, 28, 35, 42]}
            tickFormatter={(v) => `D${v}`}
            stroke="var(--border-subtle)"
          />
          <YAxis
            domain={[1200, 2100]}
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v)}
            width={36}
            stroke="var(--border-subtle)"
          />
          <Line
            type="linear"
            dataKey="rate"
            stroke="var(--color-orange)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: 'var(--color-orange)', strokeWidth: 0 }}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
        <span>Day 1: 2,000 ETH/BTC · ₿0.00050/ETH</span>
        <span>Day 42: 1,337 ETH/BTC · ₿0.00075/ETH</span>
      </div>
    </div>
  )
}

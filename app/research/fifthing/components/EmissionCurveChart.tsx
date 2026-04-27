'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import { emissionCurveData } from '../data/fifthingChartData'

const BRAND_GREEN = 'var(--brand-green)'

interface TooltipEntry {
  payload?: Record<string, unknown>
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipEntry[]; label?: string }) {
  if (!active || !payload?.length) return null
  const d = payload[0]?.payload as { era?: number; totalSupply?: number; eraEmission?: number; blockReward?: number } | undefined
  if (!d) return null
  const era = d.era ?? 0
  const supplyM = ((d.totalSupply ?? 0) / 1_000_000).toFixed(2)
  const eraEmM = era === 0 ? 'Genesis' : `${((d.eraEmission ?? 0) / 1_000_000).toFixed(2)}M ETC`
  return (
    <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-[var(--text-primary)]">{(label ?? '').replace('\n', ' ')}</p>
      <p className="mt-1 text-[var(--text-muted)]">
        Total supply: <span className="font-mono text-[var(--text-primary)]">{supplyM}M ETC</span>
      </p>
      {era > 0 && (
        <p className="text-[var(--text-muted)]">
          Era emission: <span className="font-mono text-[var(--text-primary)]">{eraEmM}</span>
        </p>
      )}
      {era > 0 && (
        <p className="text-[var(--text-muted)]">
          Block reward: <span className="font-mono text-[var(--text-primary)]">{d.blockReward} ETC</span>
        </p>
      )}
    </div>
  )
}

// Reference lines for past fivenings (eras 1-4)
const pastFivtheningEras = [1, 2, 3, 4]

export default function EmissionCurveChart() {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
      <h2 className="mb-1 text-xl font-semibold text-[var(--text-primary)]">ETC Total Supply by Era</h2>
      <p className="mb-6 text-sm text-[var(--text-muted)]">
        Cumulative supply from genesis through each fifthing era. Reward reduces 20% per era under{' '}
        <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:underline">ECIP-1017</a>.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={emissionCurveData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="supplyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={BRAND_GREEN} stopOpacity={0.3} />
              <stop offset="95%" stopColor={BRAND_GREEN} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            interval={0}
          />
          <YAxis
            tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(0)}M`}
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            width={45}
          />
          <Tooltip content={<CustomTooltip />} />
          {pastFivtheningEras.map((era) => (
            <ReferenceLine
              key={era}
              x={`Era ${era}\n${['2017', '2020', '2022', '2024'][era - 1]}`}
              stroke="var(--border-default)"
              strokeDasharray="3 3"
            />
          ))}
          <ReferenceLine
            x="Era 5\n~2026"
            stroke={BRAND_GREEN}
            strokeDasharray="4 2"
            label={{ value: '5th Fifthing', position: 'insideTopRight', fontSize: 9, fill: BRAND_GREEN }}
          />
          <Area
            type="monotone"
            dataKey="totalSupply"
            stroke={BRAND_GREEN}
            strokeWidth={2}
            fill="url(#supplyGradient)"
            dot={{ fill: BRAND_GREEN, r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: BRAND_GREEN }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="mt-3 text-xs text-[var(--text-muted)]">
        Includes genesis supply of 72,009,990 ETC from the Ethereum fork. Block rewards only; uncle rewards not included.
      </p>
    </div>
  )
}

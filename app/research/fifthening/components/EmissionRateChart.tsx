'use client'

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import { emissionRateData } from '../data/fiftheningChartData'

const BRAND_GREEN = '#00ffae'
const AMBER = '#F59E0B'

interface TooltipEntry {
  dataKey?: string
  value?: number
  payload?: Record<string, unknown>
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipEntry[]; label?: string }) {
  if (!active || !payload?.length) return null
  const newETC = payload.find((p) => p.dataKey === 'newETC')?.value
  const inflation = payload.find((p) => p.dataKey === 'annualInflation')?.value
  const blockReward = (payload[0]?.payload as { blockReward?: number })?.blockReward
  return (
    <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-[var(--text-primary)]">{label as string}</p>
      <p className="mt-1 text-[var(--text-muted)]">
        Block reward: <span className="font-mono text-[var(--text-primary)]">{blockReward} ETC</span>
      </p>
      {newETC !== undefined && (
        <p className="text-[var(--text-muted)]">
          Annual issuance: <span className="font-mono text-[var(--text-primary)]">{((newETC as number) / 1_000_000).toFixed(2)}M ETC</span>
        </p>
      )}
      {inflation !== undefined && (
        <p className="text-[var(--text-muted)]">
          Inflation rate: <span className="font-mono" style={{ color: AMBER }}>{(inflation as number).toFixed(2)}%</span>
        </p>
      )}
    </div>
  )
}

export default function EmissionRateChart() {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
      <h2 className="mb-1 text-xl font-semibold text-[var(--text-primary)]">Annual Issuance &amp; Inflation Rate</h2>
      <p className="mb-6 text-sm text-[var(--text-muted)]">
        New ETC issued per year per era (bars) and annual inflation rate as a percentage of total supply (line).
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={emissionRateData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="era"
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="left"
            tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
            tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            width={42}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v: number) => `${v.toFixed(0)}%`}
            tick={{ fontSize: 10, fill: AMBER }}
            tickLine={false}
            axisLine={false}
            width={35}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '11px', paddingTop: '12px' }}
            formatter={(value: string) => (
              <span style={{ color: 'var(--text-muted)' }}>
                {value === 'newETC' ? 'Annual New ETC' : 'Inflation %'}
              </span>
            )}
          />
          <Bar yAxisId="left" dataKey="newETC" name="newETC" radius={[3, 3, 0, 0]}>
            {emissionRateData.map((entry) => (
              <Cell
                key={entry.era}
                fill={entry.isCurrent ? BRAND_GREEN : `${BRAND_GREEN}55`}
              />
            ))}
          </Bar>
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="annualInflation"
            name="annualInflation"
            stroke={AMBER}
            strokeWidth={2}
            dot={{ fill: AMBER, r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="mt-3 text-xs text-[var(--text-muted)]">
        Annual issuance based on ~{(2_427_508).toLocaleString()} blocks/year at 13s avg block time. Current era highlighted.
      </p>
    </div>
  )
}

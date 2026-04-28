'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import { s2fData } from '../data/fifthingChartData'

const BRAND_GREEN = 'var(--brand-green)'

interface TooltipEntry {
  payload?: Record<string, unknown>
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipEntry[]; label?: string }) {
  if (!active || !payload?.length) return null
  const point = payload[0]?.payload as (typeof s2fData)[0] | undefined
  if (!point) return null
  return (
    <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-[var(--text-primary)]">{label as string} <span className="font-normal text-[var(--text-muted)]">({point.yearLabel})</span></p>
      <p className="mt-1 text-[var(--text-muted)]">
        S2F ratio: <span className="font-mono text-[var(--text-primary)]">{point.s2f.toFixed(1)}</span>
      </p>
      <p className="text-[var(--text-muted)]">
        Annual flow: <span className="font-mono text-[var(--text-primary)]">{(point.annualFlow / 1_000_000).toFixed(2)}M ETC/yr</span>
      </p>
    </div>
  )
}

export default function SupplyScarcitySection() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
        <h2 className="mb-1 text-xl font-semibold text-[var(--text-primary)]">Supply Scarcity by Era</h2>
        <p className="mb-6 text-sm text-[var(--text-muted)]">
          Stock-to-Flow ratio — total supply divided by annual new issuance. Higher values indicate lower inflation
          relative to existing supply. ETC&apos;s S2F ratio grows with each fifthing.
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={s2fData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis
              dataKey="era"
              tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(v: number) => v.toFixed(0)}
              tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
              tickLine={false}
              axisLine={false}
              width={35}
              label={{
                value: 'S2F Ratio',
                angle: -90,
                position: 'insideLeft',
                fontSize: 10,
                fill: 'var(--text-muted)',
                dx: -5,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              x="Era 5"
              stroke={BRAND_GREEN}
              strokeDasharray="4 2"
              label={{
                value: '5th Fifthing',
                position: 'insideTopRight',
                fontSize: 9,
                fill: BRAND_GREEN,
              }}
            />
            <Line
              type="monotone"
              dataKey="s2f"
              stroke={BRAND_GREEN}
              strokeWidth={2.5}
              dot={(props) => {
                const { cx, cy, payload } = props as { cx: number; cy: number; payload: (typeof s2fData)[0] }
                return (
                  <circle
                    key={payload.era}
                    cx={cx}
                    cy={cy}
                    r={payload.isCurrent ? 5 : 3}
                    fill={BRAND_GREEN}
                    fillOpacity={payload.isCurrent ? 1 : 0.6}
                    stroke={payload.isCurrent ? BRAND_GREEN : 'none'}
                    strokeWidth={2}
                  />
                )
              }}
              activeDot={{ r: 6, fill: BRAND_GREEN }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-[var(--color-warning-border)] bg-[var(--color-warning)]/5 p-4">
        <div className="flex gap-3">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div>
            <p className="text-xs font-semibold text-[var(--color-warning)]">Data Notice</p>
            <p className="mt-0.5 text-xs text-[var(--text-muted)]">
              Stock-to-Flow measures total supply relative to annual new issuance. Higher values indicate lower
              inflation relative to existing supply. This chart shows supply-side scarcity metrics only and is{' '}
              <strong className="text-[var(--text-primary)]">not a price model or financial forecast</strong>.
              Future era values are projections based on{' '}
              <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:underline">ECIP-1017</a>{' '}
              schedule at 13s avg block time.
            </p>
          </div>
        </div>
      </div>

      {/* ETC S2F at each era — context table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border-default)]">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Era</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Block Reward</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Annual Flow</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">S2F Ratio</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Inflation %</th>
            </tr>
          </thead>
          <tbody>
            {s2fData.map((row) => (
              <tr
                key={row.era}
                className={`border-b border-[var(--border-subtle)] last:border-0 ${row.isCurrent ? 'bg-[var(--brand-green)]/5' : ''}`}
              >
                <td className="px-4 py-3">
                  <span className={`font-medium ${row.isCurrent ? 'text-[var(--brand-green)]' : row.isPast ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                    {row.era}
                  </span>
                  {row.isCurrent && (
                    <span className="ml-2 rounded-full bg-[var(--brand-green)]/15 px-1.5 py-0.5 text-xs font-medium text-[var(--brand-green)]">
                      Current
                    </span>
                  )}
                  {!row.isPast && !row.isCurrent && (
                    <span className="ml-2 text-xs text-[var(--text-muted)]">projected</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-mono text-[var(--text-primary)]">
                  {row.isPast || row.isCurrent ? `${s2fData.find(d => d.eraNumber === row.eraNumber) ? (5 * Math.pow(0.8, row.eraNumber - 1)).toFixed(4).replace(/\.?0+$/, '') : ''} ETC` : '—'}
                </td>
                <td className="px-4 py-3 text-right font-mono text-[var(--text-muted)]">
                  {(row.annualFlow / 1_000_000).toFixed(2)}M ETC
                </td>
                <td className="px-4 py-3 text-right font-mono text-[var(--text-primary)]">{row.s2f.toFixed(1)}</td>
                <td className="px-4 py-3 text-right font-mono text-[var(--text-muted)]">
                  {/* annualFlow / totalSupply — derived */}
                  {row.isPast || row.isCurrent ? `~${(row.annualFlow / (row.annualFlow * row.s2f) * 100).toFixed(1)}%` : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

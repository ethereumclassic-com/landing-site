'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import type { ChainMonth } from '@/app/research/data/chainHistory'
import type { ActivityMonth } from '@/lib/chain-history'
import type { PricePoint } from '@/lib/price-history'

type ChartType = 'price' | 'hashrate' | 'transactions'

interface TooltipPayloadEntry {
  name: string
  value: number | string
  color: string
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayloadEntry[]
  label?: string | number
  labelFormatter?: (label: string | number) => string
}

const CustomTooltip = ({ active, payload, label, labelFormatter }: CustomTooltipProps) => {
  if (active && payload && payload.length && label !== undefined) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 shadow-lg">
        <p className="text-sm font-medium text-[var(--text-primary)]">{labelFormatter ? labelFormatter(label) : label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString('en-US', { maximumFractionDigits: 6 }) : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const monthLabel = (month: string | number) =>
  new Date(`${month}-01T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
const dayLabel = (t: string | number) =>
  new Date(Number(t)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
const yearTick = (t: number) => String(new Date(t).getUTCFullYear())
const monthYearTick = (month: string) => month.slice(0, 4)

const tabClass = (active: boolean) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
    active
      ? 'bg-[var(--color-primary)] text-[var(--brand-green-foreground)]'
      : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
  }`

interface HistoryChartsProps {
  /** Weekly closes, or null when Kraken could not be reached. */
  price: PricePoint[] | null
  chain: ChainMonth[]
  activity: ActivityMonth[]
}

export default function HistoryCharts({ price, chain, activity }: HistoryChartsProps) {
  const [activeChart, setActiveChart] = useState<ChartType>('price')
  const [logScale, setLogScale] = useState(true)
  const axis = { stroke: 'var(--text-muted)', tick: { fill: 'var(--text-muted)', fontSize: 12 } }
  const unavailable = (what: string) => (
    <div className="flex h-80 items-center justify-center rounded-lg bg-[var(--bg)]">
      <p className="text-sm text-[var(--color-text-muted)]">{what} is unavailable right now.</p>
    </div>
  )

  return (
    <>
      {/* Chart Tabs */}
      <section className="px-6 pb-4 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          <button onClick={() => setActiveChart('price')} className={tabClass(activeChart === 'price')}>
            Price History
          </button>
          <button onClick={() => setActiveChart('hashrate')} className={tabClass(activeChart === 'hashrate')}>
            Network Hashrate
          </button>
          <button onClick={() => setActiveChart('transactions')} className={tabClass(activeChart === 'transactions')}>
            Transactions
          </button>
        </div>
      </section>

      {/* Charts */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div key={activeChart} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            {activeChart === 'price' && (
              <>
                <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">ETC Price History (USD)</h2>
                {price && price.length > 1 ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={price}>
                        <defs>
                          <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--brand-green)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="var(--brand-green)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
                        <XAxis dataKey="t" type="number" scale="time" domain={['dataMin', 'dataMax']} tickFormatter={yearTick} minTickGap={24} {...axis} />
                        <YAxis {...axis} tickFormatter={(value) => `$${value}`} />
                        <Tooltip content={<CustomTooltip labelFormatter={dayLabel} />} />
                        <Area type="monotone" dataKey="price" stroke="var(--brand-green)" fill="url(#priceGradient)" strokeWidth={2} name="Weekly close (USD)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  unavailable('Price history')
                )}
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Weekly closes on Kraken&apos;s ETC/USD market since July 2016. A weekly close leaves out the swings
                  within a week: the all-time high of $167.09 on May 6, 2021 (CoinGecko) came in a week that closed
                  near $84.
                </p>
              </>
            )}

            {activeChart === 'hashrate' && (
              <>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">Network Hashrate and Difficulty</h2>
                  <label className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <input type="checkbox" checked={logScale} onChange={(e) => setLogScale(e.target.checked)} />
                    Logarithmic scale
                  </label>
                </div>
                {chain.length > 1 ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chain}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
                        <XAxis dataKey="month" tickFormatter={monthYearTick} minTickGap={24} {...axis} />
                        <YAxis
                          yAxisId="left"
                          scale={logScale ? 'log' : 'auto'}
                          domain={logScale ? ['auto', 'auto'] : [0, 'auto']}
                          allowDataOverflow
                          stroke="var(--brand-green)"
                          tick={{ fill: 'var(--brand-green)', fontSize: 12 }}
                          tickFormatter={(value) => `${value} TH/s`}
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          scale={logScale ? 'log' : 'auto'}
                          domain={logScale ? ['auto', 'auto'] : [0, 'auto']}
                          allowDataOverflow
                          stroke="var(--color-blue)"
                          tick={{ fill: 'var(--color-blue)', fontSize: 12 }}
                          tickFormatter={(value) => `${value} PH`}
                        />
                        <Tooltip content={<CustomTooltip labelFormatter={monthLabel} />} />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="hashrateTHs" stroke="var(--brand-green)" strokeWidth={2} dot={false} name="Hashrate (TH/s)" />
                        <Line yAxisId="right" type="monotone" dataKey="difficultyPH" stroke="var(--color-blue)" strokeWidth={2} dot={false} name="Difficulty (PH)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  unavailable('Hashrate history')
                )}
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Monthly, from Blockscout: difficulty at each month&apos;s middle block, and hashrate as that difficulty
                  divided by the month&apos;s average block time. Before July 2016 these are the figures of the original
                  Ethereum chain, which Ethereum Classic continues. Hashrate rose sharply in September 2022, when
                  Ethereum&apos;s move to Proof of Stake sent its miners elsewhere.
                </p>
              </>
            )}

            {activeChart === 'transactions' && (
              <>
                <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Monthly Transactions and Average Fee</h2>
                {activity.length > 1 ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={activity}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
                        <XAxis dataKey="month" tickFormatter={monthYearTick} minTickGap={24} {...axis} />
                        <YAxis
                          yAxisId="left"
                          stroke="var(--color-warning)"
                          tick={{ fill: 'var(--color-warning)', fontSize: 12 }}
                          tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`}
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          scale="log"
                          domain={['auto', 'auto']}
                          allowDataOverflow
                          stroke="var(--color-purple)"
                          tick={{ fill: 'var(--color-purple)', fontSize: 12 }}
                          tickFormatter={(value) => `${value} ETC`}
                        />
                        <Tooltip content={<CustomTooltip labelFormatter={monthLabel} />} />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="transactions" stroke="var(--color-warning)" strokeWidth={2} dot={false} name="Transactions" />
                        <Line yAxisId="right" type="monotone" dataKey="avgFeeEtc" stroke="var(--color-purple)" strokeWidth={2} dot={false} name="Average fee (ETC)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  unavailable('Transaction history')
                )}
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Transactions per month and the average fee per transaction in ETC, on a logarithmic scale, from
                  Blockscout&apos;s statistics.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

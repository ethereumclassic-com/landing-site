'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Sample historical price data
const priceHistory = [
  { date: '2016-07', price: 1.5, volume: 1000000 },
  { date: '2016-12', price: 1.8, volume: 2000000 },
  { date: '2017-03', price: 3.0, volume: 5000000 },
  { date: '2017-06', price: 20.0, volume: 50000000 },
  { date: '2017-12', price: 35.0, volume: 100000000 },
  { date: '2018-01', price: 42.0, volume: 150000000 },
  { date: '2018-06', price: 15.0, volume: 30000000 },
  { date: '2018-12', price: 4.5, volume: 10000000 },
  { date: '2019-06', price: 8.0, volume: 15000000 },
  { date: '2019-12', price: 5.0, volume: 8000000 },
  { date: '2020-03', price: 4.0, volume: 6000000 },
  { date: '2020-08', price: 7.5, volume: 20000000 },
  { date: '2020-12', price: 8.0, volume: 25000000 },
  { date: '2021-02', price: 12.0, volume: 40000000 },
  { date: '2021-05', price: 120.0, volume: 500000000 },
  { date: '2021-09', price: 55.0, volume: 100000000 },
  { date: '2021-12', price: 35.0, volume: 60000000 },
  { date: '2022-04', price: 45.0, volume: 80000000 },
  { date: '2022-06', price: 15.0, volume: 30000000 },
  { date: '2022-12', price: 18.0, volume: 25000000 },
  { date: '2023-06', price: 18.5, volume: 20000000 },
  { date: '2023-12', price: 22.0, volume: 30000000 },
  { date: '2024-06', price: 25.0, volume: 35000000 },
  { date: '2024-12', price: 20.0, volume: 28000000 },
  { date: '2025-01', price: 18.5, volume: 25000000 },
]

// Sample hashrate history
const hashrateHistory = [
  { date: '2020-01', hashrate: 8.5, difficulty: 150 },
  { date: '2020-06', hashrate: 12.0, difficulty: 200 },
  { date: '2020-12', hashrate: 20.0, difficulty: 350 },
  { date: '2021-06', hashrate: 25.0, difficulty: 420 },
  { date: '2021-12', hashrate: 35.0, difficulty: 580 },
  { date: '2022-06', hashrate: 45.0, difficulty: 750 },
  { date: '2022-09', hashrate: 180.0, difficulty: 2400 }, // Post-merge influx
  { date: '2022-12', hashrate: 150.0, difficulty: 2200 },
  { date: '2023-06', hashrate: 165.0, difficulty: 2350 },
  { date: '2023-12', hashrate: 170.0, difficulty: 2400 },
  { date: '2024-06', hashrate: 175.0, difficulty: 2450 },
  { date: '2024-12', hashrate: 180.0, difficulty: 2500 },
  { date: '2025-01', hashrate: 174.0, difficulty: 2470 },
]

// Sample transaction history
const txHistory = [
  { date: '2020-01', transactions: 25000, avgFee: 0.0001 },
  { date: '2020-06', transactions: 35000, avgFee: 0.00015 },
  { date: '2020-12', transactions: 50000, avgFee: 0.0002 },
  { date: '2021-06', transactions: 80000, avgFee: 0.0005 },
  { date: '2021-12', transactions: 65000, avgFee: 0.0003 },
  { date: '2022-06', transactions: 55000, avgFee: 0.00025 },
  { date: '2022-12', transactions: 45000, avgFee: 0.0002 },
  { date: '2023-06', transactions: 40000, avgFee: 0.00018 },
  { date: '2023-12', transactions: 42000, avgFee: 0.00015 },
  { date: '2024-06', transactions: 45000, avgFee: 0.00012 },
  { date: '2024-12', transactions: 48000, avgFee: 0.0001 },
  { date: '2025-01', transactions: 47000, avgFee: 0.0001 },
]

type ChartType = 'price' | 'hashrate' | 'transactions'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 shadow-lg">
        <p className="text-sm font-medium text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function HistoricalDataPage() {
  const [activeChart, setActiveChart] = useState<ChartType>('price')

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/research"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Research
            </Link>

            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Historical Data
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Explore Ethereum Classic&apos;s historical price, hashrate, and network activity.
              Data visualization powered by Recharts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Notice */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
          >
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 mt-0.5 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="font-medium text-amber-400">Sample Data</p>
                <p className="mt-1 text-sm text-amber-400/80">
                  Charts display sample data for demonstration. Live historical data integration requires
                  node infrastructure deployment in Phase 7/8.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chart Tabs */}
      <section className="px-6 pb-4 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveChart('price')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeChart === 'price'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              Price History
            </button>
            <button
              onClick={() => setActiveChart('hashrate')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeChart === 'hashrate'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              Network Hashrate
            </button>
            <button
              onClick={() => setActiveChart('transactions')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeChart === 'transactions'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              Transactions
            </button>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            {activeChart === 'price' && (
              <>
                <h2 className="mb-4 text-lg font-semibold text-white">ETC Price History (USD)</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceHistory}>
                      <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3AB83A" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3AB83A" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis
                        dataKey="date"
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <YAxis
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#3AB83A"
                        fill="url(#priceGradient)"
                        strokeWidth={2}
                        name="Price (USD)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Historical price data from July 2016 to present. All-time high: $176.16 (May 2021).
                </p>
              </>
            )}

            {activeChart === 'hashrate' && (
              <>
                <h2 className="mb-4 text-lg font-semibold text-white">Network Hashrate & Difficulty</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hashrateHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis
                        dataKey="date"
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <YAxis
                        yAxisId="left"
                        stroke="#3AB83A"
                        tick={{ fill: '#3AB83A', fontSize: 12 }}
                        tickFormatter={(value) => `${value} TH/s`}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#3B82F6"
                        tick={{ fill: '#3B82F6', fontSize: 12 }}
                        tickFormatter={(value) => `${value} PH`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="hashrate"
                        stroke="#3AB83A"
                        strokeWidth={2}
                        dot={false}
                        name="Hashrate (TH/s)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="difficulty"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                        name="Difficulty (PH)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Notable jump in Sept 2022 following the Ethereum Merge, as ETH miners migrated to ETC.
                </p>
              </>
            )}

            {activeChart === 'transactions' && (
              <>
                <h2 className="mb-4 text-lg font-semibold text-white">Daily Transactions & Fees</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={txHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis
                        dataKey="date"
                        stroke="#64748b"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <YAxis
                        yAxisId="left"
                        stroke="#F59E0B"
                        tick={{ fill: '#F59E0B', fontSize: 12 }}
                        tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#8B5CF6"
                        tick={{ fill: '#8B5CF6', fontSize: 12 }}
                        tickFormatter={(value) => `${value} ETC`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="transactions"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        dot={false}
                        name="Daily Transactions"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="avgFee"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={false}
                        name="Avg Fee (ETC)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  Average daily transaction count and fee levels. Fees remain consistently low on ETC.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold text-white">Key Historical Milestones</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Genesis', value: 'July 30, 2015', note: 'Original Ethereum launch' },
              { label: 'The DAO Fork', value: 'July 20, 2016', note: 'ETC preserves original chain' },
              { label: 'All-Time High', value: '$176.16', note: 'May 6, 2021' },
              { label: 'Post-Merge Peak', value: '263 TH/s', note: 'September 2022' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                <p className="mt-1 text-xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Related Research</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/research/network"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-white">Network Stats</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Live network metrics and activity</p>
              </Link>
              <Link
                href="/research/supply"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-white">Supply Analysis</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Emission schedule and circulation</p>
              </Link>
              <Link
                href="/research/fees"
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <p className="font-medium text-white">Fee Market</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Transaction fees and gas analysis</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Historical data shown is approximate and for informational purposes only.
            Charts use Recharts library. Live data integration planned for future phases.
          </p>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { miningHardware, networkStats, type MiningHardware } from '../data/mining'
import {
  calculateProfitability,
  formatETC,
  formatUSD,
  formatHashrate,
  formatPower,
  NETWORK_CONSTANTS,
  type ProfitabilityResult,
} from '../lib/calculations'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Common electricity rate presets
const electricityPresets = [
  { label: 'Cheap', value: 0.05, description: '$0.05/kWh' },
  { label: 'Average', value: 0.10, description: '$0.10/kWh' },
  { label: 'Moderate', value: 0.15, description: '$0.15/kWh' },
  { label: 'Expensive', value: 0.25, description: '$0.25/kWh' },
]

function ResultCard({
  label,
  value,
  subValue,
  highlight,
  positive,
}: {
  label: string
  value: string
  subValue?: string
  highlight?: boolean
  positive?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? positive
            ? 'border-green-500/30 bg-green-500/10'
            : 'border-red-500/30 bg-red-500/10'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
      <p className={`mt-1 text-xl font-bold ${highlight ? (positive ? 'text-green-400' : 'text-red-400') : 'text-white'}`}>
        {value}
      </p>
      {subValue && <p className="text-xs text-[var(--color-text-muted)]">{subValue}</p>}
    </div>
  )
}

function HardwarePresetButton({
  hardware,
  selected,
  onSelect,
}: {
  hardware: MiningHardware
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col items-start rounded-lg border p-3 text-left transition-colors ${
        selected
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
          : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/50'
      }`}
    >
      <span className="text-sm font-medium text-white">{hardware.name}</span>
      <span className="text-xs text-[var(--color-text-muted)]">
        {hardware.hashrate} MH/s • {hardware.power}W
      </span>
    </button>
  )
}

export default function MiningProfitabilityPage() {
  // Input state
  const [hashrateMH, setHashrateMH] = useState(100)
  const [powerWatts, setPowerWatts] = useState(200)
  const [electricityRate, setElectricityRate] = useState(0.10)
  const [poolFeePercent, setPoolFeePercent] = useState(1)
  const [etcPrice, setEtcPrice] = useState(NETWORK_CONSTANTS.etcPriceUSD)
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null)

  // Calculate results
  const results: ProfitabilityResult = useMemo(() => {
    return calculateProfitability({
      hashrateMH,
      powerWatts,
      electricityRate,
      poolFeePercent,
      etcPrice,
    })
  }, [hashrateMH, powerWatts, electricityRate, poolFeePercent, etcPrice])

  // Handle hardware preset selection
  const handleHardwareSelect = (hardware: MiningHardware) => {
    setSelectedHardware(hardware.id)
    setHashrateMH(hardware.hashrate)
    setPowerWatts(hardware.power)
  }

  // Top hardware for presets (most popular/efficient)
  const topHardware = miningHardware.slice(0, 6)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/mining"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Mining
            </Link>

            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Profitability Calculator
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Estimate your Ethereum Classic mining earnings. Enter your hardware specs and electricity costs
              to see projected profits.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Hardware Presets */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Hardware Presets</h2>
              <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                Select a preset or enter custom values below
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {topHardware.map((hw) => (
                  <HardwarePresetButton
                    key={hw.id}
                    hardware={hw}
                    selected={selectedHardware === hw.id}
                    onSelect={() => handleHardwareSelect(hw)}
                  />
                ))}
              </div>
              <Link
                href="/mining/hardware"
                className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
              >
                View all hardware
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Mining Parameters */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Mining Parameters</h2>

              <div className="space-y-4">
                {/* Hashrate */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--color-text-muted)]">
                    Hashrate (MH/s)
                  </label>
                  <input
                    type="number"
                    value={hashrateMH}
                    onChange={(e) => {
                      setHashrateMH(parseFloat(e.target.value) || 0)
                      setSelectedHardware(null)
                    }}
                    min="0"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                {/* Power */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--color-text-muted)]">
                    Power Consumption (Watts)
                  </label>
                  <input
                    type="number"
                    value={powerWatts}
                    onChange={(e) => {
                      setPowerWatts(parseFloat(e.target.value) || 0)
                      setSelectedHardware(null)
                    }}
                    min="0"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                {/* Electricity Rate */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--color-text-muted)]">
                    Electricity Rate ($/kWh)
                  </label>
                  <input
                    type="number"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    min="0"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {electricityPresets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setElectricityRate(preset.value)}
                        className={`rounded-lg px-3 py-1 text-xs transition-colors ${
                          electricityRate === preset.value
                            ? 'bg-[var(--color-primary)] text-black'
                            : 'bg-[var(--bg)] text-[var(--color-text-muted)] hover:text-white'
                        }`}
                      >
                        {preset.description}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pool Fee */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--color-text-muted)]">
                    Pool Fee (%)
                  </label>
                  <input
                    type="number"
                    value={poolFeePercent}
                    onChange={(e) => setPoolFeePercent(parseFloat(e.target.value) || 0)}
                    step="0.1"
                    min="0"
                    max="100"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                {/* ETC Price */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--color-text-muted)]">
                    ETC Price (USD)
                  </label>
                  <input
                    type="number"
                    value={etcPrice}
                    onChange={(e) => setEtcPrice(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    min="0"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    Reference price. Check{' '}
                    <a
                      href="https://www.coingecko.com/en/coins/ethereum-classic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      CoinGecko
                    </a>{' '}
                    for live prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Network Info */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Network Stats</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[var(--color-text-muted)]">Network Hashrate</p>
                  <p className="font-medium text-white">{networkStats.hashrate}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)]">Block Reward</p>
                  <p className="font-medium text-white">{networkStats.blockReward}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)]">Block Time</p>
                  <p className="font-medium text-white">{networkStats.blockTime}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)]">Daily Blocks</p>
                  <p className="font-medium text-white">~{networkStats.dailyBlocks.toLocaleString()}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                Last updated: {networkStats.lastUpdated}
              </p>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Summary */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Your Setup</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <span className="text-white">{formatHashrate(hashrateMH)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  <span className="text-white">{formatPower(powerWatts)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-muted)]">@</span>
                  <span className="text-white">${electricityRate}/kWh</span>
                </div>
              </div>
            </div>

            {/* Profitability Status */}
            <div
              className={`rounded-xl border p-6 ${
                results.isProfitable
                  ? 'border-green-500/30 bg-green-500/5'
                  : 'border-red-500/30 bg-red-500/5'
              }`}
            >
              <div className="flex items-center gap-3">
                {results.isProfitable ? (
                  <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                )}
                <div>
                  <h3 className={`text-xl font-bold ${results.isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                    {results.isProfitable ? 'Profitable' : 'Not Profitable'}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {results.isProfitable
                      ? `Earning ${formatUSD(results.dailyProfitUSD)} per day after power costs`
                      : `Losing ${formatUSD(Math.abs(results.dailyProfitUSD))} per day after power costs`}
                  </p>
                </div>
              </div>
            </div>

            {/* ETC Earnings */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">ETC Earnings</h2>
              <div className="grid grid-cols-2 gap-4">
                <ResultCard label="Daily" value={formatETC(results.dailyETC, 6)} />
                <ResultCard label="Weekly" value={formatETC(results.weeklyETC, 4)} />
                <ResultCard label="Monthly" value={formatETC(results.monthlyETC, 4)} />
                <ResultCard label="Yearly" value={formatETC(results.yearlyETC, 2)} />
              </div>
            </div>

            {/* Revenue */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Revenue (USD)</h2>
              <div className="grid grid-cols-2 gap-4">
                <ResultCard label="Daily" value={formatUSD(results.dailyRevenueUSD)} />
                <ResultCard label="Weekly" value={formatUSD(results.weeklyRevenueUSD)} />
                <ResultCard label="Monthly" value={formatUSD(results.monthlyRevenueUSD)} />
                <ResultCard label="Yearly" value={formatUSD(results.yearlyRevenueUSD)} />
              </div>
            </div>

            {/* Power Costs */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Power Costs</h2>
              <div className="grid grid-cols-2 gap-4">
                <ResultCard label="Daily" value={formatUSD(results.dailyPowerCostUSD)} />
                <ResultCard label="Weekly" value={formatUSD(results.weeklyPowerCostUSD)} />
                <ResultCard label="Monthly" value={formatUSD(results.monthlyPowerCostUSD)} />
                <ResultCard label="Yearly" value={formatUSD(results.yearlyPowerCostUSD)} />
              </div>
            </div>

            {/* Net Profit */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Net Profit</h2>
              <div className="grid grid-cols-2 gap-4">
                <ResultCard
                  label="Daily"
                  value={formatUSD(results.dailyProfitUSD)}
                  highlight
                  positive={results.dailyProfitUSD > 0}
                />
                <ResultCard
                  label="Weekly"
                  value={formatUSD(results.weeklyProfitUSD)}
                  highlight
                  positive={results.weeklyProfitUSD > 0}
                />
                <ResultCard
                  label="Monthly"
                  value={formatUSD(results.monthlyProfitUSD)}
                  highlight
                  positive={results.monthlyProfitUSD > 0}
                />
                <ResultCard
                  label="Yearly"
                  value={formatUSD(results.yearlyProfitUSD)}
                  highlight
                  positive={results.yearlyProfitUSD > 0}
                />
              </div>
            </div>

            {/* Break-even Analysis */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-white">Break-even Analysis</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Break-even ETC Price</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {results.breakEvenPriceUSD === Infinity ? 'N/A' : formatUSD(results.breakEvenPriceUSD)}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Price needed to cover electricity
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Cost per ETC</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {results.costPerETC === Infinity ? 'N/A' : formatUSD(results.costPerETC)}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Electricity cost per ETC mined
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            These calculations are estimates based on current network conditions. Actual results may vary due to
            difficulty changes, luck variance, and hardware performance. Always do your own research before investing.
            Data reference:{' '}
            <a
              href="https://whattomine.com/coins/162-etc-etchash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              WhatToMine
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

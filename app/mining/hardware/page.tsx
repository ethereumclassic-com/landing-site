'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { miningHardware, networkStats, type MiningHardware } from '../data/mining'
import { calculateHardwareProfitability, formatUSD, NETWORK_CONSTANTS } from '../lib/calculations'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

type HardwareTab = 'ASIC' | 'GPU'
type SortOption = 'hashrate' | 'efficiency' | 'profit' | 'power'
type SortDirection = 'asc' | 'desc'

const availabilityColors: Record<string, { bg: string; text: string }> = {
  available: { bg: 'bg-green-500/10', text: 'text-green-400' },
  limited: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  discontinued: { bg: 'bg-red-500/10', text: 'text-red-400' },
}

const brandColors: Record<string, { bg: string; text: string }> = {
  NVIDIA: { bg: 'bg-green-500/10', text: 'text-green-400' },
  AMD: { bg: 'bg-red-500/10', text: 'text-red-400' },
  Bitmain: { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  Jasminer: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  iPollo: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  Innosilicon: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
}

function SortIcon({ active, direction }: { active: boolean; direction: SortDirection }) {
  return (
    <svg
      className={`h-4 w-4 transition-colors ${active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]/50'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {direction === 'desc' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      )}
    </svg>
  )
}

function HardwareRow({
  hardware,
  electricityRate,
  etcPrice,
}: {
  hardware: MiningHardware
  electricityRate: number
  etcPrice: number
}) {
  const profitability = calculateHardwareProfitability(
    hardware.hashrate,
    hardware.power,
    electricityRate,
    1, // 1% pool fee
    etcPrice
  )

  const availabilityColor = availabilityColors[hardware.availability] || availabilityColors.available
  const brandColor = brandColors[hardware.brand] || { bg: 'bg-gray-500/10', text: 'text-gray-400' }

  return (
    <tr className="border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--panel)]/50">
      <td className="py-4 pr-4">
        <div className="flex flex-col">
          <span className="font-medium text-white">{hardware.name}</span>
          <span className={`inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-medium ${brandColor.bg} ${brandColor.text}`}>
            {hardware.brand}
          </span>
        </div>
      </td>
      <td className="py-4 px-2 text-center">
        <span className="font-mono text-white">{hardware.hashrate.toLocaleString()}</span>
        <span className="text-xs text-[var(--color-text-muted)]"> MH/s</span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className="font-mono text-white">{hardware.power.toLocaleString()}</span>
        <span className="text-xs text-[var(--color-text-muted)]"> W</span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className="font-mono text-white">{hardware.efficiency.toFixed(2)}</span>
        <span className="text-xs text-[var(--color-text-muted)]"> J/MH</span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className="font-mono text-[var(--color-primary)]">{profitability.dailyETC.toFixed(6)}</span>
        <span className="text-xs text-[var(--color-text-muted)]"> ETC</span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className={`font-mono ${profitability.isProfitable ? 'text-green-400' : 'text-red-400'}`}>
          {formatUSD(profitability.dailyProfitUSD)}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">/day</span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ${availabilityColor.bg} ${availabilityColor.text}`}>
          {hardware.availability}
        </span>
      </td>
    </tr>
  )
}

function HardwareCard({
  hardware,
  electricityRate,
  etcPrice,
}: {
  hardware: MiningHardware
  electricityRate: number
  etcPrice: number
}) {
  const profitability = calculateHardwareProfitability(
    hardware.hashrate,
    hardware.power,
    electricityRate,
    1,
    etcPrice
  )

  const availabilityColor = availabilityColors[hardware.availability] || availabilityColors.available
  const brandColor = brandColors[hardware.brand] || { bg: 'bg-gray-500/10', text: 'text-gray-400' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-white">{hardware.name}</h3>
          <div className="mt-1 flex gap-2">
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${brandColor.bg} ${brandColor.text}`}>
              {hardware.brand}
            </span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${availabilityColor.bg} ${availabilityColor.text}`}>
              {hardware.availability}
            </span>
          </div>
        </div>
        <span className={`text-lg font-bold ${profitability.isProfitable ? 'text-green-400' : 'text-red-400'}`}>
          {formatUSD(profitability.dailyProfitUSD)}/d
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-[var(--color-text-muted)]">Hashrate</p>
          <p className="font-mono font-medium text-white">{hardware.hashrate.toLocaleString()} MH/s</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Power</p>
          <p className="font-mono font-medium text-white">{hardware.power.toLocaleString()} W</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Efficiency</p>
          <p className="font-mono font-medium text-white">{hardware.efficiency.toFixed(2)} J/MH</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Daily ETC</p>
          <p className="font-mono font-medium text-[var(--color-primary)]">{profitability.dailyETC.toFixed(6)}</p>
        </div>
      </div>

      {hardware.notes && (
        <p className="mt-3 text-xs text-[var(--color-text-muted)]">{hardware.notes}</p>
      )}
    </motion.div>
  )
}

export default function MiningHardwarePage() {
  const [activeTab, setActiveTab] = useState<HardwareTab>('ASIC')
  const [sortBy, setSortBy] = useState<SortOption>('profit')
  const [sortDir, setSortDir] = useState<SortDirection>('desc')
  const [electricityRate, setElectricityRate] = useState(0.10)
  const [etcPrice, setEtcPrice] = useState(NETWORK_CONSTANTS.etcPriceUSD)

  const handleSort = (option: SortOption) => {
    if (sortBy === option) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(option)
      setSortDir('desc')
    }
  }

  const filteredAndSortedHardware = useMemo(() => {
    const filtered = miningHardware.filter((hw) => hw.type === activeTab)

    return filtered.sort((a, b) => {
      const profitA = calculateHardwareProfitability(a.hashrate, a.power, electricityRate, 1, etcPrice)
      const profitB = calculateHardwareProfitability(b.hashrate, b.power, electricityRate, 1, etcPrice)

      let comparison = 0
      switch (sortBy) {
        case 'hashrate':
          comparison = a.hashrate - b.hashrate
          break
        case 'efficiency':
          comparison = a.efficiency - b.efficiency
          break
        case 'profit':
          comparison = profitA.dailyProfitUSD - profitB.dailyProfitUSD
          break
        case 'power':
          comparison = a.power - b.power
          break
      }

      return sortDir === 'asc' ? comparison : -comparison
    })
  }, [activeTab, sortBy, sortDir, electricityRate, etcPrice])

  const asicCount = miningHardware.filter((hw) => hw.type === 'ASIC').length
  const gpuCount = miningHardware.filter((hw) => hw.type === 'GPU').length

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
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
              Mining Hardware Guide
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Compare ASICs and GPUs for Ethereum Classic mining. See hashrates, power consumption,
              efficiency, and estimated profitability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Settings */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <label className="text-sm text-[var(--color-text-muted)]">Electricity Rate</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-text-muted)]">$</span>
                  <input
                    type="number"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    min="0"
                    className="w-20 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <span className="text-sm text-[var(--color-text-muted)]">/kWh</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-sm text-[var(--color-text-muted)]">ETC Price</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-text-muted)]">$</span>
                  <input
                    type="number"
                    value={etcPrice}
                    onChange={(e) => setEtcPrice(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    min="0"
                    className="w-20 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="ml-auto text-sm text-[var(--color-text-muted)]">
                Network: {networkStats.hashrate} • {networkStats.blockReward}/block
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 pb-4 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('ASIC')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'ASIC'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              ASICs ({asicCount})
            </button>
            <button
              onClick={() => setActiveTab('GPU')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'GPU'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              GPUs ({gpuCount})
            </button>
          </div>
        </div>
      </section>

      {/* Table (Desktop) */}
      <section className="hidden px-6 pb-12 md:block md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--panel)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                  <th className="py-4 pr-4 pl-4 font-medium">Hardware</th>
                  <th className="cursor-pointer py-4 px-2 text-center font-medium" onClick={() => handleSort('hashrate')}>
                    <div className="flex items-center justify-center gap-1">
                      Hashrate
                      <SortIcon active={sortBy === 'hashrate'} direction={sortDir} />
                    </div>
                  </th>
                  <th className="cursor-pointer py-4 px-2 text-center font-medium" onClick={() => handleSort('power')}>
                    <div className="flex items-center justify-center gap-1">
                      Power
                      <SortIcon active={sortBy === 'power'} direction={sortDir} />
                    </div>
                  </th>
                  <th className="cursor-pointer py-4 px-2 text-center font-medium" onClick={() => handleSort('efficiency')}>
                    <div className="flex items-center justify-center gap-1">
                      Efficiency
                      <SortIcon active={sortBy === 'efficiency'} direction={sortDir} />
                    </div>
                  </th>
                  <th className="py-4 px-2 text-center font-medium">Daily ETC</th>
                  <th className="cursor-pointer py-4 px-2 text-center font-medium" onClick={() => handleSort('profit')}>
                    <div className="flex items-center justify-center gap-1">
                      Daily Profit
                      <SortIcon active={sortBy === 'profit'} direction={sortDir} />
                    </div>
                  </th>
                  <th className="py-4 px-2 pr-4 text-center font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedHardware.map((hardware) => (
                  <HardwareRow
                    key={hardware.id}
                    hardware={hardware}
                    electricityRate={electricityRate}
                    etcPrice={etcPrice}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cards (Mobile) */}
      <section className="px-6 pb-12 md:hidden">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4">
            {filteredAndSortedHardware.map((hardware) => (
              <HardwareCard
                key={hardware.id}
                hardware={hardware}
                electricityRate={electricityRate}
                etcPrice={etcPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">ASIC vs GPU Mining</h3>
              <div className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <div>
                  <p className="font-medium text-white">ASICs</p>
                  <p>Purpose-built for mining with higher efficiency and hashrate. Best for dedicated miners with lower electricity costs.</p>
                </div>
                <div>
                  <p className="font-medium text-white">GPUs</p>
                  <p>Versatile and resellable. Lower initial efficiency but can mine multiple algorithms. Good for hobbyists.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">Understanding Efficiency</h3>
              <div className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <p>
                  Efficiency is measured in Joules per Megahash (J/MH). <span className="text-green-400">Lower is better</span>.
                </p>
                <p>
                  The most efficient hardware minimizes electricity costs per ETC mined. This becomes critical as difficulty increases.
                </p>
                <p>
                  Profitability depends on your electricity rate. At higher rates (&gt;$0.15/kWh), only the most efficient hardware may be profitable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Calculate Your Profitability</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Use our profitability calculator to estimate your earnings based on your specific hardware configuration.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/profitability"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Open Calculator
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Browse Pools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Profitability estimates are based on current network conditions and may vary. Hardware specifications from manufacturer data.
            Always verify specs before purchasing. Data reference:{' '}
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

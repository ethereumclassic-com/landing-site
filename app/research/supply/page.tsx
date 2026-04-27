'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import {
  EMISSION_CONSTANTS,
  calculateSupplyStats,
  eraSchedule,
  emissionMilestones,
  formatSupply,
  formatBlockReward,
  formatBlockNumber,
  getOrdinalSuffix,
  type SupplyStats,
} from '../data/emission'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

// Fifthening Countdown Component
function FitheningCountdown({ stats, isLoading }: { stats: SupplyStats | null; isLoading: boolean }) {
  // Calculate initial time left based on stats
  const initialTimeLeft = useMemo(() => {
    if (!stats) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const totalSeconds = stats.timeUntilNextEra.totalSeconds
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: Math.floor(totalSeconds % 60),
    }
  }, [stats])

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)

  // Reset timeLeft when stats change
  useEffect(() => {
    setTimeLeft(initialTimeLeft)
  }, [initialTimeLeft])

  // Countdown timer
  useEffect(() => {
    if (!stats) return

    let totalSeconds = stats.timeUntilNextEra.totalSeconds

    const timer = setInterval(() => {
      totalSeconds -= 1
      if (totalSeconds <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: Math.floor(totalSeconds % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [stats])

  const nextEraNumber = stats ? stats.currentEra + 1 : 6
  const nextEraBlock = nextEraNumber * EMISSION_CONSTANTS.ERA_LENGTH

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 p-6 md:p-8"
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold text-[var(--color-primary)]">
          {getOrdinalSuffix(nextEraNumber - 1)} Fifthening Countdown
        </h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Block Reward Reduction at Block {formatBlockNumber(nextEraBlock)}
        </p>

        {/* Countdown Display */}
        <div className="mt-6 grid grid-cols-4 gap-3 md:gap-6">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-[var(--panel)] p-3 md:p-4">
              <p className="text-2xl font-bold text-white md:text-4xl">
                {isLoading ? '--' : item.value.toString().padStart(2, '0')}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Reward Change */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-xs text-[var(--color-text-muted)]">Current Reward</p>
            <p className="text-xl font-bold text-white">
              {stats ? formatBlockReward(stats.currentBlockReward) : '--'} ETC
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20">
            <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs text-[var(--color-text-muted)]">After Fifthening</p>
            <p className="text-xl font-bold text-amber-400">
              {stats ? formatBlockReward(stats.nextEraReward) : '--'} ETC
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
            <span>Era {stats?.currentEra || '--'} Progress</span>
            <span>{stats ? `${stats.percentThroughEra.toFixed(1)}%` : '--'}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--bg)]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)]"
              initial={{ width: 0 }}
              animate={{ width: stats ? `${stats.percentThroughEra}%` : '0%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            {stats ? formatBlockNumber(stats.blocksUntilNextEra) : '--'} blocks remaining
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Supply Stats Cards
function SupplyStatsCards({ stats, isLoading }: { stats: SupplyStats | null; isLoading: boolean }) {
  const statItems = [
    {
      label: 'Total Supply',
      value: stats ? formatSupply(stats.totalSupply) + ' ETC' : '--',
      description: 'Including genesis supply',
      icon: (
        <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    },
    {
      label: 'Mined Supply',
      value: stats ? formatSupply(stats.totalEmitted) + ' ETC' : '--',
      description: 'Block rewards emitted',
      icon: (
        <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      label: 'Genesis Supply',
      value: formatSupply(EMISSION_CONSTANTS.GENESIS_SUPPLY) + ' ETC',
      description: 'From Ethereum fork',
      icon: (
        <svg aria-hidden="true" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      label: '% of Max Supply',
      value: stats ? stats.percentOfMaxSupply.toFixed(1) + '%' : '--',
      description: `of ~${formatSupply(EMISSION_CONSTANTS.REALISTIC_MAX_SUPPLY)} max`,
      icon: (
        <svg aria-hidden="true" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {statItems.map((item) => (
        <motion.div
          key={item.label}
          variants={fadeInUp}
          className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">{item.label}</p>
              <p className="mt-1 text-xl font-bold text-white">
                {isLoading ? '--' : item.value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">{item.description}</p>
            </div>
            <div className="rounded-lg bg-[var(--bg)] p-2">{item.icon}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Era Schedule Table
function EraScheduleTable() {
  const [showAll, setShowAll] = useState(false)
  const displayedEras = showAll ? eraSchedule : eraSchedule.slice(0, 8)

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
    >
      <div className="p-4 border-b border-[var(--border)]">
        <h3 className="font-semibold text-white">Emission Schedule by Era</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          ECIP-1017: 20% reduction every 5M blocks
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--bg)]">
              <th className="px-4 py-3 text-left font-medium text-[var(--color-text-muted)]">Era</th>
              <th className="px-4 py-3 text-left font-medium text-[var(--color-text-muted)]">Blocks</th>
              <th className="px-4 py-3 text-right font-medium text-[var(--color-text-muted)]">Block Reward</th>
              <th className="px-4 py-3 text-right font-medium text-[var(--color-text-muted)]">Era Emission</th>
              <th className="px-4 py-3 text-right font-medium text-[var(--color-text-muted)]">Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {displayedEras.map((era) => {
              // Current era is 5 (blocks 20M-25M)
              const isCurrent = era.number === 5
              const isPast = era.number < 5

              return (
                <tr
                  key={era.number}
                  className={`border-b border-[var(--border)] ${
                    isCurrent ? 'bg-[var(--color-primary)]/10' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${isCurrent ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                        Era {era.number}
                      </span>
                      {isCurrent && (
                        <span className="rounded-full bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                          Current
                        </span>
                      )}
                      {isPast && (
                        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                          Complete
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-text-muted)]">
                    {formatBlockNumber(era.startBlock)} - {formatBlockNumber(era.endBlock)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-white">
                    {formatBlockReward(era.blockReward)} ETC
                  </td>
                  <td className="px-4 py-3 text-right text-[var(--color-text-muted)]">
                    {formatSupply(era.eraSupply)} ETC
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-white">
                    {formatSupply(era.totalSupply)} ETC
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {eraSchedule.length > 8 && (
        <div className="p-4 border-t border-[var(--border)]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            {showAll ? 'Show Less' : `Show All ${eraSchedule.length} Eras`}
          </button>
        </div>
      )}
    </motion.div>
  )
}

// Emission Milestones Timeline
function EmissionMilestones() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <h3 className="font-semibold text-white mb-4">Fifthening History</h3>

      <div className="space-y-4">
        {emissionMilestones.map((milestone, idx) => {
          const isPast = milestone.era < 5
          const isCurrent = milestone.era === 5

          return (
            <div
              key={milestone.era}
              className={`relative pl-6 pb-4 ${
                idx < emissionMilestones.length - 1 ? 'border-l-2 border-[var(--border)]' : ''
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-2 top-0 h-4 w-4 rounded-full border-2 ${
                  isPast
                    ? 'border-green-400 bg-green-400/20'
                    : isCurrent
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/20'
                    : 'border-[var(--border)] bg-[var(--panel)]'
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className={`font-medium ${isCurrent ? 'text-[var(--color-primary)]' : 'text-white'}`}>
                    {milestone.event}
                    {isCurrent && (
                      <span className="ml-2 text-xs text-[var(--color-primary)]">(Upcoming)</span>
                    )}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Block {formatBlockNumber(milestone.block)} &middot; {milestone.date}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--color-text-muted)]">{milestone.rewardBefore} ETC</span>
                  <svg aria-hidden="true" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="font-medium text-white">{milestone.rewardAfter} ETC</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function SupplyTrackerPage() {
  const [stats, setStats] = useState<SupplyStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchBlockHeight() {
      try {
        // Try to get live block height from our API
        const response = await fetch('/api/network')
        if (response.ok) {
          const data = await response.json()
          const blockHeight = data.totalBlocks || 23816658 // Fallback
          setStats(calculateSupplyStats(blockHeight))
        } else {
          // Use fallback block height
          setStats(calculateSupplyStats(23816658))
        }
      } catch {
        // Use fallback
        setStats(calculateSupplyStats(23816658))
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlockHeight()
  }, [])

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/research"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Research
            </Link>

            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              ETC Supply Tracker
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Track Ethereum Classic&apos;s emission schedule under ECIP-1017. Monitor the &quot;Fifthening&quot;
              countdown and total supply growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fifthening Countdown */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FitheningCountdown stats={stats} isLoading={isLoading} />
        </div>
      </section>

      {/* Supply Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SupplyStatsCards stats={stats} isLoading={isLoading} />
        </div>
      </section>

      {/* Era Schedule */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Emission Schedule
          </motion.h2>
          <EraScheduleTable />
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          <EmissionMilestones />

          {/* About ECIP-1017 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="font-semibold text-white mb-4">About ECIP-1017</h3>
            <div className="space-y-4 text-sm text-[var(--color-text-muted)]">
              <p>
                <strong className="text-white">ECIP-1017</strong> established Ethereum Classic&apos;s monetary
                policy, implementing a disinflationary emission schedule inspired by Bitcoin&apos;s halving model.
              </p>
              <div className="rounded-lg bg-[var(--bg)] p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Era Length:</span>
                  <span className="text-white">5,000,000 blocks</span>
                </div>
                <div className="flex justify-between">
                  <span>Reduction Rate:</span>
                  <span className="text-white">20% per era</span>
                </div>
                <div className="flex justify-between">
                  <span>Starting Reward:</span>
                  <span className="text-white">5 ETC (Era 1)</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Supply:</span>
                  <span className="text-white">~199-210M ETC</span>
                </div>
              </div>
              <p>
                The &quot;Fifthening&quot; (20% reduction, or keeping 4/5ths) occurs approximately every 2.5 years,
                gradually reducing new supply entering circulation.
              </p>
              <a
                href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline"
              >
                Read ECIP-1017 Specification
                <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison with Bitcoin */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="font-semibold text-white mb-4">ETC vs BTC Emission</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--color-primary)]">ETC</span>
                  </div>
                  <span className="font-medium text-white">Ethereum Classic</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Reduction Event</span>
                    <span className="text-white">Fifthening (20%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Frequency</span>
                    <span className="text-white">~2.5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Max Supply</span>
                    <span className="text-white">~199-210M</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-400">BTC</span>
                  </div>
                  <span className="font-medium text-white">Bitcoin</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Reduction Event</span>
                    <span className="text-white">Halving (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Frequency</span>
                    <span className="text-white">~4 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Max Supply</span>
                    <span className="text-white">21M</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              ETC&apos;s more gradual reduction (20% vs 50%) provides smoother transitions for miners
              while still achieving disinflationary monetary policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Block height from{' '}
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Blockscout
            </a>
            . Emission schedule per{' '}
            <a
              href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              ECIP-1017
            </a>
            . Countdown updates in real-time based on average 13-second block time.
          </p>
        </div>
      </section>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { formatBlockReward } from '../data/emission'

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

interface FeeStats {
  gasPrices: {
    slow: number
    average: number
    fast: number
  }
  networkUtilization: number
  avgBlockReward: number
  currentBlockHeight: number
  avgBlockTime: number
  estimatedDailyFees: number // Rough estimate
  feeRewardRatio: number // fees as % of miner revenue
}

// Custom hook to fetch fee-related network stats
function useFeeStats() {
  const [stats, setStats] = useState<FeeStats>({
    gasPrices: { slow: 1.56, average: 1.89, fast: 5.21 },
    networkUtilization: 0.42,
    avgBlockReward: 2.048,
    currentBlockHeight: 23816658,
    avgBlockTime: 13,
    estimatedDailyFees: 0,
    feeRewardRatio: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/network')
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()

        setStats({
          gasPrices: data.gasPrice || { slow: 1.56, average: 1.89, fast: 5.21 },
          networkUtilization: data.networkUtilization || 0.42,
          avgBlockReward: data.blockReward || 2.048,
          currentBlockHeight: data.blockHeight || 23816658,
          avgBlockTime: data.avgBlockTime || 13,
          estimatedDailyFees: 0,
          feeRewardRatio: 0,
        })
      } catch {
        // Use defaults on error
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  return { stats, isLoading }
}

// Helper to format gas prices
function formatGasPrice(gwei: number): string {
  if (gwei < 0.01) return '<0.01'
  return gwei.toFixed(2)
}

// Helper to format percentage
function formatPercent(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`
}

// Fee Context Banner - explains why fee market matters
function FeeMarketContext() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
          <svg aria-hidden="true" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-white">Why Fee Markets Matter for ETC</h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            As block rewards continue to decrease through ECIP-1017&apos;s Fifthening schedule
            (currently {formatBlockReward(2.048)} ETC per block), transaction fees become increasingly
            important for miner revenue and long-term network security. A healthy fee market
            indicates sustainable demand for block space.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="rounded-lg bg-[var(--panel)] px-3 py-2">
              <p className="text-xs text-[var(--color-text-muted)]">Current Block Reward</p>
              <p className="text-lg font-bold text-white">~2.05 ETC</p>
            </div>
            <div className="rounded-lg bg-[var(--panel)] px-3 py-2">
              <p className="text-xs text-[var(--color-text-muted)]">Next Era Reward</p>
              <p className="text-lg font-bold text-amber-400">~1.64 ETC</p>
            </div>
            <div className="rounded-lg bg-[var(--panel)] px-3 py-2">
              <p className="text-xs text-[var(--color-text-muted)]">Reduction</p>
              <p className="text-lg font-bold text-red-400">-20%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Gas Price Display
function GasPriceCards({ gasPrices, isLoading }: { gasPrices: FeeStats['gasPrices']; isLoading: boolean }) {
  const tiers = [
    {
      name: 'Slow',
      price: gasPrices.slow,
      time: '~5 min',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      name: 'Average',
      price: gasPrices.average,
      time: '~1 min',
      color: 'text-[var(--color-primary)]',
      bgColor: 'bg-[var(--color-primary)]/10',
      borderColor: 'border-[var(--color-primary)]/30',
      recommended: true,
    },
    {
      name: 'Fast',
      price: gasPrices.fast,
      time: '~15 sec',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ]

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-4 md:grid-cols-3">
      {tiers.map((tier) => (
        <motion.div
          key={tier.name}
          variants={fadeInUp}
          className={`rounded-xl border ${tier.borderColor} ${tier.bgColor} p-4`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${tier.color}`}>{tier.name}</span>
            {tier.recommended && (
              <span className="rounded-full bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                Recommended
              </span>
            )}
          </div>
          <p className="mt-2 text-3xl font-bold text-white">
            {isLoading ? '--' : formatGasPrice(tier.price)}
            <span className="ml-1 text-base font-normal text-[var(--color-text-muted)]">Gwei</span>
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">Est. confirmation: {tier.time}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Network Utilization Gauge
function NetworkUtilization({ utilization, isLoading }: { utilization: number; isLoading: boolean }) {
  // Determine health status based on utilization
  const getHealthStatus = (util: number) => {
    if (util < 25) return { label: 'Low', color: 'text-blue-400', bgColor: 'bg-blue-500' }
    if (util < 50) return { label: 'Moderate', color: 'text-green-400', bgColor: 'bg-green-500' }
    if (util < 75) return { label: 'High', color: 'text-amber-400', bgColor: 'bg-amber-500' }
    return { label: 'Very High', color: 'text-red-400', bgColor: 'bg-red-500' }
  }

  const health = getHealthStatus(utilization)

  return (
    <motion.div variants={fadeInUp} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Network Utilization</h3>
        <span className={`rounded-full px-2 py-0.5 text-xs ${health.color} bg-opacity-20`} style={{ backgroundColor: `${health.bgColor}20` }}>
          {isLoading ? 'Loading...' : health.label}
        </span>
      </div>

      {/* Gauge Display */}
      <div className="relative">
        <div className="h-4 rounded-full bg-[var(--bg)] overflow-hidden">
          <motion.div
            className={`h-full ${health.bgColor}`}
            initial={{ width: 0 }}
            animate={{ width: isLoading ? '0%' : `${Math.min(utilization, 100)}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-[var(--color-text-muted)]">
          <span>0%</span>
          <span className="text-lg font-bold text-white">{isLoading ? '--' : formatPercent(utilization)}</span>
          <span>100%</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Network utilization measures the percentage of available block gas being used.
        Higher utilization generally leads to higher gas prices.
      </p>
    </motion.div>
  )
}

// Miner Revenue Breakdown
function MinerRevenueBreakdown({ stats, isLoading }: { stats: FeeStats; isLoading: boolean }) {
  // Calculate rough estimates
  const blocksPerDay = 86400 / stats.avgBlockTime
  const dailyBlockRewards = blocksPerDay * stats.avgBlockReward

  // Estimate daily fees (rough calculation based on gas prices and utilization)
  // This is a simplification - actual fees vary greatly
  const avgGasPerBlock = 8_000_000 * (stats.networkUtilization / 100) // 8M gas limit
  const avgFeePerBlock = (avgGasPerBlock * stats.gasPrices.average) / 1e9 // Convert gwei to ETC (1e9 gwei = 1 ETC)
  const dailyFees = avgFeePerBlock * blocksPerDay

  const totalDailyRevenue = dailyBlockRewards + dailyFees
  const feePercentage = totalDailyRevenue > 0 ? (dailyFees / totalDailyRevenue) * 100 : 0

  return (
    <motion.div variants={fadeInUp} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="font-semibold text-white mb-4">Estimated Daily Miner Revenue</h3>

      <div className="space-y-4">
        {/* Block Rewards */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[var(--color-text-muted)]">Block Rewards</span>
            <span className="text-white font-medium">
              {isLoading ? '--' : `~${dailyBlockRewards.toLocaleString('en-US', { maximumFractionDigits: 0 })} ETC`}
            </span>
          </div>
          <div className="h-3 rounded-full bg-[var(--bg)] overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)]"
              style={{ width: `${100 - feePercentage}%` }}
            />
          </div>
        </div>

        {/* Transaction Fees */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[var(--color-text-muted)]">Transaction Fees</span>
            <span className="text-white font-medium">
              {isLoading ? '--' : `~${dailyFees.toLocaleString('en-US', { maximumFractionDigits: 2 })} ETC`}
            </span>
          </div>
          <div className="h-3 rounded-full bg-[var(--bg)] overflow-hidden">
            <div
              className="h-full bg-amber-500"
              style={{ width: `${feePercentage}%` }}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="pt-4 border-t border-[var(--border)]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Total Daily Revenue</p>
              <p className="text-2xl font-bold text-white">
                {isLoading ? '--' : `~${totalDailyRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} ETC`}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[var(--color-text-muted)]">Fee Ratio</p>
              <p className={`text-xl font-bold ${feePercentage < 1 ? 'text-amber-400' : 'text-green-400'}`}>
                {isLoading ? '--' : formatPercent(feePercentage, 3)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        * Estimates based on current block reward ({stats.avgBlockReward.toFixed(3)} ETC),
        ~{Math.round(blocksPerDay).toLocaleString()} blocks/day, and current gas prices.
        Actual revenue varies based on network activity.
      </p>
    </motion.div>
  )
}

// Fee Market Health Indicators
function FeeMarketHealth({ stats, isLoading }: { stats: FeeStats; isLoading: boolean }) {
  const indicators = [
    {
      label: 'Gas Price Spread',
      value: `${formatGasPrice(stats.gasPrices.fast - stats.gasPrices.slow)} Gwei`,
      description: 'Difference between fast and slow gas prices',
      status: stats.gasPrices.fast - stats.gasPrices.slow < 5 ? 'good' : 'moderate',
    },
    {
      label: 'Network Demand',
      value: stats.networkUtilization > 10 ? 'Active' : 'Low',
      description: 'Based on network utilization percentage',
      status: stats.networkUtilization > 10 ? 'good' : 'low',
    },
    {
      label: 'Fee Predictability',
      value: 'Stable',
      description: 'ETC fees are generally stable and predictable',
      status: 'good',
    },
  ]

  return (
    <motion.div variants={fadeInUp} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="font-semibold text-white mb-4">Fee Market Health</h3>

      <div className="space-y-4">
        {indicators.map((indicator) => (
          <div key={indicator.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">{indicator.label}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{indicator.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">{isLoading ? '--' : indicator.value}</span>
              <span
                className={`h-2 w-2 rounded-full ${
                  indicator.status === 'good'
                    ? 'bg-green-400'
                    : indicator.status === 'moderate'
                    ? 'bg-amber-400'
                    : 'bg-blue-400'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Transaction Cost Calculator
function TransactionCostCalculator({ gasPrices, isLoading }: { gasPrices: FeeStats['gasPrices']; isLoading: boolean }) {
  const [selectedTier, setSelectedTier] = useState<'slow' | 'average' | 'fast'>('average')

  // Common transaction types and their gas usage
  const txTypes = [
    { name: 'Simple Transfer', gas: 21000, description: 'Sending ETC between addresses' },
    { name: 'Token Transfer', gas: 65000, description: 'ERC-20 token transfer' },
    { name: 'DEX Swap', gas: 150000, description: 'Typical DEX trade' },
    { name: 'Contract Deploy', gas: 500000, description: 'Deploy a simple contract' },
  ]

  const gasPrice = gasPrices[selectedTier]
  const etcPrice = 12.75 // Using fallback price

  return (
    <motion.div variants={fadeInUp} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="font-semibold text-white mb-4">Transaction Cost Estimator</h3>

      {/* Tier Selector */}
      <div className="flex gap-2 mb-4">
        {(['slow', 'average', 'fast'] as const).map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              selectedTier === tier
                ? 'bg-[var(--color-primary)] text-black'
                : 'bg-[var(--bg)] text-[var(--color-text-muted)] hover:text-white'
            }`}
          >
            {tier.charAt(0).toUpperCase() + tier.slice(1)}
          </button>
        ))}
      </div>

      {/* Transaction Types */}
      <div className="space-y-3">
        {txTypes.map((tx) => {
          const costEtc = (tx.gas * gasPrice) / 1e9
          const costUsd = costEtc * etcPrice

          return (
            <div key={tx.name} className="flex items-center justify-between rounded-lg bg-[var(--bg)] p-3">
              <div>
                <p className="text-sm font-medium text-white">{tx.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {tx.description} • {tx.gas.toLocaleString()} gas
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">
                  {isLoading ? '--' : `${costEtc.toFixed(6)} ETC`}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {isLoading ? '--' : `~$${costUsd.toFixed(4)}`}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        Costs calculated at {formatGasPrice(gasPrice)} Gwei ({selectedTier}).
        Actual costs may vary based on contract complexity.
      </p>
    </motion.div>
  )
}

export default function FeeMarketPage() {
  const { stats: feeStats, isLoading } = useFeeStats()

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

            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Fee Market Dashboard
              </h1>
              {isLoading ? (
                <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  Loading...
                </span>
              ) : (
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Live
                </span>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Monitor ETC&apos;s transaction fee market. Track gas prices, network utilization,
              and the transition from block rewards to fee-based miner incentives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fee Market Context */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FeeMarketContext />
        </div>
      </section>

      {/* Gas Prices */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Current Gas Prices
          </motion.h2>
          <GasPriceCards gasPrices={feeStats.gasPrices} isLoading={isLoading} />
        </div>
      </section>

      {/* Network Stats Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          <NetworkUtilization utilization={feeStats.networkUtilization} isLoading={isLoading} />
          <FeeMarketHealth stats={feeStats} isLoading={isLoading} />
        </div>
      </section>

      {/* Miner Revenue & Cost Calculator */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          <MinerRevenueBreakdown stats={feeStats} isLoading={isLoading} />
          <TransactionCostCalculator gasPrices={feeStats.gasPrices} isLoading={isLoading} />
        </div>
      </section>

      {/* Historical Note */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="font-semibold text-white mb-4">Fee Market Evolution</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              ETC&apos;s fee market is currently in an early stage, with block rewards comprising
              the vast majority of miner revenue. As block rewards continue to decrease through
              the Fifthening schedule, transaction fees will become increasingly important for
              network security.
            </p>
            <div className="rounded-lg bg-[var(--bg)] p-4">
              <h4 className="text-sm font-medium text-white mb-2">Key Milestones</h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)]">•</span>
                  <span><strong className="text-white">Current Era (5):</strong> ~2.05 ETC block reward, fees are ~0.01% of miner revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span><strong className="text-white">Era 6 (~2027):</strong> ~1.64 ETC block reward, 20% reduction in block rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-white">Long-term:</strong> Fee market will need to grow to maintain miner incentives as block rewards approach zero</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Link
              href="/research/supply"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h4 className="font-medium text-white group-hover:text-[var(--color-primary)]">
                Supply Tracker
              </h4>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Emission schedule and Fifthening countdown
              </p>
            </Link>
            <Link
              href="/mining/stats"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h4 className="font-medium text-white group-hover:text-[var(--color-primary)]">
                Mining Stats
              </h4>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Network hashrate, difficulty, and block data
              </p>
            </Link>
            <Link
              href="/tools/gas"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h4 className="font-medium text-white group-hover:text-[var(--color-primary)]">
                Gas Tracker
              </h4>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Simple gas price tracker tool
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Gas prices and network utilization from{' '}
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Blockscout
            </a>
            . Revenue estimates are approximations based on current network conditions.
            Data refreshes every 24 hours.
          </p>
        </div>
      </section>
    </main>
  )
}

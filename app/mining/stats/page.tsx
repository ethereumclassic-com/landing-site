'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { miningPools, miningResources } from '../data/mining'
import HashRateChart from '../components/HashRateChart'
import { useNetworkStats } from '../hooks/useNetworkStats'

// Types for mining API response
interface MiningStats {
  difficulty: number
  difficultyFormatted: string
  hashrate: number
  hashrateFormatted: string
  blockHeight: number
  blockTime: number
  blockTimeFormatted: string
  latestBlock: {
    number: number
    hash: string
    miner: string
    timestamp: string
    txCount: number
    gasUsed: number
    gasLimit: number
  }
  source: 'rpc' | 'fallback'
  lastUpdated: string
  cacheAgeMinutes: number
}

// Hook for mining-specific stats from RPC
function useMiningStats() {
  const [stats, setStats] = useState<MiningStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/mining')
        if (!response.ok) throw new Error('Failed to fetch mining stats')
        const data = await response.json()
        setStats(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  return { stats, isLoading, error }
}

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

function StatCard({
  label,
  value,
  description,
  icon,
  highlight,
}: {
  label: string
  value: string
  description?: string
  icon: React.ReactNode
  highlight?: boolean
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`rounded-xl border p-6 ${
        highlight
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg)]">
        {icon}
      </div>
      <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'}`}>
        {value}
      </p>
      {description && (
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{description}</p>
      )}
    </motion.div>
  )
}

function ResourceCard({
  name,
  description,
  url,
  type,
}: {
  name: string
  description: string
  url: string
  type: string
}) {
  const isExternal = url.startsWith('http')
  const typeColors: Record<string, { bg: string; text: string }> = {
    calculator: { bg: 'bg-green-500/10', text: 'text-green-400' },
    stats: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
    guide: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
    tool: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  }
  const colors = typeColors[type] || typeColors.tool

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">{name}</h3>
            {isExternal && (
              <svg aria-hidden="true" className="h-3 w-3 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            )}
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
        </div>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${colors.bg} ${colors.text}`}>
          {type}
        </span>
      </div>
    </a>
  )
}

export default function MiningStatsPage() {
  // Live network stats from Blockscout API
  const { stats: liveStats, isLoading: statsLoading } = useNetworkStats()
  // Mining-specific stats from RPC (hashrate, difficulty)
  const { stats: miningStats, isLoading: miningLoading } = useMiningStats()

  const isLoading = statsLoading || miningLoading
  const isLive = liveStats.source === 'live' || miningStats?.source === 'rpc'

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/mining"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Mining
            </Link>

            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Network Statistics
              </h1>
              {isLoading ? (
                <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  Loading...
                </span>
              ) : isLive ? (
                <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Live
                </span>
              ) : (
                <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Cached
                </span>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Ethereum Classic network metrics and mining statistics. Monitor hashrate, difficulty,
              and other key metrics that affect mining profitability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <StatCard
              label="Network Hashrate"
              value={miningStats?.hashrateFormatted || '~169 TH/s'}
              description="Total mining power on the network"
              highlight
              icon={
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
            />
            <StatCard
              label="Difficulty"
              value={miningStats?.difficultyFormatted || '~2.45 PH'}
              description="Current mining difficulty"
              icon={
                <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.97z" />
                </svg>
              }
            />
            <StatCard
              label="Block Time"
              value={miningStats?.blockTimeFormatted || `~${liveStats.blockTimeSeconds.toFixed(1)}s`}
              description="Average time between blocks"
              icon={
                <svg aria-hidden="true" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <StatCard
              label="Block Reward"
              value={`~${liveStats.blockReward.toFixed(3)} ETC`}
              description="Average reward per block"
              icon={
                <svg aria-hidden="true" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1012 10.125M12 4.875a2.625 2.625 0 00-2.625 2.625M12 4.875v5.25m0-5.25a2.625 2.625 0 012.625 2.625M12 10.125v5.25m0 0a2.625 2.625 0 012.625 2.625M12 15.375a2.625 2.625 0 00-2.625 2.625m5.25 0h3.375a.375.375 0 00.375-.375v-3a.375.375 0 00-.375-.375H17.25m-5.25 3.75v3.75m0-3.75a2.625 2.625 0 00-2.625-2.625H6.375a.375.375 0 01-.375-.375v-3a.375.375 0 01.375-.375h3.375" />
                </svg>
              }
            />
          </motion.div>
        </div>
      </section>

      {/* Latest Block Info */}
      {miningStats && (
        <section className="px-6 pb-12 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">Latest Block</h2>
                <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                  #{miningStats.latestBlock.number.toLocaleString()}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Block Height</p>
                  <p className="mt-1 font-mono text-lg font-bold text-[var(--text-primary)]">
                    {miningStats.blockHeight.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Miner</p>
                  <p className="mt-1 font-mono text-sm text-[var(--text-primary)] truncate">
                    {miningStats.latestBlock.miner.slice(0, 10)}...{miningStats.latestBlock.miner.slice(-8)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Gas Used</p>
                  <p className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                    {((miningStats.latestBlock.gasUsed / miningStats.latestBlock.gasLimit) * 100).toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Transactions</p>
                  <p className="mt-1 text-lg font-bold text-[var(--text-primary)]">
                    {miningStats.latestBlock.txCount}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                Data updated {miningStats.cacheAgeMinutes < 60
                  ? `${miningStats.cacheAgeMinutes} minutes ago`
                  : `${Math.round(miningStats.cacheAgeMinutes / 60)} hours ago`
                } from ETC RPC
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Additional Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">Daily Metrics</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Daily Blocks</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">~{liveStats.blocksPerDay.toLocaleString()}</p>
                <p className="text-xs text-[var(--color-text-muted)]">Blocks mined per day</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Daily ETC Emission</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">~{Math.round(liveStats.blocksPerDay * liveStats.blockReward).toLocaleString()} ETC</p>
                <p className="text-xs text-[var(--color-text-muted)]">New ETC created daily</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Algorithm</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">ETChash</p>
                <p className="text-xs text-[var(--color-text-muted)]">ASIC and GPU mineable</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">ETC Price</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">${liveStats.etcPriceUSD.toFixed(2)}</p>
                <p className="text-xs text-[var(--color-text-muted)]">From Blockscout</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pool Distribution */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <HashRateChart pools={miningPools} />
          </motion.div>
        </div>
      </section>

      {/* Pool Stats Table */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Pool Hashrate Distribution</h2>
              <Link
                href="/mining/pools"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all pools
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="pb-3 font-medium">Pool</th>
                    <th className="pb-3 text-center font-medium">Hash Share</th>
                    <th className="pb-3 text-center font-medium">Fee</th>
                    <th className="pb-3 text-center font-medium">Min Payout</th>
                    <th className="pb-3 text-right font-medium">Scheme</th>
                  </tr>
                </thead>
                <tbody>
                  {miningPools.map((pool) => (
                    <tr key={pool.id} className="border-b border-[var(--border)]/50 last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[var(--text-primary)]">{pool.name}</span>
                          {pool.recommended && (
                            <span className="rounded-full bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <span className="font-mono text-[var(--text-primary)]">{pool.hashShare}%</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="font-mono text-[var(--text-primary)]">{pool.fee}%</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="font-mono text-[var(--text-primary)]">{pool.minPayout} ETC</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm text-[var(--color-text-muted)]">
                          {pool.payoutScheme.join(', ')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* External Resources */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">External Resources</h2>
            <p className="mb-6 text-sm text-[var(--color-text-muted)]">
              For live, real-time statistics, check these external sources:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {miningResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  name={resource.name}
                  description={resource.description}
                  url={resource.url}
                  type={resource.type}
                />
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Calculate Your Mining Profits</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Use these network stats with our profitability calculator to estimate your potential earnings.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/profitability"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Open Calculator
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                View Hardware
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Hashrate and difficulty from ETC RPC. Block rewards from{' '}
            <a
              href="https://etc.blockscout.com/stats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Blockscout
            </a>
            . Data cached for 24 hours. Additional resources:{' '}
            <a
              href="https://2miners.com/etc-network-hashrate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              2Miners Stats
            </a>
            {' '}|{' '}
            <a
              href="https://whattomine.com/coins/162-etc-etchash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              WhatToMine
            </a>
            {' '}|{' '}
            <a
              href="https://miningpoolstats.stream/ethereumclassic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              MiningPoolStats
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

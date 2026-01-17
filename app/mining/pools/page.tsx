'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PoolCard, { PoolTableRow } from '../components/PoolCard'
import HashRateChart from '../components/HashRateChart'
import { miningPools, networkStats } from '../data/mining'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

type ViewMode = 'cards' | 'table'
type SortKey = 'hashShare' | 'fee' | 'minPayout'

export default function MiningPoolsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('cards')
  const [sortBy, setSortBy] = useState<SortKey>('hashShare')
  const [sortAsc, setSortAsc] = useState(false)

  const sortedPools = [...miningPools].sort((a, b) => {
    const multiplier = sortAsc ? 1 : -1
    return (a[sortBy] - b[sortBy]) * multiplier
  })

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortBy(key)
      setSortAsc(key === 'fee' || key === 'minPayout') // Sort ascending for fee/minPayout by default
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              href="/mining"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Mining
            </Link>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Mining{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Pools
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Compare Ethereum Classic mining pools by hashrate, fees, and features. Join a pool to receive consistent payouts.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Network Hashrate</p>
              <p className="font-semibold text-white">{networkStats.hashrate}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Listed Pools</p>
              <p className="font-semibold text-white">{miningPools.length}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Block Reward</p>
              <p className="font-semibold text-white">{networkStats.blockReward}</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hashrate Distribution */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <HashRateChart pools={miningPools} />
        </div>
      </section>

      {/* Pool List */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header with Controls */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">All Pools</h2>
              <p className="mt-1 text-[var(--color-text-secondary)]">
                {miningPools.length} mining pools listed
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-text-muted)]">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value as SortKey)}
                  className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
                >
                  <option value="hashShare">Hashrate</option>
                  <option value="fee">Fee</option>
                  <option value="minPayout">Min Payout</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--panel)]">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`rounded-l-lg px-3 py-1.5 text-sm transition ${
                    viewMode === 'cards'
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`rounded-r-lg px-3 py-1.5 text-sm transition ${
                    viewMode === 'table'
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cards View */}
          {viewMode === 'cards' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sortedPools.map((pool, index) => (
                <PoolCard key={pool.id} pool={pool} index={index} />
              ))}
            </div>
          )}

          {/* Table View */}
          {viewMode === 'table' && (
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--panel)]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="py-4 px-4 text-left text-sm font-medium text-[var(--color-text-muted)]">
                      Pool
                    </th>
                    <th
                      className="cursor-pointer py-4 px-4 text-center text-sm font-medium text-[var(--color-text-muted)] hover:text-white"
                      onClick={() => handleSort('fee')}
                    >
                      <span className="inline-flex items-center gap-1">
                        Fee
                        {sortBy === 'fee' && (
                          <svg className={`h-3 w-3 ${sortAsc ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </span>
                    </th>
                    <th
                      className="cursor-pointer py-4 px-4 text-center text-sm font-medium text-[var(--color-text-muted)] hover:text-white"
                      onClick={() => handleSort('minPayout')}
                    >
                      <span className="inline-flex items-center gap-1">
                        Min Payout
                        {sortBy === 'minPayout' && (
                          <svg className={`h-3 w-3 ${sortAsc ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </span>
                    </th>
                    <th
                      className="cursor-pointer py-4 px-4 text-center text-sm font-medium text-[var(--color-text-muted)] hover:text-white"
                      onClick={() => handleSort('hashShare')}
                    >
                      <span className="inline-flex items-center gap-1">
                        Hashrate
                        {sortBy === 'hashShare' && (
                          <svg className={`h-3 w-3 ${sortAsc ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </span>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-[var(--color-text-muted)]">
                      Payout
                    </th>
                    <th className="py-4 px-4 text-right text-sm font-medium text-[var(--color-text-muted)]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPools.map((pool, index) => (
                    <PoolTableRow key={pool.id} pool={pool} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">How to Choose a Pool</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Consider these factors when selecting a mining pool
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-white">Pool Fee</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Lower fees mean more of your earnings go to you. Most pools charge 0.5-3%. Consider the fee vs. features trade-off.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-white">Hashrate Share</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Larger pools find blocks more often but split rewards among more miners. Smaller pools have less frequent but larger payouts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-white">Minimum Payout</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Lower minimum payouts let smaller miners receive rewards faster. Higher minimums may save on transaction fees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-white">Server Location</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Choose a pool with servers close to you for lower latency. This reduces stale shares and maximizes your effective hashrate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payout Schemes */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Payout Schemes Explained</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Understanding how mining pools distribute rewards
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">PPS</span>
                <div>
                  <h4 className="font-semibold text-white">Pay Per Share</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Fixed payout per valid share regardless of block finds. Predictable income but usually higher fees.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-blue-500/10 px-2 py-1 text-xs font-bold text-blue-400">PPLNS</span>
                <div>
                  <h4 className="font-semibold text-white">Pay Per Last N Shares</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Payment based on your share contribution in the last N shares before a block is found. Rewards loyal miners.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-purple-500/10 px-2 py-1 text-xs font-bold text-purple-400">SOLO</span>
                <div>
                  <h4 className="font-semibold text-white">Solo Mining</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Keep the entire block reward when you find a block. High variance - best for large mining operations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-amber-500/10 px-2 py-1 text-xs font-bold text-amber-400">PPS+</span>
                <div>
                  <h4 className="font-semibold text-white">Pay Per Share Plus</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Combines PPS for block rewards with PPLNS for transaction fees. Offers stable income plus bonus from fees.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Start Mining?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Choose a pool from the list above and follow our getting started guide to begin mining ETC.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Getting Started Guide
              </Link>
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Hardware Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

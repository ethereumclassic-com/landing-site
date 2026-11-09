'use client'

import Link from 'next/link'
import PoolCard from '../components/PoolCard'
import HashRateChart from '../components/HashRateChart'
import { PoolsTable } from '../components/PoolsTable'
import { miningPools, networkStats } from '../data/mining'
import type { PoolTableRow } from '../data/pools'
import type { PoolHistory } from '@/lib/pool-history'
import PoolHistoryChart from './PoolHistoryChart'

export default function MiningPoolsClient({
  livePools,
  hashrateTHs,
  rows,
  history,
}: {
  livePools: { name: string; share: number }[]
  /** Network hashrate, derived live on the server by lib/hashrate. Null when there is no live reading. */
  hashrateTHs: number | null
  /** Every listed pool (data/pools.ts), largest first by its share of recent blocks. */
  rows: PoolTableRow[]
  /** Weekly shares of blocks from data/pool-history.json, or null without any. */
  history: PoolHistory | null
}) {
  // A guide's share is its live share of recent blocks, matched by name; none is shown without one.
  const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')
  const liveShares = new Map(livePools.map((p) => [normalize(p.name), p.share]))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/mining"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Mining
            </Link>
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            Mining{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-success)] bg-clip-text text-transparent">
              Pools
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Compare Ethereum Classic mining pools by hashrate, fees, and features. Join a pool to receive consistent payouts.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Network Hashrate</p>
              <p className="font-semibold text-[var(--text-primary)]">{hashrateTHs !== null ? `${hashrateTHs.toFixed(1)} TH/s` : '—'}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Listed Pools</p>
              <p className="font-semibold text-[var(--text-primary)]">{rows.length}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">Block Reward</p>
              <p className="font-semibold text-[var(--text-primary)]">{networkStats.blockReward}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hashrate Distribution */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <HashRateChart livePools={livePools} />
        </div>
      </section>

      {history && (
        <section className="px-6 pb-12 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <PoolHistoryChart history={history} />
          </div>
        </section>
      )}

      {/* Pool List */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">All Pools</h2>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              {rows.length}{' '}pools, largest first, with hashrate estimated from recent blocks. Fees and payout schemes are each pool&apos;s ETC terms as MiningPoolStats lists them, or as minerstat lists a pool MiningPoolStats does not.
            </p>
          </div>
          <PoolsTable pools={rows} networkTHs={hashrateTHs} />
        </div>
      </section>

      {/* Setup guides */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Setup Guides</h2>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              Server addresses, ports and miner commands for these pools.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {miningPools.map((pool, index) => (
              <PoolCard key={pool.id} pool={pool} index={index} liveShare={liveShares.get(normalize(pool.name))} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">How to Choose a Pool</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Consider these factors when selecting a mining pool
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">Pool Fee</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Lower fees mean more of your earnings go to you. Most pools charge 0.5-3%. Consider the fee vs. features trade-off.
              </p>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">Hashrate Share</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Larger pools find blocks more often but split rewards among more miners. Smaller pools have less frequent but larger payouts.
              </p>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">Minimum Payout</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Lower minimum payouts let smaller miners receive rewards faster. Higher minimums may save on transaction fees.
              </p>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">Server Location</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Choose a pool with servers close to you for lower latency. This reduces stale shares and maximizes your effective hashrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payout Schemes */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Payout Schemes Explained</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Understanding how mining pools distribute rewards
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-[var(--color-success-bg)] px-2 py-1 text-xs font-bold text-[var(--color-success)]">PPS</span>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Pay Per Share</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Fixed payout per valid share regardless of block finds. Predictable income but usually higher fees.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-[var(--color-info-bg)] px-2 py-1 text-xs font-bold text-[var(--color-info)]">PPLNS</span>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Pay Per Last N Shares</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Payment based on your share contribution in the last N shares before a block is found. Rewards loyal miners.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-[var(--color-violet-bg)] px-2 py-1 text-xs font-bold text-[var(--color-violet)]">SOLO</span>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Solo Mining</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Keep the entire block reward when you find a block. High variance: best for large mining operations.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-[var(--color-warning-bg)] px-2 py-1 text-xs font-bold text-[var(--color-warning)]">PPS+</span>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Pay Per Share Plus</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Combines PPS for block rewards with PPLNS for transaction fees. Offers stable income plus bonus from fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to Start Mining?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Choose a pool from the list above and follow our getting started guide to begin mining ETC.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[color:var(--color-primary)]/25"
              >
                Getting Started Guide
              </Link>
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Hardware Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPoolById, miningPools, type PayoutScheme } from '../../data/mining'

interface Props {
  params: Promise<{ pool: string }>
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

const payoutSchemeDescriptions: Record<PayoutScheme, { name: string; description: string }> = {
  PPS: {
    name: 'Pay Per Share',
    description: 'Fixed payout per valid share submitted, regardless of whether a block is found. Lower variance but potentially lower returns.',
  },
  'PPS+': {
    name: 'Pay Per Share Plus',
    description: 'PPS for block rewards plus transaction fees distributed proportionally. Combines PPS stability with bonus transaction fee income.',
  },
  PPLNS: {
    name: 'Pay Per Last N Shares',
    description: 'Payouts based on your contribution over the last N shares when a block is found. Higher variance but often better long-term returns.',
  },
  PROP: {
    name: 'Proportional',
    description: 'Each miner is paid proportionally based on their shares when a block is found. Simple and fair but has variance.',
  },
  SOLO: {
    name: 'Solo Mining',
    description: 'You receive the full block reward when your shares find a block. High risk, high reward - best for large miners.',
  },
}

function StatCard({
  label,
  value,
  description,
  highlight,
}: {
  label: string
  value: string
  description?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
      <p className={`mt-1 text-xl font-bold ${highlight ? 'text-[var(--color-primary)]' : 'text-white'}`}>
        {value}
      </p>
      {description && <p className="mt-1 text-xs text-[var(--color-text-muted)]">{description}</p>}
    </div>
  )
}

function ServerRow({ region, url, port }: { region: string; url: string; port: number }) {
  const fullAddress = `stratum+tcp://${url}:${port}`

  return (
    <tr className="border-b border-[var(--border)]/50 last:border-0">
      <td className="py-3">
        <span className="font-medium text-white">{region}</span>
      </td>
      <td className="py-3 font-mono text-sm text-[var(--color-text-muted)]">{url}</td>
      <td className="py-3 text-center font-mono text-sm text-white">{port}</td>
      <td className="py-3 text-right">
        <button
          onClick={() => navigator.clipboard.writeText(fullAddress)}
          className="rounded-lg bg-[var(--bg)] px-3 py-1 text-xs text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
        >
          Copy
        </button>
      </td>
    </tr>
  )
}

export default function PoolPage({ params }: Props) {
  const { pool: poolId } = use(params)
  const pool = getPoolById(poolId)

  if (!pool) {
    notFound()
  }

  // Get other pools for comparison
  const otherPools = miningPools.filter((p) => p.id !== pool.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/mining/pools"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Pools
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{pool.name}</h1>
                  {pool.recommended && (
                    <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-sm font-medium text-black">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                  {pool.notes || `Mine Ethereum Classic with ${pool.name}. Configure your miner using the server addresses and ports below.`}
                </p>
              </div>
              <a
                href={pool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)] md:inline-flex"
              >
                Visit Pool
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <StatCard
              label="Pool Fee"
              value={`${pool.fee}%`}
              description="Deducted from your earnings"
              highlight
            />
            <StatCard
              label="Minimum Payout"
              value={`${pool.minPayout} ETC`}
              description="Threshold to receive payout"
            />
            <StatCard
              label="Network Share"
              value={`~${pool.hashShare}%`}
              description="Approximate hashrate share"
            />
            <StatCard
              label="Servers"
              value={`${pool.servers.length} Region${pool.servers.length > 1 ? 's' : ''}`}
              description="Available server locations"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile CTA */}
      <section className="px-6 pb-8 md:hidden">
        <div className="mx-auto max-w-6xl">
          <a
            href={pool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Visit Pool Website
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* Server Addresses */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Server Addresses</h2>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Choose the server closest to your location for the best connection.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="pb-3 font-medium">Region</th>
                    <th className="pb-3 font-medium">Server</th>
                    <th className="pb-3 text-center font-medium">Port</th>
                    <th className="pb-3 text-right font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pool.servers.map((server, index) => (
                    <ServerRow key={index} {...server} />
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payout Schemes */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Payout Methods</h2>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              {pool.name} supports the following payout schemes:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {pool.payoutScheme.map((scheme) => {
                const info = payoutSchemeDescriptions[scheme]
                return (
                  <div
                    key={scheme}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                        {scheme}
                      </span>
                      <span className="font-medium text-white">{info.name}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{info.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Pool Features</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pool.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Start Configuration</h2>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Example miner command line configuration. Replace YOUR_WALLET_ADDRESS with your ETC address.
            </p>
            <div className="rounded-lg bg-[var(--bg)] p-4 font-mono text-sm">
              <p className="text-[var(--color-text-muted)]"># Example for lolMiner (AMD/NVIDIA)</p>
              <p className="mt-2 text-white">
                lolminer --algo ETCHASH --pool {pool.servers[0].url}:{pool.servers[0].port} --user YOUR_WALLET_ADDRESS.WORKER_NAME
              </p>
              <p className="mt-4 text-[var(--color-text-muted)]"># Example for T-Rex (NVIDIA)</p>
              <p className="mt-2 text-white">
                t-rex -a etchash -o stratum+tcp://{pool.servers[0].url}:{pool.servers[0].port} -u YOUR_WALLET_ADDRESS -p x -w WORKER_NAME
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/mining/software"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all mining software
              </Link>
              <Link
                href="/mining/getting-started"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                Complete getting started guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compare with Other Pools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Compare with Other Pools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherPools.map((otherPool) => (
                <Link
                  key={otherPool.id}
                  href={`/mining/pools/${otherPool.id}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {otherPool.name}
                    </h3>
                    {otherPool.recommended && (
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-[var(--color-text-muted)]">Fee: </span>
                      <span className={`font-medium ${otherPool.fee < pool.fee ? 'text-green-400' : 'text-white'}`}>
                        {otherPool.fee}%
                      </span>
                    </div>
                    <div>
                      <span className="text-[var(--color-text-muted)]">Min: </span>
                      <span className="font-medium text-white">{otherPool.minPayout} ETC</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-[var(--color-text-muted)]">
                    {otherPool.payoutScheme.join(', ')}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
              >
                View all pools
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
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
            <h2 className="text-2xl font-bold text-white">Need a Wallet?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              You need an ETC wallet address to receive mining payouts. Set up a secure wallet before you start mining.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/wallet"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Set Up Wallet
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/profitability"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Calculate Profits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

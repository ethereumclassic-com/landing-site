'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Sample network health data
const networkStats = {
  hashrate: '185.2 TH/s',
  hashrateChange: '+2.3%',
  difficulty: '2.52 PH',
  difficultyChange: '+1.8%',
  blockTime: '13.2s',
  blockTimeTarget: '13.5s',
  lastBlock: 21_456_789,
  pendingTxs: 142,
  gasPrice: '0.12 Gwei',
  nodesOnline: 847,
}

const recentBlocks = [
  { number: 21_456_789, miner: 'F2Pool', txCount: 45, reward: '1.99 ETC', time: '12 seconds ago' },
  { number: 21_456_788, miner: '2Miners', txCount: 32, reward: '1.99 ETC', time: '26 seconds ago' },
  { number: 21_456_787, miner: 'K1Pool', txCount: 28, reward: '1.99 ETC', time: '38 seconds ago' },
  { number: 21_456_786, miner: 'F2Pool', txCount: 51, reward: '1.99 ETC', time: '52 seconds ago' },
  { number: 21_456_785, miner: 'Unknown', txCount: 19, reward: '1.99 ETC', time: '1 minute ago' },
]

const poolDistribution = [
  { name: 'F2Pool', hashrate: '45.2 TH/s', share: 24.4 },
  { name: '2Miners', hashrate: '38.1 TH/s', share: 20.6 },
  { name: 'K1Pool', hashrate: '29.8 TH/s', share: 16.1 },
  { name: 'Poolin', hashrate: '22.4 TH/s', share: 12.1 },
  { name: 'ViaBTC', hashrate: '18.9 TH/s', share: 10.2 },
  { name: 'Others', hashrate: '30.8 TH/s', share: 16.6 },
]

const nodeDistribution = [
  { region: 'North America', count: 284, percentage: 33.5 },
  { region: 'Europe', count: 241, percentage: 28.5 },
  { region: 'Asia', count: 198, percentage: 23.4 },
  { region: 'South America', count: 67, percentage: 7.9 },
  { region: 'Other', count: 57, percentage: 6.7 },
]

const healthChecks = [
  {
    name: 'Network Hashrate',
    status: 'healthy' as const,
    description: 'Hashrate is stable and above security threshold',
    metric: '185.2 TH/s',
  },
  {
    name: 'Block Time',
    status: 'healthy' as const,
    description: 'Average block time is within normal range',
    metric: '13.2s avg',
  },
  {
    name: 'Node Distribution',
    status: 'healthy' as const,
    description: 'Nodes distributed across multiple regions',
    metric: '847 nodes',
  },
  {
    name: 'Pool Decentralization',
    status: 'warning' as const,
    description: 'Top 2 pools control 45% of hashrate',
    metric: '45% top 2',
  },
  {
    name: 'Mempool',
    status: 'healthy' as const,
    description: 'Pending transactions count is normal',
    metric: '142 pending',
  },
  {
    name: 'Gas Prices',
    status: 'healthy' as const,
    description: 'Gas prices are at typical levels',
    metric: '0.12 Gwei',
  },
]

const StatusIcon = ({ status }: { status: 'healthy' | 'warning' | 'critical' }) => {
  if (status === 'healthy') {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
        <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    )
  }
  if (status === 'warning') {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
        <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
      <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export default function NetworkHealthPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  Network Health
                </h1>
                <p className="mt-2 text-[var(--color-text-muted)]">
                  Real-time monitoring of the Ethereum Classic network
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">Network Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Source Notice */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4"
          >
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <div>
                <p className="text-sm text-blue-400">
                  <strong>Sample Data:</strong> Statistics shown are representative examples.
                  Live data integration coming soon via RPC endpoints and block explorer APIs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">Network Hashrate</span>
                <span className="text-xs font-medium text-green-400">{networkStats.hashrateChange}</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-white">{networkStats.hashrate}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">Difficulty</span>
                <span className="text-xs font-medium text-green-400">{networkStats.difficultyChange}</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-white">{networkStats.difficulty}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">Block Time</span>
                <span className="text-xs text-[var(--color-text-muted)]">target: {networkStats.blockTimeTarget}</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-white">{networkStats.blockTime}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">Latest Block</span>
                <span className="text-xs text-[var(--color-text-muted)]">{networkStats.pendingTxs} pending</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
                #{networkStats.lastBlock.toLocaleString()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Checks */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-white">Health Status</h2>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Automated checks monitoring network security and performance
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {healthChecks.map((check, index) => (
                <motion.div
                  key={check.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{check.name}</h3>
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{check.description}</p>
                    </div>
                    <StatusIcon status={check.status} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-[var(--color-primary)]">{check.metric}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Blocks and Pool Distribution */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
            >
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold text-white">Recent Blocks</h2>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {recentBlocks.map((block) => (
                  <div key={block.number} className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-mono text-sm text-[var(--color-primary)]">
                        #{block.number.toLocaleString()}
                      </div>
                      <div className="mt-1 text-xs text-[var(--color-text-muted)]">
                        {block.txCount} txs • {block.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{block.miner}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{block.reward}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-[var(--border)]">
                <Link
                  href="/tools/explorer"
                  className="text-sm text-[var(--color-primary)] hover:underline"
                >
                  View all blocks →
                </Link>
              </div>
            </motion.div>

            {/* Pool Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
            >
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold text-white">Mining Pool Distribution</h2>
              </div>
              <div className="p-4 space-y-4">
                {poolDistribution.map((pool) => (
                  <div key={pool.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white">{pool.name}</span>
                      <span className="text-[var(--color-text-muted)]">{pool.hashrate} ({pool.share}%)</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-[var(--bg)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-primary)]"
                        style={{ width: `${pool.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-[var(--border)]">
                <Link
                  href="/mining"
                  className="text-sm text-[var(--color-primary)] hover:underline"
                >
                  Start mining →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Node Distribution */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-bold text-white">Node Distribution</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Geographic distribution of ETC full nodes
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{networkStats.nodesOnline}</div>
                <div className="text-sm text-[var(--color-text-muted)]">nodes online</div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {nodeDistribution.map((region) => (
                <div key={region.region} className="rounded-lg bg-[var(--bg)] p-4 text-center">
                  <div className="text-2xl font-bold text-white">{region.count}</div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">{region.region}</div>
                  <div className="mt-1 text-xs text-[var(--color-primary)]">{region.percentage}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-white">Network Resources</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/tools/explorer"
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <svg className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <h3 className="mt-3 font-medium text-white">Block Explorer</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Search transactions, blocks, and addresses</p>
              </Link>

              <Link
                href="/research/network"
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <svg className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <h3 className="mt-3 font-medium text-white">Network Research</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Detailed network statistics and analysis</p>
              </Link>

              <Link
                href="/mining/stats"
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <svg className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <h3 className="mt-3 font-medium text-white">Mining Stats</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Hashrate, difficulty, and mining data</p>
              </Link>

              <Link
                href="/tools/gas"
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <svg className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
                <h3 className="mt-3 font-medium text-white">Gas Tracker</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Current gas prices and recommendations</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

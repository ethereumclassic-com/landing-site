'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { networkMetrics, dataSources } from '../data/research'

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

// Additional network-specific metrics
const chainMetrics = [
  {
    category: 'Blockchain',
    metrics: [
      { label: 'Total Blocks', value: '21,000,000+' },
      { label: 'Block Height', value: '21M+' },
      { label: 'Block Size', value: '~45 KB avg' },
      { label: 'Gas Limit', value: '8M gas' },
    ],
  },
  {
    category: 'Consensus',
    metrics: [
      { label: 'Algorithm', value: 'ETChash' },
      { label: 'Block Time', value: '13.5 seconds' },
      { label: 'Epoch Length', value: '30,000 blocks' },
      { label: 'DAG Size', value: '~5.2 GB' },
    ],
  },
  {
    category: 'Economics',
    metrics: [
      { label: 'Block Reward', value: '2.56 ETC' },
      { label: 'Uncle Reward', value: '1.92 ETC max' },
      { label: 'Daily Emission', value: '~16,400 ETC' },
      { label: 'Total Supply', value: '~147M ETC' },
    ],
  },
]

const historicalMilestones = [
  { date: 'Jul 2015', event: 'Ethereum mainnet launch' },
  { date: 'Jul 2016', event: 'The DAO fork - ETC preserves original chain' },
  { date: 'Mar 2017', event: 'Monetary policy: 5M block reduction schedule' },
  { date: 'Dec 2017', event: 'Block reward reduced to 4 ETC' },
  { date: 'Mar 2020', event: 'Block reward reduced to 3.2 ETC' },
  { date: 'Nov 2020', event: 'Thanos hard fork (ETChash algorithm)' },
  { date: 'Apr 2022', event: 'Block reward reduced to 2.56 ETC' },
  { date: 'Sep 2022', event: 'ETH merge - GPU miners migrate to ETC' },
]

export default function NetworkAnalysisPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/research"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Research
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Network Analysis
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Deep dive into Ethereum Classic network metrics. Hashrate trends, transaction volumes,
                active addresses, and other on-chain indicators.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Current Network Status
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {networkMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <p className="text-xs text-[var(--color-text-muted)]">{metric.label}</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  {metric.change && (
                    <span className={`text-sm font-medium ${
                      metric.changeType === 'positive' ? 'text-green-400' :
                      metric.changeType === 'negative' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {metric.change}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs text-[var(--color-text-muted)]"
          >
            * Data represents approximate values. For real-time metrics, visit{' '}
            <a href="https://etc.blockscout.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
              Blockscout
            </a>.
          </motion.p>
        </div>
      </section>

      {/* Chain Parameters */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Chain Parameters
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {chainMetrics.map((section) => (
              <div
                key={section.category}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 font-semibold text-white">{section.category}</h3>
                <div className="space-y-3">
                  {section.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">{metric.label}</span>
                      <span className="font-medium text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Network History
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="space-y-4">
              {historicalMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    </div>
                    {idx < historicalMilestones.length - 1 && (
                      <div className="h-full w-px bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-medium text-[var(--color-primary)]">{milestone.date}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mining Distribution */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Mining Distribution
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 font-semibold text-white">Top Mining Pools</h3>
              <div className="space-y-3">
                {[
                  { name: 'F2Pool', share: '35%', color: 'bg-blue-500' },
                  { name: '2Miners', share: '25%', color: 'bg-green-500' },
                  { name: 'Poolin', share: '15%', color: 'bg-purple-500' },
                  { name: 'ViaBTC', share: '10%', color: 'bg-amber-500' },
                  { name: 'Others', share: '15%', color: 'bg-gray-500' },
                ].map((pool) => (
                  <div key={pool.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">{pool.name}</span>
                      <span className="font-medium text-white">{pool.share}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--bg)]">
                      <div
                        className={`h-full ${pool.color}`}
                        style={{ width: pool.share }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                * Approximate distribution based on recent blocks. See{' '}
                <a href="https://miningpoolstats.stream/ethereumclassic" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                  MiningPoolStats
                </a>{' '}
                for live data.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 font-semibold text-white">Network Security</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-[var(--bg)] p-4">
                  <p className="text-xs text-[var(--color-text-muted)]">Estimated 51% Attack Cost</p>
                  <p className="mt-1 text-xl font-bold text-white">$50,000+ / hour</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">Based on hashrate and hardware costs</p>
                </div>
                <div className="rounded-lg bg-[var(--bg)] p-4">
                  <p className="text-xs text-[var(--color-text-muted)]">Block Confirmations</p>
                  <p className="mt-1 text-xl font-bold text-white">40,000+ recommended</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">For high-value transactions on exchanges</p>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="font-medium text-green-400">Network Healthy</span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    No recent reorganizations or security incidents detected.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Data Sources</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dataSources.filter(s => s.type === 'explorer' || s.type === 'analytics').map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white group-hover:text-[var(--color-primary)]">{source.name}</h4>
                    <svg className="h-4 w-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{source.description}</p>
                </a>
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
            <h2 className="text-2xl font-bold text-white">Explore Mining</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Learn about mining Ethereum Classic and view detailed pool statistics.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/stats"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Mining Stats
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Pool Directory
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PriceDisplay, { PriceStat } from '../markets/components/PriceDisplay'
import PriceChart from '../markets/components/PriceChart'
import {
  priceSources,
  sampleMarketStats,
  priceMilestones,
  getPopularPairs,
} from '../markets/data/markets'

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

export default function ETCPricePage() {
  const popularPairs = getPopularPairs()
  const aggregators = priceSources.filter((s) => s.type === 'aggregator')

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
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Live Price
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Ethereum Classic{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Price
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Real-time ETC price data, historical charts, and market analysis from trusted sources.
          </motion.p>

          {/* Main Price Display */}
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                  <svg className="h-10 w-10 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17 8l-5 3-5-3 5-3.5zM6 9.5l5 3v6l-5-3v-6zm7 9v-6l5-3v6l-5 3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-[var(--color-text-muted)]">ETC/USD</p>
                  <PriceDisplay
                    price="$18.42"
                    changePercent="+2.34%"
                    changeDirection="up"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Multi-currency prices */}
          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap justify-center gap-4">
            {popularPairs.map((pair) => (
              <Link
                key={pair.id}
                href={`/price/${pair.id}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 transition-all hover:border-[var(--color-primary)]/30"
              >
                <p className="text-xs text-[var(--color-text-muted)]">{pair.displayName}</p>
                <p className="font-semibold text-white">
                  {pair.quote === 'USD' && '$18.42'}
                  {pair.quote === 'USDT' && '18.42 USDT'}
                  {pair.quote === 'BTC' && '0.00018 BTC'}
                  {pair.quote === 'ETH' && '0.0056 ETH'}
                </p>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Price Chart */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <PriceChart />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Key Metrics</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Essential market data for ETC
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sampleMarketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PriceStat
                  label={stat.label}
                  value={stat.value}
                  change={stat.change}
                  changeDirection={stat.changeDirection}
                  tooltip={stat.tooltip}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About ETC Price */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">About ETC Price</h2>
            <div className="mt-6 space-y-4 text-[var(--color-text-secondary)]">
              <p>
                Ethereum Classic (ETC) is a decentralized, open-source blockchain platform that runs smart contracts.
                The ETC price is determined by market supply and demand across numerous cryptocurrency exchanges worldwide.
              </p>
              <p>
                Unlike many cryptocurrencies, Ethereum Classic has a fixed monetary policy with a capped supply of approximately
                210.7 million ETC, following a deflationary emission schedule similar to Bitcoin. This predictable supply makes
                ETC attractive to investors seeking assets with transparent tokenomics.
              </p>
              <p>
                The price of ETC is influenced by several factors including overall cryptocurrency market sentiment,
                network activity, mining hashrate, development progress, and broader macroeconomic conditions.
                Following Ethereum&apos;s transition to Proof of Stake in 2022, ETC became the largest Proof of Work smart
                contract platform, attracting miners and supporting its security model.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price History */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Price Milestones</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Key moments in ETC&apos;s price history
            </p>
          </motion.div>

          <div className="space-y-4">
            {priceMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex-shrink-0">
                  <span className="font-bold text-[var(--color-primary)]">{milestone.price}</span>
                </div>
                <div className="h-8 w-px bg-[var(--border)]" />
                <div className="flex-1">
                  <p className="text-sm text-[var(--color-text-muted)]">{milestone.date}</p>
                  <p className="text-white">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Data Sources */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Where to Check ETC Price</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Trusted sources for real-time ETC price data
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {aggregators.map((source, index) => (
              <motion.a
                key={source.id}
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div>
                  <span className="text-lg font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {source.name}
                  </span>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {source.description}
                  </p>
                </div>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-[var(--color-text-muted)] transition group-hover:text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Buy ETC?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Get started with Ethereum Classic on trusted exchanges
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Buy ETC
              </Link>
              <Link
                href="/markets"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                View Full Market Data
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

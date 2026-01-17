'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PriceDisplay, { PriceStat } from './components/PriceDisplay'
import PriceChart from './components/PriceChart'
import {
  priceSources,
  marketPairs,
  sampleMarketStats,
  marketResources,
  priceMilestones,
} from './data/markets'

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

const sourceTypeIcons = {
  aggregator: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  exchange: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  dex: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
}

export default function MarketsPage() {
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
              Live Market Data
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            ETC{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Markets
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Track Ethereum Classic price, market cap, trading volume, and historical data across major exchanges and data providers.
          </motion.p>

          {/* Live Price Display */}
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-8 py-6">
              <PriceDisplay
                price="$18.42"
                changePercent="+2.34%"
                changeDirection="up"
                size="xl"
                showLabel
                label="ETC/USD"
              />
              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                Data from CoinGecko • Updates every minute
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="text-center">
              <p className="text-[var(--color-text-muted)]">Market Cap</p>
              <p className="font-semibold text-white">$2.71B</p>
            </div>
            <div className="text-center">
              <p className="text-[var(--color-text-muted)]">24h Volume</p>
              <p className="font-semibold text-white">$89.2M</p>
            </div>
            <div className="text-center">
              <p className="text-[var(--color-text-muted)]">Rank</p>
              <p className="font-semibold text-white">#28</p>
            </div>
            <div className="text-center">
              <p className="text-[var(--color-text-muted)]">Circulating</p>
              <p className="font-semibold text-white">147.1M ETC</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Price Chart Section */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <PriceChart />
        </div>
      </section>

      {/* Market Stats Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Market Statistics</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Key metrics for Ethereum Classic
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

      {/* Trading Pairs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Trading Pairs</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Popular ETC trading pairs across exchanges
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketPairs.map((pair, index) => (
              <motion.div
                key={pair.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{pair.displayName}</span>
                  {pair.popular && (
                    <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {pair.base} to {pair.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Sources */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Price Sources</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Trusted data providers and exchanges for ETC price data
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priceSources.map((source, index) => (
              <motion.a
                key={source.id}
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {sourceTypeIcons[source.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {source.name}
                    </span>
                    <span className="rounded-full bg-[var(--panel)] px-2 py-0.5 text-xs capitalize text-[var(--color-text-muted)]">
                      {source.type}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-[var(--color-text-muted)]">
                    {source.description}
                  </p>
                </div>
                <svg
                  className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)] transition group-hover:text-[var(--color-primary)]"
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

      {/* Price History Timeline */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Price History</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Key milestones in ETC&apos;s price history
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />

            {priceMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 md:pr-8 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-[var(--color-primary)] md:left-auto md:right-auto md:-translate-x-1/2">
                  <div className={`absolute top-0 h-3 w-3 rounded-full ${index % 2 === 0 ? 'md:-left-[calc(50%+0.5rem)]' : 'md:-right-[calc(50%+0.5rem)]'}`} />
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">{milestone.date}</span>
                    <span className="font-bold text-[var(--color-primary)]">{milestone.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-white">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Resources */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Market Resources</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Tools and resources for ETC market analysis
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketResources.map((resource, index) => (
              <motion.a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {resource.title}
                    </span>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {resource.description}
                    </p>
                  </div>
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)] transition group-hover:text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links / CTAs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Trade?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Buy ETC on trusted exchanges or explore decentralized options for permissionless trading.
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
                href="/buy/exchanges"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                View All Exchanges
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--border)] px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div className="text-sm text-[var(--color-text-muted)]">
                <p className="font-medium text-amber-400">Disclaimer</p>
                <p className="mt-1">
                  Market data is provided for informational purposes only and should not be considered financial advice. Cryptocurrency investments carry significant risk. Always do your own research before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

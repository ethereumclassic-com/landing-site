'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { gettingStartedSteps, networkStats, miningPools, getRecommendedPools } from '../data/mining'

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

export default function MiningGettingStartedPage() {
  const recommendedPools = getRecommendedPools()

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
            Getting Started with{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              ETC Mining
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Follow this step-by-step guide to set up your mining operation and start earning Ethereum Classic today.
          </motion.p>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Algorithm</p>
              <p className="text-lg font-bold text-white">ETChash</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Block Reward</p>
              <p className="text-lg font-bold text-white">{networkStats.blockReward}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Block Time</p>
              <p className="text-lg font-bold text-white">{networkStats.blockTime}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Network Hashrate</p>
              <p className="text-lg font-bold text-white">{networkStats.hashrate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">5 Steps to Start Mining</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              From hardware selection to your first mined block
            </p>
          </motion.div>

          <div className="space-y-6">
            {gettingStartedSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                {/* Step Number */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-xl font-bold text-[var(--color-primary)]">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-[var(--color-text-secondary)]">{step.description}</p>
                  {step.link && step.linkText && (
                    <Link
                      href={step.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition hover:underline"
                    >
                      {step.linkText}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Connector Line */}
                {index < gettingStartedSteps.length - 1 && (
                  <div className="absolute -bottom-6 left-11 h-6 w-px bg-[var(--border)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">What You Need</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Essential requirements for mining Ethereum Classic
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Mining Hardware</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                GPU with 4GB+ VRAM (AMD RX 6600 XT or NVIDIA RTX 3060 Ti recommended) or an ASIC miner designed for ETChash algorithm.
              </p>
              <Link href="/mining/hardware" className="mt-4 inline-block text-sm text-[var(--color-primary)] hover:underline">
                View hardware guide →
              </Link>
            </motion.div>

            {/* Wallet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">ETC Wallet</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                An Ethereum Classic wallet address to receive your mining rewards. Hardware wallets like Trezor provide the best security.
              </p>
              <Link href="/wallet" className="mt-4 inline-block text-sm text-[var(--color-primary)] hover:underline">
                Set up wallet →
              </Link>
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Mining Software</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Mining software compatible with your hardware. Popular choices include lolMiner for AMD, T-Rex for NVIDIA, or GMiner for both.
              </p>
              <Link href="/mining/software" className="mt-4 inline-block text-sm text-[var(--color-primary)] hover:underline">
                View software options →
              </Link>
            </motion.div>

            {/* Internet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Stable Internet</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                A stable internet connection is required to communicate with the mining pool. Low latency helps reduce stale shares.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Pools */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Recommended Pools</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Trusted mining pools with good uptime and fair fees
            </p>
          </motion.div>

          <div className="space-y-4">
            {recommendedPools.map((pool, index) => (
              <motion.a
                key={pool.id}
                href={pool.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-xl font-bold text-[var(--color-primary)]">
                    {pool.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                        {pool.name}
                      </span>
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                        Recommended
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {pool.fee}% fee • {pool.minPayout} ETC min payout • {pool.payoutScheme.join('/')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <span>{pool.hashShare}% hashrate</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <Link
            href="/mining/pools"
            className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] transition hover:underline"
          >
            View all mining pools
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Tips Section */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Mining Tips</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Best practices for successful ETC mining
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4"
            >
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-amber-400">Monitor Temperature</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Keep GPU temperatures below 70°C for longevity. Good airflow and cooling are essential.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4"
            >
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-blue-400">Electricity Costs</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Calculate profitability with your local electricity rates. Mining may not be profitable in high-cost areas.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4"
            >
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-emerald-400">Secure Your Wallet</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Use a hardware wallet for storing mined ETC. Never share your private keys or seed phrase.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-4"
            >
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-purple-400">Track Your Stats</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Monitor your hashrate, shares, and earnings on your pool dashboard. Investigate sudden drops.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Mine?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Choose your hardware, set up a wallet, and join a mining pool to start earning ETC.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                View Hardware Guide
              </Link>
              <Link
                href="/mining/pools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Browse Pools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

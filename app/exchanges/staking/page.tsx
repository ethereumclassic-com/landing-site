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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function StakingExchangesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--color-text-muted)] hover:text-white">
              Home
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/exchanges" className="text-[var(--color-text-muted)] hover:text-white">
              Exchanges
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">Staking</span>
          </nav>
        </div>
      </div>

      <div className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Important Info
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-white md:text-5xl">
              Staking on Exchanges
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Understanding yield opportunities for Ethereum Classic holders.
            </motion.p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                <svg aria-hidden="true" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">ETC is Proof-of-Work</h2>
                <p className="mt-2 text-[var(--color-text-secondary)]">
                  Unlike Ethereum (which moved to Proof-of-Stake), <strong className="text-white">Ethereum Classic remains a Proof-of-Work blockchain</strong>. This means there is no native staking mechanism for ETC. The network is secured by miners, not validators.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why PoW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-white">Why Ethereum Classic Uses Proof-of-Work</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Decentralization</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Anyone can mine with hardware, avoiding wealth concentration in validators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Immutability</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">PoW provides stronger guarantees against transaction reversal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Battle-Tested</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Proven security model since 2015 with the original Ethereum</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Ways to Earn with ETC</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mining */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <svg aria-hidden="true" className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Mining</h3>
                    <span className="text-sm text-[var(--color-primary)]">Active earning</span>
                  </div>
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                  Contribute computing power to secure the network and earn block rewards. ETChash algorithm supports GPU mining.
                </p>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Direct network contribution
                  </li>
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Predictable block rewards
                  </li>
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    GPU or ASIC hardware options
                  </li>
                </ul>
                <Link
                  href="/mining"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary)]/90"
                >
                  Learn About Mining
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* DeFi Liquidity */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <svg aria-hidden="true" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">DeFi Liquidity</h3>
                    <span className="text-sm text-purple-400">Passive earning</span>
                  </div>
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                  Provide liquidity on decentralized exchanges like ETCswap to earn trading fees from swaps.
                </p>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Earn swap fees (0.3% per trade)
                  </li>
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Self-custody (non-custodial)
                  </li>
                  <li className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg aria-hidden="true" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    Impermanent loss risk
                  </li>
                </ul>
                <a
                  href="https://etcswap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-purple-500/30"
                >
                  Visit ETCswap
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Warning about "Staking" offers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 rounded-xl border border-red-500/30 bg-red-500/10 p-6"
          >
            <div className="flex items-start gap-4">
              <svg aria-hidden="true" className="mt-1 h-6 w-6 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
              </svg>
              <div>
                <h3 className="font-semibold text-white">Beware of &quot;ETC Staking&quot; Offers</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Any service offering &quot;ETC staking&quot; with guaranteed returns is either:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>• A lending/borrowing platform (your ETC goes to borrowers - carries credit risk)</li>
                  <li>• A centralized yield product (your ETC is used by the exchange - carries counterparty risk)</li>
                  <li>• A potential scam (if returns seem too good to be true)</li>
                </ul>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  Always understand <strong className="text-white">where your yield comes from</strong> before depositing your ETC.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="mb-4 text-[var(--color-text-secondary)]">
              Looking for exchanges to trade ETC?
            </p>
            <Link
              href="/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              View All Exchanges
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

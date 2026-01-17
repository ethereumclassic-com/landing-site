'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

export default function ClassicOSPage() {
  const modules = [
    {
      name: 'Mining OS',
      module: 'Produce',
      description: 'Create capital through mining with automated payout detection and direct pathway to DeFi protocols.',
      features: ['Payout detection', 'Mining pool integration', 'Direct DeFi access', 'Profit tracking'],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      name: 'Portfolio',
      module: 'Observe',
      description: 'Unified dashboard showing all your positions, transaction history, and real-time P&L tracking.',
      features: ['Unified dashboard', 'Transaction history', 'P&L tracking', 'Position management'],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      name: 'Deploy',
      module: 'Allocate',
      description: 'Automated position management with liquidation protection and DeFi protocol integration.',
      features: ['Automated management', 'Liquidation protection', 'Position rebalancing', 'Protocol integration'],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      name: 'Markets',
      module: 'Access',
      description: 'Access liquidity through DEX aggregation, stablecoin integration, and fiat on-ramps.',
      features: ['DEX aggregation', 'Stablecoin access', 'Fiat on-ramps', 'Best price routing'],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
  ]

  const compatibleWallets = [
    { name: 'MetaMask', type: 'Browser' },
    { name: 'Ledger', type: 'Hardware' },
    { name: 'Trezor', type: 'Hardware' },
    { name: 'Brave Wallet', type: 'Browser' },
    { name: 'Rabby', type: 'Browser' },
    { name: 'WalletConnect', type: 'Protocol' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28 lg:px-12">
        {/* Background gradient effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/wallet"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Wallets
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Flagship Product
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Classic OS
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-2 text-xl text-[var(--color-text-secondary)] md:text-2xl"
          >
            The Economic Control Center for Ethereum Classic
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[var(--color-text-muted)]"
          >
            Classic OS is not a wallet - it&apos;s an economic control center that works with your wallet.
            Connect your wallet to manage capital flows, track positions, and orchestrate automated strategies to earn.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Launch Classic OS
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://docs.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 py-4 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Documentation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Modules
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Four Integrated Modules
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Classic OS provides a complete suite of tools for managing your ETC economic activity
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeInUpDelayed}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-transform group-hover:scale-110">
                    {module.icon}
                  </div>
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
                    {module.module}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{module.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{module.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Wallets */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Compatibility
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Works With Your Favorite Wallet
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Classic OS connects to your existing wallet for secure transaction signing. No need to migrate - just connect and go.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
          >
            {compatibleWallets.map((wallet, index) => (
              <div
                key={wallet.name}
                className="flex flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-lg font-bold text-[var(--color-primary)]">
                  {wallet.name[0]}
                </div>
                <span className="text-sm font-medium text-white">{wallet.name}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{wallet.type}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-center text-sm text-[var(--color-text-muted)]"
          >
            + Any WalletConnect compatible wallet
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Take Control?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Launch Classic OS and connect your wallet to start managing your ETC economic activity like never before.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Launch Classic OS
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <Link
              href="/wallet"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-8 py-4 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              Browse Wallets
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

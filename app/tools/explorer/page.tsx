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

const mainExplorers = [
  {
    name: 'Blockscout',
    description: 'Official ETC block explorer with comprehensive features. View transactions, addresses, tokens, and smart contract verification.',
    url: 'https://etc.blockscout.com',
    features: ['Full transaction history', 'Token transfers', 'Smart contract verification', 'API access', 'Address labels'],
    recommended: true,
  },
  {
    name: 'Blockscout (Mordor)',
    description: 'Block explorer for the Mordor testnet. Test your dApps and contracts before deploying to mainnet.',
    url: 'https://mordor.blockscout.com',
    features: ['Testnet explorer', 'Contract verification', 'Faucet integration', 'API access'],
    recommended: false,
  },
]

const explorerFeatures = [
  {
    name: 'Transaction Lookup',
    description: 'Search any transaction by hash to view details, status, gas used, and block confirmation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: 'Address Balances',
    description: 'Check ETC balance, token holdings, transaction history, and internal transactions for any address',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    name: 'Smart Contracts',
    description: 'View verified contract source code, read contract state, and interact with write functions',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: 'Token Tracking',
    description: 'Browse ERC-20 and ERC-721 tokens, view holders, transfers, and market data',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: 'Block Details',
    description: 'Explore blocks including miner info, transactions, uncle blocks, and rewards',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    name: 'API Access',
    description: 'Programmatic access to blockchain data via REST API for developers and applications',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

const quickLinks = [
  {
    label: 'Latest Blocks',
    url: 'https://etc.blockscout.com/blocks',
    description: 'View recently mined blocks',
  },
  {
    label: 'Pending Transactions',
    url: 'https://etc.blockscout.com/txs?tab=pending',
    description: 'Mempool transactions awaiting confirmation',
  },
  {
    label: 'Top Accounts',
    url: 'https://etc.blockscout.com/accounts',
    description: 'Largest ETC holders',
  },
  {
    label: 'Verified Contracts',
    url: 'https://etc.blockscout.com/verified-contracts',
    description: 'Browse verified smart contracts',
  },
  {
    label: 'Tokens',
    url: 'https://etc.blockscout.com/tokens',
    description: 'ERC-20 and ERC-721 tokens',
  },
  {
    label: 'API Docs',
    url: 'https://etc.blockscout.com/api-docs',
    description: 'Developer API documentation',
  },
]

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/tools"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Tools
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Block Explorers
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Explore the Ethereum Classic blockchain. View transactions, check addresses,
                verify smart contracts, and analyze on-chain data.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Explorers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Official Explorers
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {mainExplorers.map((explorer) => (
              <motion.div
                key={explorer.name}
                variants={fadeInUp}
                className={`rounded-xl border p-6 ${
                  explorer.recommended
                    ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
                    : 'border-[var(--border)] bg-[var(--panel)]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{explorer.name}</h3>
                    {explorer.recommended && (
                      <span className="mt-1 inline-block rounded-full bg-[var(--color-primary)]/20 px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <svg className="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{explorer.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {explorer.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={explorer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Open Explorer
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explorer Features */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            What You Can Do
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {explorerFeatures.map((feature) => (
              <motion.div
                key={feature.name}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white">{feature.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div>
                    <div className="font-medium text-white group-hover:text-[var(--color-primary)]">
                      {link.label}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">{link.description}</div>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Building on ETC?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Use the Blockscout API to integrate blockchain data into your applications.
              Verify your smart contracts to build user trust.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://etc.blockscout.com/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                API Documentation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/tools/verify"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Contract Verification
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

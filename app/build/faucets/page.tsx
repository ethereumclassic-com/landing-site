'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { faucets, type Faucet } from '../data/build'

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

function FaucetCard({ faucet }: { faucet: Faucet }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{faucet.name}</h3>
          {faucet.notes && (
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{faucet.notes}</p>
          )}
        </div>
        <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
          Testnet
        </span>
      </div>

      <div className="mb-4 rounded-lg bg-[var(--bg)] p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-muted)]">Amount per request</span>
          <span className="font-mono text-lg font-bold text-[var(--color-primary)]">{faucet.amount}</span>
        </div>
      </div>

      <a
        href={faucet.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        Get Testnet ETC
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function BuildFaucetsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/build"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Build
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Testnet Faucets
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Get free METC (Mordor Testnet ETC) for development and testing. Testnet tokens have no real value
                and are used for testing smart contracts before deploying to mainnet.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is METC */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">What is METC?</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  METC (Mordor ETC) is the native currency of the Mordor testnet. It works exactly like ETC on mainnet
                  but has no monetary value. Use it to deploy contracts, test transactions, and develop dApps without
                  risking real funds.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faucet Cards */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Available Faucets
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {faucets.map((faucet) => (
              <FaucetCard key={faucet.name} faucet={faucet} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mordor Network Info */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Mordor Testnet Configuration</h2>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Add Mordor testnet to your wallet to use your testnet ETC:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex justify-between rounded-lg bg-[var(--bg)] p-3">
                  <span className="text-sm text-[var(--color-text-muted)]">Network Name</span>
                  <span className="font-mono text-sm text-white">Mordor Testnet</span>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--bg)] p-3">
                  <span className="text-sm text-[var(--color-text-muted)]">Chain ID</span>
                  <span className="font-mono text-sm text-white">63</span>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--bg)] p-3">
                  <span className="text-sm text-[var(--color-text-muted)]">Currency Symbol</span>
                  <span className="font-mono text-sm text-white">METC</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-[var(--bg)] p-3">
                  <span className="mb-1 block text-sm text-[var(--color-text-muted)]">RPC URL</span>
                  <code className="text-xs text-[var(--color-primary)]">https://rpc.mordor.etccooperative.org</code>
                </div>
                <div className="rounded-lg bg-[var(--bg)] p-3">
                  <span className="mb-1 block text-sm text-[var(--color-text-muted)]">Block Explorer</span>
                  <code className="text-xs text-[var(--color-primary)]">https://etc-mordor.blockscout.com</code>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://chainlist.org/chain/63"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--panel)]"
              >
                Add to Wallet via Chainlist
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Use */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">How to Use Testnet Faucets</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  1
                </div>
                <h3 className="mb-2 font-medium text-white">Add Mordor Network</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Add the Mordor testnet to your wallet using the network configuration above or via Chainlist.
                </p>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  2
                </div>
                <h3 className="mb-2 font-medium text-white">Copy Your Address</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Copy your wallet address (the same address works on both mainnet and testnet).
                </p>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  3
                </div>
                <h3 className="mb-2 font-medium text-white">Request METC</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Visit a faucet, paste your address, and receive testnet ETC in a few seconds.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6"
          >
            <div className="flex items-start gap-4">
              <svg className="h-6 w-6 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <div>
                <h3 className="font-semibold text-white">Tips & Troubleshooting</h3>
                <ul className="mt-2 space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Faucets have rate limits. If one is empty, try another or wait a few hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Make sure your wallet is connected to Mordor testnet (Chain ID 63) before requesting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Testnet tokens have no value. Never send real ETC to a testnet address.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Check the block explorer to verify your transaction if tokens don&apos;t appear immediately.</span>
                  </li>
                </ul>
              </div>
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
            <h2 className="text-2xl font-bold text-white">Ready to Deploy?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Now that you have testnet ETC, learn how to deploy your first smart contract on Ethereum Classic.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Getting Started Guide
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/tools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Developer Tools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

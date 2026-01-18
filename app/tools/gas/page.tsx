'use client'

import { useState } from 'react'
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

// Gas price tiers (in Gwei) - ETC typically has very low gas prices
const gasTiers = [
  {
    name: 'Slow',
    gwei: '1',
    time: '~5 min',
    description: 'Low priority, cheaper',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Standard',
    gwei: '2',
    time: '~1 min',
    description: 'Average speed',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Fast',
    gwei: '5',
    time: '~15 sec',
    description: 'High priority, faster',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
]

// Common transaction types with typical gas limits
const transactionTypes = [
  { name: 'ETC Transfer', gasLimit: 21000, description: 'Simple native token transfer' },
  { name: 'ERC-20 Transfer', gasLimit: 65000, description: 'Token transfer' },
  { name: 'ERC-20 Approve', gasLimit: 45000, description: 'Token approval' },
  { name: 'DEX Swap', gasLimit: 200000, description: 'Token swap on ETCswap' },
  { name: 'Add Liquidity', gasLimit: 250000, description: 'Provide liquidity' },
  { name: 'NFT Mint', gasLimit: 150000, description: 'Mint an NFT' },
  { name: 'Contract Deploy', gasLimit: 500000, description: 'Deploy smart contract' },
]

export default function GasTrackerPage() {
  const [selectedGas, setSelectedGas] = useState('2') // Standard by default
  const etcPrice = 25 // Reference price in USD

  const calculateCost = (gasLimit: number, gweiPrice: string) => {
    const gasPriceEth = parseFloat(gweiPrice) / 1e9
    const costEtc = gasLimit * gasPriceEth
    const costUsd = costEtc * etcPrice
    return { costEtc: costEtc.toFixed(8), costUsd: costUsd.toFixed(6) }
  }

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
                Gas Tracker
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Monitor Ethereum Classic gas prices and optimize your transaction costs.
                ETC typically has very low gas fees compared to other networks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gas Price Tiers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Current Gas Prices
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 md:grid-cols-3"
          >
            {gasTiers.map((tier) => (
              <motion.button
                key={tier.name}
                variants={fadeInUp}
                onClick={() => setSelectedGas(tier.gwei)}
                className={`rounded-xl border p-6 text-left transition-colors ${
                  selectedGas === tier.gwei
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                    : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${tier.color}`}>{tier.name}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{tier.time}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-white">
                  {tier.gwei} <span className="text-lg text-[var(--color-text-muted)]">Gwei</span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{tier.description}</p>
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center text-sm text-[var(--color-text-muted)]"
          >
            Reference values based on typical network conditions. Check{' '}
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Blockscout
            </a>{' '}
            for real-time data.
          </motion.p>
        </div>
      </section>

      {/* Transaction Cost Calculator */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Transaction Cost Estimator
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--bg)]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">
                      Transaction Type
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">
                      Gas Limit
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">
                      Cost (ETC)
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">
                      Cost (USD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {transactionTypes.map((tx) => {
                    const { costEtc, costUsd } = calculateCost(tx.gasLimit, selectedGas)
                    return (
                      <tr key={tx.name} className="hover:bg-[var(--bg)]/50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-white">{tx.name}</div>
                          <div className="text-xs text-[var(--color-text-muted)]">{tx.description}</div>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-sm text-[var(--color-text-muted)]">
                          {tx.gasLimit.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-sm text-white">
                          {costEtc}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-sm text-green-400">
                          ${costUsd}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-xs text-[var(--color-text-muted)]">
              Costs calculated at {selectedGas} Gwei gas price and ${etcPrice} ETC reference price
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gas Optimization Tips */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Gas Optimization Tips</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Use Standard Gas</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    ETC has low network congestion. Standard gas usually confirms within a block.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Batch Transactions</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Combine multiple operations when possible to save on base transaction costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Set Gas Limits Correctly</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Don't overset gas limits. Unused gas is refunded but wallet estimates can be high.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Verify Contract Interactions</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Review transaction details before confirming. Failed transactions still cost gas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ETC vs Other Networks */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Why ETC Gas is Cheap</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">~$0.001</div>
                <div className="text-sm text-[var(--color-text-muted)]">Typical transfer cost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">13.5s</div>
                <div className="text-sm text-[var(--color-text-muted)]">Average block time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">Low</div>
                <div className="text-sm text-[var(--color-text-muted)]">Network congestion</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Ethereum Classic maintains low gas prices due to its efficient block production and lower network
              congestion compared to Ethereum. This makes ETC ideal for frequent transactions and DeFi activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/tools/explorer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Block Explorers
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/mining/stats"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
            >
              Network Stats
            </Link>
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
            >
              Live Gas Data
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

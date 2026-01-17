'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { networks, rpcEndpoints, explorerAPIs, buildStats, getMainnetEndpoints, getTestnetEndpoints } from '../data/build'

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

function NetworkCard({ network }: { network: typeof networks[0] }) {
  const isMainnet = network.type === 'mainnet'

  return (
    <motion.div
      variants={fadeInUp}
      className={`rounded-xl border p-6 ${
        isMainnet
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">{network.name}</h3>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                isMainnet ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
              }`}
            >
              {isMainnet ? 'Mainnet' : 'Testnet'}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {isMainnet ? 'Production network for real transactions' : 'Development and testing network'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-[var(--bg)] p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Chain ID</p>
          <p className="font-mono text-lg font-bold text-white">{network.chainId}</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Currency</p>
          <p className="font-mono text-lg font-bold text-white">{network.symbol}</p>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={network.explorer}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
        >
          Block Explorer
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

function EndpointTable({ endpoints, title }: { endpoints: typeof rpcEndpoints; title: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
              <th className="pb-3 font-medium">Provider</th>
              <th className="pb-3 font-medium">URL</th>
              <th className="pb-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((endpoint, idx) => (
              <tr key={idx} className="border-b border-[var(--border)]/50 last:border-0">
                <td className="py-3 font-medium text-white">{endpoint.provider}</td>
                <td className="py-3">
                  <code className="rounded bg-[var(--bg)] px-2 py-1 text-xs text-[var(--color-primary)]">
                    {endpoint.url}
                  </code>
                </td>
                <td className="py-3 text-sm text-[var(--color-text-muted)]">{endpoint.notes || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function BuildNetworksPage() {
  const mainnetEndpoints = getMainnetEndpoints()
  const testnetEndpoints = getTestnetEndpoints()

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
                Network Information
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Ethereum Classic network configuration details. Chain IDs, RPC endpoints, and explorer links
                for mainnet and testnet development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="text-xs text-[var(--color-text-muted)]">Block Time</p>
              <p className="text-xl font-bold text-white">{buildStats.blockTime}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="text-xs text-[var(--color-text-muted)]">EVM Version</p>
              <p className="text-xl font-bold text-white">{buildStats.evmVersion}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="text-xs text-[var(--color-text-muted)]">Consensus</p>
              <p className="text-xl font-bold text-white">Proof of Work</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="text-xs text-[var(--color-text-muted)]">Algorithm</p>
              <p className="text-xl font-bold text-white">ETChash</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Networks */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Networks
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {networks.map((network) => (
              <NetworkCard key={network.chainId} network={network} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mainnet RPC Endpoints */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <EndpointTable endpoints={mainnetEndpoints} title="Mainnet RPC Endpoints" />
          </motion.div>
        </div>
      </section>

      {/* Testnet RPC Endpoints */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <EndpointTable endpoints={testnetEndpoints} title="Mordor Testnet RPC Endpoints" />
          </motion.div>
        </div>
      </section>

      {/* Block Explorers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Block Explorers & APIs</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {explorerAPIs.map((explorer) => (
                <div
                  key={explorer.name}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white">{explorer.name}</h4>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        explorer.network === 'mainnet'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}
                    >
                      {explorer.network}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{explorer.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={explorer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
                    >
                      Explorer
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    {explorer.apiUrl && (
                      <span className="text-sm text-[var(--color-text-muted)]">
                        API: <code className="text-xs text-[var(--color-primary)]">{explorer.apiUrl}</code>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Config */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Wallet Configuration</h3>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Add Ethereum Classic to MetaMask or other wallets using these settings:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium text-[var(--color-primary)]">Mainnet</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network Name:</span>
                    <span className="font-mono text-white">Ethereum Classic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RPC URL:</span>
                    <span className="font-mono text-white">https://etc.rivet.link</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID:</span>
                    <span className="font-mono text-white">61</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol:</span>
                    <span className="font-mono text-white">ETC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Explorer:</span>
                    <span className="font-mono text-white">https://etc.blockscout.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-amber-400">Mordor Testnet</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network Name:</span>
                    <span className="font-mono text-white">Mordor Testnet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RPC URL:</span>
                    <span className="font-mono text-white">https://rpc.mordor.etccooperative.org</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID:</span>
                    <span className="font-mono text-white">63</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol:</span>
                    <span className="font-mono text-white">METC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Explorer:</span>
                    <span className="font-mono text-white">https://etc-mordor.blockscout.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://chainlist.org/chain/61"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Add Mainnet via Chainlist
              </a>
              <a
                href="https://chainlist.org/chain/63"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Add Mordor via Chainlist
              </a>
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
            <h2 className="text-2xl font-bold text-white">Ready to Start Developing?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Get testnet ETC from a faucet and start deploying contracts on Mordor.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/faucets"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Testnet Faucets
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/clients"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Run Your Own Node
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

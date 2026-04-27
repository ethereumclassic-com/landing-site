'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { networks, rpcEndpoints, nodeClients, devTools } from '@/app/build/data/build'

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

export default function DirectoryDevelopersPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/directory"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Directory
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">Developer Directory</h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Everything you need to build on Ethereum Classic — networks, RPC endpoints,
                node clients, and developer tools.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Networks */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">Networks</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {networks.map((net) => (
                <div key={net.chainId} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--text-primary)]">{net.name}</h3>
                    <span className={`rounded px-2 py-0.5 text-xs ${net.type === 'mainnet' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
                      {net.type}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-sm text-[var(--color-text-muted)]">
                    <div>Chain ID: <span className="font-mono text-[var(--text-primary)]">{net.chainId}</span></div>
                    <div>Symbol: <span className="font-mono text-[var(--text-primary)]">{net.symbol}</span></div>
                    <a href={net.explorer} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                      Block Explorer →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RPC Endpoints */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">RPC Endpoints ({rpcEndpoints.length})</h2>
              <Link href="/build" className="text-sm text-[var(--color-primary)] hover:underline">
                Full build guide →
              </Link>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--bg)]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">Provider</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">URL</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">Network</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {rpcEndpoints.map((rpc) => (
                      <tr key={rpc.url} className="hover:bg-[var(--bg)]/50">
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{rpc.provider}</td>
                        <td className="px-4 py-3 font-mono text-sm text-[var(--color-primary)]">{rpc.url}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded px-2 py-0.5 text-xs ${rpc.network === 'mainnet' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
                            {rpc.network}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Node Clients */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">Node Clients ({nodeClients.length})</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {nodeClients.map((client) => (
                <div key={client.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <h3 className="font-semibold text-[var(--text-primary)]">{client.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{client.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                      {client.language}
                    </span>
                  </div>
                  <a href={client.github} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-[var(--color-primary)] hover:underline">
                    GitHub →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dev Tools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">Developer Tools ({devTools.length})</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {devTools.map((tool) => (
                <div key={tool.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <h3 className="font-semibold text-[var(--text-primary)]">{tool.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
                  <a href={tool.website} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-[var(--color-primary)] hover:underline">
                    Visit →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/build"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Build Hub
            </Link>
            <Link
              href="/build/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              Documentation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

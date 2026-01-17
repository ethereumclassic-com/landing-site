'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { networks, getActiveClients } from '../data/build'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Icons
const ChevronRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

const ServerIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const ClipboardIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
)

export default function ClientsPage() {
  const activeClients = getActiveClients()
  const mainnet = networks.find((n) => n.type === 'mainnet')!
  const testnet = networks.find((n) => n.type === 'testnet')!

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)] px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/build" className="hover:text-white">
              Build
            </Link>
            <ChevronRightIcon />
            <span className="text-white">Node Clients</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <ServerIcon />
              <span>Run Your Own Node</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              ETC Node Clients
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Run your own Ethereum Classic node for maximum decentralization and independence.
              Choose from multiple client implementations in Go, Java, and Scala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Run a Node */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Why Run Your Own Node?</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Full Verification',
                  description: 'Independently verify every transaction and block without trusting third parties.',
                },
                {
                  title: 'Privacy',
                  description: 'Your transactions and queries stay private - no external RPC provider sees your activity.',
                },
                {
                  title: 'Network Support',
                  description: 'Help strengthen the ETC network by adding another independent node.',
                },
                {
                  title: 'Reliable Access',
                  description: 'Never depend on external services for blockchain access - your node is always available.',
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <CheckIcon />
                  </div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Cards */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold text-white"
          >
            Available Clients
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {activeClients.map((client) => (
              <motion.div
                key={client.id}
                variants={fadeInUp}
                className={`rounded-2xl border p-8 ${
                  client.recommended
                    ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
                    : 'border-[var(--border)] bg-[var(--bg)]'
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Client Info */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{client.name}</h3>
                      {client.recommended && (
                        <span className="rounded-full bg-[var(--color-primary)]/20 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                          Recommended
                        </span>
                      )}
                      <span className="rounded-full bg-[var(--panel)] px-3 py-1 text-sm text-white">
                        {client.language}
                      </span>
                    </div>
                    <p className="mb-4 text-[var(--color-text-muted)]">{client.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-white">Features</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {client.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                            <CheckIcon />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Platforms */}
                    <div className="flex flex-wrap gap-2">
                      {client.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="rounded-full bg-[var(--panel)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Start */}
                  <div className="w-full lg:w-96">
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                      <h4 className="mb-3 text-sm font-semibold text-white">Quick Start</h4>

                      {client.installCommand && (
                        <div className="mb-3">
                          <p className="mb-1 text-xs text-[var(--color-text-muted)]">Install</p>
                          <div className="flex items-center justify-between rounded-lg bg-[var(--bg)] p-2">
                            <code className="text-sm text-[var(--color-primary)]">
                              {client.installCommand}
                            </code>
                            <button
                              onClick={() => navigator.clipboard.writeText(client.installCommand!)}
                              className="rounded p-1 text-[var(--color-text-muted)] hover:text-white"
                            >
                              <ClipboardIcon />
                            </button>
                          </div>
                        </div>
                      )}

                      {client.configNotes && (
                        <div className="mb-4">
                          <p className="mb-1 text-xs text-[var(--color-text-muted)]">Configuration</p>
                          <p className="text-sm text-white">{client.configNotes}</p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-[var(--color-primary)] py-2 text-center text-sm font-medium text-black transition hover:bg-[var(--color-primary-hover)]"
                        >
                          Documentation
                        </a>
                        <a
                          href={client.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] py-2 text-center text-sm font-medium text-white transition hover:bg-[var(--panel)]"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Configuration */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Network Configuration</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Mainnet */}
              <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--panel)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">{mainnet.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-[var(--color-primary)]">{mainnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol</span>
                    <code className="text-white">{mainnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Core-Geth Flag</span>
                    <code className="text-white">--classic</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Besu Flag</span>
                    <code className="text-white">--network=classic</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Fukuii Flag</span>
                    <code className="text-white">network=etc</code>
                  </div>
                </div>
              </div>

              {/* Testnet */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">{testnet.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-white">{testnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol</span>
                    <code className="text-white">{testnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Core-Geth Flag</span>
                    <code className="text-white">--mordor</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Besu Flag</span>
                    <code className="text-white">--network=mordor</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Fukuii Flag</span>
                    <code className="text-white">network=mordor</code>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Hardware Requirements</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Minimum */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Minimum (Full Node)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">CPU</span>
                    <span className="text-white">2+ cores</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RAM</span>
                    <span className="text-white">4 GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Storage</span>
                    <span className="text-white">500 GB SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network</span>
                    <span className="text-white">10 Mbps+</span>
                  </li>
                </ul>
              </div>

              {/* Recommended */}
              <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--bg)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Recommended (Archive Node)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">CPU</span>
                    <span className="text-white">4+ cores</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RAM</span>
                    <span className="text-white">8+ GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Storage</span>
                    <span className="text-white">2+ TB NVMe SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network</span>
                    <span className="text-white">25+ Mbps</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--bg)] to-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Run a Node?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Start with Core-Geth for the best ETC experience, or choose Hyperledger Besu for
              enterprise features.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://etclabscore.github.io/core-geth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                Get Core-Geth
                <ExternalLinkIcon />
              </a>
              <Link
                href="/build/docs"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--panel-hover)]"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

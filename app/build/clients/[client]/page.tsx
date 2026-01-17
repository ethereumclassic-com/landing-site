'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { nodeClients, getClientById, type NodeClient } from '../../data/build'

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

const platformColors: Record<string, { bg: string; text: string }> = {
  Windows: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  Linux: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  macOS: { bg: 'bg-gray-500/10', text: 'text-gray-400' },
  Docker: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
}

const languageColors: Record<string, { bg: string; text: string; label: string }> = {
  Go: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', label: 'Go' },
  Java: { bg: 'bg-orange-500/10', text: 'text-orange-400', label: 'Java' },
  Scala: { bg: 'bg-red-500/10', text: 'text-red-400', label: 'Scala 3' },
}

interface Props {
  params: Promise<{ client: string }>
}

function InstallationSection({ client }: { client: NodeClient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-white">Installation</h2>

      <div className="space-y-4">
        {client.installCommand && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Quick Install</h3>
            <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
              <code className="text-[var(--color-primary)]">{client.installCommand}</code>
            </div>
          </div>
        )}

        {client.id === 'core-geth' && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">macOS (Homebrew)</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
                <code className="text-[var(--color-primary)]">brew install core-geth</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Docker</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
                <code className="text-[var(--color-primary)]">docker pull etclabscore/core-geth:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Build from Source</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]">git clone https://github.com/etclabscore/core-geth.git</code>
                <code className="block text-[var(--color-text-muted)]">cd core-geth</code>
                <code className="block text-[var(--color-text-muted)]">make geth</code>
              </div>
            </div>
          </div>
        )}

        {client.id === 'hyperledger-besu' && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Docker</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
                <code className="text-[var(--color-primary)]">docker pull hyperledger/besu:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Package Managers</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]"># Requires Java 17+</code>
                <code className="block text-[var(--color-text-muted)]">brew install hyperledger/besu/besu</code>
              </div>
            </div>
          </div>
        )}

        {client.id === 'fukuii' && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Docker</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
                <code className="text-[var(--color-primary)]">docker pull ghcr.io/chippr-robotics/fukuii:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Build from Source</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]"># Requires JDK 21+ and sbt</code>
                <code className="block text-[var(--color-text-muted)]">git clone https://github.com/chippr-robotics/fukuii.git</code>
                <code className="block text-[var(--color-text-muted)]">cd fukuii && sbt assembly</code>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ConfigurationSection({ client }: { client: NodeClient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-white">Configuration</h2>

      <div className="space-y-4">
        {client.configNotes && (
          <div className="rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 p-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              <strong className="text-[var(--color-primary)]">Note:</strong> {client.configNotes}
            </p>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Mainnet (Chain ID 61)</h3>
            <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs">
              {client.id === 'core-geth' && (
                <code className="text-[var(--color-primary)]">geth --classic</code>
              )}
              {client.id === 'hyperledger-besu' && (
                <code className="text-[var(--color-primary)]">besu --network=classic</code>
              )}
              {client.id === 'fukuii' && (
                <code className="text-[var(--color-primary)]">fukuii --network=etc</code>
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Mordor Testnet (Chain ID 63)</h3>
            <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs">
              {client.id === 'core-geth' && (
                <code className="text-[var(--color-primary)]">geth --mordor</code>
              )}
              {client.id === 'hyperledger-besu' && (
                <code className="text-[var(--color-primary)]">besu --network=mordor</code>
              )}
              {client.id === 'fukuii' && (
                <code className="text-[var(--color-primary)]">fukuii --network=mordor</code>
              )}
            </div>
          </div>
        </div>

        {client.id === 'core-geth' && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Common Options</h3>
            <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
              <code className="block text-[var(--color-text-muted)]">--http                  # Enable HTTP-RPC server</code>
              <code className="block text-[var(--color-text-muted)]">--http.addr 0.0.0.0     # HTTP listen address</code>
              <code className="block text-[var(--color-text-muted)]">--http.port 8545        # HTTP-RPC port</code>
              <code className="block text-[var(--color-text-muted)]">--ws                    # Enable WebSocket server</code>
              <code className="block text-[var(--color-text-muted)]">--syncmode full         # Full node sync</code>
              <code className="block text-[var(--color-text-muted)]">--syncmode snap         # Snap sync (faster)</code>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ClientPage({ params }: Props) {
  const { client: clientId } = use(params)
  const client = getClientById(clientId)

  if (!client) {
    notFound()
  }

  const langInfo = languageColors[client.language] || { bg: 'bg-gray-500/10', text: 'text-gray-400', label: client.language }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/build/clients"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Node Clients
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    {client.name}
                  </h1>
                  {client.recommended && (
                    <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                      Recommended
                    </span>
                  )}
                  <span className={`rounded-full px-3 py-1 text-sm font-medium ${langInfo.bg} ${langInfo.text}`}>
                    {langInfo.label}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                  {client.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Documentation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href={client.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Platform Support</h2>
            <div className="flex flex-wrap gap-2">
              {client.platforms.map((platform) => {
                const colors = platformColors[platform] || { bg: 'bg-gray-500/10', text: 'text-gray-400' }
                return (
                  <span
                    key={platform}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${colors.bg} ${colors.text}`}
                  >
                    {platform}
                  </span>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Key Features</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {client.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-text-muted)]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Installation */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <InstallationSection client={client} />
        </div>
      </section>

      {/* Configuration */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ConfigurationSection client={client} />
        </div>
      </section>

      {/* Status Badge */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-green-500/30 bg-green-500/5 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Actively Maintained</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  This client is actively developed and receives regular updates.
                </p>
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
            <h2 className="text-2xl font-bold text-white">Need Help Getting Started?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Check out our network information page for RPC endpoints and testnet resources.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/networks"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Network Info
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/faucets"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Testnet Faucets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

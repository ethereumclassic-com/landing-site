'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getClientById,
  getPluginById,
  type NodeClient,
  type ExecutionPlugin,
  type SecurityAdvisory,
} from '../../data/build'

const platformColors: Record<string, { bg: string; text: string }> = {
  Windows: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  Linux: { bg: 'bg-[var(--color-warning-bg)]', text: 'text-[var(--color-warning)]' },
  macOS: { bg: 'bg-gray-500/10', text: 'text-gray-400' },
  Docker: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
}

const languageColors: Record<string, { bg: string; text: string; label: string }> = {
  Go: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', label: 'Go' },
  Java: { bg: 'bg-orange-500/10', text: 'text-orange-400', label: 'Java' },
  Scala: { bg: 'bg-[var(--color-error-bg)]', text: 'text-[var(--color-error)]', label: 'Scala 3' },
  Rust: { bg: 'bg-[#DEA584]/10', text: 'text-[#DEA584]', label: 'Rust' },
  'C#': { bg: 'bg-purple-500/10', text: 'text-purple-400', label: 'C#' },
}

const severityColors: Record<SecurityAdvisory['severity'], { bg: string; text: string; border: string }> = {
  Critical: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  High: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  Moderate: { bg: 'bg-[var(--color-warning-bg)]', text: 'text-[var(--color-warning)]', border: 'border-[var(--color-warning)]/30' },
  Low: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
}

const pluginBaseClientLinks: Record<string, string> = {
  'go-ethereum': 'https://github.com/ethereum/go-ethereum',
  Nethermind: 'https://github.com/NethermindEth/nethermind',
  Erigon: 'https://github.com/ledgerwatch/erigon',
  'Hyperledger Besu': 'https://github.com/hyperledger/besu',
  Reth: 'https://github.com/paradigmxyz/reth',
}

interface Props {
  params: Promise<{ client: string }>
}

function BackLink() {
  return (
    <Link
      href="/build/clients"
      className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Back to Node Clients
    </Link>
  )
}

function SecuritySection({ advisories }: { advisories: SecurityAdvisory[] }) {
  return (
    <section className="px-6 pb-12 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-4">
        {/* Warning banner */}
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
          <div className="flex items-start gap-3">
            <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div className="flex-1">
              <h3 className="font-semibold text-red-400">Security Notice — etclabscore Fork</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                The <code className="rounded bg-red-500/10 px-1 font-mono text-red-300">etclabscore/core-geth</code> fork is unmaintained and does not include the security patches listed below. If you are running that version,{' '}
                <strong className="text-[var(--text-primary)]">upgrade immediately</strong> to{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-primary)] hover:underline"
                >
                  github.com/ethereumclassic/core-geth
                </a>
                .
              </p>
              <a
                href="https://github.com/ethereumclassic/core-geth/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
              >
                Get Patched Version →
              </a>
            </div>
          </div>
        </div>

        {/* CVE table */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
          <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Patched Security Advisories</h2>
          <div className="space-y-3">
            {advisories.map((adv) => {
              const colors = severityColors[adv.severity]
              return (
                <div key={adv.cve} className={`flex items-start gap-3 rounded-lg border p-3 ${colors.border} ${colors.bg}`}>
                  <span className={`mt-0.5 inline-block flex-shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${colors.text} border ${colors.border}`}>
                    {adv.severity.toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-mono text-sm font-semibold ${colors.text}`}>{adv.cve}</p>
                    <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{adv.description}</p>
                    {adv.commit && (
                      <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
                        Fix: <span className="text-[var(--text-primary)]">{adv.commit}</span>
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Post-upgrade note */}
        <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            <strong className="text-[var(--color-primary)]">After upgrading:</strong> Rotate your P2P node key to ensure fresh identity on the network.
          </p>
          <div className="mt-2 rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
            <code className="text-[var(--color-primary)]">rm {'<datadir>'}/geth/nodekey</code>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstallationSection({ client }: { client: NodeClient }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Installation</h2>

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
                <code className="text-[var(--color-primary)]">docker pull ghcr.io/ethereumclassic/core-geth:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Build from Source</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]">git clone https://github.com/ethereumclassic/core-geth.git</code>
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
                <code className="text-[var(--color-primary)]">docker pull ghcr.io/ethereumclassic/besu:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Package Managers</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]"># Requires Java 17+</code>
                <code className="block text-[var(--color-text-muted)]">brew install ethereumclassic/besu/besu</code>
              </div>
            </div>
          </div>
        )}

        {client.id === 'fukuii' && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Docker</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-sm">
                <code className="text-[var(--color-primary)]">docker pull ghcr.io/ethereumclassic/fukuii:latest</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Build from Source</h3>
              <div className="rounded-lg bg-[var(--bg)] p-3 font-mono text-xs space-y-1">
                <code className="block text-[var(--color-text-muted)]"># Requires JDK 25+ and sbt</code>
                <code className="block text-[var(--color-text-muted)]">git clone https://github.com/ethereumclassic/fukuii.git</code>
                <code className="block text-[var(--color-text-muted)]">cd fukuii && sbt assembly</code>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ConfigurationSection({ client }: { client: NodeClient }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
      <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Configuration</h2>

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
    </div>
  )
}

function NodeClientPage({ client }: { client: NodeClient }) {
  const langInfo = languageColors[client.language] || { bg: 'bg-gray-500/10', text: 'text-gray-400', label: client.language }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <BackLink />
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                  {client.name}
                </h1>
                {client.role === 'recommended' && (
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                    Recommended
                  </span>
                )}
                {client.role === 'maintained' && (
                  <span className="rounded-full bg-[var(--color-warning-bg)] px-3 py-1 text-sm font-medium text-[var(--color-warning)]">
                    Maintained
                  </span>
                )}
                {client.role === 'reference' && (
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                    Reference
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
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4">
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Documentation
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href={client.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Platform Support</h2>
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
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Key Features</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {client.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[var(--color-text-muted)]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Security advisories — Core-Geth only */}
      {client.securityAdvisories && client.securityAdvisories.length > 0 && (
        <SecuritySection advisories={client.securityAdvisories} />
      )}

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
          <div className="rounded-xl border border-[var(--color-success-border)] bg-[var(--color-success)]/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-success-bg)]">
                <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Actively Maintained</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  This client is actively developed and receives regular updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Need Help Getting Started?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Check out our network information page for RPC endpoints and testnet resources.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/networks"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Network Info
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/faucets"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Testnet Faucets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function PluginDetailPage({ plugin }: { plugin: ExecutionPlugin }) {
  const langInfo = languageColors[plugin.language] || { bg: 'bg-gray-500/10', text: 'text-gray-400', label: plugin.language }
  const upstreamUrl = pluginBaseClientLinks[plugin.baseClient]

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <BackLink />
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
              {plugin.name}
            </h1>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
              Plugin
            </span>
            <span className="rounded-full bg-[var(--color-warning-bg)] px-3 py-1 text-sm font-medium text-[var(--color-warning)]">
              Planned
            </span>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${langInfo.bg} ${langInfo.text}`}>
              {langInfo.label}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
            {plugin.description}
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4">
            <a
              href={plugin.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              ETC Repository
            </a>
            {upstreamUrl && (
              <a
                href={upstreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                {plugin.baseClient} (upstream)
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* What is a plugin? */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">What is an execution plugin?</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              Ethereum clients separated consensus from execution for Ethereum&apos;s proof-of-stake transition. ETC leverages this same architecture — adding Ethereum Classic chain support to the execution layer only. Execution plugins have no PoW consensus or mining capability. They serve infrastructure that doesn&apos;t need to participate in consensus: exchanges, RPC providers, block explorers, and indexers.{' '}
              <strong className="text-[var(--text-primary)]">Fukuii</strong> anchors the PoW consensus layer as the primary full-node client.
            </p>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">When to use {plugin.name}</h2>
            <ul className="space-y-3">
              {[
                'Exchanges that need ETC chain data without running a full consensus node',
                'RPC providers serving read-only JSON-RPC access at scale',
                'Block explorers and indexers that process historical chain data',
                'Infrastructure operators familiar with ' + plugin.baseClient + ' who want ETC support',
              ].map((use) => (
                <li key={use} className="flex items-start gap-3">
                  <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-[var(--color-text-muted)]">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[var(--color-warning)]/30 bg-[var(--color-warning-bg)] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-warning)]/20">
                <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Planned — Post-Olympia Roadmap</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  This plugin is on the development roadmap following the Olympia hard fork. Follow{' '}
                  <a
                    href={plugin.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    the repository
                  </a>{' '}
                  for progress updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Running a full node today?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Fukuii is the recommended full node client for Ethereum Classic, with native PoW consensus and Olympia support.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/clients/fukuii"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                View Fukuii →
              </Link>
              <Link
                href="/build/clients"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                All Clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ClientPage({ params }: Props) {
  const { client: clientId } = use(params)
  const client = getClientById(clientId)
  const plugin = client ? undefined : getPluginById(clientId)

  if (!client && !plugin) {
    notFound()
  }

  if (plugin) return <PluginDetailPage plugin={plugin} />
  return <NodeClientPage client={client!} />
}

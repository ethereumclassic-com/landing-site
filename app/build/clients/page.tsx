'use client'

import Link from 'next/link'
import { networks, getActiveClients, executionPlugins } from '../data/build'

// Icons
const ChevronRightIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

const ServerIcon = () => (
  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const CheckIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const ClipboardIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <Link href="/build" className="hover:text-[var(--text-primary)]">
              Build
            </Link>
            <ChevronRightIcon />
            <span className="text-[var(--text-primary)]">Node Clients</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <ServerIcon />
              <span>Run Your Own Node</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              ETC Node Clients
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Run your own Ethereum Classic node for maximum decentralization and independence.
              Choose from multiple client implementations in Go, Java, and Scala.
            </p>
          </div>
        </div>
      </section>

      {/* Why Run a Node */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div
          >
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Why Run Your Own Node?</h2>
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
                  <h3 className="font-semibold text-[var(--text-primary)]">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Cards */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-8 text-center text-3xl font-bold text-[var(--text-primary)]"
          >
            Available Clients
          </h2>

          <div
            className="space-y-8"
          >
            {activeClients.map((client) => (
              <div
                key={client.id}
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
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{client.name}</h3>
                      {client.role === 'recommended' && (
                        <span className="rounded-full bg-[var(--color-primary)]/20 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                          Recommended
                        </span>
                      )}
                      {client.role === 'maintained' && (
                        <span className="rounded-full bg-[var(--color-warning)]/20 px-3 py-1 text-sm font-medium text-[var(--color-warning)]">
                          Maintained
                        </span>
                      )}
                      {client.role === 'reference' && (
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                          Reference
                        </span>
                      )}
                      <span className="rounded-full bg-[var(--panel)] px-3 py-1 text-sm text-[var(--text-primary)]">
                        {client.language}
                      </span>
                    </div>
                    <p className="mb-4 text-[var(--color-text-muted)]">{client.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Features</h4>
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
                      <h4 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Quick Start</h4>

                      {client.installCommand && (
                        <div className="mb-3">
                          <p className="mb-1 text-xs text-[var(--color-text-muted)]">Install</p>
                          <div className="flex items-center justify-between rounded-lg bg-[var(--bg)] p-2">
                            <code className="text-sm text-[var(--color-primary)]">
                              {client.installCommand}
                            </code>
                            <button
                              onClick={() => navigator.clipboard.writeText(client.installCommand!)}
                              className="rounded p-1 text-[var(--color-text-muted)] hover:text-[var(--text-primary)]"
                            >
                              <ClipboardIcon />
                            </button>
                          </div>
                        </div>
                      )}

                      {client.configNotes && (
                        <div className="mb-4">
                          <p className="mb-1 text-xs text-[var(--color-text-muted)]">Configuration</p>
                          <p className="text-sm text-[var(--text-primary)]">{client.configNotes}</p>
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
                          className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] py-2 text-center text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel)]"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Configuration */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-[var(--text-primary)]">Network Configuration</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Mainnet */}
              <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--panel)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">{mainnet.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-[var(--color-primary)]">{mainnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol</span>
                    <code className="text-[var(--text-primary)]">{mainnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Core-Geth Flag</span>
                    <code className="text-[var(--text-primary)]">--classic</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Besu Flag</span>
                    <code className="text-[var(--text-primary)]">--network=classic</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Fukuii Flag</span>
                    <code className="text-[var(--text-primary)]">network=etc</code>
                  </div>
                </div>
              </div>

              {/* Testnet */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">{testnet.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-[var(--text-primary)]">{testnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Symbol</span>
                    <code className="text-[var(--text-primary)]">{testnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Core-Geth Flag</span>
                    <code className="text-[var(--text-primary)]">--mordor</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Besu Flag</span>
                    <code className="text-[var(--text-primary)]">--network=mordor</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Fukuii Flag</span>
                    <code className="text-[var(--text-primary)]">network=mordor</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-[var(--text-primary)]">Hardware Requirements</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Minimum */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Minimum (Full Node)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">CPU</span>
                    <span className="text-[var(--text-primary)]">2+ cores</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RAM</span>
                    <span className="text-[var(--text-primary)]">4 GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Storage</span>
                    <span className="text-[var(--text-primary)]">500 GB SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network</span>
                    <span className="text-[var(--text-primary)]">10 Mbps+</span>
                  </li>
                </ul>
              </div>

              {/* Recommended */}
              <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--bg)] p-6">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Recommended (Archive Node)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">CPU</span>
                    <span className="text-[var(--text-primary)]">4+ cores</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RAM</span>
                    <span className="text-[var(--text-primary)]">8+ GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Storage</span>
                    <span className="text-[var(--text-primary)]">2+ TB NVMe SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network</span>
                    <span className="text-[var(--text-primary)]">25+ Mbps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Client Plugins — Post-Olympia Roadmap */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div
          >
            <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
              Execution Client Plugins
            </h2>
            <p className="mb-2 text-sm font-mono text-[var(--color-text-muted)]">Post-Olympia Roadmap</p>
            <p className="mb-8 max-w-3xl text-[var(--color-text-muted)]">
              Upstream Ethereum clients separated the consensus engine from the execution engine to support
              Proof-of-Stake. ETC plugins leverage this separation to add Ethereum Classic chain support
              to the execution layer only. No mining, no PoW consensus. Products and infrastructure built on
              geth, Nethermind, Erigon, or Besu can add ETC support via a lightweight plugin without running
              a separate PoW consensus client. Fukuii remains the primary and long-term supported Proof-of-Work
              client for the mining ecosystem.
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {executionPlugins.map((plugin) => (
                <div
                  key={plugin.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 opacity-70"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">{plugin.name}</span>
                    <span className="rounded-full bg-[var(--color-text-muted)]/10 px-2 py-0.5 text-[10px] font-mono text-[var(--color-text-muted)]">
                      PLANNED
                    </span>
                  </div>
                  <p className="mb-3 text-xs text-[var(--color-text-muted)]">{plugin.description}</p>
                  <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                    <span>{plugin.language}</span>
                    <span>Base: {plugin.baseClient}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--bg)] to-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Ready to Run a Node?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Fukuii is the recommended client for Ethereum Classic. It is purpose-built for ETC with PoW
              consensus and mining support. For upgrade-specific guidance, see the Olympia client details.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/ethereumclassic/fukuii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                Get Fukuii
                <ExternalLinkIcon />
              </a>
              <Link
                href="/olympia/clients"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
              >
                Olympia Client Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

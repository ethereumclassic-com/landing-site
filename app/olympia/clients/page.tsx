'use client'

import Link from 'next/link'
import { getActiveClients } from '../../build/data/build'
import OlympiaCountdown from '../components/OlympiaCountdown'

const CheckIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const PlatformIcons: Record<string, React.ReactNode> = {
  Windows: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 88 88" fill="currentColor">
      <path d="M0 12.4L35.7 7.5l.016 34.4-35.7.2zm35.7 33.5.028 34.5L.03 75.5l-.003-29.8zm4.3-38.9L87.3 0v41.5l-47.3.4zm47.3 39.8-.014 41.3-47.3-6.7-.066-34.7z"/>
    </svg>
  ),
  macOS: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  ),
  Linux: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.17 1.23.336 1.98.336.744 0 1.39-.166 1.98-.335.24.482.68.83 1.208.946.752.2 1.692-.005 2.616-.471.862-.463 1.96-.399 2.777-.599.405-.131.765-.267.94-.601.174-.339.142-.804-.106-1.483-.074-.242-.016-.572.04-.97.028-.136.055-.338.055-.537.003-.208-.043-.413-.133-.602-.206-.41-.55-.544-.864-.68-.312-.133-.598-.2-.797-.4-.214-.238-.404-.57-.663-.839a.42.42 0 00-.11-.135c.123-.806-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.066-1.49 1.055-5.964-3.17-6.298-.166-.013-.326-.021-.48-.021zm0 1.257c.115 0 .237.004.359.012 2.986.237 2.269 3.748 2.201 5.522-.085 2.079.45 3.338 1.465 4.611.974 1.2 2.051 2.717 2.584 4.264.27.79.404 1.567.215 2.226-.062.218-.194.392-.304.548l-.135.205c-.11-.055-.217-.117-.326-.175-.56-.294-1.195-.528-1.862-.528-.63 0-1.244.173-1.74.474-.496.3-.997.544-1.497.544-.5 0-1.001-.243-1.497-.544a3.11 3.11 0 00-1.74-.474c-.667 0-1.302.234-1.862.528-.11.058-.217.12-.326.175l-.135-.205c-.11-.156-.242-.33-.304-.548-.189-.659-.055-1.436.215-2.226.533-1.547 1.61-3.064 2.584-4.264 1.015-1.273 1.55-2.532 1.465-4.611C10.235 5.017 9.52 1.506 12.504 1.506v-.249z"/>
    </svg>
  ),
  Docker: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.301 2.612-2.176 1.252-1.402 1.994-2.965 2.53-4.311h.218c1.335 0 2.159-.53 2.61-1.122.271-.355.515-.83.317-1.168l-.195-.03z"/>
    </svg>
  ),
}

const ClipboardIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
)

export default function UpgradeHubPage() {
  const activeClients = getActiveClients().filter((c) => c.id !== 'hyperledger-besu')

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Client Implementations
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Fukuii is the primary client for the Olympia era. Core-Geth is actively maintained
            and carried through the upgrade for network continuity, then scheduled to phase out
            as Fukuii assumes the primary role. ETC compatibility plugins for major upstream
            clients are planned for future release.
          </p>
        </div>
      </section>

      {/* Countdown banner */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="banner" />
        </div>
      </section>

      {/* Client Cards */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 pt-16 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8">
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
                      <span className="rounded-full bg-[var(--panel)] px-3 py-1 text-sm text-[var(--text-primary)]">
                        {client.language}
                      </span>
                    </div>
                    <p className="mb-4 text-[var(--color-text-muted)]">{client.description}</p>

                    {/* Sunset / security notice */}
                    {client.securityAuditUrl && (
                      <div className="mb-4 flex items-center justify-between rounded-lg border border-[var(--color-warning)]/30 bg-[var(--color-warning)]/5 px-4 py-3">
                        <span className="text-sm text-[var(--color-text-muted)]">
                          Maintenance mode since Dec 2024 · 6 CVEs patched in v1.13.0 · Migrate to{' '}
                          <a
                            href="https://fukuii.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[var(--color-primary)] hover:underline"
                          >
                            Fukuii
                          </a>
                        </span>
                        <Link
                          href={client.securityAuditUrl}
                          className="ml-4 shrink-0 text-sm font-medium text-[var(--color-warning)] transition hover:underline"
                        >
                          Security audit →
                        </Link>
                      </div>
                    )}

                    {/* Features */}
                    {client.features && (
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
                    )}

                    {/* Platforms */}
                    <div className="flex flex-wrap gap-2">
                      {client.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--panel)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                        >
                          {PlatformIcons[platform]}
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
                          className="flex-1 rounded-lg bg-[var(--color-primary)] py-2 text-center text-sm font-medium text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
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

      {/* ETC Compatibility Plugins */}
      <section className="border-t border-[var(--border)] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            ETC Compatibility Plugins
          </h2>
          <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
            Planned for release after Olympia activation. These compatibility layers bring
            Ethereum Classic support to major upstream EVM clients without maintaining full
            forks. Enables enterprise deployments, archive nodes, and cross-chain infrastructure
            on any preferred execution environment.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                name: 'Hyperledger Besu',
                language: 'Java',
                langColor: '#e76f00',
                description:
                  'Enterprise-grade EVM client from the Hyperledger Foundation. Apache 2.0 licensed. Planned ETC compatibility plugin for enterprise deployments and institutional infrastructure.',
                links: [
                  { label: 'GitHub', href: 'https://github.com/hyperledger/besu' },
                  { label: 'Docs', href: 'https://besu.hyperledger.org' },
                ],
              },
              {
                name: 'Erigon',
                language: 'Go',
                langColor: '#00acd7',
                description:
                  'Archive-optimized EVM client designed for minimal disk usage and fast historical queries. Preferred for analytics infrastructure and full-history nodes.',
                links: [
                  { label: 'GitHub', href: 'https://github.com/erigontech/erigon' },
                ],
              },
              {
                name: 'Go Ethereum',
                language: 'Go',
                langColor: '#00acd7',
                description:
                  'The upstream geth client. ETC compatibility layer maintains parity with the canonical Go Ethereum codebase for maximum tooling compatibility.',
                links: [
                  { label: 'GitHub', href: 'https://github.com/ethereum/go-ethereum' },
                  { label: 'Docs', href: 'https://geth.ethereum.org' },
                ],
              },
              {
                name: 'Nethermind',
                language: 'C#',
                langColor: '#9b4993',
                description:
                  'High-performance .NET EVM client. Enables ETC integration for the Microsoft and enterprise .NET ecosystem, with native Windows deployment support.',
                links: [
                  { label: 'GitHub', href: 'https://github.com/NethermindEth/nethermind' },
                  { label: 'Docs', href: 'https://docs.nethermind.io' },
                ],
              },
              {
                name: 'Reth',
                language: 'Rust',
                langColor: '#CE4117',
                description:
                  'ETC execution plugin for Reth. Brings Ethereum Classic support to the modular, performance-focused Rust client.',
                links: [
                  { label: 'GitHub', href: 'https://github.com/paradigmxyz/reth' },
                  { label: 'Docs', href: 'https://reth.rs' },
                ],
              },
            ].map((plugin) => (
              <div
                key={plugin.name}
                className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--brand-green)]/20"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">{plugin.name}</h3>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span
                      className="rounded px-1.5 py-0.5 font-mono text-xs font-medium"
                      style={{ backgroundColor: `${plugin.langColor}20`, color: plugin.langColor }}
                    >
                      {plugin.language}
                    </span>
                    <span className="rounded bg-[var(--color-warning-bg)] px-1.5 py-0.5 text-xs font-medium text-[var(--color-warning)]">
                      Future
                    </span>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {plugin.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {plugin.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

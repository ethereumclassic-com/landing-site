'use client'

import Link from 'next/link'
import ClientUpgradeCard from '../components/ClientUpgradeCard'
import OlympiaCountdown from '../components/OlympiaCountdown'
import { clients } from '../data/olympia'

export default function UpgradeHubPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green)]/8 blur-[100px]" />
        </div>

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <h1
            className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl"
          >
            Client Implementations
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
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

      {/* Client cards */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-6 md:grid-cols-2"
          >
            {clients.filter((c) => c.id !== 'besu').map((client) => (
              <ClientUpgradeCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* ETC Compatibility Plugins */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              ETC Compatibility Plugins
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Planned for release after Olympia activation. These compatibility layers bring
              Ethereum Classic support to major upstream EVM clients without maintaining full
              forks. Enables enterprise deployments, archive nodes, and cross-chain infrastructure
              on any preferred execution environment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>
    </main>
  )
}

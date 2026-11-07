import { FadeIn } from '@/app/components/ui'
import Link from 'next/link'
import { FUKUII_DESCRIPTION, FUKUII_REPO_URL, FUKUII_STATUS } from '@/lib/fukuii'

const primaryClient = {
  name: 'Core-Geth',
  language: 'Go',
  description:
    'An Ethereum Classic execution client and public-good Go reference client, released and maintained in the ethereumclassic GitHub organization, and the recommended client. Etchash mining is built in, and MESS, the deep-reorg defense, is set with --mess or --mess=false. The v1.13 line closes every client CVE the audits found, including the flaw used to crash Core-Geth v1.12 bootnodes in March 2026, and is built with a supported Go toolchain.',
  website: 'https://docs.coregeth.com',
  websiteLabel: 'docs.coregeth.com',
  github: 'https://github.com/ethereumclassic/core-geth',
  securityAuditUrl: '/build/clients/core-geth-security-audit',
  // Describes what the client is, not which fork is next. A badge naming a
  // specific hard fork stops being true the moment the network forks past it.
  badges: ['Recommended', 'Go-Ethereum derivative'],
}

interface SecondaryClient {
  name: string
  language: string
  description: string
  github: string
  status: string
  /** Published security review, surfaced as a CTA wherever this client appears. */
  securityAuditUrl?: string
}

const secondaryClients: SecondaryClient[] = [
  {
    name: 'Fukuii',
    language: 'Scala',
    description: FUKUII_DESCRIPTION,
    github: FUKUII_REPO_URL,
    status: FUKUII_STATUS,
  },
  {
    name: 'ETC Plugins',
    language: '',
    description:
      'A plugin framework that adds Ethereum Classic chain support into existing Ethereum clients — Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth — at the execution layer, rather than maintaining a fork. A plugin carries no mining or Proof-of-Work consensus.',
    github: '/build/clients#plugins',
    status: 'Planned',
  },
]

export function ClientImplementationsSection() {
  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Client Software
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Client Implementations
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Multi-client architecture eliminates single points of failure at the protocol layer.
            Independent implementations in distinct languages, maintained by separate teams, ensure
            the network can withstand the discontinuation or compromise of any single codebase.
            Core-Geth, the recommended client, and Fukuii, an alternative to try, provide
            implementation diversity. The ETC plugin framework, for Besu, Erigon, Ethrex,
            Go-Ethereum, Nethermind, and Reth, is designed to widen execution-layer reach without
            fragmenting the ecosystem.
          </p>
        </FadeIn>

        {/* Primary client — featured */}
        <FadeIn delay={100}>
          <div className="mt-8 rounded-xl border border-[var(--brand-green)] bg-[var(--bg-elevated)] p-8 shadow-[0_0_24px_rgba(0,255,174,0.12)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-xl font-bold text-[var(--text-primary)]">
                    {primaryClient.name}
                  </p>
                  {primaryClient.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-xs font-semibold text-[var(--brand-green)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="mt-1 text-sm text-[var(--text-subtle)]">{primaryClient.language}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {primaryClient.description}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={primaryClient.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
              >
                {primaryClient.websiteLabel} →
              </a>
              <a
                href={primaryClient.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--text-muted)] transition-colors hover:underline"
              >
                GitHub →
              </a>
              <Link
                href={primaryClient.securityAuditUrl}
                className="inline-flex items-center text-sm font-medium text-[var(--color-warning)] transition-colors hover:underline"
              >
                Security audit →
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Secondary clients */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryClients.map((client, i) => {
            const isInternal = client.github.startsWith('/')
            return (
              <FadeIn key={client.name} delay={(i + 2) * 100} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--brand-green)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-base font-semibold text-[var(--text-primary)]">
                        {client.name}
                      </p>
                      {client.language && (
                        <p className="mt-1 text-xs text-[var(--text-subtle)]">{client.language}</p>
                      )}
                    </div>
                    <span className="badge-pending">{client.status}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {client.description}
                  </p>
                  <a
                    href={client.github}
                    {...(!isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:underline"
                  >
                    {isInternal ? 'View all clients →' : 'View on GitHub →'}
                  </a>
                    {client.securityAuditUrl && (
                      <Link
                        href={client.securityAuditUrl}
                        className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
                        style={{
                          color: 'var(--color-warning)',
                          background: 'var(--color-warning-bg)',
                          border: '1px solid var(--color-warning-border)',
                        }}
                      >
                        Read the v1.12.x security audit
                      </Link>
                    )}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

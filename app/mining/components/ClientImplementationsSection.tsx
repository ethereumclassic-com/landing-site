import { FadeIn } from '@/app/components/ui'

const primaryClient = {
  name: 'Fukuii',
  language: 'Scala',
  description:
    'Purpose-built for Ethereum Classic, an independent implementation designed from the ground up for performance, security, and protocol parity. Primary client for the Olympia upgrade.',
  github: 'https://github.com/ethereumclassic/fukuii',
  status: 'Primary',
}

const secondaryClients = [
  {
    name: 'Core-Geth',
    language: 'Go',
    description:
      'The established ETC mainnet client, continuing in a maintenance role through the Olympia upgrade and beyond. Go-based implementation with broad infrastructure support.',
    github: 'https://github.com/ethereumclassic/core-geth',
    status: 'Maintained',
  },
  {
    name: 'ETC Plugins',
    language: '',
    description:
      'ETC compatibility layers for Besu, Erigon, Go-Ethereum, and Nethermind bring Ethereum Classic support to the broader Ethereum client ecosystem without maintaining full forks.',
    github: '/clients',
    status: 'Plugins',
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
            Fukuii, Core-Geth, and ETC compatibility plugins for Besu, Erigon, Go-Ethereum, and
            Nethermind provide implementation diversity without fragmenting the ecosystem.
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
                  <span className="badge-available">{primaryClient.status}</span>
                  <span className="inline-flex items-center rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-xs font-semibold text-[var(--brand-green)]">
                    Olympia Client
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-subtle)]">{primaryClient.language}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {primaryClient.description}
            </p>
            <a
              href={primaryClient.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
            >
              View on GitHub →
            </a>
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
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Cpu, Server } from 'lucide-react'
import { FadeIn } from '@/app/components/ui'

export function MiningHardwareSection() {
  return (
    <section className="section-alt border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Hardware
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Accessible Hardware at Every Scale
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            ETC has the widest mining participation curve of any smart contract platform, spanning
            consumer electronics stores to purpose-built ASIC deployments at industrial stranded
            energy sites. This range is not incidental &mdash; it is what makes ETC viable for
            stranded energy projects at every scale. A pilot installation testing a small remote
            hydro site uses GPU hardware available at retail. A commercial wellhead gas operation
            committing long-term capital uses institutional ASIC hardware purpose-built for the
            ETChash algorithm. No other smart contract platform retained PoW consensus, so no other
            smart contract platform has both ends of this curve.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn delay={80}>
            <div className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--brand-green)]/40 hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                <Cpu size={20} className="text-[var(--brand-green)]" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                GPU Mining: Retail Accessible
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                AMD, NVIDIA, and Intel GPUs are available at consumer electronics stores globally.
                Any individual with a gaming PC can participate in ETC network security. This is
                what &ldquo;permissionless&rdquo; means at the hardware layer: truly accessible to
                anyone, in any jurisdiction, without specialist procurement.
              </p>
              <ul className="mt-4 space-y-1.5">
                {[
                  'Available at retail globally',
                  'No specialist procurement',
                  'Repurposable for other workloads',
                  'Low barrier to entry',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--brand-green)]/40 hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                <Server size={20} className="text-[var(--brand-green)]" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                ASIC Hardware: Institutional Scale
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                Specialized Ethash/ETChash ASIC miners purpose-built for ETC deliver higher
                efficiency than GPUs and are optimized for the ETChash algorithm. Available from
                specialized manufacturers, they enable industrial-scale deployments at stranded
                energy sites, remote hydro installations, and wellhead gas locations.
              </p>
              <ul className="mt-4 space-y-1.5">
                {[
                  'Higher hash efficiency than GPU',
                  'Purpose-built for ETChash algorithm',
                  'Industrial deployment at scale',
                  'Optimized for stranded energy sites',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="mt-10 border-l-2 border-[var(--brand-green)] pl-4 text-sm text-[var(--text-muted)]">
            No other proof of work network or smart contract platform has both retail GPU
            accessibility and institutional ASIC infrastructure, giving ETC the widest possible
            mining participation curve.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Olympia Connection
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              The Olympia upgrade&apos;s EIP-1559 basefee treasury creates a sustainable funding
              source for the client software that mining operations depend on. Every transaction on
              the network generates basefee revenue that flows to the protocol treasury, which
              governance then allocates to core client development, infrastructure, and network
              security. The economics of mining ETC directly fund the software that keeps it worth
              mining.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Mined in America Act
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              The Mined in America Act establishes a voluntary federal certification program for
              domestic digital asset mining operations, directs NIST and the Manufacturing Extension
              Partnership to support US manufacturing of mining equipment, and provides certified
              operations with access to existing federal energy and rural development programs. A
              Treasury procurement channel and capital gains exemption apply to certified Bitcoin
              miners. The certification framework, domestic hardware manufacturing support, and
              energy infrastructure provisions apply to all Proof-of-Work mining &mdash; including
              the ETChash operations securing Ethereum Classic&apos;s network.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

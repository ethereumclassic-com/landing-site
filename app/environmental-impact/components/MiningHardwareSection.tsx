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
            ETC&apos;s mining hardware spans everything from GPUs bought at consumer electronics stores to
              purpose-built ASIC deployments at industrial stranded energy sites. That range is what makes ETC
              viable for stranded energy projects at every scale. A pilot installation testing a small remote
            hydro site uses GPU hardware available at retail. A commercial wellhead gas operation
            committing long-term capital uses institutional ASIC hardware purpose-built for the
            Etchash algorithm. Among mature smart contract platforms, only ETC kept Proof-of-Work consensus, so only ETC has both
              ends of this range.
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
                Any individual with a gaming PC can participate in ETC network security. This is what &ldquo;permissionless&rdquo; means at the hardware layer: accessible to anyone, in any
                  jurisdiction, without specialist procurement.
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
                ASIC miners built for Etchash deliver higher efficiency than GPUs. Available from
                specialized manufacturers, they enable industrial-scale deployments at stranded
                energy sites, remote hydro installations, and wellhead gas locations.
              </p>
              <ul className="mt-4 space-y-1.5">
                {[
                  'Higher hash efficiency than GPU',
                  'Purpose-built for Etchash algorithm',
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
            Retail GPUs and institutional ASICs both mine ETC, which keeps mining open from the smallest
            deployment to the largest.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Olympia Connection
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              The Olympia proposal would add a funding source for the client software mining
              operations depend on. Each transaction would pay an EIP-1559 base fee to the Olympia
              Treasury, and Olympia DAO&apos;s members would vote on proposals funding core client
              development, infrastructure and network security from it. The base fee is paid by the
              transactions in a block, not by miners, and block rewards and priority fees stay with
              miners.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Mined in America Act
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              The Mined in America Act, a bill introduced in the US Senate in March 2026, would establish a
                voluntary federal certification program for domestic digital asset mining operations, direct
                NIST and the Manufacturing Extension Partnership to support US manufacturing of mining
                equipment, and give certified operations access to existing federal energy and rural
                development programs. Its Treasury procurement channel and capital gains exemption would apply
                to certified Bitcoin miners; its certification framework, hardware manufacturing support and
                energy provisions would apply to all Proof-of-Work mining, including the Etchash operations
                securing Ethereum Classic&apos;s network.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

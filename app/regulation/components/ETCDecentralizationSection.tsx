import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const properties = [
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Original EVM',
    description:
      'Ethereum Classic continues the original Ethereum chain, running since July 2015, one of the longest operating records of any smart contract platform. Custodians, regulators and institutional counterparties weigh that history when they assess operational risk.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'No Central Issuer or Authority',
    description:
      "No issuer, no controlling foundation and no upgrade authority. Protocol changes need community consensus, and no entity can alter supply, freeze accounts or redirect funds: the same profile as Bitcoin.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Proof-of-Work Makes Censorship Costly',
    description:
      'To censor transactions, an attacker must gain and keep more hashrate than all honest miners combined, continuously and at their own expense. That cost is what settlement on ETC rests on.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Permissionless Mining Infrastructure',
    description:
      'GPUs are sold in electronics stores worldwide, and manufacturers build ASICs for Etchash. Anyone, in any jurisdiction, can help secure the network at any scale.',
  },
]

export function ETCDecentralizationSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="decentralization-advantage-heading"
        className="section-alt relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="decentralization-advantage-heading"
              className="text-3xl font-bold tracking-tight"
            >
              Why Decentralization Is the Regulatory Advantage
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC&apos;s regulatory profile follows from its decentralization. The properties that commodity frameworks look for in a Proof-of-Work asset are the ones that make it useful for settlement: censorship resistance, permissionless access and immutability.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              A regulator testing for decentralization and a custodian testing for settlement ask the same question: can any party control the network? No party controls ETC.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {properties.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <span className="text-[var(--brand-green)]">{p.icon}</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {p.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
                The Architecture That Matters
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                For regulated custodians, the distinction that matters is between the protocol layer and the application layer. ETC&apos;s protocol processes transactions as submitted, and no party can override, pause or reverse execution. Regulated tokens, such as stablecoins and tokenized securities, put freeze, pause and blocklist controls in their own smart contracts, as their regulators require. The network itself stays neutral.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                The internet works the same way. TCP/IP does not inspect content, block websites or enforce local rules; compliance happens in the services built on top of it. Regulated finance on ETC follows the same pattern: compliance logic in the token, settlement in the network.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                &ldquo;Code is Law&rdquo; also works as an operating promise: no party can rewrite a transaction once it has executed. Regulated issuers add their compliance controls on top.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

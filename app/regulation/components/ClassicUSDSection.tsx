'use client'

import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const attributes = [
  {
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'US-Regulated Issuer',
    description: (
      <>
        Issued by{' '}
        <a
          href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2376957"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition-opacity hover:opacity-80"
        >
          Brale Inc. (NMLS #2376957)
        </a>
        , a licensed money transmitter operating under US Bank Secrecy Act and state money
        transmission regulations. Compliant with GENIUS Act stablecoin issuance requirements.
      </>
    ),
    link: undefined as { label: string; href: string } | undefined,
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '1:1 USD Reserves',
    description:
      'Every USC token is backed 1:1 by US dollars held in segregated, regulated US bank accounts. Third-party attestations verify reserve balances independently. SOC 2 compliant infrastructure.',
    link: undefined as { label: string; href: string } | undefined,
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Redeemable at Par',
    description:
      'USC redeems 1:1 for USD, USDC (Circle), or USDP (Paxos) via the Brale platform. Deposits via ACH (1–3 business days) or wire (same-day). No slippage. Perfect 1:1 conversion.',
    link: { label: 'Mint or Redeem on the Brale Platform', href: 'https://app.brale.xyz' },
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Smart Contract Security',
    description:
      'ERC-20 standard with transparent proxy pattern (EIP-1967). Role-based access control, pause mechanism, multi-signature requirements, and timelock delays for all significant protocol changes.',
    link: undefined as { label: string; href: string } | undefined,
  },
]

const whyItMatters = [
  "Proves ETC's EVM handles regulated financial instruments at production scale",
  'Enables composable DeFi with a USD-stable base (ETCswap V2/V3 integration)',
  'First deployment validates ETC as a GENIUS Act-compliant stablecoin platform',
  "Brale's API-accessible platform is a pathway for additional fiat-backed issuers on ETC",
]

export function ClassicUSDSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section
        aria-labelledby="classic-usd-heading"
        className="section-deep relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="font-mono text-sm uppercase tracking-widest text-[var(--brand-green)]">
              Regulated Stablecoin
            </p>
            <h2
              id="classic-usd-heading"
              className="mt-2 text-3xl font-bold tracking-tight"
            >
              Classic USD: The Definitive Regulated Stablecoin on Ethereum Classic
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Classic USD ($USC) is the first fiat-backed stablecoin issued natively on
              Ethereum Classic. It is a 1:1 USD-backed ERC-20 token issued by Brale Inc. under US
              money transmission licensing, with reserves held in segregated regulated US bank
              accounts and independently attested. It is not a bridged asset or a wrapped
              version of a token from another chain. It was designed for ETC and deployed on
              ETC mainnet.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The GENIUS Act, signed July 18, 2025, established the first federal framework for
              payment stablecoin issuance in the United States. Classic USD meets those
              requirements: licensed issuer, 1:1 liquid reserves, par-value redemption, and
              third-party attestations. Its existence on ETC demonstrates that a Proof-of-Work
              EVM can serve as compliant infrastructure for regulated financial instruments,
              not in theory but in production.
            </p>
          </FadeIn>

          {/* Token identity card */}
          <FadeIn delay={80}>
            <div className="mt-8 rounded-xl border border-[var(--border-brand)] bg-[var(--bg-elevated)] p-6">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div>
                    <p className="font-mono text-3xl font-bold text-[var(--brand-green)]">$USC</p>
                    <p className="mt-0.5 text-sm text-[var(--text-muted)]">Classic USD</p>
                  </div>
                  <div className="hidden h-10 w-px bg-[var(--divider)] sm:block" />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4">
                    {[
                      { label: 'Network', value: 'Ethereum Classic · Chain 61' },
                      { label: 'Backing', value: '1:1 USD · Segregated' },
                      { label: 'Issuer', value: 'Brale Inc. · NMLS #2376957' },
                      { label: 'Standard', value: 'ERC-20 · EIP-1967 Proxy' },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://classicusd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
                >
                  classicusd.com →
                </a>
              </div>
              <div className="mt-5 border-t border-[var(--divider)] pt-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
                  Contract Address
                </p>
                <a
                  href="https://etc.blockscout.com/token/0xDE093684c796204224BC081f937aa059D903c52a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block break-all font-mono text-[10px] text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
                >
                  0xDE093684c796204224BC081f937aa059D903c52a
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Attribute cards 2×2 */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {attributes.map((a, i) => (
              <FadeIn key={a.title} delay={i * 60} className="h-full">
                <div className="h-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <span className="text-[var(--brand-green)]">{a.icon}</span>
                    </div>
                    <p className="text-sm font-semibold">{a.title}</p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    {a.description}
                  </p>
                  {a.link && (
                    <a
                      href={a.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
                    >
                      {a.link.label} →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Why it matters callout */}
          <FadeIn>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Why It Matters</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {whyItMatters.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

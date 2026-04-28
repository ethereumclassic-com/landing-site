'use client'

import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const stats = [
  { value: '200+ TH/s', label: 'Network Hashrate', detail: 'ETChash algorithm' },
  { value: 'July 2015', label: 'Network Origin', detail: 'Continuous PoW operation' },
  { value: 'GPU + ASIC', label: 'Hardware Access', detail: 'Permissionless entry at any scale' },
  { value: 'Largest PoW EVM', label: 'Post-Merge Position', detail: 'Absorbed Ethereum mining infrastructure' },
]

const securityProperties = [
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'No Controlling Foundation',
    description:
      'Block production is open to any hardware operator globally. No entity holds an appointment, permission, or veto over who mines. The network runs on economic incentive, not institutional trust.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: 'Permissionless Entry',
    description:
      'GPU hardware available at consumer electronics retail. Purpose-built ASIC hardware for institutional scale. No licensing, no KYC, no operator approval — the widest mining participation curve of any programmable blockchain.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Post-Merge Infrastructure',
    description:
      "Ethereum's 2022 transition to Proof-of-Stake directed its entire global ETChash mining network toward ETC. That reallocation of hardware capital is permanent: the equipment was purpose-built for the ETChash algorithm.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Continuous Security Record',
    description:
      'Ethereum Classic has operated under Proof-of-Work consensus since July 2015. The Thanos upgrade and MESS finality mechanism, implemented after the 2020 network security events, strengthened chain reorganization resistance.',
  },
]

export function NetworkSecuritySection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="network-security-heading"
        className="section-gradient relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Network Security
            </p>
            <h2
              id="network-security-heading"
              className="mt-2 text-3xl font-bold tracking-tight"
            >
              Distributed Proof-of-Work Security
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-base text-[var(--text-muted)]">
                Proof-of-Work consensus makes network security measurable. The hashrate
                represents independent, competing economic actors deploying capital to secure
                the network — no single operator controls the outcome. Reversing a transaction
                on ETC requires outpacing the combined computational investment of every miner
                globally. That is not a governance decision or an administrative act — it is a
                thermodynamic constraint.
              </p>
              <p className="text-base text-[var(--text-muted)]">
                The CLARITY Act, MiCA, and every framework that distinguishes a digital
                commodity from a security requires evidence that no single entity controls the
                protocol. Proof-of-Work provides that evidence continuously, on-chain, with
                every block. ETC&apos;s hashrate — absorbing the global GPU mining network and
                onboarding a mature ASIC manufacturing market built specifically for the
                ETChash algorithm after Ethereum&apos;s 2022 transition — represents the largest
                distributed security budget of any smart contract platform.
              </p>
            </div>
          </FadeIn>

          {/* Stat strip */}
          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 60} className="h-full">
                <div className="h-full rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
                  <p className="font-mono text-xl font-bold text-[var(--brand-green)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[var(--text-subtle)]">{stat.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Security properties */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {securityProperties.map((prop, i) => (
              <FadeIn key={prop.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <span className="text-[var(--brand-green)]">{prop.icon}</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold">{prop.title}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {prop.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Closing callout */}
          <FadeIn delay={400}>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                The regulatory criterion for digital commodity classification centers on a
                single question: does any person or entity control the protocol? Proof-of-Work
                answers that question with computational evidence rather than legal assurance.
                Every block mined is a timestamp of distributed consensus — an auditable record
                of the network&apos;s independence from centralized governance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

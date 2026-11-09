import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { fetchHashrateTHs } from '@/lib/hashrate'

const staticStats = [
  { value: 'July 2015', label: 'Launched', detail: 'Continuous Proof-of-Work operation' },
  { value: 'GPU + ASIC', label: 'Hardware Access', detail: 'Permissionless entry at any scale' },
  { value: 'Only mature PoW EVM', label: 'Since the Merge', detail: 'Took on a share of Ethereum\'s mining hardware' },
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
      'Anyone with mining hardware can produce blocks. No entity appoints miners or holds a veto over who mines; the network runs on economic incentives.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: 'Permissionless Entry',
    description:
      'GPUs are sold in consumer electronics stores, and purpose-built ASICs serve large operations. Mining needs no license, no KYC and no operator approval.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Post-Merge Infrastructure',
    description:
      "When Ethereum moved to Proof-of-Stake in 2022, a large share of its GPU and Ethash ASIC fleet moved to ETC, the largest Proof-of-Work network that hardware can still mine. Ethash ASICs have no larger network to go to, so the shift has lasted.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Continuous Security Record',
    description:
      'Ethereum Classic has run on Proof-of-Work since July 2015. After the 51% attacks of 2020, clients added MESS (ECBP-1100), an optional defense against deep chain reorganizations.',
  },
]

export async function NetworkSecuritySection() {
  const hashrateTHs = await fetchHashrateTHs()
  const stats = [
    {
      value: hashrateTHs !== null ? `${hashrateTHs.toFixed(1)} TH/s` : '—',
      label: 'Network Hashrate',
      detail: 'Etchash algorithm, read live from Blockscout',
    },
    ...staticStats,
  ]

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
                Proof-of-Work makes security measurable. Hashrate is capital that independent, competing miners spend to secure the network, and no single operator controls the outcome. To reverse a transaction, an attacker must out-compute the rest of the network, a cost set by energy and hardware rather than by anyone&apos;s decision.
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
                The pending CLARITY Act, like other frameworks that separate digital commodities from securities, asks whether any person or entity controls the protocol. Proof-of-Work answers with computational evidence, recorded in every block, rather than a legal assurance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

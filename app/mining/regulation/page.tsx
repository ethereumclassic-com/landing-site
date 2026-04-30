'use client'

import Link from 'next/link'

const jurisdictions = [
  {
    region: 'United States',
    flag: '🇺🇸',
    status: 'badge-pending' as const,
    statusLabel: 'Pending Senate',
    headline: 'CLARITY Act — Digital Commodity Candidate',
    body: "Passed the US House in July 2025, awaiting Senate. ETC's PoW consensus and decentralized issuance profile positions it as a digital commodity under CFTC jurisdiction. US miners operate in a legal commodity market, not a securities market. State spotlight: Texas, Wyoming, and Kentucky are favorable; New York remains restrictive. The \"Made in America\" angle is strong: domestic mining monetizes stranded energy, creates local jobs, and reinforces energy independence.",
  },
  {
    region: 'European Union',
    flag: '🇪🇺',
    status: 'badge-available' as const,
    statusLabel: 'In Force',
    headline: 'MiCA — No Mining-Specific Restrictions',
    body: "MiCA (fully applied December 30, 2024) does not regulate PoW mining operations directly. ETChash GPU and ASIC mining is legal across all 27 member states. Energy disclosure requirements are emerging under MiCA and the EU taxonomy framework. Some member states (Sweden, Norway) have pushed for renewable energy requirements for miners, but no EU-wide mandate exists. Mining income is treated as business income in most jurisdictions.",
  },
  {
    region: 'Central Asia & Russia',
    flag: '🌏',
    status: 'badge-pending' as const,
    statusLabel: 'Variable',
    headline: 'Large Mining Populations, Unstable Frameworks',
    body: 'Kazakhstan and Kyrgyzstan host significant mining populations attracted by low power costs. Russia legalized mining in 2024 with a registration framework; miners pay taxes on proceeds. Political and regulatory stability risk is higher in all three. Energy cost advantages are real but need to be weighed against operational and legal uncertainty. Power rate changes and licensing requirements have shifted frequently.',
  },
  {
    region: 'Canada',
    flag: '🇨🇦',
    status: 'badge-available' as const,
    statusLabel: 'Province-Dependent',
    headline: 'Province-by-Province Regulatory Landscape',
    body: "Alberta is the most favorable province. Its oil-adjacent stranded gas and deregulated power markets make it attractive for flexible load miners. Quebec restricts new mining connections to protect low-cost hydroelectric power for industrial users. British Columbia is neutral with no specific mining restrictions. Federal treatment of mining income is consistent: proceeds are business income or capital gains depending on intent and frequency.",
  },
  {
    region: 'Asia-Pacific',
    flag: '🌏',
    status: 'badge-available' as const,
    statusLabel: 'Mixed',
    headline: 'Legal Across Most of the Region',
    body: 'Australia treats mining proceeds as ordinary income; capital gains rules apply on disposal. Japan classifies mining income as miscellaneous income, taxed at marginal rates up to 55%. Singapore has no mining-specific regulations; proceeds treated as income. China has officially banned mining since 2021 but substantial activity continues via workarounds; operators accept significant legal and operational risk. Southeast Asian markets (Thailand, Vietnam, Philippines) are mostly permissive but frameworks are informal.',
  },
  {
    region: 'Middle East',
    flag: '🌍',
    status: 'badge-available' as const,
    statusLabel: 'Emerging',
    headline: 'UAE Leading, Others Developing',
    body: "UAE and Dubai lead the region under VARA (Virtual Assets Regulatory Authority), which explicitly permits mining as a licensed activity. Bahrain and Oman are developing frameworks with generally permissive stances. Saudi Arabia is cautious, with no formal ban but significant ambiguity. Qatar maintains a restrictive posture. The region's energy abundance (particularly in non-UAE Gulf states) makes it structurally attractive for large-scale mining once regulatory clarity develops.",
  },
]

export default function MiningRegulationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-4">
            <Link href="/mining" className="text-sm text-[var(--color-primary)] transition hover:opacity-80">
              ← Mining Hub
            </Link>
          </div>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
              Mining Policy
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Mining in the{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Regulated Era
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            PoW mining is increasingly a legally defined activity. Where you mine, how you power it, and how your proceeds are taxed differs by jurisdiction. ETC&apos;s profile is favorable across all major frameworks.
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)]">
            ETC&apos;s PoW consensus and decentralized issuance are precisely the technical properties that regulators have chosen as the bar for &ldquo;digital commodity&rdquo; status. These properties were established in 2015, long before any regulatory framework existed.
          </p>
        </div>
      </section>

      {/* Global Status Overview */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Favorable</p>
              <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">US, EU, UAE</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Clear or permissive frameworks. Mining legally defined.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-warning)]/20 bg-[var(--color-warning)]/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-warning)]">Developing</p>
              <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">CA, AU, KZ, RU</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Legal but frameworks evolving. Monitor for changes.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-error)]/20 bg-[var(--color-error)]/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-error)]">Restrictive</p>
              <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">China, NY</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Active bans or moratoriums. Operational risk is high.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Cards */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Jurisdiction Breakdown</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            A practical overview of the regulatory landscape for ETC mining operators.
          </p>
          <div className="mt-10 space-y-6">
            {jurisdictions.map((j) => (
              <div
                key={j.region}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none" aria-hidden="true">{j.flag}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{j.region}</p>
                      <h3 className="mt-0.5 text-lg font-bold text-[var(--text-primary)]">{j.headline}</h3>
                    </div>
                  </div>
                  <span className={j.status}>{j.statusLabel}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Policy Context */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Energy Policy Context</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Across all jurisdictions, the regulatory trend is moving toward treating flexible mining load as a positive grid participant, not a burden. Miners that curtail during peak demand, absorb stranded renewables, or co-locate with otherwise-wasted energy sources are increasingly recognized as grid services providers.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            ETC mining is a 24/7 dispatchable load. It can be turned on and off in response to energy price signals faster than most industrial processes. This makes it structurally compatible with the energy policy goals of every major jurisdiction, including those that have been restrictive toward speculative crypto assets.
          </p>
          <div className="mt-8 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6">
            <p className="text-sm font-medium text-[var(--color-primary)]">The regulatory argument for ETC mining</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              ETC has no central issuer, no foundation, no pre-mine. The network was not launched to enrich a team. It is a pure PoW system where miners are the only participants that earn new issuance. This is the same property that regulators in the US, EU, and UAE are using to classify assets as commodities rather than securities, and it applies directly to mining operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          <Link
            href="/regulation"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:opacity-90"
          >
            Full Regulatory Framework
          </Link>
          <Link
            href="/environmental-impact"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
          >
            Energy Infrastructure
          </Link>
        </div>
      </section>
    </main>
  )
}

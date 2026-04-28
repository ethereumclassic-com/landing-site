'use client'

import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const profiles = [
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    act: 'CLARITY Act',
    jurisdiction: 'United States',
    badge: 'badge-pending' as const,
    badgeLabel: 'Pending Senate',
    tagline: 'Digital Commodity Profile',
    points: [
      "Longest-running EVM: original Ethereum codebase, launched July 2015",
      "No pre-mine, no foundation controlling protocol direction",
      "Proof-of-Work consensus matches Bitcoin's commodity profile",
      "No central issuer or controlling entity, distributed globally",
      "CFTC jurisdiction for derivatives; spot markets governed by existing law",
      "House passage (July 17, 2025) establishes clear definitional framework",
    ],
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    act: 'MiCA',
    jurisdiction: 'European Union',
    badge: 'badge-available' as const,
    badgeLabel: 'In Force Dec 2024',
    tagline: 'Decentralized Asset',
    points: [
      "No central issuer → exempt from ART and EMT issuer obligations",
      "MiCA-licensed CASPs may offer ETC without per-asset regulatory approval",
      "Decentralized PoW eliminates single point of regulatory or operational failure",
      "Token issuance originated from community fork, with no foundation and no ICO",
      "Qualifies for trading on all 27 EU member state CASP-authorized platforms",
      "Hard cutoff July 1, 2026. ETC is tradable by compliant entities from day one.",
    ],
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    act: 'GENIUS Act',
    jurisdiction: 'United States',
    badge: 'badge-available' as const,
    badgeLabel: 'Signed Jul 18, 2025',
    tagline: 'Live Stablecoin Platform',
    points: [
      "Classic USD ($USC) deployed on ETC mainnet, the first GENIUS Act-aligned stablecoin on ETC",
      "Issued by Brale Inc. (NMLS #2376957) under US money transmission licensing",
      "Reserves held 1:1 in segregated, regulated US bank accounts",
      "Third-party reserve attestations and SOC 2 compliance",
      "OCC national trust bank charters approved for EVM asset custody (2025–2026)",
      "ETC's EVM is a proven platform for regulated, fiat-backed token issuance",
    ],
  },
]

export function ETCRegulatoryProfileSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="etc-regulatory-profile-heading"
        className="section-gradient relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="etc-regulatory-profile-heading"
              className="text-3xl font-bold tracking-tight"
            >
              ETC&apos;s Regulatory Profile
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic is uniquely positioned across every major
              regulatory classification, by design, not by accident.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {profiles.map((p, i) => (
              <FadeIn key={p.act} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-glow)]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <span className="text-[var(--brand-green)]">{p.icon}</span>
                    </div>
                    <span className={p.badge}>{p.badgeLabel}</span>
                  </div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                    {p.jurisdiction}
                  </p>
                  <h3 className="mt-1 text-base font-semibold">{p.act}</h3>
                  <p className="text-sm text-[var(--brand-green)]">{p.tagline}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

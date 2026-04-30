'use client'

import { FadeIn } from '@/app/components/ui'

const frameworks = [
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    act: 'CLARITY Act',
    jurisdiction: 'United States',
    label: 'Digital Commodity Profile',
    status: 'badge-pending' as const,
    statusLabel: 'Pending Senate',
    description:
      "Passed the US House in July 2025. ETC's PoW consensus and decentralized issuance profile positions it as a digital commodity candidate, subject to CFTC jurisdiction for derivatives, with spot markets open under existing law.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    act: 'MiCA',
    jurisdiction: 'European Union',
    label: 'Decentralized Asset',
    status: 'badge-available' as const,
    statusLabel: 'In Force',
    description:
      'Fully applied December 30, 2024. ETC qualifies as a decentralized asset exempt from ART/EMT issuer obligations. MiCA-licensed CASPs may offer ETC without per-asset approval. This is the most favorable classification under the regulation.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    act: 'GENIUS Act',
    jurisdiction: 'United States',
    label: 'Stablecoin Platform',
    status: 'badge-available' as const,
    statusLabel: 'Signed July 2025',
    description:
      'Signed into law July 18, 2025. Classic USD ($USC) by Brale is live on ETC mainnet: a 1:1 USD-backed stablecoin issued under US money transmission licensing. ETC is a demonstrated GENIUS Act-compliant stablecoin platform.',
  },
]

export function RegulationHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pb-20 pt-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--brand-green)]">
            Regulatory Framework
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ethereum Classic in the{' '}
            <span className="text-[var(--brand-green)]">Regulated Era</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
            ETC sits at the intersection of three major global frameworks, each
            defined by landmark 2025 legislation: digital commodity candidate
            under the CLARITY Act, decentralized asset under MiCA, and live
            stablecoin platform under the GENIUS Act.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            Most digital assets qualify under one of these frameworks. ETC
            qualifies under all three simultaneously. Its Proof-of-Work
            consensus satisfies the decentralization criteria regulators use to
            classify assets as commodities. Its EVM compatibility makes it a
            live platform for regulated stablecoin issuance. These are not
            separate positioning choices. They are the same technical
            properties expressed from different regulatory vantage points. Its
            regulatory surface is additive, not exclusive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            The global regulatory frameworks that define ETC&apos;s position were
            enacted in 2024 and 2025. ETC&apos;s technical profile was built in
            2015 and 2016. It was not retrofitted to match regulators. The
            network arrived at this moment as it was designed: open, immutable,
            and without a central issuer.
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {frameworks.map((f, i) => (
            <FadeIn key={f.act} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-glow)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <span className="text-[var(--brand-green)]">{f.icon}</span>
                  </div>
                  <span className={f.status}>{f.statusLabel}</span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                  {f.jurisdiction}
                </p>
                <h3 className="mt-1 text-base font-bold">{f.act}</h3>
                <p className="text-sm font-medium text-[var(--brand-green)]">{f.label}</p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

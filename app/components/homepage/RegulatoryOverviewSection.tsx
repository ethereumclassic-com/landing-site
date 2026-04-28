'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

const primaryFrameworks = [
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
    tagline: 'Digital Commodity',
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
    tagline: 'Stablecoin Platform',
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
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    act: 'Mined in America',
    jurisdiction: 'United States',
    badge: 'badge-pending' as const,
    badgeLabel: 'Congressional Resolution',
    tagline: 'Domestic Mining Policy',
  },
]

const secondaryJurisdictions = [
  [
    { label: 'Japan', value: 'FSA Green List', desc: 'JVCEA · Fast-track listing on all regulated Japanese exchanges' },
    { label: 'United Kingdom', value: 'FSMA Recognized', desc: 'Digital asset framework · Effective Oct 2027' },
    { label: 'Canada', value: 'CIRO Registered', desc: 'CSA + FINTRAC MSB framework · 2023–present' },
    { label: 'South Korea', value: 'FSC/FSS Listed', desc: 'Virtual asset framework · 2024–present' },
  ],
  [
    { label: 'Australia', value: 'AFSL Compliant', desc: 'Digital asset services license framework · 2025–present' },
    { label: 'Brazil', value: 'BCB Regulated', desc: 'Crypto asset regulation · 2023–present' },
    { label: 'United Arab Emirates', value: 'VARA Compliant', desc: 'Virtual asset regulation · In force Jun 2025' },
    { label: 'Singapore', value: 'MAS Licensed', desc: 'Digital payment token framework · 2024–present' },
  ],
  [
    { label: 'Hong Kong', value: 'SFC Recognized', desc: 'Virtual asset trading platform regime · 2024' },
    { label: 'Switzerland', value: 'FINMA Compliant', desc: 'DLT Act · Crypto-forward regulatory environment' },
    { label: 'Turkey', value: 'CMB Listed', desc: 'Capital Markets Law 2024 · FATF exit 2024' },
    { label: 'South Africa', value: 'CASP Registered', desc: 'Crypto asset service provider framework · 2025' },
  ],
]

export default function RegulatoryOverviewSection() {
  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Regulatory Position
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Global Regulatory Clarity
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Ethereum Classic&apos;s proof-of-work consensus and decentralized structure position it favorably across every major regulatory framework — by design, not by accident.
          </p>
        </FadeIn>

        {/* Primary frameworks */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryFrameworks.map((f, i) => (
            <FadeIn key={f.act} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5 [border-left:2px_solid_var(--brand-green)]">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <span className="text-[var(--brand-green)]">{f.icon}</span>
                  </div>
                  <span className={f.badge}>{f.badgeLabel}</span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                  {f.jurisdiction}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{f.act}</h3>
                <p className="mt-0.5 text-xs text-[var(--brand-green)]">{f.tagline}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Secondary jurisdictions */}
        {secondaryJurisdictions.map((row, rowIdx) => (
          <div key={rowIdx} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {row.map((j, i) => (
              <FadeIn key={j.label} delay={(rowIdx * 4 + i) * 40} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5 [border-left:2px_solid_var(--brand-green)]">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                    {j.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{j.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{j.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        ))}

        {/* Explanatory copy */}
        <FadeIn>
          <div className="mt-10 space-y-4 border-t border-[var(--border-default)] pt-8">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Ethereum Classic inherits two distinct regulatory trajectories: the commodity classification path that Proof-of-Work networks established, and the programmable finance frameworks being built around smart contract platforms. Its regulatory surface is additive — digital commodity candidate under the CLARITY Act, decentralized asset under MiCA, and the only Proof-of-Work EVM with a live GENIUS Act-aligned stablecoin.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Exchanges listing ETC require asset classification clarity. Custodians settling ETC transactions require settlement finality guarantees. Investment product issuers require commodity status. ETF sponsors require CFTC commodity futures markets and SEC classification clarity for spot product approval. Corporate treasuries require auditable reserve proof and accounting treatment clarity before holding digital assets on balance sheet. Banks offering custody require prudential capital treatment under Basel III crypto asset rules, which depend directly on commodity classification. Regulated stablecoin issuers require an immutable, neutral settlement rail. dApp and DeFi protocol developers require an unmodifiable EVM execution layer as a credible neutrality guarantee. Miners and hardware manufacturers require protocol stability, a fixed monetary policy, no proof-of-stake transition risk, and asset acceptance in their operating jurisdictions — the regulatory foundation that permits continued capital allocation without shutdown risk.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Governments adopting digital assets face a distinct requirement set. Sovereign wealth funds and central bank reserves require commodity-classified assets with auditable, proven security models. National digital finance strategies require settlement rails that cannot be censored or modified by external parties. Public infrastructure mandates require open-source, permissionless networks with no controlling entity. Ethereum Classic satisfies each condition through its proof-of-work consensus, fixed monetary policy, and unbroken immutability record since 2015.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-6 flex justify-start">
            <Link
              href="/regulation"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
            >
              View the regulatory landscape
              <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

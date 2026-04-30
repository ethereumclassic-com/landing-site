import Link from 'next/link'
import { FadeIn, FlagImg } from '@/app/components/ui'

interface JurisdictionCardProps {
  flag: string
  label: string
  name: string
  badgeClass: string
  badgeLabel: string
  desc: string
  delay: number
}

function JurisdictionCard({ flag, label, name, badgeClass, badgeLabel, desc, delay }: JurisdictionCardProps) {
  return (
    <FadeIn delay={delay} className="h-full">
      <details className="group flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5 [border-left:2px_solid_var(--brand-green)]">
        <summary className="list-none cursor-pointer">
          <div className="flex items-start justify-between gap-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
              <FlagImg emoji={flag} size={22} />
            </div>
            <span className={`${badgeClass} shrink-0`}>{badgeLabel}</span>
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">{label}</p>
          <h3 className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{name}</h3>
          <p className="mt-2 flex items-center gap-0.5 text-[10px] text-[var(--brand-green)]">
            <span className="group-open:hidden">Learn more</span>
            <span className="hidden group-open:inline">Show less</span>
            <svg aria-hidden="true" className="h-2.5 w-2.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </p>
        </summary>
        <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{desc}</p>
      </details>
    </FadeIn>
  )
}

const primaryFrameworks = [
  {
    flag: '🇺🇸',
    act: 'CLARITY Act',
    jurisdiction: 'United States',
    badge: 'badge-pending' as const,
    badgeLabel: 'Pending',
    desc: 'Classifies ETC as a digital commodity under CFTC jurisdiction, separating it from securities oversight',
  },
  {
    flag: '🇺🇸',
    act: 'GENIUS Act',
    jurisdiction: 'United States',
    badge: 'badge-available' as const,
    badgeLabel: '2025',
    desc: 'Federal stablecoin framework signed into law; ETC qualifies as a neutral proof-of-work settlement rail',
  },
  {
    flag: '🇪🇺',
    act: 'MiCA',
    jurisdiction: 'European Union',
    badge: 'badge-available' as const,
    badgeLabel: '2024',
    desc: 'ETC classified as a decentralized asset, exempt from issuer obligations across all EU member states',
  },
  {
    flag: '🇺🇸',
    act: 'Mined in America',
    jurisdiction: 'United States',
    badge: 'badge-pending' as const,
    badgeLabel: 'Pending',
    desc: 'Voluntary federal certification for domestic proof-of-work mining operations and ASIC manufacturing',
  },
]

const secondaryJurisdictions = [
  [
    { flag: '🇯🇵', label: 'Japan', value: 'FSA Green List', desc: 'ETC on the JVCEA recognized list, enabling compliant listing across all regulated Japanese exchanges without additional review', date: '2022' },
    { flag: '🇬🇧', label: 'United Kingdom', value: 'FSMA Recognized', desc: 'FCA cryptoasset regulations under FSMA 2026; ETC qualifies as a recognized cryptoasset under the incoming framework', date: '2027' },
    { flag: '🇨🇦', label: 'Canada', value: 'CIRO Registered', desc: 'CIRO-registered exchanges can list ETC under CSA provincial oversight and mandatory FINTRAC MSB registration', date: '2023' },
    { flag: '🇰🇷', label: 'South Korea', value: 'FSC/FSS Listed', desc: 'Virtual Asset User Protection Act in force Jul 2024; ETC/KRW pairs active on FSC-registered exchanges under formal VASP oversight', date: '2024' },
  ],
  [
    { flag: '🇦🇺', label: 'Australia', value: 'AFSL Compliant', desc: 'Digital Assets Framework Bill enacted Apr 2026; ETC accessible through ASIC-licensed platforms under the new AFSL digital asset regime', date: '2026' },
    { flag: '🇧🇷', label: 'Brazil', value: 'BCB Regulated', desc: 'BCB designated as crypto regulator under the Virtual Assets Law; ETC/BRL pairs active on BCB-authorized exchanges', date: '2023' },
    { flag: '🇦🇪', label: 'United Arab Emirates', value: 'VARA Compliant', desc: 'VARA Dubai Rulebook governs virtual asset service providers; ETC accessible through licensed exchanges operating under the comprehensive Dubai framework', date: '2022' },
    { flag: '🇸🇬', label: 'Singapore', value: 'MAS Licensed', desc: 'Payment Services Act DPT framework with expanded VASP licensing scope from 2024; ETC available through MAS-licensed exchanges', date: '2024' },
  ],
  [
    { flag: '🇭🇰', label: 'Hong Kong', value: 'SFC Recognized', desc: 'SFC VASP licensing regime operational since Jun 2023; ETC available on licensed platforms under Hong Kong\'s standalone virtual asset framework', date: '2023' },
    { flag: '🇨🇭', label: 'Switzerland', value: 'FINMA Compliant', desc: 'DLT Act 2021 provides a principles-based legal framework; ETC traded and held across FINMA-regulated Crypto Valley entities in Zug', date: '2021' },
    { flag: '🇹🇷', label: 'Turkey', value: 'CMB Listed', desc: 'Capital Markets Law No. 7518 mandates CMB/SPK exchange authorization; ETC/TRY pairs active following Turkey\'s FATF grey list exit in 2024', date: '2024' },
    { flag: '🇿🇦', label: 'South Africa', value: 'CASP Registered', desc: 'FSCA-supervised CASP registration in force since 2023; ETC accessible through licensed providers under Africa\'s most developed crypto regulatory framework', date: '2023' },
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
            Ethereum Classic&apos;s proof-of-work consensus and decentralized structure position it favorably across every major regulatory framework. This is by design, not by accident.
          </p>
        </FadeIn>

        {/* Primary frameworks */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryFrameworks.map((f, i) => (
            <JurisdictionCard
              key={f.act}
              flag={f.flag}
              label={f.jurisdiction}
              name={f.act}
              badgeClass={f.badge}
              badgeLabel={f.badgeLabel}
              desc={f.desc}
              delay={i * 60}
            />
          ))}
        </div>

        {/* Secondary jurisdictions */}
        {secondaryJurisdictions.map((row, rowIdx) => (
          <div key={rowIdx} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {row.map((j, i) => (
              <JurisdictionCard
                key={j.label}
                flag={j.flag}
                label={j.label}
                name={j.value}
                badgeClass="badge-available"
                badgeLabel={j.date}
                desc={j.desc}
                delay={(rowIdx * 4 + i) * 40}
              />
            ))}
          </div>
        ))}

        {/* Explanatory copy */}
        <FadeIn>
          <div className="mt-10 space-y-4 border-t border-[var(--border-default)] pt-8">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Ethereum Classic inherits two distinct regulatory trajectories: the commodity classification path that Proof-of-Work networks established, and the programmable finance frameworks being built around smart contract platforms. Its regulatory surface is additive. ETC qualifies as a digital commodity candidate under the CLARITY Act, a decentralized asset under MiCA, and the only Proof-of-Work EVM with a live GENIUS Act-aligned stablecoin.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Exchanges listing ETC require asset classification clarity. Custodians settling ETC transactions require settlement finality guarantees. Investment product issuers require commodity status. ETF sponsors require CFTC commodity futures markets and SEC classification clarity for spot product approval. Corporate treasuries require auditable reserve proof and accounting treatment clarity before holding digital assets on balance sheet. Banks offering custody require prudential capital treatment under Basel III crypto asset rules, which depend directly on commodity classification. Regulated stablecoin issuers require an immutable, neutral settlement rail. dApp and DeFi protocol developers require an unmodifiable EVM execution layer as a credible neutrality guarantee. Miners and hardware manufacturers require protocol stability, a fixed monetary policy, no proof-of-stake transition risk, and asset acceptance in their operating jurisdictions. These are the conditions that permit continued capital allocation without shutdown risk.
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

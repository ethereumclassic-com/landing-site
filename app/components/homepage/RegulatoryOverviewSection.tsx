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
    desc: 'Would place digital commodities under CFTC jurisdiction, separate from securities oversight. ETC is positioned as a candidate.',
  },
  {
    flag: '🇺🇸',
    act: 'GENIUS Act',
    jurisdiction: 'United States',
    badge: 'badge-available' as const,
    badgeLabel: '2025',
    desc: 'Federal framework for payment stablecoins, signed into law in July 2025. Classic USD on ETC is aligned with it.',
  },
  {
    flag: '🇪🇺',
    act: 'MiCA',
    jurisdiction: 'European Union',
    badge: 'badge-available' as const,
    badgeLabel: '2024',
    desc: 'Applies across the EU. ETC has no issuer, and authorized crypto-asset service providers can offer it in every member state.',
  },
  {
    flag: '🇺🇸',
    act: 'Mined in America',
    jurisdiction: 'United States',
    badge: 'badge-pending' as const,
    badgeLabel: 'Pending',
    desc: 'A proposed voluntary federal certification for US proof-of-work mining operations and ASIC manufacturing.',
  },
]

const secondaryJurisdictions = [
  [
    { flag: '🇯🇵', label: 'Japan', value: 'JVCEA Green List', desc: 'ETC is on the Green List of the Japan Virtual and Crypto assets Exchange Association, which streamlines listing it on registered Japanese exchanges.', date: '2022' },
    { flag: '🇬🇧', label: 'United Kingdom', value: 'FCA Cryptoasset Regime', desc: 'The FCA\'s cryptoasset regime under FSMA starts in October 2027 and brings trading platforms and custody under FCA authorization.', date: '2027' },
    { flag: '🇨🇦', label: 'Canada', value: 'CSA and CIRO', desc: 'Crypto trading platforms register with the provincial securities regulators and CIRO, and with FINTRAC as money services businesses. ETC trades on registered platforms.', date: '2023' },
    { flag: '🇰🇷', label: 'South Korea', value: 'User Protection Act', desc: 'The Virtual Asset User Protection Act has been in force since July 2024. ETC/KRW pairs trade on exchanges registered with the FSC.', date: '2024' },
  ],
  [
    { flag: '🇦🇺', label: 'Australia', value: 'Digital Assets Framework', desc: 'Passed in April 2026, it brings digital asset platforms under ASIC\'s financial services licensing. ETC is available through ASIC-licensed platforms.', date: '2026' },
    { flag: '🇧🇷', label: 'Brazil', value: 'Virtual Assets Law', desc: 'The Central Bank of Brazil regulates virtual asset service providers under the Virtual Assets Law. ETC/BRL pairs trade on Brazilian exchanges.', date: '2023' },
    { flag: '🇦🇪', label: 'United Arab Emirates', value: 'VARA Rulebook', desc: 'Dubai\'s Virtual Assets Regulatory Authority licenses virtual asset service providers under its Rulebook. ETC is available through VARA-licensed exchanges.', date: '2022' },
    { flag: '🇸🇬', label: 'Singapore', value: 'Payment Services Act', desc: 'The Monetary Authority of Singapore licenses digital payment token services under the Payment Services Act, with a wider scope from 2024. ETC is available through MAS-licensed exchanges.', date: '2024' },
  ],
  [
    { flag: '🇭🇰', label: 'Hong Kong', value: 'SFC Licensing', desc: 'The Securities and Futures Commission has licensed virtual asset trading platforms since June 2023. ETC is available on licensed platforms.', date: '2023' },
    { flag: '🇨🇭', label: 'Switzerland', value: 'DLT Act', desc: 'The DLT Act (2021) gives distributed ledger assets a legal framework under FINMA\'s principles-based supervision. FINMA-regulated firms trade and hold ETC.', date: '2021' },
    { flag: '🇹🇷', label: 'Turkey', value: 'Capital Markets Law', desc: 'Law No. 7518 (2024) requires crypto exchanges to be authorized by the Capital Markets Board (CMB/SPK). ETC/TRY pairs trade on Turkish exchanges.', date: '2024' },
    { flag: '🇿🇦', label: 'South Africa', value: 'FSCA Licensing', desc: 'Crypto asset service providers have needed an FSCA license since 2023. ETC is available through licensed providers.', date: '2023' },
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
            Regulation Around the World
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Ethereum Classic has no issuer and no controlling entity, the profile that frameworks for digital commodities look for. Here is where it stands under the major frameworks, with pending ones marked.
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
              How an asset is classified decides who can use it. Exchanges need a classification to list ETC, custodians and banks to hold it, investment product issuers to build on it, and corporate treasuries to carry it on a balance sheet.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Stablecoin issuers and DeFi developers need a settlement network that no party can alter. Miners and hardware makers need a fixed monetary policy and a protocol that will not move to proof-of-stake.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Governments and public institutions weighing digital assets look for the same properties: open-source software, permissionless access and no controlling entity. Ethereum Classic offers them through Proof-of-Work consensus, a fixed monetary policy and continuous operation since 2015.
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

'use client'

import { FadeIn } from '@/app/components/ui'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const regions = [
  {
    region: 'United States',
    flag: '🇺🇸',
    framework: 'GENIUS Act · CLARITY Act · OCC Trust Charters · Mined in America Act',
    effective: 'July 2025',
    keyRules: [
      'Stablecoin reserves 1:1 liquid assets (GENIUS Act, signed Jul 18, 2025)',
      'SEC/CFTC jurisdictional perimeter clarified for digital commodities (CLARITY Act)',
      'OCC approved national trust bank charters for digital asset custody',
      'Mined in America Act: voluntary federal certification for domestic PoW mining; NIST support for US ASIC manufacturing',
      'FDIC framework for bank-issued payment stablecoins under development',
    ],
  },
  {
    region: 'European Union',
    flag: '🇪🇺',
    framework: 'Markets in Crypto-Assets (MiCA)',
    effective: 'Dec 2024 · Hard cutoff Jul 1, 2026',
    keyRules: [
      '14 regulated CASP activities requiring EU authorization',
      'E-Money Tokens (EMTs): 1:1 fiat backing, par-value redemption',
      'Asset-Referenced Tokens (ARTs): reserve asset requirements',
      'ETC qualifies as decentralized asset — exempt from ART/EMT issuer obligations',
      '€5M minimum fine or 3–12.5% of annual turnover for violations',
    ],
  },
  {
    region: 'Western Europe',
    flag: '🇬🇧',
    framework: 'UK FSMA 2026 · Switzerland FINMA DLT Act · Crypto Valley',
    effective: 'UK: Oct 2027 · Switzerland: ongoing',
    keyRules: [
      'UK: FCA supervises qualifying stablecoins, trading platforms, and custody under FSMA Cryptoassets Regulations 2026',
      'UK: Bank of England oversight for systemically important stablecoins; application window opens Sept 30, 2026',
      'Switzerland: FINMA DLT Act (2021) provides legal framework for tokenized securities and DLT-based trading',
      'Switzerland: Crypto Valley (Zug) hosts hundreds of EVM-based projects under FINMA\'s principles-based approach',
      'Both are non-EU financial centers operating independent frameworks aligned to MiCA principles',
    ],
  },
  {
    region: 'Asia',
    flag: '🌏',
    framework: 'Japan PSA · South Korea FSC/FSS · Hong Kong SFC · Singapore MAS · Taiwan FSC',
    effective: '2024–2026',
    keyRules: [
      'Japan: only banks, fund transfer providers, and trust companies may issue stablecoins (PSA amendment 2023); FSA Green List includes ETC',
      'South Korea: Virtual Asset User Protection Act in force Jul 2024; FSC/FSS VASP registration enforced',
      'Hong Kong: Stablecoins Ordinance effective Aug 1, 2025; SFC VASP licensing regime fully operational',
      'Singapore: MAS Payment Services Act; VASP licensing deadline Jun 30, 2025; stablecoin framework 2026',
      'Taiwan: FSC virtual asset platform licensing; Crypto Industry Association self-regulatory framework',
    ],
  },
  {
    region: 'Indo-Pacific',
    flag: '🇦🇺',
    framework: 'Australia AFSL · New Zealand FMA · Indonesia OJK · Philippines BSP · Malaysia SC',
    effective: '2025–2026',
    keyRules: [
      'Australia: Corporations Amendment (Digital Assets Framework) Bill passed Apr 1, 2026; ASIC/AFSL oversight',
      'New Zealand: FMA VASP registration requirements; AML/CFT Act coverage for crypto exchanges',
      'Indonesia: Commodity Futures (Bappebti) oversight transitioning to OJK financial services regulation',
      'Philippines: BSP Virtual Asset Service Provider (VASP) licensing; Bangko Sentral ng Pilipinas oversight',
      'Malaysia: Securities Commission VASP framework; digital asset exchanges require SC approval',
    ],
  },
  {
    region: 'South Asia',
    flag: '🇮🇳',
    framework: 'India SEBI · RBI · 30% Crypto Tax · G20 Crypto Framework Host',
    effective: '2022–present',
    keyRules: [
      '30% flat tax on all crypto gains + 1% TDS on transactions above ₹10,000 (Finance Act 2022)',
      'SEBI regulates crypto asset services; RBI maintains oversight of fiat on/off ramps',
      'India hosted G20 presidency in 2023 and led development of the FSB/IMF global crypto policy framework',
      'No blanket ban — crypto is legal to hold and trade under compliance obligations',
      '1.4 billion population with one of the world\'s largest and most active retail crypto markets',
    ],
  },
  {
    region: 'Canada',
    flag: '🇨🇦',
    framework: 'CIRO · CSA · FINTRAC MSB Registration',
    effective: '2023–present',
    keyRules: [
      'CIRO (formerly IIROC/MFDA) oversees crypto trading platform registration and compliance',
      'CSA (Canadian Securities Administrators): provincial securities oversight for crypto asset trading platforms',
      'FINTRAC: all crypto exchanges must register as Money Services Businesses (MSBs)',
      'Canada approved the world\'s first Bitcoin and Ethereum ETFs in 2021, setting global precedent',
      'Coinbase, Kraken, and major exchanges operate under full Canadian regulatory registration',
    ],
  },
  {
    region: 'Latin America & Caribbean',
    flag: '🌎',
    framework: 'Brazil BCB · Mexico CNBV · Argentina CNV · El Salvador · Panama Law 129',
    effective: '2021–2026',
    keyRules: [
      'Brazil: BCB VASP authorization required from Feb 2026; compliance deadline Nov 2026; ETC/BRL pair active',
      'Mexico: Fintech Law (Ley Fintech) 2018 — CNBV and Banxico joint oversight; ITFs authorized',
      'Argentina: CNV supervision of crypto exchanges; widespread peso-crypto trading amid currency controls',
      'El Salvador: Bitcoin declared legal tender 2021; Chivo wallet national payments infrastructure',
      'Panama: Law 129 (May 2022) permits commercial use of crypto without legal tender designation',
    ],
  },
  {
    region: 'Middle East',
    flag: '🇦🇪',
    framework: 'UAE VARA v2.0 · CBUAE Payment Tokens · Saudi CMA (H2 2026) · ADGM',
    effective: 'Jun 2025 (UAE)',
    keyRules: [
      'VARA Dubai Rulebook v2.0 effective June 19, 2025',
      'CBUAE: consumer payments limited to AED-pegged stablecoins',
      'ADGM bans privacy coins and algorithmic stablecoins',
      'Saudi Arabia CMA comprehensive framework: public consultation H2 2026',
    ],
  },
  {
    region: 'Africa',
    flag: '🌍',
    framework: 'South Africa CASP · Nigeria ISA 2025 · Kenya VASP Act · Mauritius FSC',
    effective: '2025–2026',
    keyRules: [
      'South Africa: 300+ CASP licenses issued; Travel Rule enforcement active; FSCA oversight',
      'Nigeria: Investments and Securities Act 2025 classifies digital assets as securities; SEC oversight',
      'Kenya: VASP Act signed Oct 2025; dual CBK/CMA regulatory structure',
      'Mauritius: FSC sandbox framework active; among Africa\'s most advanced crypto regulatory environments',
    ],
  },
  {
    region: 'Eastern Europe',
    flag: '🇵🇱',
    framework: 'Poland KNF · Ukraine Virtual Assets Law · Czech CNB · Romania ASF',
    effective: '2022–2025',
    keyRules: [
      'Poland: KNF registration required for crypto businesses; ETC/PLN fiat pair active on major exchanges',
      'Ukraine: Virtual Assets Law 2022 establishing legal framework; NBU and NAPC oversight',
      'Czech Republic: CNB oversight; MiCA transitional provisions in force Dec 2024',
      'Romania: ASF (Financial Supervisory Authority) VASP registration; MiCA hard cutoff Jul 1, 2026',
    ],
  },
  {
    region: 'Scandinavia',
    flag: '🇸🇪',
    framework: 'Sweden FI · Norway Finanstilsynet · Denmark Finanstilsynet · Finland FIN-FSA',
    effective: 'Dec 2024 (MiCA)',
    keyRules: [
      'Sweden, Denmark, Finland: EU members, MiCA fully in force Dec 30, 2024',
      'Norway: EEA/EFTA member — MiCA applies through EEA agreement; Finanstilsynet oversight',
      'Sweden: Finansinspektionen among first EU regulators to issue comprehensive MiCA implementation guidance',
      'Nordic markets have high retail crypto participation; Sweden\'s Riksbank pioneered CBDC research (e-krona pilot)',
    ],
  },
  {
    region: 'Turkey',
    flag: '🇹🇷',
    framework: 'Capital Markets Law 2024 · CMB/SPK · FATF Grey List Exit',
    effective: '2024–present',
    keyRules: [
      'Capital Markets Law amendments 2024: crypto exchanges require CMB/SPK (Capital Markets Board) authorization',
      'AML/CFT regulations aligned to FATF standards — Turkey exited the FATF Grey List in June 2024',
      'ETC/TRY fiat pair active on Turkish exchanges with significant local retail trading volume',
      'Istanbul-based exchanges serve as a bridge between EU and Middle East crypto markets',
    ],
  },
  {
    region: 'Significant Restrictions',
    flag: '🌐',
    framework: 'Russia DFA Law 2021 · China 2021 Ban · PBOC e-CNY · Hong Kong SFC (separate)',
    effective: '2021–present',
    keyRules: [
      'Russia: Digital Financial Assets (DFA) Law 2021 — PoW mining is legal; using crypto for domestic payments restricted; CBR oversight',
      'China: Trading and mining banned since Sept 2021; PBOC developing e-CNY (digital yuan) as state-controlled alternative',
      'China: Hong Kong operates under a fully separate SFC licensing regime — crypto trading fully legal for licensed VASPs',
      'Both jurisdictions have historically represented significant ETC mining infrastructure and retail trading activity',
    ],
  },
]

export function GlobalFrameworksSection() {
  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="the-regulatory-wave-heading"
        className="section-alt relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2
              id="the-regulatory-wave-heading"
              className="text-3xl font-bold tracking-tight"
            >
              The Regulatory Wave
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Virtually every major jurisdiction has finalized or is actively
              implementing crypto regulation. For exchanges, this means
              compliant listing requirements. For custodians, it means
              jurisdictional clarity on what assets they can hold. For
              investment product issuers, it means commodity versus security
              resolution. ETC&apos;s regulatory profile travels well: it qualifies
              as a digital commodity in commodity-first frameworks, as a
              decentralized asset in MiCA, and as a proven stablecoin platform
              under payment-focused legislation. The same asset, recognized
              across every major framework, without modification.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r, i) => (
              <FadeIn key={r.region} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-glow)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {r.flag}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{r.region}</p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
                        {r.effective}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-medium text-[var(--brand-green)]">
                    {r.framework}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {r.keyRules.map((rule) => (
                      <li
                        key={rule}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-10 border-l-2 border-[var(--brand-green)] pl-4 text-sm text-[var(--text-subtle)]">
              ETC&apos;s regulatory surface spans two distinct trajectories: the digital
              commodity classification path that Proof-of-Work networks established,
              and the programmable finance frameworks being built around smart contract
              platforms. It qualifies under both.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

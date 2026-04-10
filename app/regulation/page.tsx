'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const regulatoryProfiles = [
  {
    act: 'CLARITY Act',
    jurisdiction: 'United States',
    status: 'Passed House',
    statusColor: '#F59E0B',
    classification: 'Digital Commodity',
    description:
      'Proof-of-Work consensus is the defining characteristic for commodity classification under US digital asset legislation. ETC maps directly to the Bitcoin precedent: no pre-mine, no controlling foundation, PoW consensus, no central issuer.',
    points: [
      'Original Ethereum codebase, launched July 2015',
      'No pre-mine, no ICO, no foundation controlling protocol direction',
      'PoW consensus matches Bitcoin\'s established commodity profile',
      'CFTC jurisdiction for derivatives; House passage July 17, 2025',
    ],
  },
  {
    act: 'MiCA',
    jurisdiction: 'European Union',
    status: 'In Force',
    statusColor: '#00ffae',
    classification: 'Decentralized Asset',
    description:
      'ETC is exempt from issuer obligations as a fully decentralized protocol with no central issuer or controlling party. MiCA-licensed CASPs may offer ETC across all 27 EU member states without per-asset regulatory approval.',
    points: [
      'No central issuer: exempt from ART and EMT issuer obligations',
      'MiCA-licensed CASPs may offer ETC without additional review',
      'Tradable on all EU CASP-authorized platforms from day one',
      'Hard cutoff July 1, 2026; ETC qualifies from inception',
    ],
  },
  {
    act: 'GENIUS Act',
    jurisdiction: 'United States',
    status: 'Signed Jul 18, 2025',
    statusColor: '#00ffae',
    classification: 'Live Stablecoin Platform',
    description:
      'Classic USD ($USC) is deployed on ETC mainnet: the first GENIUS Act-aligned stablecoin on a Proof-of-Work EVM. Issued by Brale Inc. (NMLS #2376957) with 1:1 USD reserves and third-party attestations.',
    points: [
      'Classic USD ($USC) live on ETC mainnet',
      'Issued under US money transmission licensing (NMLS #2376957)',
      'Reserves 1:1 in segregated, regulated US bank accounts',
      'OCC national trust bank charters approved for EVM custody (2025)',
    ],
  },
]

const jurisdictions = [
  {
    region: 'United States',
    flag: '🇺🇸',
    framework: 'GENIUS Act · CLARITY Act',
    detail:
      'GENIUS Act signed July 18, 2025: stablecoin reserves 1:1 liquid assets. CLARITY Act passed House July 17, 2025: CFTC jurisdiction for digital commodities. OCC approved national trust bank charters for digital asset custody.',
  },
  {
    region: 'European Union',
    flag: '🇪🇺',
    framework: 'MiCA',
    detail:
      'In force December 2024. Hard cutoff July 1, 2026. 14 regulated CASP activities. Decentralized assets like ETC exempt from issuer obligations. ETC tradable by all authorized platforms from day one.',
  },
  {
    region: 'Japan',
    flag: '🇯🇵',
    framework: 'FSA Green List · JVCEA',
    detail:
      'ETC recognized crypto-asset on the FSA Green List via JVCEA. Fast-track listing across all Japanese regulated exchanges without additional per-asset review.',
  },
  {
    region: 'Asia-Pacific',
    flag: '🌏',
    framework: 'HK · Australia · Singapore',
    detail:
      'Hong Kong: Stablecoins Ordinance effective August 1, 2025. Australia: Corporations Amendment (Digital Assets Framework) Bill passed April 1, 2026. Singapore: VASP licensing active.',
  },
]

const marketStats = [
  { value: '300+', label: 'Active Exchanges', detail: 'Global coverage' },
  { value: '11', label: 'Fiat Currency Pairs', detail: 'USD, EUR, KRW, TRY, GBP, and more' },
  { value: '9', label: 'Crypto Cross-Pairs', detail: 'BTC, ETH, USDT, USDC, and more' },
]

export default function RegulationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/8 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[#00ffae] transition hover:text-[#00ffae]/80"
            >
              ← Olympia Hub
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-1.5 text-sm font-medium text-[#00ffae]">
              Regulatory Positioning
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Regulatory Framework
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Ethereum Classic occupies two distinct regulatory trajectories: the commodity
            classification path that Proof-of-Work networks established, and the programmable
            finance frameworks being built around smart contract platforms. Its regulatory surface
            is additive: it captures both.
          </motion.p>
        </motion.div>
      </section>

      {/* Regulatory Profiles */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              ETC&apos;s Regulatory Profile
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Ethereum Classic is positioned across every major regulatory classification, by design.
            </motion.p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {regulatoryProfiles.map((profile) => (
                <motion.div
                  key={profile.act}
                  variants={fadeInUp}
                  className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-xs text-[var(--color-text-muted)]">{profile.act}</p>
                      <p className="mt-0.5 text-base font-semibold text-white">{profile.classification}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{profile.jurisdiction}</p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        color: profile.statusColor,
                        backgroundColor: `${profile.statusColor}15`,
                        border: `1px solid ${profile.statusColor}30`,
                      }}
                    >
                      {profile.status}
                    </span>
                  </div>
                  <div className="mb-0.5 h-0.5 w-8 rounded-full bg-[#00ffae]" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {profile.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {profile.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00ffae]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Classic USD */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00ffae]">
                Regulated Stablecoin
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mt-3 text-2xl font-bold text-white">
              Classic USD: Live GENIUS Act-Aligned Stablecoin on ETC
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              The first fiat-backed stablecoin native to Ethereum Classic. A live demonstration of
              GENIUS Act-aligned stablecoin infrastructure on a Proof-of-Work EVM.
            </motion.p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Token identity */}
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-[#00ffae]/30 bg-[#00ffae]/5 p-6"
              >
                <p className="text-xs font-mono text-[#00ffae]">$USC / Classic USD</p>
                <p className="mt-1 text-2xl font-bold text-white">1:1 USD</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Ethereum Classic · Chain 61
                </p>
                <div className="mt-4 space-y-2 text-xs text-[var(--color-text-muted)]">
                  <div className="flex justify-between">
                    <span>Issuer</span>
                    <span className="text-white">Brale Inc. · NMLS #2376957</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reserves</span>
                    <span className="text-white">1:1 USD · Segregated</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard</span>
                    <span className="text-white">ERC-20 · EIP-1967 Proxy</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network</span>
                    <span className="text-white">Ethereum Classic (Chain 61)</span>
                  </div>
                </div>
                <a
                  href="https://classicusd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                >
                  classicusd.com →
                </a>
              </motion.div>

              {/* Why it matters */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                {[
                  {
                    title: 'US-Regulated Issuer',
                    description:
                      'Brale Inc. operates under US Bank Secrecy Act and state money transmission regulations. SOC 2 compliant infrastructure. Third-party reserve attestations.',
                  },
                  {
                    title: 'Redeemable at Par',
                    description:
                      '$USC redeems 1:1 for USD, USDC, or USDP via the Brale platform. Deposits via ACH or wire. No slippage, perfect conversion.',
                  },
                  {
                    title: 'Composable DeFi Base',
                    description:
                      'Integrated with ETCswap V2/V3. Enables USD-stable DeFi on Proof-of-Work rails and validates ETC as a GENIUS Act-compliant stablecoin platform.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Regulatory Landscape */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              The 2025–2026 Regulatory Wave
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Virtually every major jurisdiction now has or is finalizing crypto regulation. ETC
              qualifies under both trajectories being legislated simultaneously.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {jurisdictions.map((j) => (
                <motion.div
                  key={j.region}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{j.flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{j.region}</p>
                      <p className="font-mono text-xs text-[#00ffae]">{j.framework}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {j.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Depth */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Market Depth: A Prerequisite for Stablecoin Viability
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-2 max-w-2xl text-[var(--color-text-muted)]">
              Deep liquidity, broad fiat coverage, and 300+ exchanges make ETC one of the most
              accessible digital assets globally, a prerequisite for stablecoin viability as a
              global payment rail.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {marketStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-text-secondary)]">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{stat.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="mt-8 text-sm text-[var(--color-text-muted)]">
              ETC/USD spot markets have operated continuously since 2016, one of the longest-running
              fiat price discovery mechanisms in the asset class.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/investment-products"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90"
              >
                Investment Products
              </Link>
              <Link
                href="/olympia"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30"
              >
                Olympia Upgrade
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

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

const fundFacts = [
  { label: 'Ticker', value: 'ETCG' },
  { label: 'Market', value: 'OTCQX Best Market' },
  { label: 'Inception', value: 'May 10, 2018' },
  { label: 'ETC per Share', value: '0.785' },
  { label: 'Shares Outstanding', value: '13,993,800' },
  { label: 'Custodian', value: 'Coinbase Custody' },
  { label: 'Sponsor', value: 'Grayscale Investments' },
  { label: 'SEC Filing', value: '10-K annually, 10-Q quarterly' },
]

const brokerages = [
  { name: 'Charles Schwab', note: 'Full-service brokerage' },
  { name: 'Fidelity Investments', note: 'Full-service brokerage' },
  { name: 'Interactive Brokers', note: 'Full-service brokerage' },
  { name: 'E*Trade (Morgan Stanley)', note: 'Full-service brokerage' },
  { name: 'Webull', note: 'Commission-free trading' },
  { name: 'OTC Markets Group', note: 'Direct via OTCQX platform' },
]

const dataProviders = [
  { label: 'Yahoo Finance', ticker: 'ETCG' },
  { label: 'Bloomberg', ticker: 'ETCG:US' },
  { label: 'Seeking Alpha', ticker: 'ETCG' },
  { label: 'CNBC', ticker: 'ETCG' },
]

const thesisPoints = [
  {
    number: '01',
    title: 'Regulatory Clarity',
    body: 'ETC inherits the commodity classification path that Proof-of-Work networks established and the programmable finance frameworks being built around smart contract platforms. Its regulatory surface spans both trajectories: digital commodity candidate (CLARITY Act), decentralized asset (MiCA), stablecoin platform (GENIUS Act).',
  },
  {
    number: '02',
    title: 'Olympia Upgrade',
    body: 'EIP-1559 fee market redirects basefee to a protocol-managed treasury for the first time on ETC. On-chain DAO governance controls resource allocation. First programmable monetary policy on a Proof-of-Work EVM.',
  },
  {
    number: '03',
    title: 'Regulated Stablecoin Infrastructure',
    body: 'Classic USD ($USC) is live on ETC mainnet, the first GENIUS Act-aligned stablecoin on a Proof-of-Work EVM. Issued by Brale Inc. (NMLS #2376957), 1:1 USD backed, integrated with ETCswap V2/V3.',
  },
  {
    number: '04',
    title: 'Proven Track Record',
    body: 'The original Ethereum Virtual Machine, running continuously since July 2015. Zero protocol-level failures. Immutable ledger. The longest continuously operating smart contract platform in production.',
  },
  {
    number: '05',
    title: 'Deepest PoW Smart Contract Liquidity',
    body: '300+ exchanges, 11 fiat currency pairs, accessible GPU mining hardware at retail, and institutional ASIC infrastructure. The only Proof-of-Work network with native smart contract capability at this depth of market access.',
  },
]

export default function InvestmentProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59E0B]/8 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-sm font-medium text-[#F59E0B]">
              Institutional Products
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Institutional Investment Products
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Regulated securities exposure to Ethereum Classic through established TradFi channels,
            no self-custody required. Available at the same brokerages used for stocks and bonds.
          </motion.p>
        </motion.div>
      </section>

      {/* ETCG Trust */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
                Regulated Securities Exposure
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mt-3 text-2xl font-bold text-white">
              Grayscale Ethereum Classic Trust
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              ETCG · OTCQX Best Market · Established May 10, 2018
            </motion.p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Fund facts */}
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-6"
              >
                <p className="mb-4 text-sm font-semibold text-white">Fund Facts</p>
                <div className="space-y-2.5">
                  {fundFacts.map((fact) => (
                    <div key={fact.label} className="flex justify-between text-xs">
                      <span className="text-[var(--color-text-muted)]">{fact.label}</span>
                      <span className="text-white">{fact.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://grayscale.com/funds/grayscale-ethereum-classic-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs font-medium text-[#F59E0B] transition hover:text-[#F59E0B]/80"
                >
                  grayscale.com →
                </a>
              </motion.div>

              {/* How it trades */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                {[
                  {
                    title: 'Structure',
                    description:
                      'Grantor trust, not a registered investment company. ETC flows directly as trust assets. Tax treatment passes through to shareholders. SEC filer: 10-K annually, 10-Q quarterly.',
                  },
                  {
                    title: 'Custody',
                    description:
                      'Coinbase Custody Trust Company, LLC. Institutional-grade cold storage, insured. One of the largest digital asset custodians by AUM globally.',
                  },
                  {
                    title: 'Premium / Discount',
                    description:
                      'ETCG trades on OTCQX without an active redemption program. Share price deviates from NAV. Historical max premium: 458%. No active redemption mechanism.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
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

      {/* TradFi Access */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              {/* Brokerages */}
              <div className="flex-1">
                <motion.p variants={fadeInUp} className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
                  Brokerage Access
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mt-2 text-2xl font-bold text-white">
                  Where to Access ETCG Today
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-2 text-sm text-[var(--color-text-muted)]">
                  OTCQX-listed. Available through the same platforms used for equities and bonds.
                  Eligible for IRA and taxable accounts.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-6 divide-y divide-[var(--border)]">
                  {brokerages.map((brokerage) => (
                    <div
                      key={brokerage.name}
                      className="flex items-center justify-between gap-4 border-l-2 border-[#F59E0B] py-3 pl-4"
                    >
                      <p className="text-sm font-semibold text-white">{brokerage.name}</p>
                      <p className="shrink-0 text-xs text-[var(--color-text-muted)]">{brokerage.note}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Ticker / Data Providers */}
              <div className="lg:w-72">
                <motion.p variants={fadeInUp} className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
                  Track ETCG
                </motion.p>
                <motion.h3 variants={fadeInUp} className="mt-2 text-lg font-bold text-white">
                  Market Data Platforms
                </motion.h3>
                <motion.p variants={fadeInUp} className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Real-time quotes and historical data on major financial platforms.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-6 space-y-3">
                  {dataProviders.map((provider) => (
                    <div
                      key={provider.label}
                      className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
                    >
                      <p className="text-sm text-[var(--color-text-muted)]">{provider.label}</p>
                      <p className="font-mono text-sm font-bold text-[#F59E0B]">{provider.ticker}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.p variants={fadeInUp} className="mt-6 text-xs text-[var(--color-text-muted)] italic">
                  OTC security. Availability varies by brokerage. Not investment advice.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              The ETC Investment Case
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Five structural properties that distinguish Ethereum Classic in the 2025–2026
              institutional digital asset landscape.
            </motion.p>

            <div className="mt-8 space-y-4">
              {thesisPoints.map((point) => (
                <motion.div
                  key={point.number}
                  variants={fadeInUp}
                  className="flex gap-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <span className="shrink-0 font-mono text-lg font-bold text-[#F59E0B]/40">
                    {point.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{point.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/regulation"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90"
              >
                Regulatory Framework
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

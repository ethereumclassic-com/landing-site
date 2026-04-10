'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import OlympiaCountdown from './components/OlympiaCountdown'
import OlympiaRoadmap from './components/OlympiaRoadmap'
import GovernanceStageComponent from './components/GovernanceStage'
import { FAQAccordion } from '@/app/components/sections/FAQAccordion'
import { faqs as olympiaFAQ, olympiaLinks } from './data/olympia'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const howItWorks = [
  {
    title: 'Basefee Revenue',
    description:
      'Every transaction pays a basefee via EIP-1559. The basefee is directed to the Treasury. Block rewards and tips remain completely untouched — miners are unaffected.',
    color: '#F59E0B',
  },
  {
    title: 'Protocol Treasury',
    description:
      'Protocol-managed vault accumulates basefee revenue, voluntary donations, and mining rewards directed to the treasury address. Real-time monitoring via public dashboard.',
    color: '#00ffae',
  },
  {
    title: 'On-Chain Governance',
    description:
      'Two-layer governance: the CoreDAO handles critical protocol decisions — security maintenance, EVM parity, and client funding — ensuring a professional-grade blockchain experience for Ethereum Classic stakeholders. Futarchy prediction markets open public participation to inform treasury allocation. All on-chain and auditable.',
    color: '#38bdf8',
  },
]

export default function OlympiaHubPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-1.5 text-sm font-medium text-[#00ffae]">
              Network Upgrade
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#00ffae] to-emerald-300 bg-clip-text text-transparent">
              Olympia
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Active protocol development for Ethereum Classic — EVM modernization, maintained
            clients, and funded development through sustainable basefee revenue.
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl space-y-2 text-left text-sm text-[var(--color-text-muted)]"
          >
            {[
              'EIP-1559 fee market — predictable gas pricing, basefee revenue redirected to protocol treasury',
              'Protocol treasury — sustainable funding without new token issuance or miner reward changes',
              'Fusaka EVM alignment — full parity with every Ethereum tool, library, and framework',
              'Institutional infrastructure — Proof-of-Work foundation for regulated stablecoins under MiCA and the GENIUS Act, ETF-compliant digital assets, and regulatory recognition across the US, EU, and Japan',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ffae]" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/clients"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              View Clients
            </Link>
            <a
              href={olympiaLinks.olympiaDAO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              OlympiaDAO.org
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Countdown */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="hero" />
        </div>
      </section>

      {/* What Olympia Changes — ECIP Explainer */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              What Olympia Changes
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Three client-facing ECIPs that modernize the protocol in a single coordinated upgrade.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  ecip: 'ECIP-1111',
                  title: 'EIP-1559 Fee Market',
                  description:
                    'The most widely adopted transaction format in the EVM ecosystem, now on Ethereum Classic. Dynamic gas pricing delivers predictable fees. Unlike Ethereum where basefee is burned, ETC redirects it to the protocol treasury. Miner block rewards and tips remain completely untouched.',
                  color: '#F59E0B',
                },
                {
                  ecip: 'ECIP-1112',
                  title: 'Protocol Treasury',
                  description:
                    'A protocol-controlled vault funded by basefee revenue and voluntary contributions. Institutions, developers, and stakeholders can fund Ethereum Classic core development without fielding their own team. No admin keys, no multisig — only on-chain governance can release funds.',
                  color: '#00ffae',
                },
                {
                  ecip: 'ECIP-1121',
                  title: 'Fusaka EVM Alignment',
                  description:
                    'Advances the ETC execution layer through London, Dencun, Pectra, and Fusaka in a single upgrade. Exchanges and wallets gain modern RPC compatibility. Developers gain full access to every current Ethereum tool, library, and framework — one codebase, every EVM chain.',
                  color: '#38bdf8',
                },
              ].map((item) => (
                <motion.div
                  key={item.ecip}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-mono text-xs text-[var(--color-text-muted)]">{item.ecip}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Regulatory Recognition */}
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
                Regulatory Positioning
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="mt-3 text-2xl font-bold text-white">
              Global Regulatory Recognition
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Ethereum Classic has received formal regulatory classification across four major jurisdictions.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  framework: 'CLARITY Act',
                  classification: 'Digital Commodity',
                  detail: 'CFTC · United States',
                  description:
                    'Classified as a digital commodity under CFTC jurisdiction. Proof-of-Work consensus is the defining characteristic for commodity status under US digital asset legislation.',
                },
                {
                  framework: 'GENIUS Act',
                  classification: 'Stablecoin Platform',
                  detail: 'United States',
                  description:
                    'The only Proof-of-Work EVM platform for regulated stablecoin deployment under the GENIUS Act. Positions ETC as the immutable settlement layer for compliant digital dollar infrastructure.',
                },
                {
                  framework: 'MiCA',
                  classification: 'Decentralized Asset',
                  detail: 'European Union',
                  description:
                    'Classified as a decentralized crypto-asset under MiCA, exempt from issuer obligations as a fully decentralized protocol with no central issuer or controlling party.',
                },
                {
                  framework: 'FSA Green List',
                  classification: 'Recognized Asset',
                  detail: 'Japan',
                  description:
                    'Recognized crypto-asset on the FSA Green List via JVCEA. Enables fast-track listing across all Japanese regulated exchanges without additional review requirements.',
                },
              ].map((item) => (
                <motion.div
                  key={item.framework}
                  variants={fadeInUp}
                  className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"
                >
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-[#00ffae]" />
                  <p className="text-xs font-mono text-[var(--color-text-muted)]">{item.framework}</p>
                  <p className="mt-1 text-base font-semibold text-white">{item.classification}</p>
                  <p className="mt-0.5 text-xs text-[#00ffae]">{item.detail}</p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              How It Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Funded by basefee revenue, not inflation. Block rewards and tips remain untouched.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {howItWorks.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <div
                    className="mb-3 h-1 w-12 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance Process */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <GovernanceStageComponent />
        </div>
      </section>

      {/* Olympia Roadmap */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <OlympiaRoadmap />
        </div>
      </section>

      {/* Coordinating Organizations */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Coordinating Organizations
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Coordinating organizations working together to govern and advance the Ethereum Classic network.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: 'Ethereum Classic',
                  role: 'Network Protocol',
                  description: 'The largest Proof-of-Work smart contract platform. Coordinating network upgrades to maintain EVM parity and modern tooling.',
                  href: 'https://ethereumclassic.com',
                },
                {
                  name: 'Olympia Treasury',
                  role: 'Protocol-Funded Treasury',
                  description: 'Basefee revenue creates sustainable protocol funding. Real-time treasury monitoring via public dashboard.',
                  href: olympiaLinks.treasuryDashboard,
                },
                {
                  name: 'Olympia DAO',
                  role: 'On-Chain Governance',
                  description: 'CoreDAO membership NFTs for critical protocol decisions, futarchy prediction markets for public participation — all on-chain on Ethereum Classic.',
                  href: olympiaLinks.olympiaDAO,
                },
                {
                  name: 'Ethereum Classic DAO LLC',
                  role: 'Legal Entity',
                  description: 'The legal wrapper for the Olympia DAO under Wyoming\'s DAO LLC framework. Ensures regulatory compliance, proper reporting, and alignment with digital asset legislation.',
                  href: olympiaLinks.ethereumClassicDAO,
                },
              ].map((entity) => (
                <motion.a
                  key={entity.name}
                  variants={fadeInUp}
                  href={entity.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:-translate-y-0.5 hover:border-[#00ffae]/20"
                >
                  <h3 className="text-base font-semibold text-white">{entity.name}</h3>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{entity.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {entity.description}
                  </p>
                  <span className="mt-4 text-xs font-medium text-[#00ffae] transition group-hover:translate-x-0.5">
                    Visit →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Olympia Upgrade"
        items={olympiaFAQ.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
            Ready to Upgrade?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-[var(--color-text-muted)]">
            Fukuii is the recommended client. Core-Geth is maintained through the transition.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/clients"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              View Clients
            </Link>
            <Link
              href="/olympia/governance"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              Governance Framework
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

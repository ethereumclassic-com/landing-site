'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import OlympiaCountdown from './components/OlympiaCountdown'
import ECIPGrid from './components/ECIPGrid'
import { FAQAccordion } from '@/app/components/sections/FAQAccordion'
import { olympiaStats, faqs as olympiaFAQ, olympiaLinks } from './data/olympia'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const whatChanges = [
  {
    title: 'EIP-1559 Fee Market',
    description: 'Dynamic base fee brings predictable gas pricing to ETC. No more blind fee auctions.',
    color: '#00ffae',
  },
  {
    title: 'Protocol Treasury',
    description:
      'The basefee is directed to the Treasury. Block rewards remain completely untouched — miners are unaffected.',
    color: '#F59E0B',
  },
  {
    title: 'On-Chain Governance',
    description:
      'Soulbound NFT voting — one address, one vote. No governance token to buy, sell, or trade.',
    color: '#38bdf8',
  },
  {
    title: 'EVM Alignment',
    description:
      '13 EIPs from Shanghai and Cancun: MCOPY, TSTORE, AUTH, BLS precompile, and more.',
    color: '#a78bfa',
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
            On-chain governance and treasury infrastructure for Ethereum Classic. Transaction fee
            revenue funds the protocol vault — block rewards remain completely untouched.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/upgrade"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              Upgrade Your Node
            </Link>
            <a
              href={olympiaLinks.ecipBase + 'ecip-1111'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              Read ECIPs
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

      {/* Stats Strip */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 py-8 md:gap-16">
          {olympiaStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#00ffae]">{stat.value}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Changes */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              What Changes
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Four pillars define the Olympia upgrade.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whatChanges.map((item) => (
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

      {/* ECIPs */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ECIPGrid showFuture />
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
            Three client implementations are ready. Choose your client and follow the upgrade guide.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/upgrade"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              Upgrade Your Node
            </Link>
            <Link
              href="/olympia/governance"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              Read the Governance Framework
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

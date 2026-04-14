'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import GovernanceStageComponent from '../components/GovernanceStage'
import { olympiaLinks } from '../data/olympia'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const fundingFlow = [
  { label: 'Transactions', sublabel: 'Users pay gas fees' },
  { label: 'Basefee Revenue', sublabel: 'EIP-1559 basefee collected' },
  { label: 'Treasury', sublabel: 'Protocol-managed vault' },
  { label: 'Governance', sublabel: 'Community proposals' },
  { label: 'Ecosystem', sublabel: 'Development funding' },
]

const safeguards = [
  {
    label: 'Timelock',
    description:
      'Every approved proposal must wait through a configurable delay period before execution. This gives the community time to review, object, or prepare.',
  },
  {
    label: 'Sanctions Screening',
    description:
      'On-chain sanctions compliance at three layers: proposal submission, active voting, and execution. Sanctioned addresses cannot participate in governance or receive treasury funds.',
  },
  {
    label: 'Two-Layer Governance',
    description:
      'Olympia DAO membership NFTs are non-transferable, preventing vote buying and governance manipulation. Public participation is enabled through futarchy prediction markets — ensuring both protocol accountability and broad community input.',
  },
]

export default function GovernancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/8 blur-[100px]" />
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

          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Olympia Governance Framework
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Membership-based governance with on-chain proposals, voting, and execution.
            Transparent, auditable, and built on Ethereum Classic.
          </motion.p>
        </motion.div>
      </section>

      {/* How It Works — Governance Flow */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <GovernanceStageComponent />
        </div>
      </section>

      {/* Treasury Funding */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Treasury Funding
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              How the Olympia Treasury is funded — sustainably and without impacting miners.
            </motion.p>

            {/* Callout */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 p-8"
            >
              <p className="text-lg font-semibold text-white">
                Basefee revenue funds the Olympia Treasury
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Block rewards and tips remain completely untouched — miners are unaffected.
                The treasury receives basefee revenue, voluntary on-chain donations, and mining
                rewards directed to the treasury address. This creates sustainable, transparent
                funding without inflation or reduced miner compensation.
              </p>
            </motion.div>

            {/* Funding Flow */}
            <motion.div variants={fadeInUp} className="mt-10">
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
                Funding Flow
              </p>

              {/* Desktop */}
              <div className="mt-6 hidden md:block">
                <div className="relative">
                  <div className="absolute top-6 left-10 right-10 h-px bg-[var(--border)]" />
                  <div className="relative grid grid-cols-5 gap-2">
                    {fundingFlow.map((step) => (
                      <div key={step.label} className="text-center">
                        <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                          <span className="text-xs font-bold text-[#00ffae]">
                            {fundingFlow.indexOf(step) + 1}
                          </span>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-white">{step.label}</p>
                        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{step.sublabel}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="mt-6 space-y-4 md:hidden">
                {fundingFlow.map((step) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                      <span className="text-xs font-bold text-[#00ffae]">
                        {fundingFlow.indexOf(step) + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.label}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{step.sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href={olympiaLinks.treasuryDashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
              >
                View the Olympia Treasury Dashboard →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Safeguards
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Built-in protections that keep governance secure and compliant.
            </motion.p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {safeguards.map((sg) => (
                <motion.div
                  key={sg.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <h3 className="text-sm font-semibold text-[#00ffae]">{sg.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{sg.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          <a
            href={olympiaLinks.governanceApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90"
          >
            Launch Governance App
          </a>
          <a
            href={olympiaLinks.treasuryDashboard}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
          >
            View Treasury
          </a>
          <a
            href={olympiaLinks.ethereumClassicDAO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
          >
            Ethereum Classic DAO
          </a>
        </div>
      </section>
    </main>
  )
}

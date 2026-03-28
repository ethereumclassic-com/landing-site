'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import GovernanceStageComponent from '../components/GovernanceStage'
import { deployedContracts, olympiaLinks } from '../data/olympia'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const treasuryInvariants = [
  { label: 'No Minting', description: 'Cannot mint ETC — only holds received inflows.' },
  { label: 'Immutable Code', description: 'No proxy patterns, no admin methods.' },
  { label: 'Protocol-Controlled', description: 'Owned by protocol rules, not a multisig.' },
  { label: 'Fully Transparent', description: 'All inflows/outflows visible on-chain.' },
]

const safeguards = [
  {
    label: 'Timelock',
    description:
      'Every approved proposal must wait through a configurable delay period before execution.',
  },
  {
    label: 'Sanctions Screening',
    description:
      'On-chain sanctions compliance at three layers: proposal submission, active voting, and execution.',
  },
  {
    label: 'Non-Transferable Voting',
    description: 'Voting power is tied to non-transferable membership tokens.',
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
            Accumulate First, Govern Later
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Olympia introduces a protocol treasury funded by EIP-1559 basefee revenue, governed by
            soulbound NFT holders through on-chain proposals with timelock security.
          </motion.p>
        </motion.div>
      </section>

      {/* Treasury Section */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Protocol Treasury
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              The basefee is directed to the Treasury. Block rewards remain completely untouched —
              miners are unaffected. Stage 1 is receive-only: accumulate funds before governance
              activates.
            </motion.p>

            {/* Treasury Invariants */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {treasuryInvariants.map((inv) => (
                <motion.div
                  key={inv.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 p-5"
                >
                  <h3 className="text-sm font-semibold text-[#F59E0B]">{inv.label}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{inv.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance Flow */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <GovernanceStageComponent />
        </div>
      </section>

      {/* Soulbound NFTs */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Soulbound Membership NFTs
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Voting power is tied to non-transferable membership tokens. One address, one vote. No
              governance token to buy, sell, or trade. This prevents vote buying and plutocratic
              governance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Security Safeguards
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Three layers of defense at every stage of the governance process.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {safeguards.map((sg) => (
                <motion.div
                  key={sg.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <h3 className="text-sm font-semibold text-[#00ffae]">{sg.label}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{sg.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAO LLC */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              DAO LLC Legal Wrapper
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-2 max-w-3xl text-[var(--color-text-muted)]"
            >
              Ethereum Classic DAO LLC is registered in Wyoming (Filing ID 2025-001671865) as a legal
              entity subordinate to on-chain governance. The LLC provides limited liability
              protection to members while preserving decentralized decision-making. It cannot
              override on-chain governance decisions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Deployed Contracts */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Deployed Contracts
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Demo v0.3 — identical addresses on Mordor testnet and ETC mainnet.
            </motion.p>

            <div className="mt-6 space-y-2">
              {deployedContracts.map((contract) => (
                <motion.div
                  key={contract.name}
                  variants={fadeInUp}
                  className="flex flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="text-sm font-medium text-white">{contract.name}</span>
                    <span className="ml-2 text-xs text-[var(--color-text-muted)]">
                      {contract.role}
                    </span>
                  </div>
                  <a
                    href={`${olympiaLinks.mainnetExplorer}/address/${contract.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#00ffae] transition hover:text-[#00ffae]/80"
                  >
                    {contract.address}
                  </a>
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

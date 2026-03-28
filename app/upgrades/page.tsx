'use client'

import { motion } from 'framer-motion'
import UpgradeTimeline from '@/app/olympia/components/UpgradeTimeline'
import { forks } from './data/forks'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function UpgradesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Network History
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Network Upgrades
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            From Atlantis to Olympia — every hard fork follows the same community-driven process:
            specification, implementation across multiple clients, testnet deployment, and mainnet
            activation.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <UpgradeTimeline forks={forks} />
        </div>
      </section>
    </main>
  )
}

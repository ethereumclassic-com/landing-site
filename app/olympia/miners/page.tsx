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

const revenueCards = [
  {
    label: 'Block Reward',
    value: '2.048 ETC',
    note: 'Era 4 — unchanged by Olympia',
    color: '#00ffae',
  },
  {
    label: 'Uncle Reward',
    value: 'Standard',
    note: 'No changes to uncle reward structure',
    color: '#00ffae',
  },
  {
    label: 'Basefee Impact',
    value: '< 0.01%',
    note: 'At current ~1 gwei network usage',
    color: '#F59E0B',
  },
  {
    label: 'Priority Fee',
    value: 'Kept by miners',
    note: 'Tips go directly to the miner',
    color: '#00ffae',
  },
]

export default function MinersPage() {
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
            Miners &amp; Olympia
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Block rewards and tips remain completely untouched. Only the EIP-1559 basefee — the portion
            Ethereum burns — is redirected to the protocol treasury.
          </motion.p>
        </motion.div>
      </section>

      {/* Revenue Impact */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Revenue Impact
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Olympia changes fee handling, not block rewards. Here&apos;s what miners keep.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {revenueCards.map((card) => (
                <motion.div
                  key={card.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <p className="text-sm text-[var(--color-text-muted)]">{card.label}</p>
                  <p className="mt-1 text-2xl font-bold" style={{ color: card.color }}>
                    {card.value}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">{card.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Economic Case */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              The Economic Case
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]"
            >
              Funded development means more dApps, more transactions, more fees, and higher ETC
              value. The basefee redirect creates a sustainable development funding mechanism that
              aligns protocol growth with miner incentives. As the network grows and transaction
              volume increases, miners benefit from both their unchanged block rewards and the
              priority fees from increased activity.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 rounded-xl border border-[#00ffae]/20 bg-[#00ffae]/5 p-6">
              <h3 className="text-sm font-semibold text-[#00ffae]">Fee Flow After Olympia</h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00ffae]" />
                  <span>Block reward (2.048 ETC) → Miner</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00ffae]" />
                  <span>Priority fee (tip) → Miner</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <span>Basefee → Protocol Treasury (previously burned on Ethereum)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          <Link
            href="/olympia/clients"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90"
          >
            View Clients
          </Link>
          <Link
            href="/mining"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
          >
            Mining Hub
          </Link>
        </div>
      </section>
    </main>
  )
}

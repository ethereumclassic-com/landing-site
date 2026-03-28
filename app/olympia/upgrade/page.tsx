'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ClientUpgradeCard from '../components/ClientUpgradeCard'
import OlympiaCountdown from '../components/OlympiaCountdown'
import { clients } from '../data/olympia'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function UpgradeHubPage() {
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
            Upgrade Your Node
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Three independent client implementations support the Olympia upgrade. Choose your
            client and follow the guide to stay on the canonical ETC chain.
          </motion.p>
        </motion.div>
      </section>

      {/* Countdown banner */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="banner" />
        </div>
      </section>

      {/* Client cards */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 md:grid-cols-3"
          >
            {clients.map((client) => (
              <ClientUpgradeCard key={client.id} client={client} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* What happens if you don't upgrade */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white">
            What if I don&apos;t upgrade?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
          >
            Nodes that don&apos;t upgrade will follow the old chain rules and will fork off the
            network at the Olympia activation block. You must upgrade your client software before
            the activation block to stay on the canonical ETC chain. This is the same process as
            every prior ETC hard fork (Atlantis, Phoenix, Thanos, Spiral, etc.).
          </motion.p>
        </motion.div>
      </section>
    </main>
  )
}

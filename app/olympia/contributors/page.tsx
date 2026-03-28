'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ContributorCard, { type ContributorData } from '../components/ContributorCard'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const contributors: ContributorData[] = [
  {
    name: 'Fukuii',
    language: 'Scala',
    languageColor: '#DC322F',
    role: 'Primary Client',
    roleColor: '#00ffae',
    description:
      'Next-generation ETC client built from the ground up. Full SNAP sync support, comprehensive RPC coverage, and extensive test suite.',
    stats: [
      { label: 'RPC Methods', value: '143' },
      { label: 'Tests', value: '2,706' },
      { label: 'Language', value: 'Scala 3.3' },
      { label: 'Runtime', value: 'JDK 21' },
    ],
    githubUrl: 'https://github.com/AlanVerbner/fukuii',
    organization: 'White B0x Inc.',
  },
  {
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    role: 'Maintenance',
    roleColor: '#a78bfa',
    description:
      'Battle-tested ETC client based on go-ethereum. The current primary client, transitioning to maintenance role as Fukuii takes over post-Olympia.',
    stats: [
      { label: 'Version', value: 'v1.12.21' },
      { label: 'Language', value: 'Go 1.24' },
      { label: 'Forks Supported', value: '8' },
      { label: 'Years Active', value: '5+' },
    ],
    githubUrl: 'https://github.com/etclabscore/core-geth',
    organization: 'ETC Labs',
  },
  {
    name: 'Hyperledger Besu',
    language: 'Java',
    languageColor: '#B07219',
    role: 'Enterprise',
    roleColor: '#38bdf8',
    description:
      'Enterprise-grade client maintained by the Hyperledger Foundation. Supports permissioning, privacy, and SNAP state serving.',
    stats: [
      { label: 'Version', value: 'v26.3' },
      { label: 'Language', value: 'Java 21' },
      { label: 'Foundation', value: 'Hyperledger' },
      { label: 'License', value: 'Apache 2.0' },
    ],
    githubUrl: 'https://github.com/hyperledger/besu',
    organization: 'Hyperledger Foundation',
  },
]

export default function ContributorsPage() {
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
            Who&apos;s Building Olympia
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Three independent client implementations, two organizations, and thousands of
            cross-client tests. Ethereum Classic&apos;s multi-client architecture ensures no single
            point of failure.
          </motion.p>
        </motion.div>
      </section>

      {/* Client Cards */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 md:grid-cols-3"
          >
            {contributors.map((c) => (
              <ContributorCard key={c.name} contributor={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-client testing */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Cross-Client Test Matrix
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Every EIP and ECIP is tested across all three clients. The ETC-TEST-MATRIX maps test
              coverage for 14 historical forks, mining/PoW, ECBP-1100, and all Olympia specifications.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Historical Forks', value: '14', desc: 'Atlantis through Spiral' },
                { label: 'Olympia ECIPs', value: '5', desc: 'ECIP-1111 through 1121' },
                { label: 'EIPs Aligned', value: '13', desc: 'Shanghai + Cancun subset' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center"
                >
                  <p className="text-3xl font-bold text-[#00ffae]">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organizations */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white">
              Organizations
            </motion.h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="text-lg font-semibold text-white">Ethereum Classic DAO LLC</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Wyoming-registered DAO LLC (Filing ID 2025-001671865). Governance framework,
                  treasury contracts, and ECIP specification development.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="text-lg font-semibold text-white">White B0x Inc.</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Lead development of Fukuii (next-generation ETC client), cross-client test
                  infrastructure, and Olympia specification implementation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

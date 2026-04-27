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
            className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl"
          >
            Client Implementations
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Fukuii is the primary client for the Olympia era. Core-Geth is actively maintained
            and carried through the upgrade for network continuity, then scheduled to phase out
            as Fukuii assumes the primary role. ETC compatibility plugins for major upstream
            clients are planned for future release.
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
            className="grid gap-6 md:grid-cols-2"
          >
            {clients.filter((c) => c.id !== 'besu').map((client) => (
              <ClientUpgradeCard key={client.id} client={client} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ETC Compatibility Plugins */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-[var(--text-primary)]">
              ETC Compatibility Plugins
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
              Planned for release after Olympia activation — compatibility layers that bring
              Ethereum Classic support to major upstream EVM clients without maintaining full
              forks. Enables enterprise deployments, archive nodes, and cross-chain infrastructure
              on any preferred execution environment.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Hyperledger Besu',
                  language: 'Java',
                  langColor: '#e76f00',
                  description:
                    'Enterprise-grade EVM client from the Hyperledger Foundation. Apache 2.0 licensed. Planned ETC compatibility plugin for enterprise deployments and institutional infrastructure.',
                  links: [
                    { label: 'GitHub', href: 'https://github.com/hyperledger/besu' },
                    { label: 'Docs', href: 'https://besu.hyperledger.org' },
                  ],
                },
                {
                  name: 'Erigon',
                  language: 'Go',
                  langColor: '#00acd7',
                  description:
                    'Archive-optimized EVM client designed for minimal disk usage and fast historical queries. Preferred for analytics infrastructure and full-history nodes.',
                  links: [
                    { label: 'GitHub', href: 'https://github.com/erigontech/erigon' },
                  ],
                },
                {
                  name: 'Go Ethereum',
                  language: 'Go',
                  langColor: '#00acd7',
                  description:
                    'The upstream geth client. ETC compatibility layer maintains parity with the canonical Go Ethereum codebase for maximum tooling compatibility.',
                  links: [
                    { label: 'GitHub', href: 'https://github.com/ethereum/go-ethereum' },
                    { label: 'Docs', href: 'https://geth.ethereum.org' },
                  ],
                },
                {
                  name: 'Nethermind',
                  language: 'C#',
                  langColor: '#9b4993',
                  description:
                    'High-performance .NET EVM client. Enables ETC integration for the Microsoft and enterprise .NET ecosystem, with native Windows deployment support.',
                  links: [
                    { label: 'GitHub', href: 'https://github.com/NethermindEth/nethermind' },
                    { label: 'Docs', href: 'https://docs.nethermind.io' },
                  ],
                },
              ].map((plugin) => (
                <motion.div
                  key={plugin.name}
                  variants={fadeInUp}
                  className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[#00ffae]/20"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">{plugin.name}</h3>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span
                        className="rounded px-1.5 py-0.5 font-mono text-xs font-medium"
                        style={{ backgroundColor: `${plugin.langColor}20`, color: plugin.langColor }}
                      >
                        {plugin.language}
                      </span>
                      <span className="rounded bg-[#f59e0b15] px-1.5 py-0.5 text-xs font-medium text-[#f59e0b]">
                        Future
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {plugin.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {plugin.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

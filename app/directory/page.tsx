'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { wallets } from '../wallet/data/wallets'
import { exchanges } from '../buy/data/exchanges'
import { miningPools } from '../mining/data/mining'
import { nodeClients, devTools } from '../build/data/build'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

// Directory category data
const directories = [
  {
    title: 'Wallets',
    description: 'Hardware, browser, mobile, and web wallets for storing ETC',
    href: '/directory/wallets',
    count: wallets.length,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    highlights: ['Hardware wallets', 'Browser extensions', 'Mobile apps', 'Web wallets'],
  },
  {
    title: 'Exchanges',
    description: 'Centralized and decentralized exchanges trading ETC',
    href: '/directory/exchanges',
    count: exchanges.length,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    highlights: ['Centralized exchanges', 'Decentralized exchanges', 'P2P platforms', 'Global coverage'],
  },
  {
    title: 'Mining',
    description: 'Mining pools, hardware, and software resources',
    href: '/directory/mining',
    count: miningPools.length,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    highlights: ['Mining pools', 'ASIC hardware', 'GPU mining', 'Mining software'],
  },
  {
    title: 'Developers',
    description: 'Tools, clients, and resources for building on ETC',
    href: '/directory/developers',
    count: nodeClients.length + devTools.length,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    highlights: ['Node clients', 'Development tools', 'RPC endpoints', 'Documentation'],
  },
  {
    title: 'Community',
    description: 'Social channels, forums, and community resources',
    href: '/directory/community',
    count: null,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    highlights: ['Discord', 'Twitter/X', 'Telegram', 'Forums'],
  },
]

// Quick stats
const stats = [
  { label: 'Wallets', value: wallets.length, suffix: '+' },
  { label: 'Exchanges', value: exchanges.length, suffix: '+' },
  { label: 'Mining Pools', value: miningPools.length, suffix: '' },
  { label: 'Dev Tools', value: nodeClients.length + devTools.length, suffix: '+' },
]

function DirectoryIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export default function DirectoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary)]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-2 text-sm text-[var(--color-primary)]">
              <DirectoryIcon />
              <span>Ecosystem Directory</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              ETC Resource Directory
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Your comprehensive guide to the Ethereum Classic ecosystem. Find wallets, exchanges,
              mining resources, development tools, and community channels all in one place.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="text-2xl font-bold text-[var(--color-primary)]">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Directory Categories */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {directories.map((dir) => (
              <motion.div key={dir.title} variants={fadeInUp}>
                <Link
                  href={dir.href}
                  className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-transform group-hover:scale-110">
                      {dir.icon}
                    </div>
                    {dir.count !== null && (
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                        {dir.count} items
                      </span>
                    )}
                  </div>

                  <h2 className="mb-2 text-xl font-semibold text-white transition group-hover:text-[var(--color-primary)]">
                    {dir.title}
                  </h2>
                  <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                    {dir.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {dir.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs text-[var(--color-text-secondary)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Browse {dir.title}</span>
                    <ArrowIcon />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Quick Access</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Jump directly to the most popular resources
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Wallets Quick Links */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="mb-3 font-semibold text-white">Popular Wallets</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wallet" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    MetaMask Setup Guide
                  </Link>
                </li>
                <li>
                  <Link href="/wallet/hardware" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Hardware Wallets
                  </Link>
                </li>
                <li>
                  <Link href="/wallet/compare" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Compare Wallets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Exchanges Quick Links */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="mb-3 font-semibold text-white">Top Exchanges</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/exchanges" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    All Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/buy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Buy ETC Guide
                  </Link>
                </li>
                <li>
                  <Link href="/buy/exchanges" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Exchange Comparison
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mining Quick Links */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="mb-3 font-semibold text-white">Mining Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/mining" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Mining Guide
                  </Link>
                </li>
                <li>
                  <Link href="/mining/pools" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Pool Directory
                  </Link>
                </li>
                <li>
                  <Link href="/mining/start" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Getting Started
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developer Quick Links */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="mb-3 font-semibold text-white">Developer Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/build" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Build on ETC
                  </Link>
                </li>
                <li>
                  <Link href="/build/clients" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Node Clients
                  </Link>
                </li>
                <li>
                  <Link href="/build/start" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                    Dev Quick Start
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 p-8 text-center md:p-12"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              The Ethereum Classic ecosystem is constantly growing. If you know of a resource
              that should be listed here, let us know.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/apps/submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Submit a Resource
                <ArrowIcon />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
              >
                Join the Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

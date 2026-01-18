'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getGamesApps } from '../data/apps'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const gameTypes = [
  {
    name: 'Play-to-Earn',
    description: 'Earn ETC rewards while playing',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-green-500/10 text-green-400',
  },
  {
    name: 'Casino & Gambling',
    description: 'Provably fair games of chance',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    color: 'bg-amber-500/10 text-amber-400',
  },
  {
    name: 'Predictions & Betting',
    description: 'Bet on outcomes and events',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: 'bg-blue-500/10 text-blue-400',
  },
]

export default function GamesPage() {
  const gamesApps = getGamesApps()

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/apps"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Apps
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Games on ETC
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Play blockchain games on Ethereum Classic. From play-to-earn adventures to
                provably fair casino games, all powered by immutable smart contracts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Game Types */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-3"
          >
            {gameTypes.map((type) => (
              <motion.div
                key={type.name}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${type.color}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{type.name}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Games List */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Available Games
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {gamesApps.map((app) => (
              <motion.div
                key={app.slug}
                variants={fadeInUp}
                className={`rounded-xl border p-6 transition-colors ${
                  app.featured
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : 'border-[var(--border)] bg-[var(--panel)] hover:border-amber-500/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white">{app.name}</h3>
                  {app.featured && (
                    <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{app.description}</p>

                {app.stats && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {app.stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-[var(--bg)] p-2 text-center">
                        <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                        <div className="text-sm font-medium text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {app.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {app.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/apps/${app.slug}`}
                    className="text-sm text-[var(--color-primary)] hover:underline"
                  >
                    Learn More
                  </Link>
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-black transition-colors hover:bg-amber-400"
                  >
                    Play Now
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Provably Fair Info */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">What is Provably Fair?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Provably fair games use cryptographic techniques to prove that outcomes are truly
                  random and not manipulated. On ETC, this is achieved through:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span><strong className="text-white">Verifiable Random Functions (VRF)</strong> - Chainlink VRF provides tamper-proof randomness</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span><strong className="text-white">Commit-Reveal Schemes</strong> - Outcomes are committed before bets are placed</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span><strong className="text-white">On-Chain Verification</strong> - Anyone can audit results on Blockscout</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h3 className="font-semibold">Responsible Gaming</h3>
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Gambling involves risk. Only play with funds you can afford to lose. If you or
                  someone you know has a gambling problem, seek help from a professional organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Explore More Apps</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Discover the full Ethereum Classic ecosystem. DeFi, NFTs, tools, and more.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/apps/nft"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
              >
                NFT Platforms
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                All Apps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

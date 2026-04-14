'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

const socialPlatforms = [
  {
    name: 'Discord',
    description: 'Main community server — real-time discussions, support, and announcements',
    url: 'https://discord.com/invite/Tq57jxSwsa',
    members: '20K+',
    category: 'Chat',
  },
  {
    name: 'Telegram',
    description: 'Active chat group for ETC news and community updates',
    url: 'https://t.me/ethclassic',
    members: '15K+',
    category: 'Chat',
  },
  {
    name: 'X (Twitter)',
    description: 'Official ETC Network account — news, updates, and ecosystem highlights',
    url: 'https://x.com/ETC_Network',
    members: '600K+',
    category: 'Social',
  },
  {
    name: 'Reddit',
    description: 'r/EthereumClassic — discussions, memes, and community governance',
    url: 'https://reddit.com/r/EthereumClassic',
    members: '200K+',
    category: 'Forum',
  },
  {
    name: 'GitHub',
    description: 'Open-source development — core clients, tools, and ecosystem projects',
    url: 'https://github.com/ethereumclassic',
    members: '50+ repos',
    category: 'Development',
  },
  {
    name: 'YouTube',
    description: 'Core dev calls, tutorials, and community content',
    url: 'https://youtube.com/@ETCCooperative',
    members: '5K+',
    category: 'Media',
  },
]

const communityResources = [
  {
    title: 'Core Dev Calls',
    description: 'Bi-weekly developer meetings covering protocol upgrades, EIPs, and client development',
    href: '/core-devs',
  },
  {
    title: 'ECIPs',
    description: 'Ethereum Classic Improvement Proposals — the governance process for protocol changes',
    href: 'https://ecips.ethereumclassic.org',
    external: true,
  },
  {
    title: 'Olympia Governance',
    description: 'On-chain governance through Olympia DAO membership, voting, and basefee-funded treasury',
    href: '/olympia/governance',
  },
  {
    title: 'Why Classic?',
    description: 'Philosophy articles on immutability, decentralization, and code-is-law principles',
    href: '/why-classic',
  },
]

export default function DirectoryCommunityPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/directory"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Directory
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Community Directory</h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Connect with the Ethereum Classic community across social platforms,
                forums, and developer channels.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-xl font-semibold text-white">Social Platforms</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {platform.name}
                    </h3>
                    <span className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                      {platform.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{platform.description}</p>
                  <div className="mt-3 text-sm font-medium text-[var(--color-primary)]">{platform.members} members</div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-xl font-semibold text-white">Resources & Governance</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {communityResources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noopener noreferrer' : undefined}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {resource.title}
                    {resource.external && (
                      <svg aria-hidden="true" className="ml-1 inline h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{resource.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Community Hub
            </Link>
            <Link
              href="/community/contribute"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
            >
              How to Contribute
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

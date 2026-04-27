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

const socialChannels = [
  {
    name: 'Discord',
    description: 'Join the main ETC community server for real-time discussions',
    url: 'https://discord.com/invite/Tq57jxSwsa',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    color: 'bg-indigo-500/10 text-indigo-400',
    members: '20K+',
  },
  {
    name: 'Twitter / X',
    description: 'Follow for news, updates, and announcements',
    url: 'https://x.com/ETC_Network',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'bg-gray-500/10 text-gray-400',
    members: '500K+',
  },
  {
    name: 'Telegram',
    description: 'Community chat and quick updates',
    url: 'https://t.me/ethclassic',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: 'bg-blue-500/10 text-blue-400',
    members: '15K+',
  },
  {
    name: 'Reddit',
    description: 'Join r/EthereumClassic for discussions',
    url: 'https://reddit.com/r/EthereumClassic',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
    color: 'bg-orange-500/10 text-orange-400',
    members: '50K+',
  },
]

const communityStats = [
  { label: 'Twitter Followers', value: '500K+' },
  { label: 'Discord Members', value: '20K+' },
  { label: 'GitHub Contributors', value: '100+' },
  { label: 'Global Communities', value: '25+' },
]

const waysToContribute = [
  {
    title: 'Development',
    description: 'Contribute to ETC core clients, tooling, and ecosystem projects',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    link: 'https://github.com/ethereumclassic',
  },
  {
    title: 'Documentation',
    description: 'Help improve guides, tutorials, and technical documentation',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    link: '/build/docs',
  },
  {
    title: 'Translation',
    description: 'Translate content to make ETC accessible globally',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    link: '/community/contribute',
  },
  {
    title: 'Community Support',
    description: 'Help newcomers and answer questions in community channels',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    link: 'https://discord.com/invite/Tq57jxSwsa',
  },
]

const quickLinks = [
  { label: 'Social Media', href: '/community/social', description: 'All official channels' },
  { label: 'Events', href: '/community/events', description: 'Upcoming gatherings' },
  { label: 'News', href: '/news', description: 'Latest updates' },
  { label: 'Learn', href: '/learn', description: 'Educational resources' },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Community
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Join the global Ethereum Classic community. Connect with enthusiasts, developers,
                miners, and builders who believe in immutability and decentralization.
              </p>
            </motion.div>

            {/* Community Stats */}
            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {communityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {quickLinks.map((link) => (
              <motion.div key={link.label} variants={fadeInUp}>
                <Link
                  href={link.href}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {link.label}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{link.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Channels */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Join the Conversation
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {socialChannels.map((channel) => (
              <motion.a
                key={channel.name}
                variants={fadeInUp}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${channel.color}`}>
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {channel.name}
                    </h3>
                    <span className="text-sm text-[var(--color-text-muted)]">{channel.members}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{channel.description}</p>
                </div>
                <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center"
          >
            <Link
              href="/community/social"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
            >
              View all social channels
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-white"
          >
            Ways to Contribute
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {waysToContribute.map((way) => (
              <motion.a
                key={way.title}
                variants={fadeInUp}
                href={way.link}
                target={way.link.startsWith('http') ? '_blank' : undefined}
                rel={way.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {way.icon}
                </div>
                <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                  {way.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{way.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code is Law */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Our Principles</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Code is Law</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Smart contracts execute as written. No exceptions, no bailouts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Immutability</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Transaction history cannot be altered. Your assets are permanent.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Proof of Work</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Real computational work secures the network. No stake required.
                  </p>
                </div>
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
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Join?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              The ETC community welcomes everyone. Start by joining our Discord server and
              introducing yourself.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.com/invite/Tq57jxSwsa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Join Discord
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/community/events"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Upcoming Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

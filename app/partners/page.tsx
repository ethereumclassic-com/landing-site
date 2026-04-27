'use client'

import { useState } from 'react'
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

type PartnerCategory = 'all' | 'wallets' | 'exchanges' | 'infrastructure' | 'development' | 'mining' | 'defi'

interface Partner {
  name: string
  description: string
  category: Exclude<PartnerCategory, 'all'>
  url: string
  logo?: string
  featured?: boolean
  partnerSince?: string
}

const partners: Partner[] = [
  // Wallets
  {
    name: 'Trezor',
    description: 'The original hardware wallet with full ETC support and open-source firmware.',
    category: 'wallets',
    url: 'https://trezor.io',
    featured: true,
    partnerSince: '2016',
  },
  {
    name: 'Ledger',
    description: 'Leading hardware wallet brand with secure element technology.',
    category: 'wallets',
    url: 'https://ledger.com',
    featured: true,
    partnerSince: '2017',
  },
  {
    name: 'MetaMask',
    description: 'The most popular browser extension wallet for EVM chains.',
    category: 'wallets',
    url: 'https://metamask.io',
    featured: true,
    partnerSince: '2018',
  },
  {
    name: 'Trust Wallet',
    description: 'Multi-chain mobile wallet with native ETC support.',
    category: 'wallets',
    url: 'https://trustwallet.com',
    partnerSince: '2019',
  },
  {
    name: 'Exodus',
    description: 'Desktop and mobile wallet with beautiful interface.',
    category: 'wallets',
    url: 'https://exodus.com',
    partnerSince: '2018',
  },

  // Exchanges
  {
    name: 'Binance',
    description: 'World\'s largest cryptocurrency exchange by trading volume.',
    category: 'exchanges',
    url: 'https://binance.com',
    featured: true,
    partnerSince: '2017',
  },
  {
    name: 'Coinbase',
    description: 'US-based exchange with strong regulatory compliance.',
    category: 'exchanges',
    url: 'https://coinbase.com',
    featured: true,
    partnerSince: '2017',
  },
  {
    name: 'Kraken',
    description: 'Established exchange known for security and reliability.',
    category: 'exchanges',
    url: 'https://kraken.com',
    featured: true,
    partnerSince: '2016',
  },
  {
    name: 'OKX',
    description: 'Global exchange with comprehensive trading features.',
    category: 'exchanges',
    url: 'https://okx.com',
    partnerSince: '2018',
  },
  {
    name: 'Gate.io',
    description: 'Long-standing exchange with diverse ETC trading pairs.',
    category: 'exchanges',
    url: 'https://gate.io',
    partnerSince: '2017',
  },

  // Infrastructure
  {
    name: 'Blockscout',
    description: 'Open-source block explorer powering ETC network visibility.',
    category: 'infrastructure',
    url: 'https://etc.blockscout.com',
    featured: true,
    partnerSince: '2019',
  },
  {
    name: 'Rivet',
    description: 'Public RPC endpoint provider for ETC developers.',
    category: 'infrastructure',
    url: 'https://rivet.cloud',
    partnerSince: '2021',
  },
  {
    name: 'MiningPoolStats',
    description: 'Mining pool statistics and network data.',
    category: 'infrastructure',
    url: 'https://miningpoolstats.stream',
    partnerSince: '2019',
  },

  // Development
  {
    name: 'ETC Cooperative',
    description: 'Non-profit supporting ETC protocol development.',
    category: 'development',
    url: 'https://etccooperative.org',
    featured: true,
    partnerSince: '2017',
  },
  {
    name: 'Chippr Robotics',
    description: 'Developers of Fukuii, the native ETC client.',
    category: 'development',
    url: 'https://github.com/chippr-robotics',
    partnerSince: '2024',
  },

  // Mining
  {
    name: 'F2Pool',
    description: 'One of the largest ETC mining pools globally.',
    category: 'mining',
    url: 'https://f2pool.com',
    featured: true,
    partnerSince: '2018',
  },
  {
    name: '2Miners',
    description: 'Popular ETC mining pool with extensive statistics.',
    category: 'mining',
    url: 'https://2miners.com',
    featured: true,
    partnerSince: '2018',
  },
  {
    name: 'Poolin',
    description: 'Multi-coin mining pool with ETC support.',
    category: 'mining',
    url: 'https://poolin.com',
    partnerSince: '2019',
  },

  // DeFi
  {
    name: 'ETCswap',
    description: 'Native decentralized exchange for Ethereum Classic.',
    category: 'defi',
    url: 'https://etcswap.org',
    featured: true,
    partnerSince: '2022',
  },
  {
    name: 'Classic OS',
    description: 'DeFi portfolio management dashboard for ETC.',
    category: 'defi',
    url: '/wallet/classic-os',
    partnerSince: '2024',
  },
]

const categories: { id: PartnerCategory; label: string }[] = [
  { id: 'all', label: 'All Partners' },
  { id: 'wallets', label: 'Wallets' },
  { id: 'exchanges', label: 'Exchanges' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'development', label: 'Development' },
  { id: 'mining', label: 'Mining' },
  { id: 'defi', label: 'DeFi' },
]

export default function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>('all')

  const filteredPartners = activeCategory === 'all'
    ? partners
    : partners.filter(p => p.category === activeCategory)

  const featuredPartners = partners.filter(p => p.featured)

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.1),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
            >
              Partner Directory
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Explore the ecosystem of wallets, exchanges, mining pools, and service providers supporting Ethereum Classic.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=partnership"
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                Become a Partner
              </Link>
              <Link
                href="/advertise"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--panel)]"
              >
                Advertise With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="border-b border-[var(--border)] py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-lg font-semibold text-[var(--color-text-muted)]">
            Featured Partners
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {featuredPartners.slice(0, 8).map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target={partner.url.startsWith('http') ? '_blank' : undefined}
                rel={partner.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lg font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
                whileHover={{ scale: 1.05 }}
              >
                {partner.name}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[var(--border)] py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-primary)] text-black'
                    : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group rounded-xl border bg-[var(--panel)] p-6 transition hover:border-[var(--color-primary)]/50 ${
                  partner.featured ? 'border-[var(--color-primary)]/30' : 'border-[var(--border)]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[var(--text-primary)]">{partner.name}</h3>
                      {partner.featured && (
                        <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="mt-1 inline-block text-xs capitalize text-[var(--color-text-muted)]">
                      {partner.category}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {partner.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  {partner.partnerSince && (
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Partner since {partner.partnerSince}
                    </span>
                  )}
                  {partner.url.startsWith('http') ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-primary)] transition hover:underline"
                    >
                      Visit Site
                    </a>
                  ) : (
                    <Link
                      href={partner.url}
                      className="text-sm text-[var(--color-primary)] transition hover:underline"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPartners.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-[var(--color-text-muted)]">No partners found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                Interested in Partnering?
              </h2>
              <p className="mt-4 text-[var(--color-text-muted)]">
                We are always looking to expand the ETC ecosystem. Whether you are a wallet provider, exchange, mining pool, or development team, we would love to hear from you.
              </p>

              <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)]">Partnership Benefits</h3>
                <ul className="mt-4 space-y-2 text-left text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Featured listing in our partner directory
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Promotion through our newsletter and social channels
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Integration with Classic OS and ecosystem products
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Co-marketing opportunities
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact?type=partnership"
                  className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/apps/submit"
                  className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg)]"
                >
                  Submit Your App
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

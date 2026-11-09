'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CONTACT_EMAILS } from '@/lib/social'

type ListingCategory = 'all' | 'wallets' | 'exchanges' | 'infrastructure' | 'development' | 'mining' | 'defi'

interface Listing {
  name: string
  description: string
  category: Exclude<ListingCategory, 'all'>
  url: string
  logo?: string
  featured?: boolean
}

const listings: Listing[] = [
  // Wallets
  {
    name: 'Trezor',
    description: 'The original hardware wallet with full ETC support and open-source firmware.',
    category: 'wallets',
    url: 'https://trezor.io',
    featured: true,
  },
  {
    name: 'Ledger',
    description: 'Hardware wallet with secure element technology.',
    category: 'wallets',
    url: 'https://ledger.com',
    featured: true,
  },
  {
    name: 'MetaMask',
    description: 'Browser extension wallet for EVM chains, which reaches ETC as a custom network.',
    category: 'wallets',
    url: 'https://metamask.io',
    featured: true,
  },
  {
    name: 'Trust Wallet',
    description: 'Multi-chain mobile wallet with native ETC support.',
    category: 'wallets',
    url: 'https://trustwallet.com',
  },
  {
    name: 'Exodus',
    description: 'Desktop and mobile wallet with ETC support.',
    category: 'wallets',
    url: 'https://exodus.com',
  },

  // Exchanges
  {
    name: 'Binance',
    description: 'Global cryptocurrency exchange with deep ETC liquidity.',
    category: 'exchanges',
    url: 'https://binance.com',
    featured: true,
  },
  {
    name: 'Coinbase',
    description: 'US-based regulated exchange.',
    category: 'exchanges',
    url: 'https://coinbase.com',
    featured: true,
  },
  {
    name: 'Kraken',
    description: 'Long-established exchange with ETC markets.',
    category: 'exchanges',
    url: 'https://kraken.com',
    featured: true,
  },
  {
    name: 'OKX',
    description: 'Global exchange with comprehensive trading features.',
    category: 'exchanges',
    url: 'https://okx.com',
  },
  {
    name: 'Gate.io',
    description: 'Long-standing exchange with diverse ETC trading pairs.',
    category: 'exchanges',
    url: 'https://gate.io',
  },

  // Infrastructure
  {
    name: 'Blockscout',
    description: 'Open-source block explorer for ETC.',
    category: 'infrastructure',
    url: 'https://etc.blockscout.com',
    featured: true,
  },
  {
    name: 'MiningPoolStats',
    description: 'Mining pool statistics and network data.',
    category: 'infrastructure',
    url: 'https://miningpoolstats.stream',
  },

  // Development
  {
    name: 'ETC Cooperative',
    description: 'Non-profit that funded Ethereum Classic public goods from 2017, and is winding down.',
    category: 'development',
    url: 'https://etccooperative.org',
    featured: true,
  },
  {
    name: 'Chippr Robotics',
    description:
      'Maintains Fukuii, an execution client in Scala 3 with native Proof-of-Work for Ethereum Classic.',
    category: 'development',
    url: 'https://github.com/chippr-robotics/fukuii',
  },

  // Mining
  {
    name: 'F2Pool',
    description: 'ETC mining pool with PPS payouts and a 0.1 ETC minimum.',
    category: 'mining',
    url: 'https://f2pool.com',
    featured: true,
  },
  {
    name: '2Miners',
    description: 'ETC mining pool with detailed statistics.',
    category: 'mining',
    url: 'https://2miners.com',
    featured: true,
  },

  // DeFi
  {
    name: 'ETCswap',
    description: 'Native decentralized exchange for Ethereum Classic.',
    category: 'defi',
    url: 'https://etcswap.org',
    featured: true,
  },
]

const categories: { id: ListingCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'wallets', label: 'Wallets' },
  { id: 'exchanges', label: 'Exchanges' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'development', label: 'Development' },
  { id: 'mining', label: 'Mining' },
  { id: 'defi', label: 'DeFi' },
]

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState<ListingCategory>('all')

  const filteredListings = activeCategory === 'all'
    ? listings
    : listings.filter(p => p.category === activeCategory)

  const featuredListings = listings.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.1),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1
              className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
            >
              Ecosystem Directory
            </h1>
            <p
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Wallets, exchanges, mining pools, infrastructure providers and service companies that support Ethereum Classic. A listing describes a product&apos;s ETC support; it does not imply that the company listed endorses this site.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAILS.listings}`}
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
              >
                Request a Listing
              </a>
              <Link
                href="/advertise"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--panel)]"
              >
                Advertise With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-b border-[var(--border)] py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center text-lg font-semibold text-[var(--color-text-muted)]">
            Featured
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {featuredListings.slice(0, 8).map((listing) => (
              <a
                key={listing.name}
                href={listing.url}
                target={listing.url.startsWith('http') ? '_blank' : undefined}
                rel={listing.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lg font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
              >
                {listing.name}
              </a>
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
                    ? 'bg-[var(--color-primary)] text-[var(--brand-green-foreground)]'
                    : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredListings.map((listing) => (
              <div
                key={listing.name}
                className={`group rounded-xl border bg-[var(--panel)] p-6 transition hover:border-[var(--color-primary)]/50 ${
                  listing.featured ? 'border-[var(--color-primary)]/30' : 'border-[var(--border)]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[var(--text-primary)]">{listing.name}</h3>
                      {listing.featured && (
                        <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="mt-1 inline-block text-xs text-[var(--color-text-muted)]">
                      {categories.find((c) => c.id === listing.category)?.label}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {listing.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  {listing.url.startsWith('http') ? (
                    <a
                      href={listing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-primary)] transition hover:underline"
                    >
                      Visit Site
                    </a>
                  ) : (
                    <Link
                      href={listing.url}
                      className="text-sm text-[var(--color-primary)] transition hover:underline"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-[var(--color-text-muted)]">No listings in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Listing requests */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                Request a Listing
              </h2>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Wallets, exchanges, mining pools and development teams that support Ethereum Classic can ask to be
                listed. Every listing is checked before it appears, and the featured ones are chosen editorially.
                For a partnership rather than a listing, see{' '}
                <Link href="/partners" className="text-[var(--color-primary)] hover:underline">
                  Partnerships
                </Link>
                .
              </p>

              <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)]">What a Listing Needs</h3>
                <ul className="mt-4 space-y-2 text-left text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    ETC support that anyone can verify on-chain or in the product
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    A public team or an established reputation
                  </li>
                  <li className="flex items-start gap-2">
                    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    A security review, for anything that holds or moves funds
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${CONTACT_EMAILS.listings}`}
                  className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
                >
                  Contact Us
                </a>
                <Link
                  href="/apps/submit"
                  className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg)]"
                >
                  Submit Your App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

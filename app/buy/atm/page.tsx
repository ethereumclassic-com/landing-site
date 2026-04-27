'use client'

import { useState, useMemo } from 'react'
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

// ATM Network Providers
const atmProviders = [
  {
    id: 'bitcoin-depot',
    name: 'Bitcoin Depot',
    website: 'https://bitcoindepot.com',
    locatorUrl: 'https://bitcoindepot.com/locations',
    supportsETC: true,
    locations: '8,000+',
    regions: ['USA'],
    buyLimit: '$2,500/day',
    sellLimit: 'Varies',
    verificationRequired: 'Phone verification',
    fees: '10-20%',
    features: ['Buy ETC', 'Cash to crypto', '24/7 availability'],
    description: 'One of the largest BTM networks in North America with ETC support at select locations.',
  },
  {
    id: 'coinflip',
    name: 'CoinFlip',
    website: 'https://coinflip.tech',
    locatorUrl: 'https://coinflip.tech/bitcoin-atm',
    supportsETC: true,
    locations: '5,000+',
    regions: ['USA', 'Canada'],
    buyLimit: '$25,000/day',
    sellLimit: '$10,000/day',
    verificationRequired: 'Phone + ID for higher limits',
    fees: '6.99-15.99%',
    features: ['Buy ETC', 'Sell ETC', 'High limits', 'Cash out'],
    description: 'Major ATM network with competitive fees and ETC support at many locations.',
  },
  {
    id: 'coinme',
    name: 'Coinme',
    website: 'https://coinme.com',
    locatorUrl: 'https://coinme.com/locations',
    supportsETC: false,
    locations: '10,000+',
    regions: ['USA'],
    buyLimit: '$2,500/day',
    sellLimit: 'N/A',
    verificationRequired: 'Account required',
    fees: '4-11%',
    features: ['Walmart locations', 'Low fees', 'Wide availability'],
    description: 'Available at Walmart and other retailers. Currently supports BTC only - swap to ETC after.',
  },
  {
    id: 'libertyx',
    name: 'LibertyX',
    website: 'https://libertyx.com',
    locatorUrl: 'https://libertyx.com/a/buy/locations',
    supportsETC: false,
    locations: '5,000+',
    regions: ['USA'],
    buyLimit: '$500-$1,500/day',
    sellLimit: 'N/A',
    verificationRequired: 'Phone verification',
    fees: '8%',
    features: ['Retail stores', 'Debit card option', 'Low minimum'],
    description: 'Buy Bitcoin at retail locations and ATMs. Swap BTC to ETC on an exchange.',
  },
  {
    id: 'coinhub',
    name: 'CoinHub',
    website: 'https://coinhubatm.com',
    locatorUrl: 'https://coinhubatm.com/locations',
    supportsETC: true,
    locations: '1,000+',
    regions: ['USA'],
    buyLimit: '$15,000/day',
    sellLimit: '$5,000/day',
    verificationRequired: 'Phone + ID for higher limits',
    fees: '15-25%',
    features: ['Buy ETC', 'Sell ETC', 'High limits'],
    description: 'Growing ATM network with direct ETC support and cash-out options.',
  },
  {
    id: 'rockit-coin',
    name: 'RockItCoin',
    website: 'https://rockitcoin.com',
    locatorUrl: 'https://rockitcoin.com/atm-locator',
    supportsETC: true,
    locations: '1,800+',
    regions: ['USA'],
    buyLimit: 'Varies',
    sellLimit: 'Varies',
    verificationRequired: 'Phone verification',
    fees: '15-25%',
    features: ['Buy ETC', 'Wide coverage'],
    description: 'Bitcoin ATM network with ETC support at select locations.',
  },
]

// ATM Aggregator services
const atmAggregators = [
  {
    name: 'CoinATMRadar',
    website: 'https://coinatmradar.com',
    description: 'The most comprehensive Bitcoin ATM map. Filter by cryptocurrency to find ETC-supporting ATMs.',
    icon: '🗺️',
  },
  {
    name: 'Bitcoin ATM Map',
    website: 'https://bitcoinatmmap.com',
    description: 'Search for Bitcoin and crypto ATMs worldwide with detailed information.',
    icon: '📍',
  },
  {
    name: 'Coin ATM Finder',
    website: 'https://coinatmfinder.com',
    description: 'Find the nearest cryptocurrency ATM with fee comparisons.',
    icon: '🔍',
  },
]

function ProviderCard({ provider }: { provider: typeof atmProviders[0] }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{provider.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{provider.description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {provider.supportsETC ? (
            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
              ETC Supported
            </span>
          ) : (
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
              BTC Only
            </span>
          )}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-[var(--color-text-muted)]">Locations</p>
          <p className="font-medium text-white">{provider.locations}</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Regions</p>
          <p className="font-medium text-white">{provider.regions.join(', ')}</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Buy Limit</p>
          <p className="font-medium text-white">{provider.buyLimit}</p>
        </div>
        <div>
          <p className="text-[var(--color-text-muted)]">Fees</p>
          <p className="font-medium text-white">{provider.fees}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs text-[var(--color-text-muted)]">Features</p>
        <div className="flex flex-wrap gap-1">
          {provider.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={provider.locatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Find Locations
          <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        <a
          href={provider.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
        >
          Website
        </a>
      </div>
    </motion.div>
  )
}

export default function ATMPage() {
  const [filter, setFilter] = useState<'all' | 'etc'>('all')

  const filteredProviders = useMemo(() => {
    if (filter === 'etc') {
      return atmProviders.filter((p) => p.supportsETC)
    }
    return atmProviders
  }, [filter])

  const etcSupportedCount = atmProviders.filter((p) => p.supportsETC).length

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/buy"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Buy ETC
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Crypto ATM Locator
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Find Bitcoin and cryptocurrency ATMs near you. Buy Ethereum Classic with cash at thousands
                of locations, or purchase Bitcoin and swap to ETC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center">
              <p className="text-3xl font-bold text-[var(--color-primary)]">39,000+</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Crypto ATMs Worldwide</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center">
              <p className="text-3xl font-bold text-green-400">{etcSupportedCount}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Networks with Direct ETC</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center">
              <p className="text-3xl font-bold text-amber-400">5-25%</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Typical ATM Fees</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Note */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">How to Use ATMs for ETC</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  <strong className="text-green-400">Direct ETC:</strong> Some ATM networks support Ethereum Classic directly.
                  Simply select ETC at the machine and provide your wallet address.{' '}
                  <strong className="text-amber-400">BTC Only:</strong> If an ATM only supports Bitcoin, buy BTC and then
                  swap to ETC on an exchange like{' '}
                  <a href="https://etcswap.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                    ETCswap
                  </a>
                  {' '}or{' '}
                  <a href="https://changenow.io" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                    ChangeNOW
                  </a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              All Providers ({atmProviders.length})
            </button>
            <button
              onClick={() => setFilter('etc')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'etc'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              Direct ETC ({etcSupportedCount})
            </button>
          </div>
        </div>
      </section>

      {/* ATM Providers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ATM Finder Services */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-xl font-semibold text-white">ATM Finder Services</h2>
            <p className="mb-6 text-sm text-[var(--color-text-muted)]">
              Use these services to find the nearest crypto ATM regardless of provider:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {atmAggregators.map((aggregator) => (
                <a
                  key={aggregator.name}
                  href={aggregator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="mb-3 text-3xl">{aggregator.icon}</div>
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {aggregator.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{aggregator.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-primary)]">
                    Visit Site
                    <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-6 text-lg font-semibold text-white">How to Use a Crypto ATM</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: 'Find an ATM',
                  description: 'Use the locator links above to find a nearby crypto ATM that supports ETC or BTC.',
                },
                {
                  step: 2,
                  title: 'Verify Identity',
                  description: 'Most ATMs require phone verification. Higher limits may need ID scanning.',
                },
                {
                  step: 3,
                  title: 'Enter Wallet',
                  description: 'Scan your ETC wallet QR code or type your address. Double-check before confirming.',
                },
                {
                  step: 4,
                  title: 'Insert Cash',
                  description: 'Insert your cash. The ATM will display the amount of crypto you will receive.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-black">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="mb-4 font-semibold text-green-400">Tips for Best Results</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Compare fees between ATM providers before buying</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Have your wallet QR code ready before arriving</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Check operating hours - many ATMs are in stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Keep your receipt until crypto arrives in your wallet</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h3 className="mb-4 font-semibold text-amber-400">Things to Know</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>ATM fees are typically higher than online exchanges</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Transaction limits vary by provider and verification level</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Most ATMs require phone verification at minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>Crypto may take 10-60 minutes to arrive</span>
                </li>
              </ul>
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
            <h2 className="text-2xl font-bold text-white">Prefer to Buy Online?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Online exchanges typically offer lower fees than ATMs. Check out our exchange directory
              for more options.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy/exchanges"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Browse Exchanges
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/buy/card"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Buy with Card
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

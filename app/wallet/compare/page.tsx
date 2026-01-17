'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { wallets, type Wallet, type WalletType } from '../data/wallets'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

type FilterType = 'all' | WalletType
type SortOption = 'name' | 'type' | 'security'

const featureLabels: Record<string, string> = {
  nonCustodial: 'Non-Custodial',
  openSource: 'Open Source',
  multiChain: 'Multi-Chain',
  defiSupport: 'DeFi Support',
  nftSupport: 'NFT Support',
  staking: 'Staking',
  buyIntegrated: 'Buy Crypto',
  hardwareSupport: 'HW Wallet',
}

const typeColors: Record<WalletType, { bg: string; text: string; border: string }> = {
  Hardware: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  Browser: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  Mobile: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  Web: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
}

const securityColors: Record<string, { bg: string; text: string }> = {
  high: { bg: 'bg-green-500/10', text: 'text-green-400' },
  medium: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  standard: { bg: 'bg-gray-500/10', text: 'text-gray-400' },
}

const easeColors: Record<string, { bg: string; text: string }> = {
  beginner: { bg: 'bg-green-500/10', text: 'text-green-400' },
  intermediate: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  advanced: { bg: 'bg-red-500/10', text: 'text-red-400' },
}

function FeatureCheckmark({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ) : (
    <svg className="h-5 w-5 text-[var(--color-text-muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function WalletComparisonRow({ wallet }: { wallet: Wallet }) {
  const typeColor = typeColors[wallet.type]
  const securityColor = securityColors[wallet.securityLevel || 'medium']
  const easeColor = easeColors[wallet.ease || 'intermediate']

  return (
    <tr className="border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--panel)]/50">
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{wallet.name}</span>
              {wallet.supportsClassicOS && (
                <span className="rounded-full bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
                  COS
                </span>
              )}
            </div>
            <span className="text-xs text-[var(--color-text-muted)]">{wallet.description}</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-2 text-center">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${typeColor.bg} ${typeColor.text}`}>
          {wallet.type}
        </span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ${securityColor.bg} ${securityColor.text}`}>
          {wallet.securityLevel || 'Medium'}
        </span>
      </td>
      <td className="py-4 px-2 text-center">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ${easeColor.bg} ${easeColor.text}`}>
          {wallet.ease || 'Intermediate'}
        </span>
      </td>
      {Object.keys(featureLabels).map((feature) => (
        <td key={feature} className="py-4 px-2 text-center">
          <div className="flex justify-center">
            <FeatureCheckmark enabled={wallet.features?.[feature as keyof typeof wallet.features] ?? false} />
          </div>
        </td>
      ))}
      <td className="py-4 pl-4 text-right">
        <a
          href={wallet.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Visit
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </td>
    </tr>
  )
}

function WalletComparisonCard({ wallet }: { wallet: Wallet }) {
  const typeColor = typeColors[wallet.type]
  const securityColor = securityColors[wallet.securityLevel || 'medium']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white">{wallet.name}</h3>
            {wallet.supportsClassicOS && (
              <span className="rounded-full bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
                Classic OS
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{wallet.description}</p>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${typeColor.bg} ${typeColor.text}`}>
          {wallet.type}
        </span>
      </div>

      <div className="mb-3 flex gap-2">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${securityColor.bg} ${securityColor.text}`}>
          {wallet.securityLevel || 'Medium'} Security
        </span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${easeColors[wallet.ease || 'intermediate'].bg} ${easeColors[wallet.ease || 'intermediate'].text}`}>
          {wallet.ease || 'Intermediate'}
        </span>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-2">
        {Object.entries(featureLabels).slice(0, 8).map(([key, label]) => (
          <div
            key={key}
            className={`flex items-center gap-1 text-xs ${
              wallet.features?.[key as keyof typeof wallet.features]
                ? 'text-[var(--color-text-secondary)]'
                : 'text-[var(--color-text-muted)]/50'
            }`}
            title={label}
          >
            {wallet.features?.[key as keyof typeof wallet.features] ? (
              <svg className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="truncate">{label}</span>
          </div>
        ))}
      </div>

      <a
        href={wallet.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--color-bg-primary)] py-2 text-sm font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
      >
        Visit Website
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function ComparePage() {
  const [filterType, setFilterType] = useState<FilterType>('all')
  const [sortBy, setSortBy] = useState<SortOption>('type')
  const [showClassicOSOnly, setShowClassicOSOnly] = useState(false)
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')

  const filteredWallets = useMemo(() => {
    let result = [...wallets]

    // Filter by type
    if (filterType !== 'all') {
      result = result.filter((w) => w.type === filterType)
    }

    // Filter by Classic OS support
    if (showClassicOSOnly) {
      result = result.filter((w) => w.supportsClassicOS)
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'type':
          return a.type.localeCompare(b.type)
        case 'security':
          const secOrder = { high: 0, medium: 1, standard: 2 }
          return (secOrder[a.securityLevel || 'medium'] || 1) - (secOrder[b.securityLevel || 'medium'] || 1)
        default:
          return 0
      }
    })

    return result
  }, [filterType, sortBy, showClassicOSOnly])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-6xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/wallet"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Wallets
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">Compare</span>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              {wallets.length} Wallets
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Compare{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ETC Wallets
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Find the perfect wallet for your needs. Compare features, security levels, and platform support
            across all Ethereum Classic compatible wallets.
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-4 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          {/* Type Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--color-text-muted)]">Type:</span>
            {(['all', 'Hardware', 'Browser', 'Mobile', 'Web'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                  filterType === type
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10 hover:text-white'
                }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Classic OS Filter */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={showClassicOSOnly}
                onChange={(e) => setShowClassicOSOnly(e.target.checked)}
                className="h-4 w-4 rounded border-[var(--border)] bg-[var(--panel)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-offset-0"
              />
              <span className="text-sm text-[var(--color-text-muted)]">Classic OS Compatible</span>
            </label>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-text-muted)]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="type">Type</option>
                <option value="name">Name</option>
                <option value="security">Security</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-[var(--border)] bg-[var(--panel)]">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 ${viewMode === 'table' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-muted)]'} rounded-l-lg transition-colors`}
                title="Table view"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 ${viewMode === 'cards' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-muted)]'} rounded-r-lg transition-colors`}
                title="Card view"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table/Cards */}
      <section className="px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm text-[var(--color-text-muted)]">
            Showing {filteredWallets.length} wallet{filteredWallets.length !== 1 ? 's' : ''}
          </p>

          {viewMode === 'table' ? (
            <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--panel)]">
              <table className="w-full min-w-[1200px]">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--color-bg-primary)]">
                    <th className="py-3 pr-4 pl-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Wallet</th>
                    <th className="py-3 px-2 text-center text-sm font-medium text-[var(--color-text-muted)]">Type</th>
                    <th className="py-3 px-2 text-center text-sm font-medium text-[var(--color-text-muted)]">Security</th>
                    <th className="py-3 px-2 text-center text-sm font-medium text-[var(--color-text-muted)]">Ease</th>
                    {Object.values(featureLabels).map((label) => (
                      <th key={label} className="py-3 px-2 text-center text-sm font-medium text-[var(--color-text-muted)]">
                        <span className="inline-block max-w-[60px] truncate" title={label}>{label}</span>
                      </th>
                    ))}
                    <th className="py-3 pl-4 text-right text-sm font-medium text-[var(--color-text-muted)]">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWallets.map((wallet) => (
                    <WalletComparisonRow key={wallet.name} wallet={wallet} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWallets.map((wallet) => (
                <WalletComparisonCard key={wallet.name} wallet={wallet} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legend */}
      <section className="border-t border-[var(--border)] px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-lg font-semibold text-white">Feature Legend</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(featureLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Security Levels</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">High</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Hardware wallets, air-gapped</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">Medium</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Software wallets with encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gray-500/10 px-2 py-0.5 text-xs font-medium text-gray-400">Standard</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Basic encryption</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Ease of Use</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">Beginner</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Simple setup, intuitive UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">Intermediate</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Some technical knowledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">Advanced</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Technical expertise required</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Badges</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">COS</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Works with Classic OS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--panel)] p-8 text-center"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Need Help Choosing?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              Check out our detailed guides for specific wallet types or get started with our recommended setup.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/wallet/hardware"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Hardware Wallet Guide
              </Link>
              <Link
                href="/wallet/metamask"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                MetaMask Setup
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

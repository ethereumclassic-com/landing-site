'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { wallets, type WalletType, type Wallet } from '../../wallet/data/wallets'

type ViewMode = 'grid' | 'table'
type SortOption = 'name' | 'type' | 'security'
type SecurityFilter = 'all' | 'high' | 'medium' | 'standard'
type EaseFilter = 'all' | 'beginner' | 'intermediate' | 'advanced'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

function WalletIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  )
}

function TableIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

function getTypeIcon(type: WalletType) {
  switch (type) {
    case 'Hardware':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      )
    case 'Browser':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    case 'Mobile':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    case 'Web':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
  }
}

function getSecurityBadge(level: 'high' | 'medium' | 'standard' | undefined) {
  switch (level) {
    case 'high':
      return <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">High Security</span>
    case 'medium':
      return <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-400">Medium</span>
    case 'standard':
      return <span className="rounded-full bg-gray-500/10 px-2 py-0.5 text-xs font-medium text-gray-400">Standard</span>
    default:
      return null
  }
}

function WalletCard({ wallet }: { wallet: Wallet }) {
  const isHardware = wallet.type === 'Hardware'

  return (
    <motion.a
      variants={fadeInUp}
      href={wallet.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border p-5 transition-all ${
        isHardware
          ? 'border-green-500/30 bg-green-500/5 hover:border-green-500/50 hover:bg-green-500/10'
          : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${
          isHardware
            ? 'bg-green-500/20 text-green-400'
            : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
        }`}>
          {wallet.name[0]}
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            isHardware
              ? 'bg-green-500/10 text-green-400'
              : 'bg-white/5 text-[var(--color-text-secondary)]'
          }`}>
            {getTypeIcon(wallet.type)}
            <span>{wallet.type}</span>
          </span>
        </div>
      </div>

      <h3 className="mb-1 text-lg font-semibold text-white transition group-hover:text-[var(--color-primary)]">
        {wallet.name}
      </h3>
      <p className="mb-3 text-sm text-[var(--color-text-muted)] line-clamp-2">
        {wallet.description}
      </p>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {getSecurityBadge(wallet.securityLevel)}
        {wallet.ease && (
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
            {wallet.ease.charAt(0).toUpperCase() + wallet.ease.slice(1)}
          </span>
        )}
        {wallet.supportsClassicOS && (
          <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
            Classic OS
          </span>
        )}
      </div>

      {wallet.platforms && (
        <div className="flex flex-wrap gap-1">
          {wallet.platforms.slice(0, 4).map((platform) => (
            <span
              key={platform}
              className="rounded border border-[var(--border)] bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {platform}
            </span>
          ))}
          {wallet.platforms.length > 4 && (
            <span className="rounded border border-[var(--border)] bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
              +{wallet.platforms.length - 4}
            </span>
          )}
        </div>
      )}

      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
        <span>Visit Website</span>
        <ExternalLinkIcon />
      </div>
    </motion.a>
  )
}

function WalletTableRow({ wallet }: { wallet: Wallet }) {
  const isHardware = wallet.type === 'Hardware'

  return (
    <motion.tr
      variants={fadeInUp}
      className="group border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--panel)]"
    >
      <td className="py-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
            isHardware
              ? 'bg-green-500/20 text-green-400'
              : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
          }`}>
            {wallet.name[0]}
          </div>
          <div>
            <div className="font-medium text-white">{wallet.name}</div>
            <p className="hidden text-xs text-[var(--color-text-muted)] xl:block">
              {wallet.description.length > 50
                ? wallet.description.slice(0, 50) + '...'
                : wallet.description}
            </p>
          </div>
        </div>
      </td>
      <td className="hidden py-4 md:table-cell">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${
          isHardware
            ? 'bg-green-500/10 text-green-400'
            : 'bg-white/5 text-[var(--color-text-secondary)]'
        }`}>
          {getTypeIcon(wallet.type)}
          {wallet.type}
        </span>
      </td>
      <td className="hidden py-4 lg:table-cell">
        {getSecurityBadge(wallet.securityLevel)}
      </td>
      <td className="hidden py-4 md:table-cell">
        <span className="text-sm text-[var(--color-text-secondary)]">
          {wallet.ease ? wallet.ease.charAt(0).toUpperCase() + wallet.ease.slice(1) : '-'}
        </span>
      </td>
      <td className="hidden py-4 xl:table-cell">
        <div className="flex flex-wrap gap-1">
          {wallet.platforms?.slice(0, 3).map((platform) => (
            <span
              key={platform}
              className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {platform}
            </span>
          ))}
          {(wallet.platforms?.length ?? 0) > 3 && (
            <span className="text-xs text-[var(--color-text-muted)]">
              +{(wallet.platforms?.length ?? 0) - 3}
            </span>
          )}
        </div>
      </td>
      <td className="py-4 text-right">
        <a
          href={wallet.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
            isHardware
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'border border-[var(--border)] bg-[var(--panel)] text-white hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10'
          }`}
        >
          <span className="hidden sm:inline">Visit</span>
          <ExternalLinkIcon />
        </a>
      </td>
    </motion.tr>
  )
}

export default function DirectoryWalletsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('type')
  const [typeFilter, setTypeFilter] = useState<WalletType | 'all'>('all')
  const [securityFilter, setSecurityFilter] = useState<SecurityFilter>('all')
  const [easeFilter, setEaseFilter] = useState<EaseFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredWallets = useMemo(() => {
    let result = [...wallets]

    // Apply filters
    if (typeFilter !== 'all') {
      result = result.filter((w) => w.type === typeFilter)
    }
    if (securityFilter !== 'all') {
      result = result.filter((w) => w.securityLevel === securityFilter)
    }
    if (easeFilter !== 'all') {
      result = result.filter((w) => w.ease === easeFilter)
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (w) =>
          w.name.toLowerCase().includes(query) ||
          w.description.toLowerCase().includes(query)
      )
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'type':
          const typeOrder = { Hardware: 0, Browser: 1, Mobile: 2, Web: 3 }
          return typeOrder[a.type] - typeOrder[b.type]
        case 'security':
          const secOrder = { high: 0, medium: 1, standard: 2 }
          return (secOrder[a.securityLevel ?? 'standard'] ?? 3) - (secOrder[b.securityLevel ?? 'standard'] ?? 3)
        default:
          return 0
      }
    })

    return result
  }, [typeFilter, securityFilter, easeFilter, searchQuery, sortBy])

  // Stats
  const typeStats = {
    hardware: wallets.filter((w) => w.type === 'Hardware').length,
    browser: wallets.filter((w) => w.type === 'Browser').length,
    mobile: wallets.filter((w) => w.type === 'Mobile').length,
    web: wallets.filter((w) => w.type === 'Web').length,
  }

  const hasFilters = typeFilter !== 'all' || securityFilter !== 'all' || easeFilter !== 'all' || searchQuery

  const clearFilters = () => {
    setTypeFilter('all')
    setSecurityFilter('all')
    setEaseFilter('all')
    setSearchQuery('')
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary)]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/directory"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Directory
            </Link>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-2 text-sm text-[var(--color-primary)]">
                  <WalletIcon />
                  <span>Wallet Directory</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  ETC Wallets
                </h1>
                <p className="mt-4 max-w-xl text-lg text-[var(--color-text-muted)]">
                  Complete directory of wallets supporting Ethereum Classic. Compare hardware,
                  browser, mobile, and web wallet options.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-green-400">{typeStats.hardware}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Hardware</div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{typeStats.browser}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Browser</div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{typeStats.mobile}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Mobile</div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{typeStats.web}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Web</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)]/95 px-6 py-4 backdrop-blur md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search & Filters */}
            <div className="flex flex-1 flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="Search wallets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none sm:w-48"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as WalletType | 'all')}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="Hardware">Hardware</option>
                <option value="Browser">Browser</option>
                <option value="Mobile">Mobile</option>
                <option value="Web">Web</option>
              </select>
              <select
                value={securityFilter}
                onChange={(e) => setSecurityFilter(e.target.value as SecurityFilter)}
                className="hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none sm:block"
              >
                <option value="all">All Security</option>
                <option value="high">High Security</option>
                <option value="medium">Medium</option>
                <option value="standard">Standard</option>
              </select>
              <select
                value={easeFilter}
                onChange={(e) => setEaseFilter(e.target.value as EaseFilter)}
                className="hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none md:block"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
              >
                <option value="type">Sort by Type</option>
                <option value="name">Sort by Name</option>
                <option value="security">Sort by Security</option>
              </select>
              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--panel)]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-white'}`}
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 transition-colors ${viewMode === 'table' ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-white'}`}
                >
                  <TableIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {hasFilters && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--color-text-muted)]">Active filters:</span>
              {typeFilter !== 'all' && (
                <button
                  onClick={() => setTypeFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {typeFilter}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {securityFilter !== 'all' && (
                <button
                  onClick={() => setSecurityFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {securityFilter} security
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {easeFilter !== 'all' && (
                <button
                  onClick={() => setEaseFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {easeFilter}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  &quot;{searchQuery}&quot;
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-muted)]">
              Showing {filteredWallets.length} of {wallets.length} wallets
            </p>
          </div>

          {viewMode === 'grid' ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredWallets.map((wallet) => (
                <WalletCard key={wallet.name} wallet={wallet} />
              ))}
            </motion.div>
          ) : (
            <div className="overflow-x-auto">
              <motion.table
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="py-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Wallet</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Type</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] lg:table-cell">Security</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Ease</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] xl:table-cell">Platforms</th>
                    <th className="py-4 text-right text-sm font-medium text-[var(--color-text-muted)]"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWallets.map((wallet) => (
                    <WalletTableRow key={wallet.name} wallet={wallet} />
                  ))}
                </tbody>
              </motion.table>
            </div>
          )}

          {filteredWallets.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-[var(--color-text-muted)]">No wallets match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-[var(--color-primary)] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-[var(--panel)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white">Need Help Choosing?</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Compare wallets side by side or read our guides to find the best wallet for your needs.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/wallet/compare"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Compare Wallets
            </Link>
            <Link
              href="/wallet"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
            >
              Wallet Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

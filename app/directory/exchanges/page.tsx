'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { exchanges, sortExchangesByVolume, type Exchange, type PaymentMethod } from '../../buy/data/exchanges'

type ViewMode = 'grid' | 'table'
type SortOption = 'volume' | 'name' | 'fee'
type TypeFilter = 'all' | 'CEX' | 'DEX'
type RegionFilter = 'all' | 'Global' | 'US' | 'EU' | 'Asia'
type KYCFilter = 'all' | 'required' | 'optional'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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

function ExchangeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
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

function PaymentIcon({ method }: { method: PaymentMethod }) {
  switch (method) {
    case 'Card':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    case 'Bank':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    case 'Crypto':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    case 'P2P':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    case 'Wire':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    case 'Wallet':
      return (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg>
      )
  }
}

function ExchangeCard({ exchange }: { exchange: Exchange }) {
  const isDEX = exchange.type === 'DEX'

  return (
    <motion.a
      variants={fadeInUp}
      href={exchange.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border p-5 transition-all ${
        isDEX
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
          : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${
          isDEX
            ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
            : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
        }`}>
          {exchange.name[0]}
        </div>
        <div className="flex items-center gap-2">
          {exchange.featured && !isDEX && (
            <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              Featured
            </span>
          )}
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            isDEX
              ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
              : 'bg-white/5 text-[var(--color-text-secondary)]'
          }`}>
            {exchange.type}
          </span>
        </div>
      </div>

      <h3 className="mb-1 text-lg font-semibold text-white transition group-hover:text-[var(--color-primary)]">
        {exchange.name}
      </h3>

      {exchange.volume24h && (
        <div className="mb-3 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
          <span className="text-xs text-[var(--color-text-muted)]">24h Volume</span>
          <span className="font-semibold text-[var(--color-primary)]">{exchange.volume24h}</span>
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {exchange.tradingFee && (
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
            Fee: {exchange.tradingFee}
          </span>
        )}
        {exchange.kycRequired === false && (
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
            No KYC
          </span>
        )}
        {exchange.kycRequired === true && (
          <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
            KYC Required
          </span>
        )}
      </div>

      {/* Trading Pairs */}
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {exchange.pairs.slice(0, 3).map((pair) => (
            <span
              key={pair}
              className="rounded border border-[var(--border)] bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {pair}
            </span>
          ))}
          {exchange.pairs.length > 3 && (
            <span className="rounded border border-[var(--border)] bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
              +{exchange.pairs.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Payment Methods */}
      {exchange.paymentMethods && exchange.paymentMethods.length > 0 && (
        <div className="mb-3 flex items-center gap-1.5">
          {exchange.paymentMethods.slice(0, 4).map((method) => (
            <span
              key={method}
              className="text-[var(--color-text-muted)]"
              title={method}
            >
              <PaymentIcon method={method} />
            </span>
          ))}
          {exchange.paymentMethods.length > 4 && (
            <span className="text-xs text-[var(--color-text-muted)]">
              +{exchange.paymentMethods.length - 4}
            </span>
          )}
        </div>
      )}

      {/* Regions */}
      <div className="text-xs text-[var(--color-text-muted)]">
        {exchange.regions.slice(0, 2).join(', ')}
        {exchange.regions.length > 2 && ` +${exchange.regions.length - 2}`}
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
        <span>Trade Now</span>
        <ExternalLinkIcon />
      </div>
    </motion.a>
  )
}

function ExchangeTableRow({ exchange }: { exchange: Exchange }) {
  const isDEX = exchange.type === 'DEX'

  return (
    <motion.tr
      variants={fadeInUp}
      className="group border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--panel)]"
    >
      <td className="py-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
            isDEX
              ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
              : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
          }`}>
            {exchange.name[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{exchange.name}</span>
              {exchange.featured && (
                <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden py-4 md:table-cell">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${
          isDEX
            ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
            : 'bg-white/5 text-[var(--color-text-secondary)]'
        }`}>
          {exchange.type}
        </span>
      </td>
      <td className="hidden py-4 sm:table-cell">
        <span className={`text-sm ${isDEX ? 'text-[var(--color-text-muted)]' : 'font-medium text-white'}`}>
          {exchange.volume24h}
        </span>
      </td>
      <td className="hidden py-4 lg:table-cell">
        <span className="text-sm text-[var(--color-text-secondary)]">
          {exchange.tradingFee || '-'}
        </span>
      </td>
      <td className="hidden py-4 md:table-cell">
        <div className="flex flex-wrap gap-1">
          {exchange.pairs.slice(0, 2).map((pair) => (
            <span
              key={pair}
              className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
            >
              {pair}
            </span>
          ))}
          {exchange.pairs.length > 2 && (
            <span className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
              +{exchange.pairs.length - 2}
            </span>
          )}
        </div>
      </td>
      <td className="hidden py-4 lg:table-cell">
        {exchange.kycRequired === undefined ? (
          <span className="text-sm text-[var(--color-text-muted)]">-</span>
        ) : exchange.kycRequired ? (
          <span className="text-sm text-amber-400">Required</span>
        ) : (
          <span className="text-sm text-green-400">Optional</span>
        )}
      </td>
      <td className="py-4">
        <span className="text-sm text-[var(--color-text-muted)]">
          {exchange.regions.slice(0, 2).join(', ')}
          {exchange.regions.length > 2 && ` +${exchange.regions.length - 2}`}
        </span>
      </td>
      <td className="py-4 text-right">
        <a
          href={exchange.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
            isDEX
              ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]'
              : 'border border-[var(--border)] bg-[var(--panel)] text-white hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10'
          }`}
        >
          <span className="hidden sm:inline">Trade</span>
          <ExternalLinkIcon />
        </a>
      </td>
    </motion.tr>
  )
}

export default function DirectoryExchangesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('volume')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all')
  const [kycFilter, setKycFilter] = useState<KYCFilter>('all')
  const [paymentFilter, setPaymentFilter] = useState<PaymentMethod | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredExchanges = useMemo(() => {
    let result = [...exchanges]

    // Apply filters
    if (typeFilter !== 'all') {
      result = result.filter((e) => e.type === typeFilter)
    }
    if (regionFilter !== 'all') {
      result = result.filter((e) => e.regions.includes(regionFilter))
    }
    if (kycFilter !== 'all') {
      if (kycFilter === 'required') {
        result = result.filter((e) => e.kycRequired === true)
      } else {
        result = result.filter((e) => e.kycRequired === false)
      }
    }
    if (paymentFilter !== 'all') {
      result = result.filter((e) => e.paymentMethods?.includes(paymentFilter))
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(query) ||
          e.pairs.some((p) => p.toLowerCase().includes(query))
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'volume':
        result = sortExchangesByVolume(result)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'fee':
        result.sort((a, b) => {
          const aFee = parseFloat(a.tradingFee?.replace('%', '') || '999')
          const bFee = parseFloat(b.tradingFee?.replace('%', '') || '999')
          return aFee - bFee
        })
        break
    }

    return result
  }, [typeFilter, regionFilter, kycFilter, paymentFilter, searchQuery, sortBy])

  // Stats
  const cexCount = exchanges.filter((e) => e.type === 'CEX').length
  const dexCount = exchanges.filter((e) => e.type === 'DEX').length
  const noKycCount = exchanges.filter((e) => e.kycRequired === false).length

  const hasFilters = typeFilter !== 'all' || regionFilter !== 'all' || kycFilter !== 'all' || paymentFilter !== 'all' || searchQuery

  const clearFilters = () => {
    setTypeFilter('all')
    setRegionFilter('all')
    setKycFilter('all')
    setPaymentFilter('all')
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
                  <ExchangeIcon />
                  <span>Exchange Directory</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  ETC Exchanges
                </h1>
                <p className="mt-4 max-w-xl text-lg text-[var(--color-text-muted)]">
                  Complete directory of exchanges supporting Ethereum Classic. Compare centralized,
                  decentralized, and P2P trading platforms.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{cexCount}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">CEX</div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{dexCount}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">DEX</div>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 text-center">
                  <div className="text-xl font-bold text-green-400">{noKycCount}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">No KYC</div>
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
                placeholder="Search exchanges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none sm:w-48"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="CEX">Centralized (CEX)</option>
                <option value="DEX">Decentralized (DEX)</option>
              </select>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value as RegionFilter)}
                className="hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none sm:block"
              >
                <option value="all">All Regions</option>
                <option value="Global">Global</option>
                <option value="US">United States</option>
                <option value="EU">Europe</option>
                <option value="Asia">Asia</option>
              </select>
              <select
                value={kycFilter}
                onChange={(e) => setKycFilter(e.target.value as KYCFilter)}
                className="hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none md:block"
              >
                <option value="all">All KYC</option>
                <option value="optional">No KYC</option>
                <option value="required">KYC Required</option>
              </select>
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value as PaymentMethod | 'all')}
                className="hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none lg:block"
              >
                <option value="all">All Payments</option>
                <option value="Card">Card</option>
                <option value="Bank">Bank Transfer</option>
                <option value="Crypto">Crypto</option>
                <option value="P2P">P2P</option>
              </select>
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
              >
                <option value="volume">Sort by Volume</option>
                <option value="name">Sort by Name</option>
                <option value="fee">Sort by Fee</option>
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
              {regionFilter !== 'all' && (
                <button
                  onClick={() => setRegionFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {regionFilter}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {kycFilter !== 'all' && (
                <button
                  onClick={() => setKycFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {kycFilter === 'optional' ? 'No KYC' : 'KYC Required'}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {paymentFilter !== 'all' && (
                <button
                  onClick={() => setPaymentFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                >
                  {paymentFilter}
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
              Showing {filteredExchanges.length} of {exchanges.length} exchanges
            </p>
          </div>

          {viewMode === 'grid' ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredExchanges.map((exchange) => (
                <ExchangeCard key={exchange.name} exchange={exchange} />
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
                    <th className="py-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Exchange</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Type</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] sm:table-cell">Volume</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] lg:table-cell">Fee</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Pairs</th>
                    <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] lg:table-cell">KYC</th>
                    <th className="py-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Regions</th>
                    <th className="py-4 text-right text-sm font-medium text-[var(--color-text-muted)]"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExchanges.map((exchange) => (
                    <ExchangeTableRow key={exchange.name} exchange={exchange} />
                  ))}
                </tbody>
              </motion.table>
            </div>
          )}

          {filteredExchanges.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-[var(--color-text-muted)]">No exchanges match your filters.</p>
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
          <h2 className="text-2xl font-bold text-white">Ready to Buy ETC?</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Check out our guide on how to buy Ethereum Classic or compare exchanges side by side.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              How to Buy ETC
            </Link>
            <Link
              href="/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
            >
              Full Exchange Comparison
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

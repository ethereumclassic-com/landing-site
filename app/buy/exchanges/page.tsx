'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { exchanges, sortExchangesByVolume, type PaymentMethod } from '../data/exchanges'
import ExchangeCard from '../components/ExchangeCard'
import ExchangeTable from '../components/ExchangeTable'

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

type ViewMode = 'table' | 'cards'
type SortOption = 'volume' | 'name' | 'fee'
type TypeFilter = 'all' | 'CEX' | 'DEX'
type RegionFilter = 'all' | 'Global' | 'US' | 'EU' | 'Asia' | 'Korea'

const allRegions: RegionFilter[] = ['all', 'Global', 'US', 'EU', 'Asia', 'Korea']
const allPaymentMethods: PaymentMethod[] = ['Card', 'Bank', 'Crypto', 'P2P', 'Wire', 'Wallet']

export default function ExchangesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [sortBy, setSortBy] = useState<SortOption>('volume')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all')
  const [paymentFilter, setPaymentFilter] = useState<PaymentMethod | 'all'>('all')
  const [kycFilter, setKycFilter] = useState<'all' | 'required' | 'optional'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredExchanges = useMemo(() => {
    let result = [...exchanges]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (ex) =>
          ex.name.toLowerCase().includes(query) ||
          ex.pairs.some((p) => p.toLowerCase().includes(query))
      )
    }

    // Type filter
    if (typeFilter !== 'all') {
      result = result.filter((ex) => ex.type === typeFilter)
    }

    // Region filter
    if (regionFilter !== 'all') {
      result = result.filter((ex) => ex.regions.includes(regionFilter))
    }

    // Payment method filter
    if (paymentFilter !== 'all') {
      result = result.filter((ex) => ex.paymentMethods?.includes(paymentFilter))
    }

    // KYC filter
    if (kycFilter !== 'all') {
      result = result.filter((ex) => {
        if (kycFilter === 'required') return ex.kycRequired === true
        if (kycFilter === 'optional') return ex.kycRequired === false
        return true
      })
    }

    // Sort
    switch (sortBy) {
      case 'volume':
        result = sortExchangesByVolume(result)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'fee':
        result.sort((a, b) => {
          const aFee = parseFloat(a.tradingFee?.replace('%', '') || '100')
          const bFee = parseFloat(b.tradingFee?.replace('%', '') || '100')
          return aFee - bFee
        })
        break
    }

    return result
  }, [searchQuery, typeFilter, regionFilter, paymentFilter, kycFilter, sortBy])

  const dexCount = exchanges.filter((ex) => ex.type === 'DEX').length
  const cexCount = exchanges.filter((ex) => ex.type === 'CEX').length

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/buy"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Buy ETC
            </Link>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            All{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              ETC Exchanges
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]"
          >
            {cexCount} centralized exchanges and {dexCount} decentralized exchange support Ethereum Classic trading.
            Compare fees, payment methods, and find the best exchange for you.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {exchanges.length} Exchanges
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              Global Coverage
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Verified Listings
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search exchanges or pairs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] py-2 pl-10 pr-4 text-sm text-white placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/50 lg:w-64"
              />
            </div>

            {/* Filter row */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Type filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)]/50 focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="CEX">CEX Only</option>
                <option value="DEX">DEX Only</option>
              </select>

              {/* Region filter */}
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value as RegionFilter)}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)]/50 focus:outline-none"
              >
                {allRegions.map((region) => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>

              {/* Payment filter */}
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value as PaymentMethod | 'all')}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)]/50 focus:outline-none"
              >
                <option value="all">All Payments</option>
                {allPaymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>

              {/* KYC filter */}
              <select
                value={kycFilter}
                onChange={(e) => setKycFilter(e.target.value as 'all' | 'required' | 'optional')}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)]/50 focus:outline-none"
              >
                <option value="all">All KYC</option>
                <option value="optional">No KYC</option>
                <option value="required">KYC Required</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)]/50 focus:outline-none"
              >
                <option value="volume">Sort by Volume</option>
                <option value="name">Sort by Name</option>
                <option value="fee">Sort by Fee</option>
              </select>

              {/* View toggle */}
              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--bg)] p-1">
                <button
                  onClick={() => setViewMode('table')}
                  className={`rounded px-3 py-1.5 text-sm transition ${
                    viewMode === 'table'
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125m1.125-2.625c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M3.375 12c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`rounded px-3 py-1.5 text-sm transition ${
                    viewMode === 'cards'
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Active filters display */}
          {(typeFilter !== 'all' || regionFilter !== 'all' || paymentFilter !== 'all' || kycFilter !== 'all' || searchQuery) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--color-text-muted)]">Active filters:</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  &quot;{searchQuery}&quot;
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {typeFilter !== 'all' && (
                <button
                  onClick={() => setTypeFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
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
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  {regionFilter}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {paymentFilter !== 'all' && (
                <button
                  onClick={() => setPaymentFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  {paymentFilter}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {kycFilter !== 'all' && (
                <button
                  onClick={() => setKycFilter('all')}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                >
                  {kycFilter === 'optional' ? 'No KYC' : 'KYC Required'}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {
                  setSearchQuery('')
                  setTypeFilter('all')
                  setRegionFilter('all')
                  setPaymentFilter('all')
                  setKycFilter('all')
                }}
                className="text-xs text-[var(--color-text-muted)] underline hover:text-white"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Exchange List */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-muted)]">
              Showing <span className="font-medium text-white">{filteredExchanges.length}</span> of {exchanges.length} exchanges
            </p>
          </div>

          {filteredExchanges.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-12 text-center"
            >
              <svg
                className="mx-auto h-12 w-12 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-white">No exchanges found</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setTypeFilter('all')
                  setRegionFilter('all')
                  setPaymentFilter('all')
                  setKycFilter('all')
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-white transition hover:bg-[var(--color-primary)]/10"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : viewMode === 'table' ? (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4 md:p-6">
              <ExchangeTable exchanges={filteredExchanges} />
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredExchanges.map((exchange, index) => (
                <ExchangeCard key={exchange.name} exchange={exchange} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DEX Callout */}
      <section className="border-t border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Recommended
            </span>
            <h2 className="mt-4 text-xl font-bold text-white md:text-2xl">
              Trade Without KYC on ETCswap
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-secondary)]">
              ETCswap is Ethereum Classic&apos;s native DEX. Trade directly from your wallet with no account required - non-custodial, permissionless, and censorship-resistant.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://etcswap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                Launch ETCswap
              </a>
              <Link
                href="/apps/etcswap-v3"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6"
          >
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Trading Safety Tips</h3>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li>Always verify you&apos;re on the official exchange website before logging in</li>
                  <li>Enable two-factor authentication (2FA) on all exchange accounts</li>
                  <li>Withdraw to your own wallet for long-term storage - not your keys, not your coins</li>
                  <li>Start with small amounts when using a new exchange</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

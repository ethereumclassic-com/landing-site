'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const ExternalLinkIcon = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

type SortField = 'name' | 'tradingFee' | 'volume' | 'pairs'
type SortDirection = 'asc' | 'desc'

function SortIcon({ field, sortField, sortDirection }: { field: SortField; sortField: SortField; sortDirection: SortDirection }) {
  if (sortField !== field) return null
  return (
    <svg className="ml-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={sortDirection === 'asc' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
    </svg>
  )
}

function parseFeePercent(fee: string | undefined): number {
  if (!fee) return Infinity
  const match = fee.match(/(\d+\.?\d*)%/)
  return match ? parseFloat(match[1]) : Infinity
}

function parseVolume(volume: string | undefined): number {
  if (!volume || volume === 'DEX') return 0
  const match = volume.replace(/[$,]/g, '').match(/(\d+\.?\d*)/)
  if (!match) return 0
  const val = parseFloat(match[1])
  if (volume.includes('M')) return val * 1000000
  if (volume.includes('K')) return val * 1000
  return val
}

export default function CompareExchangesPage() {
  const [sortField, setSortField] = useState<SortField>('volume')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [filterType, setFilterType] = useState<'all' | 'CEX' | 'DEX'>('all')

  // Filter and sort exchanges
  const sortedExchanges = useMemo(() => {
    const filtered = exchanges.filter((ex) => {
      if (filterType === 'all') return true
      return ex.type === filterType
    })

    return [...filtered].sort((a, b) => {
      let comparison = 0
      switch (sortField) {
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'tradingFee':
          comparison = parseFeePercent(a.tradingFee) - parseFeePercent(b.tradingFee)
          break
        case 'volume':
          comparison = parseVolume(b.volume24h) - parseVolume(a.volume24h)
          break
        case 'pairs':
          comparison = b.pairs.length - a.pairs.length
          break
      }
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [sortField, sortDirection, filterType])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection(field === 'tradingFee' ? 'asc' : 'desc')
    }
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--color-text-muted)] hover:text-white">
              Home
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/exchanges" className="text-[var(--color-text-muted)] hover:text-white">
              Exchanges
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">Compare</span>
          </nav>
        </div>
      </div>

      <div className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              Comparison Tool
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Compare Exchanges
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Side-by-side comparison of all {exchanges.length} exchanges. Sort by fees, volume, or pairs to find the best fit for your needs.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-text-muted)]">Filter:</span>
              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--panel)] p-1">
                {(['all', 'CEX', 'DEX'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`rounded-md px-3 py-1 text-sm transition-colors ${
                      filterType === type
                        ? 'bg-[var(--color-primary)] text-black'
                        : 'text-[var(--color-text-muted)] hover:text-white'
                    }`}
                  >
                    {type === 'all' ? 'All' : type}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-[var(--color-text-muted)]">
              Showing {sortedExchanges.length} exchanges
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--panel)]"
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-[var(--border)] text-left">
                  <th
                    className="cursor-pointer px-4 py-3 text-sm font-semibold text-white hover:text-[var(--color-primary)]"
                    onClick={() => handleSort('name')}
                  >
                    Exchange <SortIcon field="name" sortField={sortField} sortDirection={sortDirection} />
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">Type</th>
                  <th
                    className="cursor-pointer px-4 py-3 text-sm font-semibold text-white hover:text-[var(--color-primary)]"
                    onClick={() => handleSort('tradingFee')}
                  >
                    Trading Fee <SortIcon field="tradingFee" sortField={sortField} sortDirection={sortDirection} />
                  </th>
                  <th
                    className="cursor-pointer px-4 py-3 text-sm font-semibold text-white hover:text-[var(--color-primary)]"
                    onClick={() => handleSort('volume')}
                  >
                    24h Volume <SortIcon field="volume" sortField={sortField} sortDirection={sortDirection} />
                  </th>
                  <th
                    className="cursor-pointer px-4 py-3 text-sm font-semibold text-white hover:text-[var(--color-primary)]"
                    onClick={() => handleSort('pairs')}
                  >
                    Pairs <SortIcon field="pairs" sortField={sortField} sortDirection={sortDirection} />
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">KYC</th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">Regions</th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">Payment Methods</th>
                  <th className="px-4 py-3 text-sm font-semibold text-white"></th>
                </tr>
              </thead>
              <tbody>
                {sortedExchanges.map((exchange, index) => (
                  <tr
                    key={exchange.name}
                    className={`border-b border-[var(--border)] last:border-0 ${
                      index % 2 === 0 ? 'bg-[var(--bg)]/30' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{exchange.name}</span>
                        {exchange.featured && (
                          <span className="rounded bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-xs text-[var(--color-primary)]">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded px-2 py-0.5 text-xs ${
                          exchange.type === 'DEX'
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}
                      >
                        {exchange.type}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {exchange.tradingFee ? (
                        <span
                          className={`font-mono text-sm ${
                            parseFeePercent(exchange.tradingFee) <= 0.1
                              ? 'text-green-400'
                              : parseFeePercent(exchange.tradingFee) <= 0.2
                              ? 'text-yellow-400'
                              : 'text-[var(--color-text-secondary)]'
                          }`}
                        >
                          {exchange.tradingFee}
                        </span>
                      ) : (
                        <span className="text-[var(--color-text-muted)]">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {exchange.volume24h && exchange.volume24h !== 'DEX' ? (
                        <span className="font-mono text-sm text-[var(--color-text-secondary)]">
                          {exchange.volume24h}
                        </span>
                      ) : exchange.type === 'DEX' ? (
                        <span className="text-xs text-[var(--color-text-muted)]">On-chain</span>
                      ) : (
                        <span className="text-[var(--color-text-muted)]">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-[var(--color-text-secondary)]">{exchange.pairs.length}</span>
                    </td>
                    <td className="px-4 py-3">
                      {exchange.kycRequired === false ? (
                        <span className="text-green-400">No</span>
                      ) : exchange.kycRequired === true ? (
                        <span className="text-[var(--color-text-muted)]">Yes</span>
                      ) : (
                        <span className="text-[var(--color-text-muted)]">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {exchange.regions.slice(0, 2).map((region) => (
                          <span key={region} className="text-xs text-[var(--color-text-muted)]">
                            {region}
                          </span>
                        ))}
                        {exchange.regions.length > 2 && (
                          <span className="text-xs text-[var(--color-text-muted)]">
                            +{exchange.regions.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {exchange.paymentMethods?.slice(0, 2).map((method) => (
                          <span
                            key={method}
                            className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
                          >
                            {method}
                          </span>
                        ))}
                        {(exchange.paymentMethods?.length ?? 0) > 2 && (
                          <span className="text-xs text-[var(--color-text-muted)]">
                            +{(exchange.paymentMethods?.length ?? 0) - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={exchange.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
                      >
                        Visit <ExternalLinkIcon />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)]"
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <span>Low fees (&le;0.1%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span>Medium fees (0.1-0.2%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400">DEX</span>
              <span>Decentralized</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">CEX</span>
              <span>Centralized</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Link
              href="/exchanges/lowest-fees"
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
            >
              <h3 className="font-semibold text-white">Lowest Fees</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Exchanges sorted by trading fees</p>
            </Link>
            <Link
              href="/exchanges/decentralized"
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
            >
              <h3 className="font-semibold text-white">DEX Only</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Trade without intermediaries</p>
            </Link>
            <Link
              href="/exchanges/no-kyc"
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
            >
              <h3 className="font-semibold text-white">No KYC</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Privacy-focused exchanges</p>
            </Link>
            <Link
              href="/exchanges/us-friendly"
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
            >
              <h3 className="font-semibold text-white">US Friendly</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Regulated for US users</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

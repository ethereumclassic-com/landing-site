'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

// Available assets to add
const availableAssets = [
  { symbol: 'ETC', name: 'Ethereum Classic', price: 24.56, change24h: 3.2 },
  { symbol: 'BTC', name: 'Bitcoin', price: 67234.12, change24h: 1.8 },
  { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change24h: -0.5 },
  { symbol: 'BNB', name: 'BNB', price: 598.34, change24h: 2.1 },
  { symbol: 'SOL', name: 'Solana', price: 145.67, change24h: 4.5 },
  { symbol: 'XRP', name: 'XRP', price: 0.52, change24h: -1.2 },
  { symbol: 'ADA', name: 'Cardano', price: 0.45, change24h: 1.9 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.12, change24h: 5.3 },
  { symbol: 'DOT', name: 'Polkadot', price: 7.23, change24h: 0.8 },
  { symbol: 'LINK', name: 'Chainlink', price: 14.56, change24h: 2.4 },
]

export default function WatchlistPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading, watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist } = useAuth()
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Redirect if not authenticated
  if (!isLoading && !isAuthenticated) {
    router.push('/account/login')
    return null
  }

  if (isLoading) {
    return (
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-center py-20">
            <svg aria-hidden="true" className="h-8 w-8 animate-spin text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
      </main>
    )
  }

  const filteredAssets = availableAssets.filter(
    asset =>
      !isInWatchlist(asset.symbol) &&
      (asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div
          className="mb-8"
        >
          <Link
            href="/account"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--text-primary)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">Price Watchlist</h1>
              <p className="mt-1 text-[var(--color-text-muted)]">
                Track your favorite cryptocurrencies
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              Add Asset
            </button>
          </div>
        </div>

        {/* Watchlist */}
        {watchlist.length === 0 ? (
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-12 text-center"
          >
            <svg aria-hidden="true" className="mx-auto h-16 w-16 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <h2 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">Your watchlist is empty</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Add assets to track their prices and market movements
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              Add Your First Asset
            </button>
          </div>
        ) : (
          <div
            className="space-y-3"
          >
            {watchlist.map((item) => {
              const assetData = availableAssets.find(a => a.symbol === item.symbol)
              return (
                <div
                  key={item.symbol}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                      {item.symbol.slice(0, 3)}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{item.symbol}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{item.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {assetData && (
                      <div className="text-right">
                        <p className="font-semibold text-[var(--text-primary)]">
                          ${assetData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className={`text-sm ${assetData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {assetData.change24h >= 0 ? '+' : ''}{assetData.change24h}%
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => removeFromWatchlist(item.symbol)}
                      className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-red-500/10 hover:text-red-400"
                      title="Remove from watchlist"
                    >
                      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Add Asset Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div
              className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">Add to Watchlist</h2>
                <button
                  onClick={() => {
                    setShowAddModal(false)
                    setSearchQuery('')
                  }}
                  className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--text-primary)]"
                >
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-[var(--text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </div>

              {/* Asset List */}
              <div className="max-h-80 space-y-2 overflow-y-auto">
                {filteredAssets.length === 0 ? (
                  <p className="py-4 text-center text-[var(--color-text-muted)]">
                    {searchQuery ? 'No assets found' : 'All assets are already in your watchlist'}
                  </p>
                ) : (
                  filteredAssets.map((asset) => (
                    <button
                      key={asset.symbol}
                      onClick={() => {
                        addToWatchlist({ symbol: asset.symbol, name: asset.name })
                        setShowAddModal(false)
                        setSearchQuery('')
                      }}
                      className="flex w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg)]/30 p-3 transition-colors hover:border-[var(--color-primary)]/50 hover:bg-[var(--bg)]/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                          {asset.symbol.slice(0, 2)}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-[var(--text-primary)]">{asset.symbol}</p>
                          <p className="text-xs text-[var(--color-text-muted)]">{asset.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[var(--text-primary)]">
                          ${asset.price.toLocaleString()}
                        </p>
                        <p className={`text-xs ${asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                        </p>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth, type PortfolioItem } from '../context/AuthContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

// Available assets with current prices
const assetPrices: Record<string, { name: string; price: number; change24h: number }> = {
  ETC: { name: 'Ethereum Classic', price: 24.56, change24h: 3.2 },
  BTC: { name: 'Bitcoin', price: 67234.12, change24h: 1.8 },
  ETH: { name: 'Ethereum', price: 3456.78, change24h: -0.5 },
  BNB: { name: 'BNB', price: 598.34, change24h: 2.1 },
  SOL: { name: 'Solana', price: 145.67, change24h: 4.5 },
}

const availableAssets = Object.entries(assetPrices).map(([symbol, data]) => ({
  symbol,
  ...data,
}))

export default function PortfolioPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading, portfolio, addToPortfolio, removeFromPortfolio } = useAuth()
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState('')
  const [amount, setAmount] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('')

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
            <svg className="h-8 w-8 animate-spin text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
      </main>
    )
  }

  // Calculate portfolio stats
  const portfolioValue = portfolio.reduce((total, item) => {
    const currentPrice = assetPrices[item.symbol]?.price || item.purchasePrice
    return total + item.amount * currentPrice
  }, 0)

  const portfolioCost = portfolio.reduce((total, item) => {
    return total + item.amount * item.purchasePrice
  }, 0)

  const portfolioGain = portfolioValue - portfolioCost
  const portfolioGainPercent = portfolioCost > 0 ? (portfolioGain / portfolioCost) * 100 : 0

  const handleAddHolding = () => {
    if (!selectedAsset || !amount || !purchasePrice) return

    addToPortfolio({
      symbol: selectedAsset,
      name: assetPrices[selectedAsset]?.name || selectedAsset,
      amount: parseFloat(amount),
      purchasePrice: parseFloat(purchasePrice),
      purchaseDate: purchaseDate || undefined,
    })

    // Reset form
    setShowAddModal(false)
    setSelectedAsset('')
    setAmount('')
    setPurchasePrice('')
    setPurchaseDate('')
  }

  const handleRemoveHolding = (item: PortfolioItem) => {
    if (confirm(`Remove ${item.amount} ${item.symbol} from portfolio?`)) {
      removeFromPortfolio(item.symbol, item.purchaseDate)
    }
  }

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8"
        >
          <Link
            href="/account"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Portfolio Tracker</h1>
              <p className="mt-1 text-[var(--color-text-muted)]">
                Track your cryptocurrency holdings
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              Add Holding
            </button>
          </div>
        </motion.div>

        {/* Portfolio Summary */}
        {portfolio.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-8 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6">
              <p className="text-sm text-[var(--color-text-muted)]">Total Value</p>
              <p className="mt-1 text-2xl font-bold text-white">
                ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6">
              <p className="text-sm text-[var(--color-text-muted)]">Total Cost</p>
              <p className="mt-1 text-2xl font-bold text-white">
                ${portfolioCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6">
              <p className="text-sm text-[var(--color-text-muted)]">Total Gain/Loss</p>
              <p className={`mt-1 text-2xl font-bold ${portfolioGain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolioGain >= 0 ? '+' : ''}${portfolioGain.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className={`text-sm ${portfolioGainPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolioGainPercent >= 0 ? '+' : ''}{portfolioGainPercent.toFixed(2)}%
              </p>
            </div>
          </motion.div>
        )}

        {/* Holdings List */}
        {portfolio.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-12 text-center"
          >
            <svg className="mx-auto h-16 w-16 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <h2 className="mt-4 text-xl font-semibold text-white">No holdings tracked</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Add your cryptocurrency holdings to track their value
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              Add Your First Holding
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-3"
          >
            {portfolio.map((item, index) => {
              const currentPrice = assetPrices[item.symbol]?.price || item.purchasePrice
              const value = item.amount * currentPrice
              const cost = item.amount * item.purchasePrice
              const gain = value - cost
              const gainPercent = (gain / cost) * 100

              return (
                <motion.div
                  key={`${item.symbol}-${index}`}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                        {item.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.symbol}</p>
                        <p className="text-sm text-[var(--color-text-muted)]">{item.name}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveHolding(item)}
                      className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-red-500/10 hover:text-red-400"
                      title="Remove holding"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Amount</p>
                      <p className="font-medium text-white">{item.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Avg. Buy Price</p>
                      <p className="font-medium text-white">${item.purchasePrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Current Value</p>
                      <p className="font-medium text-white">
                        ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">Gain/Loss</p>
                      <p className={`font-medium ${gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {gain >= 0 ? '+' : ''}${gain.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        <span className="ml-1 text-sm">({gainPercent >= 0 ? '+' : ''}{gainPercent.toFixed(2)}%)</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Add Holding Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Add Holding</h2>
                <button
                  onClick={() => {
                    setShowAddModal(false)
                    setSelectedAsset('')
                    setAmount('')
                    setPurchasePrice('')
                    setPurchaseDate('')
                  }}
                  className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--border)] hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Asset</label>
                  <select
                    value={selectedAsset}
                    onChange={(e) => {
                      setSelectedAsset(e.target.value)
                      if (e.target.value && assetPrices[e.target.value]) {
                        setPurchasePrice(assetPrices[e.target.value].price.toString())
                      }
                    }}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  >
                    <option value="" className="bg-[var(--bg)]">Select an asset</option>
                    {availableAssets.map((asset) => (
                      <option key={asset.symbol} value={asset.symbol} className="bg-[var(--bg)]">
                        {asset.symbol} - {asset.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Amount</label>
                  <input
                    type="number"
                    step="any"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Purchase Price (USD)</label>
                  <input
                    type="number"
                    step="any"
                    min="0"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Purchase Date (optional)</label>
                  <input
                    type="date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>

                {selectedAsset && amount && purchasePrice && (
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)]/30 p-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">Total Cost</span>
                      <span className="font-medium text-white">
                        ${(parseFloat(amount) * parseFloat(purchasePrice)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-[var(--color-text-muted)]">Current Value</span>
                      <span className="font-medium text-white">
                        ${(parseFloat(amount) * (assetPrices[selectedAsset]?.price || parseFloat(purchasePrice))).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddHolding}
                  disabled={!selectedAsset || !amount || !purchasePrice}
                  className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add Holding
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  )
}

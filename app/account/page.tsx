'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from './context/AuthContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

// Mock price data - in production this would come from an API
const mockPriceData = {
  ETC: { price: 24.56, change24h: 3.2 },
  BTC: { price: 67234.12, change24h: 1.8 },
  ETH: { price: 3456.78, change24h: -0.5 },
}

export default function AccountDashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoading, logout, watchlist, portfolio } = useAuth()

  // Show loading state
  if (isLoading) {
    return (
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-6xl px-4">
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

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    router.push('/account/login')
    return null
  }

  // Calculate portfolio value
  const portfolioValue = portfolio.reduce((total, item) => {
    const currentPrice = mockPriceData[item.symbol as keyof typeof mockPriceData]?.price || item.purchasePrice
    return total + item.amount * currentPrice
  }, 0)

  const portfolioCost = portfolio.reduce((total, item) => {
    return total + item.amount * item.purchasePrice
  }, 0)

  const portfolioChange = portfolioCost > 0 ? ((portfolioValue - portfolioCost) / portfolioCost) * 100 : 0

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                Welcome back, {user?.name}
              </h1>
              <p className="mt-1 text-[var(--color-text-muted)]">
                Manage your watchlist, portfolio, and account settings
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:border-red-500/50 hover:text-red-400"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Portfolio Value</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">
                  ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
            {portfolioCost > 0 && (
              <p className={`mt-2 text-sm ${portfolioChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(2)}% all time
              </p>
            )}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Holdings</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">{portfolio.length}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {portfolio.length === 1 ? '1 asset' : `${portfolio.length} assets`} tracked
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Watchlist</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">{watchlist.length}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {watchlist.length === 1 ? '1 asset' : `${watchlist.length} assets`} watching
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Currency</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">{user?.preferences.currency}</p>
              </div>
            </div>
            <Link href="/account/settings" className="mt-2 block text-sm text-[var(--color-primary)] hover:underline">
              Change settings
            </Link>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* Watchlist Section */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Watchlist</h2>
              <Link
                href="/account/watchlist"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all
              </Link>
            </div>
            {watchlist.length === 0 ? (
              <div className="py-8 text-center">
                <svg aria-hidden="true" className="mx-auto h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">Your watchlist is empty</p>
                <Link
                  href="/markets"
                  className="mt-4 inline-block rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20"
                >
                  Browse Markets
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {watchlist.slice(0, 5).map((item) => {
                  const priceData = mockPriceData[item.symbol as keyof typeof mockPriceData]
                  return (
                    <div
                      key={item.symbol}
                      className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg)]/30 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                          {item.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-primary)]">{item.symbol}</p>
                          <p className="text-xs text-[var(--color-text-muted)]">{item.name}</p>
                        </div>
                      </div>
                      {priceData && (
                        <div className="text-right">
                          <p className="font-medium text-[var(--text-primary)]">
                            ${priceData.price.toLocaleString()}
                          </p>
                          <p className={`text-xs ${priceData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h}%
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>

          {/* Portfolio Section */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Portfolio</h2>
              <Link
                href="/account/portfolio"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all
              </Link>
            </div>
            {portfolio.length === 0 ? (
              <div className="py-8 text-center">
                <svg aria-hidden="true" className="mx-auto h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">No holdings tracked yet</p>
                <Link
                  href="/account/portfolio"
                  className="mt-4 inline-block rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20"
                >
                  Add Holdings
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {portfolio.slice(0, 5).map((item, index) => {
                  const currentPrice = mockPriceData[item.symbol as keyof typeof mockPriceData]?.price || item.purchasePrice
                  const value = item.amount * currentPrice
                  const gain = ((currentPrice - item.purchasePrice) / item.purchasePrice) * 100
                  return (
                    <div
                      key={`${item.symbol}-${index}`}
                      className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg)]/30 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                          {item.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-primary)]">{item.amount} {item.symbol}</p>
                          <p className="text-xs text-[var(--color-text-muted)]">@ ${item.purchasePrice}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[var(--text-primary)]">
                          ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className={`text-xs ${gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {gain >= 0 ? '+' : ''}{gain.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-8"
        >
          <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/buy"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4 transition-colors hover:border-[var(--color-primary)]/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Buy ETC</p>
                <p className="text-xs text-[var(--color-text-muted)]">Purchase Ethereum Classic</p>
              </div>
            </Link>

            <Link
              href="/wallet"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4 transition-colors hover:border-[var(--color-primary)]/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Get Wallet</p>
                <p className="text-xs text-[var(--color-text-muted)]">Secure your ETC</p>
              </div>
            </Link>

            <Link
              href="/markets"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4 transition-colors hover:border-[var(--color-primary)]/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Markets</p>
                <p className="text-xs text-[var(--color-text-muted)]">View price data</p>
              </div>
            </Link>

            <Link
              href="/account/settings"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-4 transition-colors hover:border-[var(--color-primary)]/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <svg aria-hidden="true" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)]">Settings</p>
                <p className="text-xs text-[var(--color-text-muted)]">Account preferences</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

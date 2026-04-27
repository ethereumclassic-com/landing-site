'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearch, getTypeLabel, getTypeIcon, type SearchResult, type SearchResultType } from '@/hooks/useSearch'

// Navigation structure with dropdowns
const navItems: {
  href?: string
  label: string
  highlight?: boolean
  dropdown?: { href: string; label: string }[]
}[] = [
  { href: '/news', label: 'News' },
  {
    href: '/wallet',
    label: 'Wallet',
    dropdown: [
      { href: '/wallet', label: 'Wallet Hub' },
      { href: '/wallet/reviews', label: 'Wallet Reviews' },
      { href: '/wallet/compare', label: 'Compare Wallets' },
      { href: '/wallet/hardware', label: 'Hardware Wallets' },
      { href: '/wallet/metamask', label: 'MetaMask Setup' },
      { href: '/wallet/classic-os', label: 'Classic OS' },
    ],
  },
  {
    href: '/apps',
    label: 'Apps',
    dropdown: [
      { href: '/apps', label: 'Apps Directory' },
      { href: '/apps/featured', label: 'Featured Apps' },
      { href: '/apps/defi', label: 'DeFi' },
      { href: '/apps/governance', label: 'Governance' },
      { href: '/apps/infrastructure', label: 'Infrastructure' },
      { href: '/apps/tools', label: 'Tools' },
    ],
  },
  {
    href: '/buy',
    label: 'Buy',
    dropdown: [
      { href: '/buy', label: 'Buy ETC' },
      { href: '/buy/exchanges', label: 'Exchanges' },
      { href: '/buy/instant', label: 'Instant Buy' },
      { href: '/buy/card', label: 'Buy with Card' },
      { href: '/buy/atm', label: 'Find ATM' },
      { href: '/sell', label: 'Sell ETC' },
    ],
  },
  {
    href: '/learn',
    label: 'Learn',
    dropdown: [
      { href: '/learn', label: 'Learning Center' },
      { href: '/learn/ethereum-classic', label: 'What is ETC?' },
      { href: '/learn/basics', label: 'ETC Basics' },
      { href: '/learn/wallets', label: 'Wallet Guides' },
      { href: '/learn/defi', label: 'DeFi on ETC' },
      { href: '/regulation', label: 'Regulatory Framework' },
      { href: '/environmental-impact', label: 'Energy Infrastructure' },
    ],
  },
  {
    href: '/mining',
    label: 'Mining',
    dropdown: [
      { href: '/mining', label: 'Mining Hub' },
      { href: '/mining/getting-started', label: 'Getting Started' },
      { href: '/mining/pools', label: 'Mining Pools' },
      { href: '/mining/hardware', label: 'Hardware Guide' },
      { href: '/mining/profitability', label: 'Profitability Calculator' },
    ],
  },
  {
    href: '/build',
    label: 'Build',
    dropdown: [
      { href: '/build', label: 'Developer Hub' },
      { href: '/build/getting-started', label: 'Getting Started' },
      { href: '/build/docs', label: 'Documentation' },
      { href: '/build/tools', label: 'Developer Tools' },
      { href: '/build/clients', label: 'Node Clients' },
      { href: '/core-devs', label: 'Core Dev Calls' },
    ],
  },
  {
    href: '/olympia',
    label: 'Olympia',
    highlight: true,
    dropdown: [
      { href: '/olympia', label: 'Olympia Hub' },
      { href: '/olympia/clients', label: 'Clients' },
      { href: '/olympia/governance', label: 'Governance' },
      { href: '/upgrades', label: 'Network Upgrades' },
    ],
  },
  {
    label: 'More',
    dropdown: [
      { href: '/markets', label: 'Markets' },
      { href: '/price', label: 'ETC Price' },
      { href: '/exchanges', label: 'Exchanges Directory' },
      { href: '/buy/reviews', label: 'Exchange Reviews' },
      { href: '/investment-products', label: 'Investment Products' },
      { href: '/research', label: 'Research' },
      { href: '/block-reward-countdown', label: 'Fifthing' },
      { href: '/research/emission-schedule', label: 'Emission Schedule' },
      { href: '/tools', label: 'Tools' },
      { href: '/directory', label: 'Directory' },
      { href: '/community', label: 'Community' },
    ],
  },
]

// Mobile navigation groups
const mobileNavGroups: {
  label: string
  highlight?: boolean
  items: { href: string; label: string }[]
}[] = [
  {
    label: 'Products',
    items: [
      { href: '/wallet', label: 'Wallet' },
      { href: '/apps', label: 'Apps' },
      { href: '/buy', label: 'Buy ETC' },
      { href: '/sell', label: 'Sell ETC' },
    ],
  },
  {
    label: 'Learn',
    items: [
      { href: '/learn', label: 'Learning Center' },
      { href: '/learn/ethereum-classic', label: 'What is ETC?' },
      { href: '/learn/basics', label: 'ETC Basics' },
      { href: '/regulation', label: 'Regulatory Framework' },
      { href: '/environmental-impact', label: 'Energy Infrastructure' },
      { href: '/news', label: 'News' },
      { href: '/research', label: 'Research' },
      { href: '/block-reward-countdown', label: 'Fifthing' },
      { href: '/research/emission-schedule', label: 'Emission Schedule' },
    ],
  },
  {
    label: 'Ecosystem',
    items: [
      { href: '/mining', label: 'Mining' },
      { href: '/build', label: 'Build' },
      { href: '/core-devs', label: 'Core Dev Calls' },
      { href: '/exchanges', label: 'Exchanges' },
    ],
  },
  {
    label: 'Olympia Upgrade',
    highlight: true,
    items: [
      { href: '/olympia', label: 'Olympia Hub' },
      { href: '/olympia/clients', label: 'Clients' },
      { href: '/olympia/governance', label: 'Governance' },
      { href: '/upgrades', label: 'Network Upgrades' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/markets', label: 'Markets' },
      { href: '/price', label: 'ETC Price' },
      { href: '/investment-products', label: 'Investment Products' },
      { href: '/buy/reviews', label: 'Exchange Reviews' },
      { href: '/tools', label: 'Tools' },
      { href: '/directory', label: 'Directory' },
      { href: '/community', label: 'Community' },
    ],
  },
]

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-10 w-10 rounded-lg" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        /* Sun icon */
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ) : (
        /* Moon icon */
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )}
    </button>
  )
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { query, setQuery, results, groupedResults, isSearching, totalResults, clearSearch } = useSearch(150)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      clearSearch()
      setSelectedIndex(-1)
    }
  }, [isOpen, clearSearch])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (results.length === 0) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault()
        const result = results[selectedIndex]
        if (result) {
          router.push(result.url)
          onClose()
        }
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, results, selectedIndex, router])

  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`)
      selectedElement?.scrollIntoView({ block: 'nearest' })
    }
  }, [selectedIndex])

  useEffect(() => { setSelectedIndex(-1) }, [results])

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      router.push(result.url)
      onClose()
    },
    [router, onClose]
  )

  const displayGroups = Object.entries(groupedResults).filter(([, items]) => items.length > 0) as [
    SearchResultType,
    SearchResult[],
  ][]

  let flatIndex = -1

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 right-4 top-20 z-[70] mx-auto flex max-h-[70vh] max-w-2xl flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl"
          >
            {/* Search Input */}
            <div className="relative shrink-0 p-4">
              <svg aria-hidden="true"
                className="absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-muted)]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, articles, apps, wallets..."
                className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--background)] py-4 pl-12 pr-20 text-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--brand-green)]"
              />
              <div className="absolute right-8 top-1/2 flex -translate-y-1/2 items-center gap-2">
                {isSearching && (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--brand-green)] border-t-transparent" />
                )}
                <kbd className="rounded-lg border border-[var(--border-default)] bg-[var(--background)] px-2 py-1 text-xs text-[var(--text-muted)]">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Search Results */}
            <div ref={resultsRef} className="overflow-y-auto px-4 pb-4">
              {query.length >= 2 && results.length === 0 && !isSearching && (
                <div className="py-8 text-center">
                  <p className="text-[var(--text-muted)]">No results found for &quot;{query}&quot;</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Try different keywords or browse quick links below</p>
                </div>
              )}

              {displayGroups.length > 0 && (
                <div className="space-y-4">
                  {displayGroups.map(([type, items]) => (
                    <div key={type}>
                      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        <span>{getTypeIcon(type)}</span>
                        <span>{getTypeLabel(type)}</span>
                        <span className="rounded-full bg-[var(--bg-elevated)] px-2 py-0.5 text-xs">{items.length}</span>
                      </h3>
                      <div className="space-y-1">
                        {items.map((result) => {
                          flatIndex++
                          const currentIndex = flatIndex
                          return (
                            <button
                              key={result.id}
                              data-index={currentIndex}
                              onClick={() => handleResultClick(result)}
                              className={`w-full rounded-lg px-3 py-2 text-left transition ${
                                selectedIndex === currentIndex
                                  ? 'bg-[var(--brand-green-subtle)] text-[var(--brand-green)]'
                                  : 'hover:bg-[var(--bg-elevated)]'
                              }`}
                            >
                              <div className="font-medium text-[var(--text-primary)]">{result.title}</div>
                              <div className="mt-0.5 line-clamp-1 text-sm text-[var(--text-muted)]">{result.description}</div>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {(query.length < 2 || (results.length === 0 && !isSearching)) && (
                <div className="mt-2">
                  <p className="mb-3 text-sm text-[var(--text-muted)]">Quick links:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { href: '/wallet', label: 'Wallet' },
                      { href: '/buy', label: 'Buy ETC' },
                      { href: '/apps', label: 'Apps' },
                      { href: '/learn', label: 'Learn' },
                      { href: '/mining', label: 'Mining' },
                      { href: '/build', label: 'Build' },
                      { href: '/research', label: 'Research' },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="rounded-lg border border-[var(--border-default)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {totalResults > 0 && (
              <div className="shrink-0 border-t border-[var(--border-default)] px-4 py-2">
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{totalResults} results</span>
                  <span>
                    <kbd className="rounded border border-[var(--border-default)] px-1.5 py-0.5">↑</kbd>
                    <kbd className="ml-1 rounded border border-[var(--border-default)] px-1.5 py-0.5">↓</kbd>
                    <span className="ml-2">to navigate</span>
                    <kbd className="ml-2 rounded border border-[var(--border-default)] px-1.5 py-0.5">↵</kbd>
                    <span className="ml-1">to select</span>
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface DropdownProps {
  items: { href: string; label: string }[]
  isOpen: boolean
  onClose: () => void
}

function Dropdown({ items, isOpen, onClose }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-2 shadow-2xl backdrop-blur-xl"
          onMouseLeave={onClose}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-lg px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const prevPathname = useRef(pathname)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      /* eslint-disable react-hooks/set-state-in-effect */
      setMobileMenuOpen(false)
      setSearchOpen(false)
      /* eslint-enable react-hooks/set-state-in-effect */
      prevPathname.current = pathname
    }
  }, [pathname])

  const isActive = (item: (typeof navItems)[0]) => {
    if ('href' in item && item.href) {
      if (pathname === item.href) return true
      if (item.href !== '/' && pathname.startsWith(item.href)) return true
    }
    if (item.dropdown) {
      return item.dropdown.some(
        (child) => pathname === child.href || pathname.startsWith(child.href)
      )
    }
    return false
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-default)] bg-[var(--background)]/95 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold text-[var(--text-primary)] transition hover:opacity-80"
          >
            <Image
              src="/etc-prism.png"
              alt="Ethereum Classic"
              width={20}
              height={32}
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline">Ethereum Classic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {'href' in item && item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition ${
                      isActive(item)
                        ? 'bg-[var(--brand-green-subtle)] text-[var(--brand-green)]'
                        : item.highlight
                          ? 'text-[var(--brand-green)] opacity-80 hover:bg-[var(--brand-green-subtle)] hover:opacity-100'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.label}
                    {item.highlight && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)] shadow-[0_0_6px_var(--brand-green-glow)]" />
                    )}
                    {item.dropdown && (
                      <svg aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition ${
                      isActive(item)
                        ? 'bg-[var(--brand-green-subtle)] text-[var(--brand-green)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                )}
                {item.dropdown && (
                  <Dropdown
                    items={item.dropdown}
                    isOpen={openDropdown === item.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              aria-label="Search"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Launch App Button (Desktop) */}
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition hover:bg-[var(--brand-green-subtle)] hover:opacity-80 md:inline-flex"
            >
              Launch App
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[var(--border-default)] bg-[var(--background)] lg:hidden"
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto p-4">
                {/* Mobile Launch App Button */}
                <a
                  href="https://app.classicos.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex w-full items-center justify-center rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-3 text-sm font-medium text-[var(--brand-green)] transition hover:opacity-80"
                >
                  Launch App
                  <svg aria-hidden="true" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>

                {/* Mobile Search */}
                <button
                  onClick={() => { setMobileMenuOpen(false); setSearchOpen(true) }}
                  className="mb-4 flex w-full items-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 text-left text-[var(--text-muted)]"
                >
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <span>Search...</span>
                  <kbd className="ml-auto rounded border border-[var(--border-default)] bg-[var(--background)] px-2 py-0.5 text-xs">⌘K</kbd>
                </button>

                {/* Mobile Navigation Groups */}
                <div className="space-y-6">
                  {mobileNavGroups.map((group) => (
                    <div key={group.label}>
                      <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wider ${
                        group.highlight ? 'text-[var(--brand-green)]' : 'text-[var(--text-muted)]'
                      }`}>
                        {group.label}
                        {group.highlight && (
                          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)] shadow-[0_0_6px_var(--brand-green-glow)]" />
                        )}
                      </h3>
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const active = pathname === item.href || pathname.startsWith(item.href)
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block rounded-lg px-4 py-3 transition ${
                                active
                                  ? 'bg-[var(--brand-green-subtle)] text-[var(--brand-green)]'
                                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]'
                              }`}
                            >
                              {item.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

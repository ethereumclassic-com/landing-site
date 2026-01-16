'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/news', label: 'News' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/apps', label: 'Apps' },
  { href: '/buy', label: 'Buy' },
  { href: '/learn', label: 'Learn' },
  { href: '/build', label: 'Build' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white transition hover:text-[var(--etc)]"
        >
          <span className="text-[var(--etc)]">ETC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.classicos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400/20"
          >
            Launch App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--border-soft)] bg-[var(--bg)] md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.classicos.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400/20"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

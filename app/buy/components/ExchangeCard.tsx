'use client'

import { motion } from 'framer-motion'
import type { Exchange } from '../data/exchanges'

interface ExchangeCardProps {
  exchange: Exchange
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  }),
}

function ExchangeTypeIcon({ type }: { type: 'CEX' | 'DEX' }) {
  if (type === 'DEX') {
    return (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    )
  }
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function RegionIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

export default function ExchangeCard({ exchange, index }: ExchangeCardProps) {
  const isDEX = exchange.type === 'DEX'

  return (
    <motion.a
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
      href={exchange.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block rounded-2xl border p-6 transition-all ${
        isDEX
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
          : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
      }`}
    >
      {/* Featured/DEX Badge */}
      {(exchange.featured || isDEX) && (
        <div className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
          isDEX
            ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
            : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
        }`}>
          {isDEX ? 'DEX' : 'Featured'}
        </div>
      )}

      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold transition-transform group-hover:scale-110 ${
          isDEX
            ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
            : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
        }`}>
          {exchange.name[0]}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white transition group-hover:text-[var(--color-primary)]">
            {exchange.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
            <ExchangeTypeIcon type={exchange.type} />
            <span>{exchange.type === 'DEX' ? 'Decentralized' : 'Centralized'}</span>
          </div>
        </div>
      </div>

      {/* Volume */}
      {exchange.volume24h && (
        <div className="mb-4 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
          <span className="text-xs text-[var(--color-text-muted)]">24h Volume</span>
          <span className="font-semibold text-[var(--color-primary)]">{exchange.volume24h}</span>
        </div>
      )}

      {/* Trading Pairs */}
      <div className="mb-3">
        <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
          Trading Pairs
        </div>
        <div className="flex flex-wrap gap-1.5">
          {exchange.pairs.slice(0, 3).map((pair) => (
            <span
              key={pair}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs text-[var(--color-text-secondary)]"
            >
              {pair}
            </span>
          ))}
          {exchange.pairs.length > 3 && (
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]">
              +{exchange.pairs.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Regions */}
      <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
        <RegionIcon />
        <span>{exchange.regions.join(', ')}</span>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
        <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
    </motion.a>
  )
}

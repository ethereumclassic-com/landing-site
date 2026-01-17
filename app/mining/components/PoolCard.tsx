'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { MiningPool } from '../data/mining'

interface PoolCardProps {
  pool: MiningPool
  index: number
  variant?: 'default' | 'compact'
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

export default function PoolCard({ pool, index, variant = 'default' }: PoolCardProps) {
  if (variant === 'compact') {
    return (
      <motion.a
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        variants={fadeInUp}
        href={pool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
            {pool.name[0]}
          </div>
          <div>
            <span className="font-semibold text-white group-hover:text-[var(--color-primary)]">
              {pool.name}
            </span>
            <p className="text-sm text-[var(--color-text-muted)]">{pool.fee}% fee</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-white">{pool.hashShare}%</span>
          <p className="text-xs text-[var(--color-text-muted)]">hashrate</p>
        </div>
      </motion.a>
    )
  }

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-xl font-bold text-[var(--color-primary)]">
          {pool.name[0]}
        </div>
        <div className="flex items-center gap-2">
          {pool.recommended && (
            <span className="flex items-center gap-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recommended
            </span>
          )}
          <span className="rounded-full bg-[var(--bg)] px-2.5 py-0.5 text-xs font-medium text-white">
            {pool.hashShare}% hashrate
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white">{pool.name}</h3>

      {/* Stats Grid */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Fee</p>
          <p className="font-semibold text-white">{pool.fee}%</p>
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Min Payout</p>
          <p className="font-semibold text-white">{pool.minPayout} ETC</p>
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Payout</p>
          <p className="font-semibold text-white">{pool.payoutScheme.join(', ')}</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-4 flex flex-wrap gap-2">
        {pool.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Server Regions */}
      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{pool.servers.map((s) => s.region).join(', ')}</span>
      </div>

      {/* Notes */}
      {pool.notes && (
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{pool.notes}</p>
      )}

      {/* Actions */}
      <div className="mt-6 flex items-center gap-3">
        <a
          href={pool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
        >
          Visit Pool
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        <Link
          href={`/mining/pools/${pool.id}`}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-primary)]/30 hover:text-white"
        >
          Details
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

// Table row variant for pool comparison
export function PoolTableRow({ pool, index }: { pool: MiningPool; index: number }) {
  return (
    <motion.tr
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="border-b border-[var(--border)] transition-colors hover:bg-[var(--panel)]/50"
    >
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
            {pool.name[0]}
          </div>
          <div>
            <span className="font-medium text-white">{pool.name}</span>
            {pool.recommended && (
              <span className="ml-2 rounded-full bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
                Recommended
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-center">
        <span className="font-medium text-white">{pool.fee}%</span>
      </td>
      <td className="py-4 px-4 text-center">
        <span className="text-white">{pool.minPayout}</span>
        <span className="text-[var(--color-text-muted)]"> ETC</span>
      </td>
      <td className="py-4 px-4 text-center">
        <span className="text-white">{pool.hashShare}%</span>
      </td>
      <td className="py-4 px-4 text-center">
        <span className="text-[var(--color-text-muted)]">{pool.payoutScheme.join(', ')}</span>
      </td>
      <td className="py-4 pl-4">
        <div className="flex items-center justify-end gap-2">
          <a
            href={pool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
          >
            Visit
          </a>
        </div>
      </td>
    </motion.tr>
  )
}

'use client'

import { motion } from 'framer-motion'
import type { Wallet } from '../data/wallets'

interface WalletCardProps {
  wallet: Wallet
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

export default function WalletCard({ wallet, index }: WalletCardProps) {
  return (
    <motion.a
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
      href={wallet.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]/80 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-xl font-bold text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
          {wallet.name[0]}
        </div>
        {wallet.supportsClassicOS && (
          <span className="flex items-center gap-1 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Classic OS
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[var(--color-primary)]">
        {wallet.name}
      </h3>

      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{wallet.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WalletTypeBadge type={wallet.type} />
          <PlatformIcons type={wallet.type} />
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
          Visit
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}

function WalletTypeBadge({ type }: { type: Wallet['type'] }) {
  const colors = {
    Hardware: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Browser: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Mobile: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Web: 'bg-green-500/10 text-green-400 border-green-500/20',
  }

  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[type]}`}>
      {type}
    </span>
  )
}

function PlatformIcons({ type }: { type: Wallet['type'] }) {
  switch (type) {
    case 'Hardware':
      return (
        <div className="flex items-center gap-1">
          <span className="text-[var(--color-text-muted)]" title="USB Device">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </span>
        </div>
      )
    case 'Browser':
      return (
        <div className="flex items-center gap-1">
          <span className="text-[var(--color-text-muted)]" title="Chrome/Firefox">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </span>
        </div>
      )
    case 'Mobile':
      return (
        <div className="flex items-center gap-1">
          <span className="text-[var(--color-text-muted)]" title="iOS">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </span>
          <span className="text-[var(--color-text-muted)]" title="Android">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906m-11.046 0c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906M17.8 10.18l1.607-2.78c.09-.155.036-.353-.118-.442-.155-.09-.353-.036-.442.118l-1.624 2.81a9.35 9.35 0 00-3.733-.771c-1.32 0-2.575.265-3.733.771l-1.625-2.81c-.09-.155-.288-.208-.442-.118-.155.09-.208.288-.118.442l1.607 2.78C6.68 11.46 4.964 14.03 4.964 17h14.07c0-2.97-1.716-5.54-4.236-6.82M9.046 14.659c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906m5.908 0c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906"/>
            </svg>
          </span>
        </div>
      )
    case 'Web':
      return (
        <div className="flex items-center gap-1">
          <span className="text-[var(--color-text-muted)]" title="Desktop">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </span>
        </div>
      )
    default:
      return null
  }
}

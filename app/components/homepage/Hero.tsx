'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import FifthingCountdown from '@/app/components/FifthingCountdown'

export default function Hero() {
  return (
    <section className="hero-gradient noise-overlay grid-overlay relative overflow-hidden px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16 lg:px-12 lg:pb-40 lg:pt-20">
      <FadeIn className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
            </span>
            The Leading Smart Contract Platform secured by Proof-of-Work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
          <span>The Original{' '}
            <span className="bg-gradient-to-r from-[var(--brand-green)] to-emerald-400 bg-clip-text text-transparent">
              Ethereum
            </span>
          </span>
          <br />
          <span>Virtual Machine</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl">
          Ethereum Classic is built for immutable, censorship-resistant global finance. The only mature Proof-of-Work blockchain with native smart contracts. Secured by accessible hardware and global energy sources.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/wallet"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/15 px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:bg-[var(--brand-green)]/25 hover:shadow-lg hover:shadow-[var(--brand-green)]/20"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
            Get Wallet
          </Link>
          <Link
            href="/buy"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--border-subtle)] px-6 py-3.5 text-base font-medium text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-elevated)]"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Buy ETC
          </Link>
          <Link
            href="/learn/ethereum-classic"
            className="inline-flex items-center justify-center gap-1 text-base font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Learn More
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Fifthing countdown card */}
        <div className="mt-10 text-left">
          <FifthingCountdown variant="card" />
        </div>

      </FadeIn>
    </section>
  )
}

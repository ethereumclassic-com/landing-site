'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:px-12">
      {/* CSS-only gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--panel)] via-[var(--background)] to-[var(--panel)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green)]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--brand-green)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
              </span>
              Ready to Start?
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Start Using Ethereum Classic Today
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
            Buy, mine, build, or hold — your path into Ethereum Classic
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/buy"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3.5 text-base font-semibold text-[var(--background)] transition-all hover:bg-[var(--brand-green-hover)] hover:shadow-lg hover:shadow-[var(--brand-green)]/25"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              Buy ETC
              <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/wallet"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
              Get Wallet
            </Link>
            <Link
              href="/mining"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
              </svg>
              Start Mining
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              Build on ETC
            </Link>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Trusted by miners, developers, and users since 2015
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import HashrateChart from './HashrateChart'

export default function Hero() {
  return (
    <section className="hero-gradient noise-overlay grid-overlay relative overflow-hidden px-6 pb-24 pt-6 md:px-10 md:pb-32 md:pt-8 lg:px-12 lg:pb-40 lg:pt-10">
      <FadeIn className="relative mx-auto max-w-4xl text-center">
        {/* ETC logomark */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="relative h-16 w-16 md:h-20 md:w-20"
              aria-hidden="true"
              style={{ animation: 'logo-breathe 3s ease-in-out infinite' }}
            >
              <g transform="translate(0,512) scale(0.1,-0.1)" fill="var(--brand-green)" stroke="none">
                <path d="M2551 5071 c-6 -11 -125 -193 -263 -403 -138 -211 -340 -518 -448 -683 -108 -165 -321 -490 -474 -723 -153 -233 -276 -425 -274 -427 1 -1 154 61 338 139 884 374 1126 476 1137 476 7 0 330 -142 719 -316 388 -173 708 -314 710 -312 3 3 -1417 2253 -1430 2266 -3 2 -9 -6 -15 -17z" />
                <path d="M2485 3110 c-376 -157 -1450 -612 -1452 -614 -2 -2 99 -60 224 -130 126 -69 473 -263 773 -430 l545 -303 40 23 c22 12 357 200 745 418 387 217 706 399 708 405 2 6 -1 11 -7 11 -10 0 -175 73 -1036 457 -203 91 -388 173 -410 183 l-41 18 -89 -38z" />
                <path d="M1119 2083 c16 -21 308 -427 648 -903 341 -476 661 -923 712 -994 51 -70 95 -135 98 -143 4 -10 10 -6 23 15 10 16 145 206 301 423 155 217 378 527 494 689 116 162 316 441 444 619 206 287 253 359 209 324 -7 -6 -343 -198 -746 -427 l-732 -417 -128 74 c-1304 758 -1336 777 -1346 777 -4 0 6 -17 23 -37z" />
              </g>
            </svg>
          </div>
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

        {/* Badge */}
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
            </span>
            The Leading Smart Contract Platform secured by Proof-of-Work
          </span>
        </div>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-4xl text-lg text-[var(--text-secondary)] md:text-xl">
          Ethereum Classic is immutable infrastructure for global finance. The only mature Proof-of-Work blockchain with native smart contracts, it is permissionless, censorship-resistant, and secured by the energy of the physical world.
        </p>

        {/* Hashrate chart */}
        <HashrateChart />

        {/* CTA buttons */}
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
            href="/apps"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
          >
            <svg aria-hidden="true" className="h-5 w-5 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            Use ETC
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
          <Link
            href="/mining"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
          >
            <svg aria-hidden="true" className="h-5 w-5 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
            Start Mining
          </Link>
        </div>

      </FadeIn>
    </section>
  )
}

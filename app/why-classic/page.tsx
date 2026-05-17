'use client'

import Link from 'next/link'
import { philosophyArticles } from './data/philosophy'

export default function WhyClassicPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Philosophy
            </span>
          </div>

          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
          >
            Why{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Classic
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Ethereum Classic emerged from the 2016 DAO fork as a commitment to one principle: code is law. When the
            broader Ethereum community reversed a transaction by changing the protocol, ETC held the original chain
            and the original rules. Understanding why matters as much as understanding what ETC is.
          </p>
        </div>
      </section>

      {/* Article Cards */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div
          className="mx-auto grid max-w-4xl gap-6"
        >
          {philosophyArticles.map((article, i) => (
            <div key={article.slug}>
              <Link
                href={`/why-classic/${article.slug}`}
                className="group flex items-start gap-6 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-2xl">
                  {article.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[var(--color-text-muted)]">Part {i + 1}</span>
                  </div>
                  <h2 className="mt-1 text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{article.description}</p>
                </div>
                <svg aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

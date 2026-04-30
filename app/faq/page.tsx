'use client'

import Link from 'next/link'
import { getAllFAQSections } from './data/faqs'

export default function FAQPage() {
  const sections = getAllFAQSections()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              FAQ
            </span>
          </div>

          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Find answers about Ethereum Classic for users, investors, miners, developers, and community
            members.
          </p>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sections.map((section) => (
            <div key={section.id}>
              <Link
                href={`/faq/${section.id}`}
                className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                <span className="text-3xl">{section.icon}</span>
                <h2 className="mt-4 text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                  {section.audience}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-text-secondary)]">{section.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">{section.faqs.length} questions</span>
                  <svg aria-hidden="true"
                    className="h-4 w-4 text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

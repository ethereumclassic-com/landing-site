import Link from 'next/link'
import { CONTACT_EMAILS, SECURITY_CONTACT_EMAIL } from '@/lib/social'

/**
 * Partnerships: the way in for organizations that want to work with ethereumclassic.com. Real partners are
 * listed here once a partnership is agreed; products that support ETC are listed at /ecosystem instead.
 */

const stakeholders = [
  { title: 'Exchanges and custodians', detail: 'Trading venues, brokers and custody providers that list or hold ETC.' },
  { title: 'Wallets and payments', detail: 'Wallets, on-ramps, cards and merchant services that support ETC.' },
  { title: 'Mining', detail: 'Pools, mining operations, hardware makers and hosting providers.' },
  { title: 'Infrastructure', detail: 'Node, RPC, indexing and explorer providers serving the network.' },
  { title: 'Builders', detail: 'Teams shipping applications, tools or protocols on Ethereum Classic.' },
  { title: 'Institutions and research', detail: 'Funds, issuers, researchers and analysts working on ETC.' },
  { title: 'Media and events', detail: 'Publications, conferences and community organizers covering ETC.' },
]

const elsewhere = [
  { label: 'List a product in the Ecosystem Directory', href: '/ecosystem', note: `Listing requests go to ${CONTACT_EMAILS.listings}` },
  { label: 'Submit an app', href: '/apps/submit', note: 'For applications built on Ethereum Classic' },
  { label: 'Advertise on ethereumclassic.com', href: '/advertise', note: `Advertising goes to ${CONTACT_EMAILS.advertising}` },
  { label: 'Other questions', href: '/contact', note: 'One address per topic, press included' },
]

export default function PartnersPage() {
  const mailto = `mailto:${CONTACT_EMAILS.partnerships}`
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            Partnerships
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Work with ethereumclassic.com
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Organizations across the Ethereum Classic ecosystem can propose a partnership: an integration, a
            collaboration on content or research, an event, or anything else that serves people using ETC.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={mailto}
              className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
            >
              Write to {CONTACT_EMAILS.partnerships}
            </a>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Who This Is For</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stakeholders.map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach the team */}
      <section className="border-t border-[var(--border)] py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">How to Reach Us</h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Write to{' '}
            <a href={mailto} className="font-medium text-[var(--color-primary)] hover:underline">
              {CONTACT_EMAILS.partnerships}
            </a>{' '}
            with:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
            <li>who you are, and what your organization does</li>
            <li>what you would like to do together, and how it serves people using Ethereum Classic</li>
            <li>links to your project, and the best way to reach you</li>
          </ul>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Partners are listed on this page once a partnership is agreed. Companies whose products support ETC are
            listed in the{' '}
            <Link href="/ecosystem" className="text-[var(--color-primary)] hover:underline">
              Ecosystem Directory
            </Link>
            , which is separate and has its own checks.
          </p>
        </div>
      </section>

      {/* Elsewhere */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Looking for Something Else?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {elsewhere.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 transition hover:border-[var(--color-primary)]/40"
              >
                <p className="font-semibold text-[var(--text-primary)]">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.note}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            To report a vulnerability, write to{' '}
            <a href={`mailto:${SECURITY_CONTACT_EMAIL}`} className="text-[var(--color-primary)] hover:underline">
              {SECURITY_CONTACT_EMAIL}
            </a>
            , which one of Core-Geth&apos;s maintainers reads.
          </p>
        </div>
      </section>
    </div>
  )
}

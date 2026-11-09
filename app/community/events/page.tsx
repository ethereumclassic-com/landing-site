'use client'

import Link from 'next/link'
import { DISCORD_URL } from '@/lib/social'

const eventTypes = [
  {
    name: 'Developer Calls',
    description: 'Public calls on protocol changes',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: 'bg-[var(--color-info-bg)] text-[var(--color-info)]',
  },
  {
    name: 'Conferences',
    description: 'Major industry events and summits',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'bg-[var(--color-violet-bg)] text-[var(--color-violet)]',
  },
  {
    name: 'Meetups',
    description: 'Local gatherings and regional events',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: 'bg-[var(--color-success-bg)] text-[var(--color-success)]',
  },
  {
    name: 'Hackathons',
    description: 'Building and innovation challenges',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/community"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Community
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Events
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Where the Ethereum Classic community meets, from public developer calls online to conferences
                and local meetups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {eventTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${type.color}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{type.name}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calls and calendars */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-5">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Core Developer Calls</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Public calls where Ethereum Classic&apos;s client developers coordinate protocol changes. They are
              scheduled as upgrades need them, and the Core Developer Calls page records each one.
            </p>
            <Link
              href="/core-devs"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              View the Calls
            </Link>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Community Events</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              ethereumclassic.org, the community site, keeps the calendar of meetups and conferences, past ETC
              Summits included. Upcoming gatherings are announced on Discord.
            </p>
            <a
              href="https://ethereumclassic.org/community/events"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)]/30"
            >
              Open the Calendar
            </a>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Want to Host an Event?</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Planning a meetup, a workshop or an online session about Ethereum Classic? Discord is where to find
              co-organizers and speakers and to tell the community about it.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Contact Us on Discord
              </a>
              <Link
                href="/community/social"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)]/30"
              >
                Other Channels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Never Miss an Event</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Follow ETC on social media and join the Discord to hear about upcoming events and community
              activities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/ETC_Network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Follow on Twitter
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

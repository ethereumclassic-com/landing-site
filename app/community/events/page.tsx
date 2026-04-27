'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const upcomingEvents = [
  {
    title: 'ETC Community Call',
    description: 'Monthly community call to discuss development updates, ecosystem news, and community initiatives.',
    date: 'Every 3rd Thursday',
    time: '3:00 PM UTC',
    location: 'Discord Voice Channel',
    type: 'online',
    link: 'https://discord.com/invite/Tq57jxSwsa',
  },
  {
    title: 'ETC Developer Sync',
    description: 'Bi-weekly technical meeting for core developers and contributors to coordinate development efforts.',
    date: 'Every 2nd & 4th Tuesday',
    time: '2:00 PM UTC',
    location: 'Discord Voice Channel',
    type: 'online',
    link: 'https://discord.com/invite/Tq57jxSwsa',
  },
  {
    title: 'Mining Community Q&A',
    description: 'Open forum for miners to discuss network security, pool updates, and mining optimization.',
    date: 'First Friday of the month',
    time: '4:00 PM UTC',
    location: 'Telegram',
    type: 'online',
    link: 'https://t.me/ethclassic',
  },
]

const pastEvents = [
  {
    title: 'ETC Summit 2024',
    description: 'Annual flagship conference bringing together the global ETC community for talks, workshops, and networking.',
    date: 'November 2024',
    location: 'Barcelona, Spain',
    type: 'conference',
  },
  {
    title: 'ETH Denver 2024',
    description: 'ETC community presence at ETH Denver with booth, presentations, and hackathon participation.',
    date: 'February 2024',
    location: 'Denver, CO',
    type: 'conference',
  },
  {
    title: 'Asia Crypto Week',
    description: 'ETC meetups and presentations during Asia Crypto Week events.',
    date: 'September 2024',
    location: 'Singapore',
    type: 'meetup',
  },
]

const eventTypes = [
  {
    name: 'Community Calls',
    description: 'Regular online meetings open to everyone',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: 'bg-blue-500/10 text-blue-400',
  },
  {
    name: 'Conferences',
    description: 'Major industry events and summits',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'bg-purple-500/10 text-purple-400',
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
    color: 'bg-green-500/10 text-green-400',
  },
  {
    name: 'Hackathons',
    description: 'Building and innovation challenges',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'bg-amber-500/10 text-amber-400',
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/community"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Community
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Events
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Connect with the Ethereum Classic community at events around the world.
                From online calls to global conferences, there&apos;s always a way to participate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {eventTypes.map((type) => (
              <motion.div
                key={type.name}
                variants={fadeInUp}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Recurring Events
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 md:grid-cols-3"
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                    {event.type === 'online' ? 'Online' : 'In Person'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{event.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{event.description}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Join Event
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Past Events
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-4 md:grid-cols-3"
          >
            {pastEvents.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[var(--bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-muted)]">
                    {event.type === 'conference' ? 'Conference' : 'Meetup'}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">{event.date}</span>
                </div>
                <h3 className="font-bold text-[var(--text-primary)]">{event.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{event.description}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Want to Host an Event?</h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              The ETC community supports local organizers who want to host meetups, workshops, or
              educational events. Whether you&apos;re planning an in-person gathering or an online webinar,
              we can help with resources and promotion.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://discord.com/invite/Tq57jxSwsa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Never Miss an Event</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Follow ETC on social media and join our Discord to stay updated on all upcoming
              events and community activities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/ETC_Network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
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
          </motion.div>
        </div>
      </section>
    </main>
  )
}

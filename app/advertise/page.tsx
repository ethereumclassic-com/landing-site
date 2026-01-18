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

const adPlacements = [
  {
    name: 'Banner Ads',
    description: 'Full-width banners at the top of key pages. High visibility placement.',
    pages: ['Homepage', 'Wallet', 'Mining', 'Apps'],
    impressions: '50K+/month',
    format: '728x90 or responsive',
  },
  {
    name: 'Sidebar Ads',
    description: 'Vertical ad cards in page sidebars. Great for targeted content.',
    pages: ['Learn articles', 'News', 'Tools'],
    impressions: '30K+/month',
    format: '300x250',
  },
  {
    name: 'Inline Ads',
    description: 'Native-style ads within content areas. Non-intrusive integration.',
    pages: ['Mining guides', 'Trading pages', 'Hardware reviews'],
    impressions: '20K+/month',
    format: 'Text + small image',
  },
  {
    name: 'Sponsored Content',
    description: 'Featured articles and guides promoting your product or service.',
    pages: ['News section', 'Learn section'],
    impressions: 'Permanent',
    format: 'Full article',
  },
]

const audienceStats = [
  { label: 'Monthly Visitors', value: '100K+' },
  { label: 'Page Views', value: '500K+' },
  { label: 'Newsletter Subscribers', value: '5K+' },
  { label: 'Active Miners', value: '10K+' },
]

const audienceTypes = [
  {
    type: 'Miners',
    percentage: 40,
    description: 'Active ETC miners looking for hardware, pools, and tools',
  },
  {
    type: 'Traders',
    percentage: 25,
    description: 'Active traders seeking exchanges, wallets, and market tools',
  },
  {
    type: 'Developers',
    percentage: 20,
    description: 'Developers building dApps and integrations on ETC',
  },
  {
    type: 'Investors',
    percentage: 15,
    description: 'Long-term holders interested in ecosystem news',
  },
]

const guidelines = [
  'Ads must be relevant to cryptocurrency, blockchain, or related technologies',
  'No scams, phishing, or misleading claims',
  'No explicit or inappropriate content',
  'Links must be working and lead to legitimate websites',
  'Advertisers must disclose their relationship with advertised products',
  'We reserve the right to reject any ad at our discretion',
]

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.1),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Advertise on EthereumClassic.com
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Reach the ETC community directly. Promote your wallet, exchange, mining pool, or blockchain product to a highly engaged audience.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=partnership"
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                Get Started
              </Link>
              <a
                href="#placements"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--panel)]"
              >
                View Placements
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Audience Stats */}
      <section className="border-b border-[var(--border)] py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {audienceStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Breakdown */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Our Audience</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Highly targeted audience segments actively engaged with the ETC ecosystem
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audienceTypes.map((audience, index) => (
              <motion.div
                key={audience.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{audience.type}</h3>
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    {audience.percentage}%
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{audience.description}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--bg)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${audience.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-[var(--color-primary)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placements */}
      <section id="placements" className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ad Placements</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Multiple placement options to fit your marketing goals and budget
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {adPlacements.map((placement, index) => (
              <motion.div
                key={placement.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{placement.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{placement.description}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Pages:</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{placement.pages.join(', ')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Est. Impressions:</span>
                    <span className="text-xs text-[var(--color-primary)]">{placement.impressions}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Format:</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{placement.format}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white md:text-3xl">Advertising Guidelines</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">
                We maintain high standards to protect our community. All ads must comply with these guidelines.
              </p>

              <ul className="mt-6 space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--color-text-secondary)]">{guideline}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-white">Ready to Advertise?</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Contact us with your campaign details and we will get back to you with a custom quote.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-text-secondary)]">What we need:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                    <li>- Your company/project name</li>
                    <li>- Desired ad placement(s)</li>
                    <li>- Campaign duration</li>
                    <li>- Budget range</li>
                    <li>- Ad creative (or if you need design help)</li>
                  </ul>
                </div>

                <Link
                  href="/contact?type=partnership"
                  className="mt-6 block w-full rounded-xl bg-[var(--color-primary)] px-6 py-4 text-center font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
                >
                  Contact Us
                </Link>

                <p className="text-center text-xs text-[var(--color-text-muted)]">
                  Typical response time: 1-2 business days
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Why Advertise With Us?</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Targeted Audience',
                description: 'Reach users actively engaged with the ETC ecosystem. No wasted impressions.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'High Engagement',
                description: 'Our community is active and engaged. Real users making real decisions.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Flexible Options',
                description: 'From banner ads to sponsored content. Find the format that works for you.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

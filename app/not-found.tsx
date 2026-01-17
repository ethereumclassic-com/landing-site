'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from './components/layout/Container'
import { Button } from './components/ui/Button'

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

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container size="md">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* 404 Number */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 text-[8rem] font-bold leading-none text-[var(--color-primary)]/20 md:text-[12rem]"
          >
            404
          </motion.div>

          {/* Icon */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-md text-lg text-[var(--color-text-secondary)]"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
            you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" href="/" size="lg">
              Go to Homepage
            </Button>
            <Button variant="outline" href="/site-map" size="lg">
              View Sitemap
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="mt-12">
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Wallet', href: '/wallet' },
                { label: 'Buy ETC', href: '/buy' },
                { label: 'Apps', href: '/apps' },
                { label: 'Learn', href: '/learn' },
                { label: 'News', href: '/news' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  )
}

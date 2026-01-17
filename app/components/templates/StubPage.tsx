'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '../layout/Container'
import { Breadcrumbs } from '../layout/Breadcrumbs'
import { Button } from '../ui/Button'
import { NewsletterSignup } from '../sections/NewsletterSignup'
import { useBreadcrumbs, type BreadcrumbItem } from '../../hooks/useBreadcrumbs'

export interface StubPageProps {
  title: string
  description: string
  expectedPhase?: string
  icon?: ReactNode
  relatedLinks?: { label: string; href: string }[]
  showNewsletter?: boolean
  backLink?: { label: string; href: string }
  /** Show auto-generated breadcrumbs (default: true) */
  showBreadcrumbs?: boolean
  /** Custom breadcrumb items (overrides auto-generated) */
  breadcrumbs?: BreadcrumbItem[]
}

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

// Default icon - construction/coming soon
function DefaultIcon() {
  return (
    <svg
      className="h-16 w-16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  )
}

export function StubPage({
  title,
  description,
  expectedPhase,
  icon,
  relatedLinks,
  showNewsletter = true,
  backLink = { label: 'Back to Home', href: '/' },
  showBreadcrumbs = true,
  breadcrumbs: customBreadcrumbs,
}: StubPageProps) {
  const autoBreadcrumbs = useBreadcrumbs({ currentLabel: title })
  const breadcrumbItems = customBreadcrumbs || autoBreadcrumbs

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbItems.length > 1 && (
        <div className="border-b border-[var(--border)]">
          <Container size="xl">
            <Breadcrumbs items={breadcrumbItems} className="py-4" />
          </Container>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container size="md">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Icon */}
            <motion.div
              variants={fadeInUp}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
            >
              {icon || <DefaultIcon />}
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-orange)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent-orange)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-orange)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-orange)]" />
                </span>
                Coming Soon
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
            >
              {description}
            </motion.p>

            {/* Expected Phase */}
            {expectedPhase && (
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-sm text-[var(--color-text-muted)]"
              >
                Expected in: <span className="font-medium">{expectedPhase}</span>
              </motion.p>
            )}

            {/* Back Link */}
            <motion.div variants={fadeInUp} className="mt-8">
              <Button variant="outline" href={backLink.href}>
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                {backLink.label}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Related Links Section */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="border-t border-[var(--border)] py-16">
          <Container size="md">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-8 text-xl font-semibold text-[var(--color-text-primary)]"
              >
                In the meantime, check out these pages:
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4"
              >
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-5 py-3 text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Newsletter Section */}
      {showNewsletter && (
        <NewsletterSignup
          variant="card"
          title="Stay Updated"
          description="Get notified when this page goes live. Subscribe to our newsletter for the latest Ethereum Classic updates."
        />
      )}
    </main>
  )
}

export default StubPage

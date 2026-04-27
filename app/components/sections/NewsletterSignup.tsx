'use client'

import {
  forwardRef,
  useState,
  type FormEvent,
  type HTMLAttributes,
} from 'react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { FadeIn } from '../ui'

export type NewsletterVariant = 'inline' | 'card' | 'banner'

export interface NewsletterSignupProps extends Omit<HTMLAttributes<HTMLElement>, 'onSubmit'> {
  variant?: NewsletterVariant
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  onNewsletterSubmit?: (email: string) => Promise<void>
}

function NewsletterForm({
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  onNewsletterSubmit,
  inline = false,
}: {
  placeholder?: string
  buttonText?: string
  onNewsletterSubmit?: (email: string) => Promise<void>
  inline?: boolean
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setStatus('idle')

    try {
      if (onNewsletterSubmit) {
        await onNewsletterSubmit(email)
      }
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center gap-2 text-[var(--color-success)]">
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        inline
          ? 'flex flex-col gap-3 sm:flex-row'
          : 'flex flex-col gap-3',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={inline ? 'flex-grow' : 'w-full'}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          disabled={loading}
          error={status === 'error' ? 'Something went wrong. Please try again.' : undefined}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        className={inline ? 'sm:flex-shrink-0' : 'w-full'}
      >
        {buttonText}
      </Button>
    </form>
  )
}

function InlineNewsletter({
  title,
  description,
  placeholder,
  buttonText,
  onNewsletterSubmit,
  className = '',
  ...props
}: NewsletterSignupProps) {
  return (
    <div
      className={['py-8', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {(title || description) && (
          <div className="lg:flex-shrink-0">
            {title && (
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="w-full lg:max-w-md">
          <NewsletterForm
            placeholder={placeholder}
            buttonText={buttonText}
            onNewsletterSubmit={onNewsletterSubmit}
            inline
          />
        </div>
      </div>
    </div>
  )
}

function CardNewsletter({
  title = 'Stay Updated',
  description = 'Get the latest Ethereum Classic news and updates delivered to your inbox.',
  placeholder,
  buttonText,
  onNewsletterSubmit,
  className = '',
  ...props
}: NewsletterSignupProps) {
  return (
    <section
      aria-labelledby="newsletter-card-heading"
      className={['py-16 md:py-24', className].filter(Boolean).join(' ')}
      {...props}
    >
      <Container size="sm">
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green)]/10">
              <svg aria-hidden="true"
                className="h-6 w-6 text-[var(--brand-green)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 id="newsletter-card-heading" className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              {title}
            </h2>

            {description && (
              <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            )}

            <div className="mx-auto mt-8 max-w-sm">
              <NewsletterForm
                placeholder={placeholder}
                buttonText={buttonText}
                onNewsletterSubmit={onNewsletterSubmit}
              />
            </div>

            <p className="mt-4 text-xs text-[var(--text-muted)]">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function BannerNewsletter({
  title = 'Stay Updated',
  description = 'Get the latest Ethereum Classic news and updates.',
  placeholder,
  buttonText,
  onNewsletterSubmit,
  className = '',
  ...props
}: NewsletterSignupProps) {
  return (
    <section
      aria-labelledby="newsletter-banner-heading"
      className={['py-12', className].filter(Boolean).join(' ')}
      {...props}
    >
      <Container size="xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--brand-green)] to-emerald-600 p-8 md:p-12">
            {/* Decorative orbs (intentional white overlays on green bg) */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:flex-shrink-0">
                <h2 id="newsletter-banner-heading" className="text-2xl font-bold text-[var(--background)] md:text-3xl">
                  {title}
                </h2>
                {description && (
                  <p className="mt-2 text-[var(--background)]/80">{description}</p>
                )}
              </div>

              <div className="w-full lg:max-w-lg">
                <NewsletterForm
                  placeholder={placeholder}
                  buttonText={buttonText}
                  onNewsletterSubmit={onNewsletterSubmit}
                  inline
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export const NewsletterSignup = forwardRef<HTMLElement, NewsletterSignupProps>(
  ({ variant = 'card', ...props }) => {
    switch (variant) {
      case 'inline':
        return <InlineNewsletter {...props} />
      case 'card':
        return <CardNewsletter {...props} />
      case 'banner':
        return <BannerNewsletter {...props} />
      default:
        return <CardNewsletter {...props} />
    }
  }
)

NewsletterSignup.displayName = 'NewsletterSignup'

export default NewsletterSignup

'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'inline'
  showDescription?: boolean
  className?: string
}

export function Newsletter({ variant = 'default', showDescription = true, className = '' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    // Simulate API call - replace with actual newsletter service integration
    // Example services: Mailchimp, ConvertKit, Buttondown, etc.
    try {
      // For now, we'll simulate a successful submission
      // In production, this would POST to /api/newsletter or external service
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage('Thanks for subscribing! Check your email to confirm.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status !== 'idle' && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  // Default variant - full featured
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-[var(--color-primary)]/10 p-3">
          <svg aria-hidden="true" className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>
          {showDescription && (
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Get the latest ETC news, network upgrades, and ecosystem updates delivered to your inbox.
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>

        {status !== 'idle' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-3 text-sm ${status === 'success' ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}
          >
            {message}
          </motion.p>
        )}

        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </form>
    </motion.div>
  )
}

export default Newsletter

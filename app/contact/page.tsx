'use client'

import { useState, type FormEvent } from 'react'
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

type InquiryType = 'general' | 'partnership' | 'technical' | 'listing' | 'media' | 'other'

const inquiryTypes: { value: InquiryType; label: string; description: string }[] = [
  { value: 'general', label: 'General Inquiry', description: 'Questions about ETC or this website' },
  { value: 'partnership', label: 'Partnership', description: 'Business partnerships and collaborations' },
  { value: 'technical', label: 'Technical Support', description: 'Help with wallets, transactions, or dApps' },
  { value: 'listing', label: 'Listing Request', description: 'List your app, exchange, or wallet' },
  { value: 'media', label: 'Media / Press', description: 'Press inquiries and interviews' },
  { value: 'other', label: 'Other', description: 'Something else' },
]

const communityChannels = [
  {
    name: 'Discord',
    description: 'Fastest response time. Join the community server.',
    url: 'https://discord.com/invite/Tq57jxSwsa',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    color: 'text-indigo-400',
  },
  {
    name: 'Twitter / X',
    description: 'DMs open for quick questions.',
    url: 'https://x.com/ETC_Network',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'text-gray-400',
  },
  {
    name: 'GitHub',
    description: 'Report bugs or request features.',
    url: 'https://github.com/ethereumclassic',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'text-gray-400',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general' as InquiryType,
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    try {
      // Simulate API call - replace with actual form submission
      // Could integrate with: Formspree, Netlify Forms, custom API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        inquiryType: 'general',
        subject: '',
        message: '',
      })
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact us through Discord.')
    }
  }

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
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Have questions, feedback, or partnership ideas? We would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-white">Send us a Message</h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-xl bg-[var(--color-success)]/10 p-6 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success)]/20">
                      <svg aria-hidden="true" className="h-6 w-6 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      Thank you for reaching out. We will respond within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm text-[var(--color-primary)] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Name and Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
                          Name <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
                          placeholder="Your name"
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
                          Email <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
                          placeholder="your@email.com"
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as InquiryType })}
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                        disabled={status === 'loading'}
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
                        placeholder="Brief subject line"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
                        Message <span className="text-[var(--color-error)]">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition focus:border-[var(--color-primary)]"
                        placeholder="How can we help you?"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-[var(--color-error)]"
                      >
                        {errorMessage}
                      </motion.p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl bg-[var(--color-primary)] px-6 py-4 font-semibold text-black transition hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg aria-hidden="true" className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Community Channels */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <h3 className="font-semibold text-white">Community Channels</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    For faster responses, reach out through our community channels.
                  </p>
                  <div className="mt-4 space-y-3">
                    {communityChannels.map((channel) => (
                      <a
                        key={channel.name}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3 transition hover:border-[var(--color-primary)]/50"
                      >
                        <span className={channel.color}>{channel.icon}</span>
                        <div>
                          <span className="font-medium text-white">{channel.name}</span>
                          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                            {channel.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <h3 className="font-semibold text-white">Common Questions</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-[var(--color-text-secondary)]">
                        Response time?
                      </h4>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        We typically respond within 2-3 business days. For urgent matters, use Discord.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[var(--color-text-secondary)]">
                        Partnership inquiries?
                      </h4>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        Select &quot;Partnership&quot; as inquiry type and include details about your project.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[var(--color-text-secondary)]">
                        Lost funds / Scams?
                      </h4>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        We cannot recover lost funds. Blockchain transactions are irreversible. Be cautious of scams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <h3 className="font-semibold text-white">Helpful Links</h3>
                  <div className="mt-4 space-y-2">
                    <Link href="/learn" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Learning Center
                    </Link>
                    <Link href="/build/docs" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Developer Documentation
                    </Link>
                    <Link href="/community" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Community Hub
                    </Link>
                    <Link href="/partners" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Partner Directory
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

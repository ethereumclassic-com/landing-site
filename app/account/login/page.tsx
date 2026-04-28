'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { login, isAuthenticated } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if already logged in
  if (isAuthenticated) {
    router.push('/account')
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const result = await login(email, password)

    if (result.success) {
      router.push('/account')
    } else {
      setError(result.error || 'Login failed')
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-md px-4">
        <div
          className="rounded-2xl border border-[var(--border)] bg-[var(--panel)]/50 p-8 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <svg aria-hidden="true" className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">Welcome Back</h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Sign in to access your dashboard, watchlist, and portfolio
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="mb-6 rounded-lg border border-[var(--color-error)]/20 bg-[var(--color-error-bg)] p-4 text-sm text-[var(--color-error)]"
            >
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-[var(--text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-[var(--text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 font-semibold text-black transition-all hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg aria-hidden="true" className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-xs text-[var(--color-text-muted)]">or</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            New to EthereumClassic.com?{' '}
            <Link
              href="/account/register"
              className="font-medium text-[var(--color-primary)] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        {/* Demo Notice */}
        <div
          className="mt-6 rounded-lg border border-[var(--color-warning)]/20 bg-[var(--color-warning)]/5 p-4 text-center text-sm text-[var(--color-warning)]/80"
        >
          <strong>Demo Mode:</strong> Account data is stored locally in your browser.
          No actual authentication server is used.
        </div>
      </div>
    </main>
  )
}

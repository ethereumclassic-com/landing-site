'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'KRW', 'CAD', 'AUD', 'BTC', 'ETH']

export default function SettingsPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoading, updateProfile, updatePreferences, logout } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [email] = useState(user?.email || '')
  const [currency, setCurrency] = useState(user?.preferences.currency || 'USD')
  const [notifications, setNotifications] = useState(user?.preferences.notifications ?? true)
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Redirect if not authenticated
  if (!isLoading && !isAuthenticated) {
    router.push('/account/login')
    return null
  }

  if (isLoading) {
    return (
      <main className="min-h-screen py-20">
        <div className="mx-auto max-w-2xl px-4">
          <div className="flex items-center justify-center py-20">
            <svg aria-hidden="true" className="h-8 w-8 animate-spin text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        </div>
      </main>
    )
  }

  const handleSaveProfile = async () => {
    setIsSaving(true)
    setSuccessMessage('')

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    updateProfile({ name })
    setSuccessMessage('Profile updated successfully')
    setIsSaving(false)

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleSavePreferences = async () => {
    setIsSaving(true)
    setSuccessMessage('')

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    updatePreferences({ currency, notifications })
    setSuccessMessage('Preferences updated successfully')
    setIsSaving(false)

    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      logout()
      // In a real app, you would also delete the account from the server
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen py-20">
      <div className="mx-auto max-w-2xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8"
        >
          <Link
            href="/account"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          <p className="mt-1 text-[var(--color-text-muted)]">
            Manage your profile and preferences
          </p>
        </motion.div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400"
          >
            {successMessage}
          </motion.div>
        )}

        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-white">Profile</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Display Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                disabled
                className="w-full cursor-not-allowed rounded-lg border border-[var(--border)] bg-[var(--bg)]/30 px-4 py-3 text-[var(--color-text-muted)]"
              />
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Email cannot be changed in demo mode
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="rounded-lg bg-[var(--color-primary)] px-4 py-2 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Preferences Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-white">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="currency" className="mb-2 block text-sm font-medium text-white">
                Display Currency
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3 text-white transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                {currencies.map((c) => (
                  <option key={c} value={c} className="bg-[var(--bg)]">
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Email Notifications</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Receive price alerts and updates
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  notifications ? 'bg-[var(--color-primary)]' : 'bg-[var(--border)]'
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSavePreferences}
                disabled={isSaving}
                className="rounded-lg bg-[var(--color-primary)] px-4 py-2 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Account Info Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--panel)]/50 p-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-white">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--color-text-muted)]">Account ID</span>
              <span className="font-mono text-white">{user?.id.slice(0, 20)}...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-muted)]">Member Since</span>
              <span className="text-white">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="rounded-xl border border-red-500/20 bg-red-500/5 p-6"
        >
          <h2 className="mb-2 text-lg font-semibold text-red-400">Danger Zone</h2>
          <p className="mb-4 text-sm text-[var(--color-text-muted)]">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="rounded-lg border border-red-500/50 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
          >
            Delete Account
          </button>
        </motion.div>
      </div>
    </main>
  )
}

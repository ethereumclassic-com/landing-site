'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/**
 * Ad placement types supported by the system
 */
export type AdPlacement = 'banner' | 'sidebar' | 'inline' | 'footer'

/**
 * Ad configuration interface
 */
export interface Ad {
  id: string
  title: string
  description?: string
  image?: string
  url: string
  cta?: string
  sponsor?: string
  placement: AdPlacement[]
  priority?: number
  startDate?: string
  endDate?: string
  internal?: boolean // For promoting our own products
}

interface AdBannerProps {
  placement: AdPlacement
  className?: string
}

// Sample ads - in production, these would come from a CMS or API
const sampleAds: Ad[] = [
  {
    id: 'classic-os',
    title: 'Classic OS',
    description: 'Your complete ETC portfolio dashboard. Track, trade, and manage your assets.',
    url: '/wallet/classic-os',
    cta: 'Try Classic OS',
    placement: ['banner', 'sidebar'],
    priority: 100,
    internal: true,
  },
  {
    id: 'etcswap',
    title: 'Trade on ETCswap',
    description: 'Native decentralized exchange for Ethereum Classic. No KYC, no limits.',
    url: 'https://etcswap.org',
    cta: 'Start Trading',
    sponsor: 'ETCswap',
    placement: ['banner', 'inline'],
    priority: 90,
  },
  {
    id: 'trezor',
    title: 'Secure Your ETC',
    description: 'Trezor hardware wallets - the most trusted way to store your crypto.',
    url: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
    cta: 'Get Trezor',
    sponsor: 'Trezor',
    placement: ['sidebar', 'footer'],
    priority: 80,
  },
  {
    id: 'mining-hardware',
    title: 'Mining Hardware',
    description: 'Compare profitability of GPUs and ASICs for ETC mining.',
    url: '/mining/hardware',
    cta: 'Compare Hardware',
    placement: ['inline', 'sidebar'],
    priority: 70,
    internal: true,
  },
]

/**
 * Get an ad for a specific placement, filtered by date and priority
 */
function getAdForPlacement(placement: AdPlacement): Ad | null {
  const now = new Date()
  const eligibleAds = sampleAds
    .filter((ad) => {
      // Check if placement matches
      if (!ad.placement.includes(placement)) return false
      // Check date range
      if (ad.startDate && new Date(ad.startDate) > now) return false
      if (ad.endDate && new Date(ad.endDate) < now) return false
      return true
    })
    .sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return eligibleAds[0] || null
}

/**
 * AdBanner component - displays ads in various formats based on placement
 */
export function AdBanner({ placement, className = '' }: AdBannerProps) {
  // Get ad for placement - computed directly, no effect needed
  const ad = useMemo(() => getAdForPlacement(placement), [placement])
  const [dismissed, setDismissed] = useState(false)

  if (!ad || dismissed) return null

  const isExternal = !ad.internal && ad.url.startsWith('http')

  // Banner style (full width)
  if (placement === 'banner') {
    return (
      <div className={`relative rounded-xl border border-[var(--border)] bg-gradient-to-r from-[var(--panel)] to-[var(--panel-strong)] p-4 ${className}`}>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            {ad.image && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                <Image src={ad.image} alt={ad.title} fill className="object-cover" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">{ad.title}</h3>
                {ad.sponsor && (
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                    Sponsored
                  </span>
                )}
              </div>
              {ad.description && (
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{ad.description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isExternal ? (
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="shrink-0 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                {ad.cta || 'Learn More'}
              </a>
            ) : (
              <Link
                href={ad.url}
                className="shrink-0 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                {ad.cta || 'Learn More'}
              </Link>
            )}
            <button
              onClick={() => setDismissed(true)}
              className="text-[var(--color-text-muted)] transition hover:text-white"
              aria-label="Dismiss"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Sidebar style (vertical card)
  if (placement === 'sidebar') {
    return (
      <div className={`rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 ${className}`}>
        {ad.sponsor && (
          <span className="mb-2 inline-block text-xs text-[var(--color-text-muted)]">Sponsored</span>
        )}
        <h3 className="font-semibold text-white">{ad.title}</h3>
        {ad.description && (
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{ad.description}</p>
        )}
        {isExternal ? (
          <a
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-4 block w-full rounded-lg bg-[var(--color-primary)] px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
          >
            {ad.cta || 'Learn More'}
          </a>
        ) : (
          <Link
            href={ad.url}
            className="mt-4 block w-full rounded-lg bg-[var(--color-primary)] px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
          >
            {ad.cta || 'Learn More'}
          </Link>
        )}
      </div>
    )
  }

  // Inline style (compact)
  if (placement === 'inline') {
    return (
      <div className={`flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 ${className}`}>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">{ad.title}</span>
            {ad.sponsor && (
              <span className="text-xs text-[var(--color-text-muted)]">Ad</span>
            )}
          </div>
          {ad.description && (
            <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{ad.description}</p>
          )}
        </div>
        {isExternal ? (
          <a
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 rounded-md bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/20"
          >
            {ad.cta || 'Learn More'}
          </a>
        ) : (
          <Link
            href={ad.url}
            className="shrink-0 rounded-md bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/20"
          >
            {ad.cta || 'Learn More'}
          </Link>
        )}
      </div>
    )
  }

  // Footer style (minimal)
  if (placement === 'footer') {
    return (
      <div className={`text-center ${className}`}>
        {ad.sponsor && (
          <span className="text-xs text-[var(--color-text-muted)]">Sponsored by </span>
        )}
        {isExternal ? (
          <a
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            {ad.title}
          </a>
        ) : (
          <Link href={ad.url} className="text-sm text-[var(--color-primary)] hover:underline">
            {ad.title}
          </Link>
        )}
      </div>
    )
  }

  return null
}

export default AdBanner

'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { useOlympiaBlock } from '../hooks/useOlympiaBlock'

interface OlympiaCountdownProps {
  variant?: 'hero' | 'banner'
}

function DigitBox({ value, label, loading }: { value: number; label: string; loading: boolean }) {
  return (
    <div className="rounded-xl bg-[var(--panel)] p-3 md:p-4">
      <p className="text-2xl font-bold text-[var(--brand-green)] md:text-4xl" style={{ textShadow: '0 0 20px rgba(0, 255, 174, 0.4)' }}>
        {loading ? '--' : value.toString().padStart(2, '0')}
      </p>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{label}</p>
    </div>
  )
}

function TBDState({ variant }: { variant: 'hero' | 'banner' }) {
  if (variant === 'banner') {
    return (
      <Link href="/olympia" className="block">
        <div className="flex items-center justify-center gap-3 rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 px-4 py-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--brand-green)]" />
          </span>
          <span className="text-sm font-medium text-[var(--brand-green)]">Olympia Upgrade</span>
          <span className="text-sm text-[var(--color-text-muted)]">Block number to be announced on the Olympia Community Developer Calls</span>
        </div>
      </Link>
    )
  }

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 px-6 py-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--brand-green)]" />
        </span>
        <span className="text-sm font-medium text-[var(--brand-green)]">Activation Block: TBD</span>
      </div>
      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
        Block number to be announced on the Olympia Community Developer Calls.
      </p>
    </div>
  )
}

function ActivatedState({ variant }: { variant: 'hero' | 'banner' }) {
  if (variant === 'banner') {
    return (
      <Link href="/olympia" className="block">
        <div className="flex items-center justify-center gap-3 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-3">
          <span className="text-lg">✦</span>
          <span className="text-sm font-semibold text-[var(--brand-green)]">Olympia is Live</span>
        </div>
      </Link>
    )
  }

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-8 py-3">
        <span className="text-xl">✦</span>
        <span className="text-lg font-semibold text-[var(--brand-green)]">Olympia is Live</span>
      </div>
    </div>
  )
}

function CountingState({
  variant,
  loading,
  countdown,
  blocksRemaining,
  activationBlock,
  progress,
}: {
  variant: 'hero' | 'banner'
  loading: boolean
  countdown: { days: number; hours: number; minutes: number; seconds: number } | null
  blocksRemaining: number | null
  activationBlock: number | null
  progress: number
}) {
  const time = countdown ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (variant === 'banner') {
    return (
      <Link href="/olympia" className="block">
        <div className="flex items-center justify-between rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 px-4 py-3">
          <span className="text-sm font-medium text-[var(--brand-green)]">Olympia Countdown</span>
          <div className="flex items-center gap-2 font-mono text-sm text-[var(--text-primary)]">
            <span>{loading ? '--' : time.days}d</span>
            <span>{loading ? '--' : time.hours}h</span>
            <span>{loading ? '--' : time.minutes}m</span>
            <span>{loading ? '--' : time.seconds}s</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold text-[var(--brand-green)]">Olympia Activation Countdown</h2>
      {activationBlock && (
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Block {activationBlock.toLocaleString()}
        </p>
      )}

      {/* Digit boxes */}
      <div className="mt-6 grid grid-cols-4 gap-3 md:gap-6">
        <DigitBox value={time.days} label="Days" loading={loading} />
        <DigitBox value={time.hours} label="Hours" loading={loading} />
        <DigitBox value={time.minutes} label="Minutes" loading={loading} />
        <DigitBox value={time.seconds} label="Seconds" loading={loading} />
      </div>

      {/* Progress bar */}
      {blocksRemaining !== null && (
        <div className="mt-6">
          <div className="h-2 overflow-hidden rounded-full bg-[var(--panel)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            {blocksRemaining.toLocaleString()} blocks remaining
          </p>
        </div>
      )}
    </div>
  )
}

export default function OlympiaCountdown({ variant = 'hero' }: OlympiaCountdownProps) {
  const { status, loading, countdown, blocksRemaining, activationBlock, progress } = useOlympiaBlock()

  const content = (() => {
    switch (status) {
      case 'tbd':
        return <TBDState variant={variant} />
      case 'activated':
        return <ActivatedState variant={variant} />
      case 'pending':
        return (
          <CountingState
            variant={variant}
            loading={loading}
            countdown={countdown}
            blocksRemaining={blocksRemaining}
            activationBlock={activationBlock}
            progress={progress}
          />
        )
    }
  })()

  if (variant === 'banner') {
    return content
  }

  return (
    <FadeIn>
      <div className="rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/10 to-[var(--brand-green)]/5 p-6 md:p-8">
        {content}
      </div>
    </FadeIn>
  )
}

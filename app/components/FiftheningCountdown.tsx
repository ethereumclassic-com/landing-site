'use client'

import Link from 'next/link'
import { FadeIn } from './ui/FadeIn'
import { useFifthening } from '@/app/hooks/useFifthening'

interface FiftheningCountdownProps {
  variant?: 'card' | 'banner'
}

function DigitBox({ value, label, loading }: { value: number; label: string; loading: boolean }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-3 md:p-4">
      <span className="text-2xl font-bold tabular-nums text-[var(--brand-green)] md:text-3xl">
        {loading ? '--' : value.toString().padStart(2, '0')}
      </span>
      <span className="mt-1 text-xs text-[var(--text-muted)]">{label}</span>
    </div>
  )
}

function CompleteState({ variant }: { variant: 'card' | 'banner' }) {
  if (variant === 'banner') {
    return (
      <Link href="/research/fifthening" className="block">
        <div className="flex items-center justify-center gap-3 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-3">
          <span className="text-sm font-semibold text-[var(--brand-green)]">Fifth Fifthening Complete — Era 6 Active</span>
          <span className="text-sm text-[var(--text-muted)]">1.6384 ETC block reward</span>
        </div>
      </Link>
    )
  }

  return (
    <div className="rounded-2xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-6 text-center md:p-8">
      <div className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-6 py-2">
        <span className="text-[var(--brand-green)]">✦</span>
        <span className="font-semibold text-[var(--brand-green)]">Fifth Fifthening Complete — Era 6 Active</span>
      </div>
      <p className="mt-3 text-sm text-[var(--text-muted)]">Block reward reduced to 1.6384 ETC per block.</p>
    </div>
  )
}

export default function FiftheningCountdown({ variant = 'card' }: FiftheningCountdownProps) {
  const { status, loading, countdown, blocksRemaining, targetBlock, progress, currentReward, nextReward } = useFifthening()

  if (status === 'complete') {
    return <CompleteState variant={variant} />
  }

  const time = countdown ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (variant === 'banner') {
    return (
      <Link href="/research/fifthening" className="block">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
            </span>
            <span className="text-sm font-medium text-[var(--brand-green)]">Fifth Fifthening</span>
            <span className="text-xs text-[var(--text-muted)]">Block {targetBlock?.toLocaleString() ?? '…'}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-sm text-[var(--text-primary)]">
            <span>{loading ? '--' : time.days}d</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>{loading ? '--' : time.hours}h</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>{loading ? '--' : time.minutes}m</span>
            <span className="text-[var(--text-muted)]">·</span>
            <span>{loading ? '--' : time.seconds}s</span>
          </div>
        </div>
      </Link>
    )
  }

  // card variant
  return (
    <FadeIn>
      <div className="rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-green)]">
                Fifth Fifthening
              </h2>
            </div>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Block {targetBlock?.toLocaleString() ?? '…'} · ECIP-1017
            </p>
          </div>
          {/* Reward transition */}
          <div className="flex items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-1.5 text-sm">
            <span className="font-mono text-[var(--text-primary)]">{currentReward ?? '…'} ETC</span>
            <svg aria-hidden="true" className="h-3.5 w-3.5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="font-mono text-[var(--text-muted)]">{nextReward ?? '…'} ETC</span>
          </div>
        </div>

        {/* Digit boxes */}
        <div className="mt-6 grid grid-cols-4 gap-2 md:gap-4">
          <DigitBox value={time.days} label="Days" loading={loading} />
          <DigitBox value={time.hours} label="Hours" loading={loading} />
          <DigitBox value={time.minutes} label="Minutes" loading={loading} />
          <DigitBox value={time.seconds} label="Seconds" loading={loading} />
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1.5">
            <span>Era 5 progress</span>
            <span>{blocksRemaining !== null ? `${blocksRemaining.toLocaleString()} blocks remaining` : '...'}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--border-subtle)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link
          href="/research/fifthening"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
        >
          View full emission schedule
          <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </FadeIn>
  )
}

'use client'

import Link from 'next/link'
import { FadeIn } from './ui/FadeIn'
import { useFifthening } from '@/app/hooks/useFifthening'
import { getAnnualInflationRate } from '@/app/research/fifthening/data/fiftheningChartData'

function fmt(reward: number | null): string {
  return reward != null ? reward.toFixed(4) : '…'
}

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

function CompleteState({
  variant,
  currentEra,
  nextReward,
}: {
  variant: 'card' | 'banner'
  currentEra: number | null
  nextReward: number | null
}) {
  if (variant === 'banner') {
    return (
      <Link href="/block-reward-countdown" className="block">
        <div className="flex items-center justify-center gap-3 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-3">
          <span className="text-sm font-semibold text-[var(--brand-green)]">
            Era {currentEra ?? '…'} Active
          </span>
          {nextReward != null && (
            <span className="text-sm text-[var(--text-muted)]">{nextReward} ETC block reward</span>
          )}
        </div>
      </Link>
    )
  }

  return (
    <div className="rounded-2xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-6 text-center md:p-8">
      <div className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-6 py-2">
        <span className="text-[var(--brand-green)]">✦</span>
        <span className="font-semibold text-[var(--brand-green)]">Era {currentEra ?? '…'} Active</span>
      </div>
      {nextReward != null && (
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Block reward reduced to {nextReward} ETC per block.
        </p>
      )}
    </div>
  )
}

export default function FiftheningCountdown({ variant = 'card' }: FiftheningCountdownProps) {
  const {
    status,
    loading,
    countdown,
    blocksRemaining,
    currentBlock,
    targetBlock,
    progress,
    currentReward,
    nextReward,
    currentEra,
    nextEra,
  } = useFifthening()

  const inflationRate = currentBlock != null ? getAnnualInflationRate(currentBlock) : null
  const nextInflationRate = targetBlock != null ? getAnnualInflationRate(targetBlock + 1) : null

  if (status === 'complete') {
    return <CompleteState variant={variant} currentEra={currentEra} nextReward={nextReward} />
  }

  const time = countdown ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (variant === 'banner') {
    return (
      <Link href="/block-reward-countdown" className="block">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
            </span>
            <span className="text-sm font-medium text-[var(--brand-green)]">Fifthing</span>
            <span className="text-xs text-[var(--text-muted)]">
              Block {targetBlock?.toLocaleString() ?? '…'}
            </span>
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
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-green)]">
                Era {currentEra ?? '…'} → Era {nextEra ?? '…'} Fifthing
              </h2>
            </div>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Block {targetBlock?.toLocaleString() ?? '…'} · ECIP-1017
            </p>
          </div>
          {/* −20% badge */}
          <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
            −20% block reward
          </span>
        </div>

        {/* Reward transition — two columns with inflation badges beneath each */}
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3">
          {/* Current reward */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-sm font-medium text-[var(--text-primary)]">{fmt(currentReward)} ETC</span>
            {inflationRate != null && (
              <span className="w-fit rounded-full bg-[var(--border-subtle)] px-2 py-0.5 text-xs tabular-nums text-[var(--text-muted)]">
                ~{inflationRate}% inflation
              </span>
            )}
          </div>

          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>

          {/* Next reward */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-sm font-medium text-[var(--text-muted)]">{fmt(nextReward)} ETC</span>
            {nextInflationRate != null && (
              <span className="w-fit rounded-full bg-[var(--brand-green)]/10 px-2 py-0.5 text-xs tabular-nums text-[var(--brand-green)]">
                ~{nextInflationRate}% inflation
              </span>
            )}
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
          <div className="mb-1.5 flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>Era {currentEra ?? '…'} progress</span>
            <span>
              {blocksRemaining !== null
                ? `${blocksRemaining.toLocaleString()} blocks remaining`
                : '…'}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--border-subtle)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link
          href="/research/emission-schedule"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
        >
          View full emission schedule
          <svg
            aria-hidden="true"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </FadeIn>
  )
}

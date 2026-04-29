'use client'

import Link from 'next/link'
import { FadeIn } from './ui/FadeIn'
import { useFifthing, type UseFifthingReturn } from '@/app/hooks/useFifthing'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'
import { getAnnualInflationRate, getNextEraInflationRate } from '@/app/research/fifthing/data/fifthingChartData'
import { formatBlockReward } from '@/app/research/data/emission'

function fmt(reward: number | null): string {
  return reward != null ? formatBlockReward(reward) : '…'
}

interface FifthingCountdownProps {
  variant?: 'card' | 'banner'
  data?: UseFifthingReturn & { avgBlockTime?: number | null }
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

export default function FifthingCountdown({ variant = 'card', data }: FifthingCountdownProps) {
  const internal = useFifthing()
  const { stats: networkStats } = useNetworkStats({ refreshInterval: 300_000 })

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
  } = data ?? internal

  const avgBlockTime = data?.avgBlockTime ?? networkStats?.avgBlockTime ?? null

  const inflationRate = currentBlock != null ? getAnnualInflationRate(currentBlock) : null
  const nextInflationRate = currentBlock != null ? getNextEraInflationRate(currentBlock) : null

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
                Fifthing Era {currentEra ?? '…'} → Era {nextEra ?? '…'}
              </h2>
            </div>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Current Block:{' '}
              <span className="font-mono">{loading ? '…' : (currentBlock?.toLocaleString() ?? '…')}</span>
            </p>
          </div>
          {/* −20% badge + target block */}
          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full bg-[var(--color-warning-bg)] px-2.5 py-1 text-xs font-medium text-[var(--color-warning)]">
              20% Block Reward Reduction
            </span>
            <p className="text-xs text-[var(--text-muted)]">
              Block {targetBlock?.toLocaleString() ?? '…'} ·{' '}
              <a
                href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--brand-green)]"
              >
                ECIP-1017
              </a>
            </p>
          </div>
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

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/research/emission-schedule"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
          >
            View full emission schedule
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            Read ECIP-1017
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Attribution row */}
        <div className="mt-4 grid gap-1 border-t border-[var(--border-subtle)] pt-4 text-[10px] text-[var(--text-muted)] sm:grid-cols-3">
          <p>
            Expected date estimated at{' '}
            {avgBlockTime != null ? `${avgBlockTime.toFixed(1)}s` : '13s'} avg block time
          </p>
          <div className="sm:text-center">
            <p>All supply figures exclude uncle rewards.</p>
          </div>
          <p className="sm:text-right">
            Data source:{' '}
            <a
              href="https://etc.blockscout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              Blockscout
            </a>
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

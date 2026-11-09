'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FadeIn } from '@/app/components/ui'
import { useOlympiaBlock } from '@/app/olympia/hooks/useOlympiaBlock'
import { useFifthing } from '@/app/hooks/useFifthing'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'
import { NOMINAL_BLOCK_TIME_SECONDS } from '@/lib/chain'
import {
  OLYMPIA_PLACEHOLDER_DATE,
  OLYMPIA_PLACEHOLDER_DATE_LABEL,
  OLYMPIA_PLACEHOLDER_ISO,
  OLYMPIA_STATUS,
  OLYMPIA_TARGET,
} from '@/app/olympia/data/olympia'

function getCountdownTo(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

function usePlaceholderCountdown() {
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const update = () => setCd(getCountdownTo(OLYMPIA_PLACEHOLDER_DATE))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return cd
}

function DigitBox({ value, label, loading }: { value: number; label: string; loading: boolean }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-2 py-2.5">
      <span className="text-xl font-bold tabular-nums text-[var(--brand-green)]">
        {loading ? '--' : value.toString().padStart(2, '0')}
      </span>
      <span className="mt-0.5 text-xs text-[var(--text-muted)]">{label}</span>
    </div>
  )
}

const olympiaPoints = [
  'EVM alignment (ECIP-1121): would advance the execution layer through Dencun, Pectra and Fusaka, and carry that work into Glamsterdam',
  'A base fee market (ECIP-1111): EIP-1559, with the base fee credited to a treasury instead of burned, and block rewards and tips unchanged',
  'A treasury and its governance (ECIP-1112, ECIP-1113): Olympia DAO would be the only way to spend from it',
]

const fifthingPoints = [
  'Fixed monetary policy with no governance vote or override, enforced at the protocol level',
  'Raises the stock-to-flow ratio and lowers annual issuance',
]

export default function ActiveEventsSection() {
  const placeholderCd = usePlaceholderCountdown()
  const { stats: networkStats } = useNetworkStats({ refreshInterval: 300_000 })
  const avgBlockTime = networkStats?.avgBlockTime ?? NOMINAL_BLOCK_TIME_SECONDS

  const {
    status: olympiaStatus,
    activationBlock: olympiaActivationBlock,
    loading: olympiaLoading,
    countdown: olympiaCountdown,
    blocksRemaining: olympiaBlocksRemaining,
    progress: olympiaProgress,
  } = useOlympiaBlock()

  const {
    loading: fifthingLoading,
    countdown: fifthingCountdown,
    blocksRemaining: fifthingBlocksRemaining,
    targetBlock: fifthingTargetBlock,
    progress: fifthingProgress,
    currentReward,
    nextReward,
    currentEra,
    nextEra,
  } = useFifthing()

  return (
    <section className="bg-[var(--bg-elevated)]/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Network Development
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Upcoming Protocol Events
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Two events lie ahead for Ethereum Classic: the next block reward reduction, set by its fixed emission schedule, and Olympia, a proposed upgrade that would bring its EVM in line with Ethereum&apos;s recent upgrades.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Block reward countdown — right column on desktop */}
          <FadeIn delay={50} className="h-full lg:order-2">
            <div className="flex h-full flex-col rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                <span className="rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--brand-green)]">
                  Block Reward Reduction
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                Era {currentEra ?? '…'} → Era {nextEra ?? '…'} Fifthing
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Ethereum Classic reduces its block reward by 20% every 5 million blocks in an
                event called a &quot;fifthing.&quot; The next reduction takes place at block{' '}
                {fifthingTargetBlock?.toLocaleString() ?? '…'} under{' '}
                <a
                  href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-green)] transition-colors hover:underline"
                >
                  ECIP-1017
                </a>
                .
              </p>

              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    Block reward:{' '}
                    <span className="font-mono text-[var(--text-primary)]">{currentReward?.toFixed(4) ?? '…'} ETC</span>
                    {' '}→{' '}
                    <span className="font-mono text-[var(--brand-green)]">{nextReward?.toFixed(4) ?? '…'} ETC</span>
                    {' '}(−20%)
                  </p>
                </li>
                {fifthingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Fifthing countdown */}
              <div className="mt-5">
                <div className="grid grid-cols-4 gap-2">
                  <DigitBox value={fifthingCountdown?.days ?? 0} label="Days" loading={fifthingLoading} />
                  <DigitBox value={fifthingCountdown?.hours ?? 0} label="Hours" loading={fifthingLoading} />
                  <DigitBox value={fifthingCountdown?.minutes ?? 0} label="Min" loading={fifthingLoading} />
                  <DigitBox value={fifthingCountdown?.seconds ?? 0} label="Sec" loading={fifthingLoading} />
                </div>
                {fifthingBlocksRemaining !== null && (
                  <div className="mt-2.5">
                    <div className="h-1 overflow-hidden rounded-full bg-[var(--border-subtle)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
                        style={{ width: `${fifthingProgress}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-[var(--text-muted)]">
                      {fifthingBlocksRemaining.toLocaleString()} blocks remaining
                    </p>
                  </div>
                )}
                <p className="mt-2.5 text-[10px] italic text-[var(--text-muted)] opacity-60">
                  * Estimated based on current average block time of ~{Math.round(avgBlockTime)}s
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Link
                  href="/block-reward-countdown"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  Block Reward Countdown
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/research/emission-schedule"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--brand-green)]/30 hover:text-[var(--brand-green)]"
                >
                  Emission Schedule
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Olympia countdown — left column on desktop */}
          <FadeIn delay={100} className="h-full lg:order-1">
            <div className="flex h-full flex-col rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                <span className="rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--brand-green)]">
                  {OLYMPIA_STATUS}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                Olympia: A Proposed Upgrade
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Olympia is a proposed upgrade to Ethereum Classic, {OLYMPIA_TARGET}.
              </p>

              <ul className="mt-4 space-y-2.5">
                {olympiaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Olympia countdown */}
              <div className="mt-5">
                {/* Reached only once OLYMPIA_ACTIVATION_BLOCK is set and the chain has passed it. */}
                {olympiaStatus === 'activated' && (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-3 py-2">
                    <span className="text-sm font-semibold text-[var(--brand-green)]">
                      Activated at block {olympiaActivationBlock?.toLocaleString('en-US')}
                    </span>
                  </div>
                )}
                {(olympiaStatus === 'tbd' || olympiaStatus === 'pending') && (
                  <div
                    role="group"
                    aria-label={olympiaStatus === 'tbd'
                      ? `Countdown to ${OLYMPIA_PLACEHOLDER_DATE_LABEL}, a placeholder target; the Olympia activation block is TBD`
                      : 'Countdown to the Olympia activation block'}
                  >
                    {/* aria-hidden: the digits change every second and would be announced continuously */}
                    <div aria-hidden="true" className="grid grid-cols-4 gap-2">
                      <DigitBox value={olympiaStatus === 'pending' ? (olympiaCountdown?.days ?? 0) : placeholderCd.days} label="Days" loading={olympiaLoading} />
                      <DigitBox value={olympiaStatus === 'pending' ? (olympiaCountdown?.hours ?? 0) : placeholderCd.hours} label="Hours" loading={olympiaLoading} />
                      <DigitBox value={olympiaStatus === 'pending' ? (olympiaCountdown?.minutes ?? 0) : placeholderCd.minutes} label="Min" loading={olympiaLoading} />
                      <DigitBox value={olympiaStatus === 'pending' ? (olympiaCountdown?.seconds ?? 0) : placeholderCd.seconds} label="Sec" loading={olympiaLoading} />
                    </div>
                    {olympiaStatus === 'pending' && olympiaBlocksRemaining !== null && (
                      <div className="mt-2.5">
                        <div className="h-1 overflow-hidden rounded-full bg-[var(--border-subtle)]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
                            style={{ width: `${olympiaProgress}%` }}
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-[var(--text-muted)]">
                          {olympiaBlocksRemaining.toLocaleString()} blocks remaining
                        </p>
                      </div>
                    )}
                    {olympiaStatus === 'tbd' && (
                      <div className="mt-2.5 space-y-2">
                        <p className="text-[10px] italic text-[var(--text-muted)] opacity-60">
                          * Until the activation block is set, the countdown runs to{' '}
                          <time dateTime={OLYMPIA_PLACEHOLDER_ISO}>{OLYMPIA_PLACEHOLDER_DATE_LABEL}</time>, a placeholder target
                          rather than an activation date
                        </p>
                        <p className="text-xs text-[var(--text-muted)] opacity-60">
                          The activation blocks for Mordor and mainnet would be decided at the Olympia Core Devs Call and recorded in ECIP-1111.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="/olympia"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  Read the Olympia proposal
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

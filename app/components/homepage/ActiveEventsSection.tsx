'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FadeIn } from '@/app/components/ui'
import { useOlympiaBlock } from '@/app/olympia/hooks/useOlympiaBlock'
import { useFifthing } from '@/app/hooks/useFifthing'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'

const OLYMPIA_PLACEHOLDER_DATE = new Date('2027-01-01T00:00:00Z')

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
  'Fusaka EVM alignment: full Ethereum tooling, library, and framework parity',
  'EIP-1559 fee market: predictable gas pricing, basefee revenue directed to protocol treasury',
  'Protocol treasury: sustainable development funding without new token issuance or miner reward changes',
]

const fifthingPoints = [
  'Fixed monetary policy — no governance vote, no override, enforced at the protocol level',
  'Raises stock-to-flow ratio, reducing annual inflation toward Bitcoin-tier scarcity',
]

export default function ActiveEventsSection() {
  const placeholderCd = usePlaceholderCountdown()
  const { stats: networkStats } = useNetworkStats({ refreshInterval: 300_000 })
  const avgBlockTime = networkStats?.avgBlockTime ?? 13

  const {
    status: olympiaStatus,
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
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Network Development
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Upcoming Protocol Events
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Two milestones are approaching on Ethereum Classic: the next protocol upgrade continuing parity with the greater EVM ecosystem, and a scheduled block reward reduction defined by the network&apos;s fixed emission schedule.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Fifthing card */}
          <FadeIn delay={50} className="h-full">
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
                Ethereum Classic reduces its block reward by 20% every 5 million blocks — an
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

              <div className="mt-auto pt-6">
                <Link
                  href="/research/emission-schedule"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  View Emission Schedule
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

          {/* Olympia card */}
          <FadeIn delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                <span className="rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--brand-green)]">
                  Network Upgrade
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                Olympia Protocol Upgrade
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                The next Ethereum Classic hard fork — EVM modernization, EIP-1559 fee market, and
                a protocol treasury funded by basefee revenue without touching miner rewards.
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
                {olympiaStatus === 'activated' && (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-3 py-2">
                    <span className="text-sm font-semibold text-[var(--brand-green)]">✦ Olympia is Live</span>
                  </div>
                )}
                {(olympiaStatus === 'tbd' || olympiaStatus === 'pending') && (
                  <div>
                    <div className="grid grid-cols-4 gap-2">
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
                          * Countdown is set to January 1, 2027 until the ETC mainnet activation block is set
                        </p>
                        <div className="flex items-center gap-2">
                          <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-green)]" />
                          <span className="text-xs font-medium text-[var(--brand-green)]">Activation Block Pending</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">
                          Olympia is in final testing on the Mordor Testnet. Activation Block: TBD
                        </p>
                        <p className="text-xs text-[var(--text-muted)] opacity-60">
                          The exact block number will be announced after the Olympia Upgrade core developers call.
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
                  Explore the Olympia upgrade
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

'use client'

import { motion } from 'framer-motion'
import type { ForkData } from '@/app/upgrades/data/forks'
import OlympiaCountdown from './OlympiaCountdown'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

interface UpgradeTimelineProps {
  forks: ForkData[]
}

export default function UpgradeTimeline({ forks }: UpgradeTimelineProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative"
    >
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[var(--border)] via-[#00ffae]/30 to-[#00ffae]" />

      <div className="space-y-8">
        {forks.map((fork) => (
          <motion.div key={fork.name} variants={fadeInUp} className="relative pl-16">
            {/* Node dot */}
            <div
              className="absolute left-4 top-2 h-5 w-5 rounded-full border-2"
              style={{
                borderColor: fork.isOlympia ? '#00ffae' : 'var(--border)',
                backgroundColor: fork.isOlympia ? '#00ffae' : 'var(--panel)',
                boxShadow: fork.isOlympia ? '0 0 12px rgba(0, 255, 174, 0.4)' : 'none',
              }}
            />

            <div
              className={`rounded-xl border p-5 ${
                fork.isOlympia
                  ? 'border-[#00ffae]/30 bg-gradient-to-br from-[#00ffae]/10 to-[#00ffae]/5'
                  : 'border-[var(--border)] bg-[var(--panel)]'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className={`text-lg font-semibold ${fork.isOlympia ? 'text-[#00ffae]' : 'text-white'}`}>
                  {fork.name}
                </h3>
                {fork.block !== null ? (
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    Block {fork.block.toLocaleString()}
                  </span>
                ) : (
                  <span className="rounded-full bg-[#00ffae]/10 px-2 py-0.5 text-xs font-medium text-[#00ffae]">
                    TBD
                  </span>
                )}
                {fork.date && (
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {new Date(fork.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                )}
                {fork.ecips ? (
                  fork.ecips.map((e) => (
                    <a
                      key={e.name}
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                    >
                      {e.name}
                    </a>
                  ))
                ) : fork.ecip ? (
                  <a
                    href={fork.ecipUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                  >
                    {fork.ecip}
                  </a>
                ) : null}
              </div>

              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{fork.summary}</p>

              {/* Key changes */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {fork.keyChanges.slice(0, 4).map((change) => (
                  <span
                    key={change}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                  >
                    {change}
                  </span>
                ))}
                {fork.keyChanges.length > 4 && (
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                    +{fork.keyChanges.length - 4} more
                  </span>
                )}
              </div>

              {/* Olympia countdown widget */}
              {fork.isOlympia && (
                <div className="mt-4">
                  <OlympiaCountdown variant="banner" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ECIPSummary } from '../data/ecips'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

interface ECIPCardProps {
  ecip: ECIPSummary
}

export default function ECIPCard({ ecip }: ECIPCardProps) {
  const [expanded, setExpanded] = useState(false)

  const phaseColor = ecip.phase === 'core' ? '#00ffae' : '#a78bfa'
  const phaseLabel = ecip.phase === 'core' ? 'Core' : 'Future'

  return (
    <motion.div
      id={ecip.id}
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${phaseColor}15`,
                color: phaseColor,
              }}
            >
              {phaseLabel}
            </span>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              ECIP-{ecip.number}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-xs"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: 'var(--color-text-muted)',
              }}
            >
              {ecip.status}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">{ecip.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {ecip.summary}
          </p>
        </div>
      </div>

      {/* Expandable key changes */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
      >
        <svg
          className={`h-3 w-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {expanded ? 'Hide' : 'Show'} key changes ({ecip.keyChanges.length})
      </button>

      {expanded && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-3 space-y-1.5 border-t border-[var(--border)] pt-3"
        >
          {ecip.keyChanges.map((change) => (
            <li key={change} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: phaseColor }} />
              {change}
            </li>
          ))}
          <li className="pt-2">
            <a
              href={ecip.specUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
            >
              Read full specification →
            </a>
          </li>
        </motion.ul>
      )}
    </motion.div>
  )
}

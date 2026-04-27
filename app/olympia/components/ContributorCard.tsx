'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export interface ContributorData {
  name: string
  language: string
  languageColor: string
  role: string
  roleColor: string
  description: string
  stats: { label: string; value: string }[]
  githubUrl: string
  organization?: string
}

interface ContributorCardProps {
  contributor: ContributorData
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/30"
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold"
          style={{ backgroundColor: `${contributor.languageColor}20`, color: contributor.languageColor }}
        >
          {contributor.language.slice(0, 2)}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">{contributor.name}</h3>
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: `${contributor.roleColor}15`, color: contributor.roleColor }}
          >
            {contributor.role}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {contributor.description}
      </p>

      {/* Stats grid */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {contributor.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-[var(--border-subtle)] px-3 py-2">
            <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
            <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">{stat.value}</p>
          </div>
        ))}
      </div>

      <a
        href={contributor.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
      >
        View on GitHub →
      </a>
    </motion.div>
  )
}

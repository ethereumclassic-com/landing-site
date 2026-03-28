'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ClientUpgrade } from '../data/olympia'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

interface ClientUpgradeCardProps {
  client: ClientUpgrade
  /** Show full detail (for individual guide pages) or summary (for hub grid) */
  detail?: boolean
}

const roleColors: Record<string, string> = {
  primary: '#00ffae',
  enterprise: '#38bdf8',
  maintenance: '#a78bfa',
}

export default function ClientUpgradeCard({ client, detail = false }: ClientUpgradeCardProps) {
  const roleColor = roleColors[client.role] ?? '#9ca3af'

  if (!detail) {
    // Summary card for hub page
    return (
      <motion.div variants={fadeInUp}>
        <Link
          href={`/olympia/clients/${client.id}`}
          className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
              style={{ backgroundColor: `${client.languageColor}20`, color: client.languageColor }}
            >
              {client.language.slice(0, 2)}
            </span>
            <div>
              <h3 className="font-semibold text-white group-hover:text-[#00ffae]">{client.name}</h3>
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${roleColor}15`, color: roleColor }}
                >
                  {client.roleLabel}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{client.language}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {client.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-[var(--color-text-muted)]">
              Current: {client.currentVersion}
            </span>
            <span className="text-xs font-medium text-[#00ffae] group-hover:text-[#00ffae]/80">
              View upgrade guide →
            </span>
          </div>
        </Link>
      </motion.div>
    )
  }

  // Detailed card for individual guide pages
  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold"
          style={{ backgroundColor: `${client.languageColor}20`, color: client.languageColor }}
        >
          {client.language.slice(0, 2)}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-white">{client.name}</h1>
          <div className="mt-1 flex items-center gap-2">
            <span
              className="rounded-full px-3 py-0.5 text-sm font-medium"
              style={{ backgroundColor: `${roleColor}15`, color: roleColor }}
            >
              {client.roleLabel}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">{client.language}</span>
          </div>
        </div>
      </div>

      <p className="text-[var(--color-text-muted)]">{client.description}</p>

      {/* Version info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
          <p className="text-xs text-[var(--color-text-muted)]">Current Version</p>
          <p className="mt-1 font-mono text-lg text-white">{client.currentVersion}</p>
        </div>
        <div className="rounded-xl border border-[#00ffae]/20 bg-[#00ffae]/5 p-4">
          <p className="text-xs text-[#00ffae]">Olympia Version</p>
          <p className="mt-1 font-mono text-lg text-white">{client.olympiaVersion}</p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
        <ul className="mt-3 space-y-2">
          {client.prerequisites.map((prereq) => (
            <li key={prereq} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffae]" />
              {prereq}
            </li>
          ))}
        </ul>
      </div>

      {/* Install commands */}
      <div>
        <h2 className="text-xl font-semibold text-white">Installation</h2>
        <div className="mt-3 space-y-3">
          {client.installCommands.map(({ platform, command }) => (
            <div key={platform} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <p className="text-xs font-medium text-[var(--color-text-muted)]">{platform}</p>
              <code className="mt-2 block font-mono text-sm text-[#00ffae]">{command}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Verify */}
      <div>
        <h2 className="text-xl font-semibold text-white">Verify Installation</h2>
        <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
          <code className="font-mono text-sm text-[#00ffae]">{client.verifyCommand}</code>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        <a
          href={client.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-white transition hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
        >
          GitHub →
        </a>
        <a
          href={client.docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-white transition hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
        >
          Documentation →
        </a>
      </div>
    </motion.div>
  )
}

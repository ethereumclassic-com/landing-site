import { ecipIndex } from '../data/ecip-index'

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Final: { bg: 'bg-[var(--color-success-bg)]', text: 'text-[var(--color-success)]', border: 'border-[var(--color-success)]/20' },
  Active: { bg: 'bg-[var(--color-success-bg)]', text: 'text-[var(--color-success)]', border: 'border-[var(--color-success)]/20' },
  Draft: { bg: 'bg-[var(--bg-elevated)]', text: 'text-[var(--text-muted)]', border: 'border-[var(--border-default)]/20' },
  'Last Call': { bg: 'bg-[var(--color-warning-bg)]', text: 'text-[var(--color-warning)]', border: 'border-[var(--color-warning)]/20' },
  Withdrawn: { bg: 'bg-[var(--color-error-bg)]', text: 'text-[var(--color-error)]', border: 'border-[var(--color-error)]/20' },
  Rejected: { bg: 'bg-[var(--color-error-bg)]', text: 'text-[var(--color-error)]', border: 'border-[var(--color-error)]/20' },
  Superseded: { bg: 'bg-[var(--bg-elevated)]', text: 'text-[var(--text-muted)]', border: 'border-[var(--border-default)]/20' },
  Replaced: { bg: 'bg-[var(--bg-elevated)]', text: 'text-[var(--text-muted)]', border: 'border-[var(--border-default)]/20' },
}

export function ECIPChip({ id, linked = true }: { id: string; linked?: boolean }) {
  const ecip = ecipIndex[id]
  if (!ecip) return null

  const colors = statusColors[ecip.status] ?? statusColors.Draft
  const label = ecip.id.replace('ecip-', 'ECIP-')
  const className = `inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition hover:opacity-80 ${colors.bg} ${colors.text} ${colors.border}`

  if (!linked) {
    return (
      <span title={`${ecip.title} (${ecip.status})`} className={className}>
        {label}
      </span>
    )
  }

  return (
    <a
      href={ecip.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${ecip.title} (${ecip.status})`}
      className={className}
    >
      {label}
    </a>
  )
}

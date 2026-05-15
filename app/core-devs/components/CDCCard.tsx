import Link from 'next/link'
import type { CDCEntry } from '../data/index'
import { ECIPChip } from './ECIPChip'

function formatDate(date: string) {
  if (date === '2026-TBD') return 'TBD'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function CDCCard({ entry, isUpcoming }: { entry: CDCEntry; isUpcoming?: boolean }) {
  const visibleEcips = entry.ecipRefs.slice(0, 3)
  const overflowCount = entry.ecipRefs.length - visibleEcips.length

  if (isUpcoming) {
    return (
      <Link
        href={`/core-devs/${entry.slug}`}
        className="group block rounded-lg border-2 border-[var(--brand-green)]/40 bg-[var(--brand-green)]/[0.04] p-4 transition hover:border-[var(--brand-green)]/60 hover:bg-[var(--brand-green)]/[0.07]"
      >
        {/* Upcoming badge */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-green)]">
            Upcoming
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-1.5 text-sm font-semibold text-[var(--brand-green)] line-clamp-2 transition">
          {entry.title}
        </h3>

        {/* Summary */}
        <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-2">{entry.summary}</p>

        {/* ECIP chips */}
        {visibleEcips.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {visibleEcips.map((id) => (
              <ECIPChip key={id} id={id} linked={false} />
            ))}
            {overflowCount > 0 && (
              <span className="inline-flex items-center rounded-md bg-slate-500/10 px-1.5 py-0.5 text-[10px] text-slate-400">
                +{overflowCount}
              </span>
            )}
          </div>
        )}
      </Link>
    )
  }

  return (
    <Link
      href={`/core-devs/${entry.slug}`}
      className={`group block rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 transition hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/[0.02] ${entry.isPlaceholder ? 'opacity-60 hover:opacity-80' : ''}`}
    >
      {/* Top row: date + pills */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-[var(--color-text-muted)]">
          {formatDate(entry.date)}
        </span>

        {entry.forkBlock !== null && (
          <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
            #{entry.forkBlock.toLocaleString()}
          </span>
        )}

        {entry.recordingUrl && (
          <span className="rounded-sm bg-[var(--color-primary)]/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--color-primary)]">
            VID
          </span>
        )}

        {entry.notesUrl && (
          <span className="rounded-sm bg-[var(--color-primary)]/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--color-primary)]">
            REC
          </span>
        )}

        {entry.isRejected && (
          <span className="rounded-sm bg-[var(--color-error)]/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--color-error)]">
            WITHDRAWN
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-1.5 text-sm font-semibold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--color-primary)] transition">
        {entry.title}
      </h3>

      {/* Summary */}
      <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-2">{entry.summary}</p>

      {/* ECIP chips */}
      {visibleEcips.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {visibleEcips.map((id) => (
            <ECIPChip key={id} id={id} linked={false} />
          ))}
          {overflowCount > 0 && (
            <span className="inline-flex items-center rounded-md bg-slate-500/10 px-1.5 py-0.5 text-[10px] text-slate-400">
              +{overflowCount}
            </span>
          )}
        </div>
      )}
    </Link>
  )
}

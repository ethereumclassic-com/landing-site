import { InlineText } from '../ArticleInline'
import { ENODE_CAPTION } from '../../lib/moves'

const ROWS = [
  { label: 'Before', id: '<old ID>', tone: 'text-[var(--color-warning)] line-through decoration-[var(--color-warning)]/60' },
  { label: 'After', id: '<new ID>', tone: 'text-[var(--color-primary)]' },
] as const

/** The parts of an enode address, and which one the move changes. */
export default function EnodeChange() {
  return (
    <figure className="my-8 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:p-6">
      <div className="overflow-x-auto">
        <div className="grid w-max grid-cols-[auto_auto_auto_auto] items-baseline gap-x-0 gap-y-2 font-mono text-[13px] md:text-[15px]">
          {ROWS.map((row) => (
            <div key={row.label} className="contents">
              <span className="pr-5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                {row.label}
              </span>
              <span className="text-[var(--color-text-muted)]">enode://</span>
              <span className={`rounded bg-[var(--panel)] px-1.5 font-semibold ${row.tone}`}>{row.id}</span>
              <span className="text-[var(--color-text-secondary)]">@&lt;IP&gt;:30303</span>
            </div>
          ))}
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span className="pt-1 text-center font-sans text-xs font-medium text-[var(--color-warning)]">changes</span>
          <span className="pt-1 text-center font-sans text-xs font-medium text-[var(--color-text-muted)]">stays</span>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-[var(--color-text-secondary)]">
        <InlineText text={ENODE_CAPTION} />
      </figcaption>
    </figure>
  )
}

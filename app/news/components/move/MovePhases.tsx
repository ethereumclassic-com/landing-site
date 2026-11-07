import { InlineText } from '../ArticleInline'
import { MOVE_PHASES, PHASES_CAPTION } from '../../lib/moves'
import { PHASE_STYLES } from './phase-styles'

/** The Linux steps in three columns, by whether the node is running, so a reader can plan the stop. */
export default function MovePhases() {
  return (
    <figure className="my-8">
      <div className="grid gap-3 md:grid-cols-[1fr_1.2fr_0.95fr]">
        {MOVE_PHASES.map((phase) => {
          const style = PHASE_STYLES[phase.key]
          return (
            <section
              key={phase.key}
              aria-label={phase.label}
              className={`relative overflow-hidden rounded-xl border px-4 pb-4 pt-5 ${style.panel}`}
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${style.bar}`} />
              <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${style.text}`}>
                {style.status}
              </p>
              <p className="mt-1 font-semibold text-[var(--text-primary)]">{phase.label}</p>
              <ol className="mt-3 space-y-2">
                {phase.steps.map((step) => (
                  <li key={step.number} className="flex gap-2.5 text-sm leading-snug text-[var(--color-text-secondary)]">
                    <span className={`w-5 shrink-0 text-right font-mono text-xs leading-5 tabular-nums ${style.text}`}>
                      {step.number}
                    </span>
                    <span>{step.title}</span>
                  </li>
                ))}
              </ol>
            </section>
          )
        })}
      </div>
      <figcaption className="mt-3 text-sm text-[var(--color-text-muted)]">
        <InlineText text={PHASES_CAPTION} />
      </figcaption>
    </figure>
  )
}

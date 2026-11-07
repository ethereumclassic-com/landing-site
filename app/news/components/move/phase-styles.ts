import type { PhaseKey } from '../../lib/moves'

/**
 * One color per phase of the move, shared by the phase diagram and the step list: muted while the
 * node still runs v1.12, the warning color while it is stopped, the brand green once it runs v1.13.
 */
export const PHASE_STYLES: Record<PhaseKey, { status: string; badge: string; panel: string; bar: string; text: string }> = {
  running: {
    status: 'On v1.12',
    badge: 'border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--color-text-secondary)]',
    panel: 'border-[var(--border)] bg-[var(--bg-elevated)]',
    bar: 'bg-[var(--color-text-muted)]',
    text: 'text-[var(--color-text-muted)]',
  },
  stopped: {
    status: 'Stopped',
    badge: 'border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
    panel: 'border-[var(--color-warning-border)] bg-[var(--color-warning-bg)]',
    bar: 'bg-[var(--color-warning)]',
    text: 'text-[var(--color-warning)]',
  },
  moved: {
    status: 'On v1.13',
    badge: 'border-[var(--color-primary)]/50 bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
    panel: 'border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5',
    bar: 'bg-[var(--color-primary)]',
    text: 'text-[var(--color-primary)]',
  },
}

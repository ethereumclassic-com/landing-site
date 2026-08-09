/**
 * One source for client-badge color.
 *
 * Convention across the ETC sites:
 *   green  = ETC-native
 *   gray   = maintenance / neutral
 *   violet = Ethereum upgrade tracks
 *   amber  = reserved for the treasury site; never used here
 *
 * This exists because the meaning lived in per-file ternaries, and Core-Geth —
 * a go-ethereum derivative in maintenance — rendered VIOLET on the Olympia
 * cards, AMBER on /build/clients, and gray only on the mining hub. Three
 * surfaces, three colors, one of them right. A repo can be half-fixed and look
 * correct from whichever page you happen to open.
 *
 * Roles are a Record, not a ternary, so an unhandled role is a type error
 * rather than silently inheriting an `else` branch.
 *
 * Every tone is measured against its own composited background and clears
 * WCAG AA 4.5 in both themes — see .local/scratch/contrast-variant.py.
 */

export type BadgeTone = 'native' | 'maintenance' | 'neutral' | 'enterprise'

/** The two role vocabularies in this repo, mapped onto one tone set. */
export type ClientRole =
  | 'primary'
  | 'enterprise'
  | 'maintenance'
  | 'recommended'
  | 'maintained'
  | 'reference'

export const CLIENT_ROLE_TONE: Record<ClientRole, BadgeTone> = {
  primary: 'native',
  recommended: 'native',
  enterprise: 'enterprise',
  maintenance: 'maintenance',
  maintained: 'maintenance',
  reference: 'neutral',
}

export interface ToneStyle {
  color: string
  background: string
  borderColor: string
}

export const BADGE_TONE: Record<BadgeTone, ToneStyle> = {
  native: {
    color: 'var(--brand-green)',
    background: 'var(--brand-green-subtle)',
    borderColor: 'var(--border-brand)',
  },
  maintenance: {
    color: 'var(--text-subtle)',
    background: 'var(--border-subtle)',
    borderColor: 'var(--border-default)',
  },
  neutral: {
    color: 'var(--text-muted)',
    background: 'var(--border-subtle)',
    borderColor: 'var(--border-default)',
  },
  enterprise: {
    color: 'var(--color-info)',
    background: 'var(--color-info-bg)',
    borderColor: 'var(--color-info-border)',
  },
}

/** Inline style for a client badge, from whichever role vocabulary the data uses. */
export function badgeStyle(role: ClientRole | undefined): ToneStyle {
  return BADGE_TONE[role ? CLIENT_ROLE_TONE[role] : 'neutral']
}

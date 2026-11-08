import { BADGE_TONE } from '@/lib/badge-theme'
import { OLYMPIA_STATUS } from '../data/olympia'

/** Olympia's state, shown wherever the proposal is introduced. Neutral: it is a proposal, not an event. */
export default function OlympiaStatusBadge({ className = '' }: { className?: string }) {
  const tone = BADGE_TONE.neutral
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${className}`}
      style={{ color: tone.color, background: tone.background, borderColor: tone.borderColor }}
    >
      {OLYMPIA_STATUS}
    </span>
  )
}

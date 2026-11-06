import type { ReactNode } from 'react'
import { coregethHref } from '@/lib/core-geth'

/**
 * Renders a sentence from lib/core-geth-record.ts the way coregeth.com does: backticks are code,
 * `[label](href)` is a link, and the two repository names take their tones wherever they appear,
 * the previous one red and the current one green.
 */
const TONES: Record<string, string> = {
  etclabscore: 'text-[var(--color-error)]',
  'etclabscore/core-geth': 'text-[var(--color-error)]',
  ethereumclassic: 'text-[var(--color-primary)]',
  'ethereumclassic/core-geth': 'text-[var(--color-primary)]',
}

const TOKEN = /`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g

function render(text: string, links: boolean, prefix: string): ReactNode[] {
  const out: ReactNode[] = []
  let at = 0
  for (const match of text.matchAll(TOKEN)) {
    const start = match.index ?? 0
    if (start > at) out.push(text.slice(at, start))
    const key = `${prefix}${start}`
    if (match[1] !== undefined) {
      out.push(
        <code key={key} className={`rounded bg-[var(--panel)] px-1 font-mono text-[0.88em] ${TONES[match[1]] ?? 'text-[var(--text-primary)]'}`}>
          {match[1]}
        </code>
      )
    } else if (links && match[2] !== undefined && match[3] !== undefined) {
      const href = coregethHref(match[3])
      const external = /^https?:\/\//.test(href)
      out.push(
        <a
          key={key}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-[var(--color-primary)] underline-offset-2 hover:underline"
        >
          {render(match[2], false, `${key}-`)}
        </a>
      )
    } else {
      out.push(match[2])
    }
    at = start + match[0].length
  }
  if (at < text.length) out.push(text.slice(at))
  return out
}

export function RecordText({ text }: { text: string }) {
  return <>{render(text, true, 'r')}</>
}

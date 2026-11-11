import Link from 'next/link'
import { type Inline, parseInline } from '../lib/content'

// The body grammar lives in ../lib/content, which the feeds share, so the page
// and the feeds render the same inline markup.
export function renderInline(parts: Inline[]): React.ReactNode {
  const nodes = parts.map((part, key) => {
    switch (part.type) {
      case 'text':
        return part.text
      case 'bold':
        return (
          <strong key={key} className="font-semibold text-[var(--text-primary)]">
            {part.text}
          </strong>
        )
      case 'code':
        // The typography plugin wraps code in backticks of its own, which the markup has already
        // spent. A short span stays on one line, so a flag such as `--config` never breaks at its hyphen.
        return (
          <code
            key={key}
            className={`rounded bg-[var(--panel)] px-1.5 py-0.5 text-sm text-[var(--color-primary)] before:content-none after:content-none ${part.text.length <= 24 ? 'whitespace-nowrap' : 'break-words'}`}
          >
            {part.text}
          </code>
        )
      case 'link':
        return part.href.startsWith('http') ? (
          <a
            key={key}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="break-words text-[var(--color-primary)] hover:underline"
          >
            {part.text}
          </a>
        ) : (
          <Link key={key} href={part.href} className="break-words text-[var(--color-primary)] hover:underline">
            {part.text}
          </Link>
        )
    }
  })
  return nodes.length === 1 ? nodes[0] : nodes
}

/** Text in the body's inline markup: **bold**, [links](href) and `code`. */
export function InlineText({ text }: { text: string }) {
  return <>{renderInline(parseInline(text))}</>
}

'use client'

import { useEffect, useRef, useState } from 'react'

/** A block to paste into a terminal, with a button that copies it exactly as shown. */
export default function CodeBlock({ code, label }: { code: string; label: string }) {
  const pre = useRef<HTMLPreElement>(null)
  const [state, setState] = useState<'idle' | 'copied' | 'selected'>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const timer = window.setTimeout(() => setState('idle'), 2400)
    return () => window.clearTimeout(timer)
  }, [state])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setState('copied')
    } catch {
      // The clipboard can refuse, outside a secure context or without permission. Selecting the
      // block leaves the reader one keystroke from copying it by hand.
      const selection = window.getSelection()
      if (pre.current && selection) {
        const range = document.createRange()
        range.selectNodeContents(pre.current)
        selection.removeAllRanges()
        selection.addRange(range)
      }
      setState('selected')
    }
  }

  // The button sits in a bar of its own above the block, so a long line scrolling sideways never runs under it.
  return (
    <div className="my-3 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--code-bg)]">
      <div className="flex justify-end border-b border-[var(--code-text)]/15 px-2 py-1.5">
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy the block: ${label}`}
          className="rounded-md border border-[var(--code-text)]/30 px-2.5 py-0.5 font-mono text-xs text-[var(--code-text)] transition-colors hover:border-[var(--code-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          {state === 'copied' ? 'Copied' : state === 'selected' ? 'Selected' : 'Copy'}
        </button>
      </div>
      <pre ref={pre} className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-[var(--code-text)]">
        <code>{code}</code>
      </pre>
      <span aria-live="polite" className="sr-only">
        {state === 'copied' ? 'Copied to the clipboard' : state === 'selected' ? 'Selected, ready to copy' : ''}
      </span>
    </div>
  )
}

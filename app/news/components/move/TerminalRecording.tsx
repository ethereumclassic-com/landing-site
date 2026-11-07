'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { InlineText } from '../ArticleInline'
import { RECORDED_MOVE, type Recording, recordingSrc } from '../../lib/recordings'

/**
 * A recording of a step being run. It plays muted and on a loop while it is on screen, like an
 * animated image, at a fraction of a GIF's size. With reduced motion asked for it waits for the
 * play button, and the step's block above it carries every command it shows as text.
 */
export default function TerminalRecording({ recording }: { recording: Recording }) {
  const video = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const element = video.current
    if (!element || reduceMotion || paused) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // A browser may refuse to autoplay, under a data saver for one: the play button still works.
        if (entry.isIntersecting) element.play().catch(() => setPlaying(false))
        else element.pause()
      },
      { threshold: 0.5 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [reduceMotion, paused])

  const toggle = () => {
    const element = video.current
    if (!element) return
    if (element.paused) {
      setPaused(false)
      element.play().catch(() => setPlaying(false))
    } else {
      setPaused(true)
      element.pause()
    }
  }

  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-2">
        <span className="font-mono text-xs text-[var(--color-text-muted)]">
          Recorded on Linux: {RECORDED_MOVE.from} to {RECORDED_MOVE.to}
        </span>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause the recording' : 'Play the recording'}
          className="rounded-md border border-[var(--border)] px-2.5 py-0.5 font-mono text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
      <video
        ref={video}
        className="block h-auto w-full"
        width={recording.width}
        height={recording.height}
        poster={recordingSrc(recording, 'png')}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={recordingSrc(recording, 'webm')} type="video/webm" />
        <source src={recordingSrc(recording, 'mp4')} type="video/mp4" />
      </video>
      <figcaption className="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--color-text-secondary)]">
        <InlineText text={recording.caption} />
      </figcaption>
    </figure>
  )
}

'use client'

import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  type ReactNode,
  type HTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode
  position?: TooltipPosition
  delay?: number
  children: ReactNode
}

const calculatePosition = (
  trigger: DOMRect,
  tooltip: DOMRect,
  position: TooltipPosition
): { top: number; left: number } => {
  const gap = 8

  let top = 0
  let left = 0

  switch (position) {
    case 'top':
      top = trigger.top - tooltip.height - gap + window.scrollY
      left = trigger.left + trigger.width / 2 - tooltip.width / 2 + window.scrollX
      break
    case 'bottom':
      top = trigger.bottom + gap + window.scrollY
      left = trigger.left + trigger.width / 2 - tooltip.width / 2 + window.scrollX
      break
    case 'left':
      top = trigger.top + trigger.height / 2 - tooltip.height / 2 + window.scrollY
      left = trigger.left - tooltip.width - gap + window.scrollX
      break
    case 'right':
      top = trigger.top + trigger.height / 2 - tooltip.height / 2 + window.scrollY
      left = trigger.right + gap + window.scrollX
      break
  }

  // Keep tooltip within viewport
  const viewportPadding = 8
  if (left < viewportPadding) left = viewportPadding
  if (left + tooltip.width > window.innerWidth - viewportPadding) {
    left = window.innerWidth - tooltip.width - viewportPadding
  }
  if (top < viewportPadding) top = viewportPadding
  if (top + tooltip.height > window.innerHeight + window.scrollY - viewportPadding) {
    top = window.innerHeight + window.scrollY - tooltip.height - viewportPadding
  }

  return { top, left }
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      delay = 200,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const [tooltipStyle, setTooltipStyle] = useState<{ top: number; left: number }>({ top: -9999, left: -9999 })
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const updatePosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return

      const trigger = triggerRef.current.getBoundingClientRect()
      const tooltip = tooltipRef.current.getBoundingClientRect()
      const newPosition = calculatePosition(trigger, tooltip, position)
      setTooltipStyle(newPosition)
    }, [position])

    const showTooltip = useCallback(() => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true)
        // Position after render using requestAnimationFrame
        requestAnimationFrame(() => {
          requestAnimationFrame(updatePosition)
        })
      }, delay)
    }, [delay, updatePosition])

    const hideTooltip = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsVisible(false)
      setTooltipStyle({ top: -9999, left: -9999 })
    }, [])

    const arrowClasses: Record<TooltipPosition, string> = {
      top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-[var(--color-bg-elevated)] border-x-transparent border-b-transparent',
      bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-[var(--color-bg-elevated)] border-x-transparent border-t-transparent',
      left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-[var(--color-bg-elevated)] border-y-transparent border-r-transparent',
      right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-[var(--color-bg-elevated)] border-y-transparent border-l-transparent',
    }

    const tooltipElement = isVisible && (
      <div
        ref={tooltipRef}
        role="tooltip"
        className={[
          'fixed z-[var(--z-tooltip)]',
          'px-3 py-2',
          'bg-[var(--color-bg-elevated)]',
          'border border-[var(--border)]',
          'rounded-[var(--radius-md)]',
          'text-[var(--text-sm)] text-[var(--color-text-primary)]',
          'shadow-lg',
          'max-w-xs',
          'animate-[fade-in_var(--transition-fast)_ease-out]',
          'pointer-events-none',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={{
          top: tooltipStyle.top,
          left: tooltipStyle.left,
        }}
        {...props}
      >
        {content}
        {/* Arrow */}
        <div
          className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
          aria-hidden="true"
        />
      </div>
    )

    return (
      <>
        <div
          ref={(node) => {
            (triggerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          className="inline-block"
        >
          {children}
        </div>
        {typeof document !== 'undefined' &&
          createPortal(tooltipElement, document.body)}
      </>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export default Tooltip

'use client'

import {
  forwardRef,
  useEffect,
  useCallback,
  type ReactNode,
  type HTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  isOpen: boolean
  onClose: () => void
  title?: ReactNode
  description?: string
  size?: ModalSize
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  children: ReactNode
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]',
}

// Close icon component
const CloseIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      size = 'md',
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Handle escape key
    const handleEscape = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape') {
          onClose()
        }
      },
      [closeOnEscape, onClose]
    )

    // Handle overlay click
    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
          onClose()
        }
      },
      [closeOnOverlayClick, onClose]
    )

    // Set up escape key listener and body scroll lock
    useEffect(() => {
      if (!isOpen) return

      document.addEventListener('keydown', handleEscape)
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = originalOverflow
      }
    }, [isOpen, handleEscape])

    // Focus trap - focus first focusable element when modal opens
    useEffect(() => {
      if (!isOpen) return

      const modalElement = document.querySelector('[role="dialog"]')
      if (modalElement) {
        const focusableElements = modalElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        firstElement?.focus()
      }
    }, [isOpen])

    if (!isOpen) return null

    const modalContent = (
      <div
        className="fixed inset-0 z-[var(--z-modal-backdrop)] flex items-center justify-center p-4"
        role="presentation"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-in_var(--transition-fast)_ease-out]"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />

        {/* Modal */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
          className={[
            'relative z-[var(--z-modal)]',
            'w-full',
            sizeStyles[size],
            'bg-[var(--color-bg-secondary)]',
            'border border-[var(--border)]',
            'rounded-[var(--radius-xl)]',
            'shadow-2xl',
            'animate-[fade-in-up_var(--transition-normal)_ease-out]',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[var(--border)]">
              <div>
                {title && (
                  <h2
                    id="modal-title"
                    className="text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)]"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id="modal-description"
                    className="mt-1 text-[var(--text-sm)] text-[var(--color-text-secondary)]"
                  >
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-shrink-0 p-1 -m-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)] rounded-[var(--radius-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  aria-label="Close modal"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    )

    // Render in portal
    if (typeof document !== 'undefined') {
      return createPortal(modalContent, document.body)
    }

    return null
  }
)

Modal.displayName = 'Modal'

// Modal Footer component for actions
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center justify-end gap-3 px-6 py-4 border-t border-[var(--border)] -mx-6 -mb-6 mt-6 rounded-b-[var(--radius-xl)] bg-[var(--panel)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)

ModalFooter.displayName = 'ModalFooter'

export default Modal

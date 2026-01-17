'use client'

import Link from 'next/link'
import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  href?: string
  external?: boolean
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]',
  secondary: 'bg-[var(--panel-strong)] text-[var(--color-text-primary)] border border-[var(--border)] hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--border-strong)]',
  outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--border)] hover:bg-[var(--panel)] hover:border-[var(--border-strong)]',
  ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--panel)] hover:text-[var(--color-text-primary)]',
  link: 'bg-transparent text-[var(--color-primary)] hover:underline underline-offset-4 p-0 h-auto',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[var(--btn-height-sm)] px-3 text-[var(--text-sm)] gap-1.5',
  md: 'h-[var(--btn-height-md)] px-4 text-[var(--text-sm)] gap-2',
  lg: 'h-[var(--btn-height-lg)] px-6 text-[var(--text-base)] gap-2.5',
}

const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin ${className || 'h-4 w-4'}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      href,
      external = false,
      children,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    const isLink = variant === 'link'

    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-medium',
      !isLink && 'rounded-[var(--btn-radius)]',
      'transition-all duration-[var(--transition-normal)] ease-[var(--ease-default)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
      isDisabled && 'opacity-50 cursor-not-allowed',
      !isDisabled && 'cursor-pointer',
      fullWidth && 'w-full',
      variantStyles[variant],
      !isLink && sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const content = (
      <>
        {loading && <Spinner className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />}
        {!loading && icon && iconPosition === 'left' && icon}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && icon}
      </>
    )

    // Render as link if href is provided
    if (href) {
      const isExternal = external || /^https?:\/\//.test(href)

      if (isExternal) {
        return (
          <a
            href={href}
            className={baseStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={isDisabled}
          >
            {content}
          </a>
        )
      }

      return (
        <Link
          href={href}
          className={baseStyles}
          aria-disabled={isDisabled}
        >
          {content}
        </Link>
      )
    }

    // Render as button
    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={baseStyles}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

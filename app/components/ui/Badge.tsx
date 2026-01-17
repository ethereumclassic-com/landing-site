'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'primary'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: ReactNode
  children: ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--panel-strong)] text-[var(--color-text-secondary)] border border-[var(--border)]',
  success: 'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/20',
  warning: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)] border border-[var(--color-warning)]/20',
  error: 'bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error)]/20',
  info: 'bg-[var(--color-info-bg)] text-[var(--color-info)] border border-[var(--color-info)]/20',
  outline: 'bg-transparent text-[var(--color-text-secondary)] border border-[var(--border-strong)]',
  primary: 'bg-[var(--color-primary-alpha)] text-[var(--color-primary)] border border-[var(--color-primary)]/20',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-[var(--text-xs)] px-1.5 py-0.5 gap-1',
  md: 'text-[var(--text-sm)] px-2.5 py-1 gap-1.5',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'sm',
      icon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'inline-flex items-center',
      'font-medium',
      'rounded-full',
      'whitespace-nowrap',
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span ref={ref} className={baseStyles} {...props}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge

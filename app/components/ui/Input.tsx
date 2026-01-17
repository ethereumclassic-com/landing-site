'use client'

import { forwardRef, type ReactNode, type InputHTMLAttributes, useId } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  label?: string
  error?: string
  helper?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'h-8 text-[var(--text-sm)] px-3',
  md: 'h-[var(--input-height)] text-[var(--text-sm)] px-4',
  lg: 'h-12 text-[var(--text-base)] px-4',
}

const iconPaddingLeft: Record<InputSize, string> = {
  sm: 'pl-8',
  md: 'pl-10',
  lg: 'pl-12',
}

const iconPaddingRight: Record<InputSize, string> = {
  sm: 'pr-8',
  md: 'pr-10',
  lg: 'pr-12',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      label,
      error,
      helper,
      icon,
      iconPosition = 'left',
      className = '',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId

    const baseStyles = [
      'w-full',
      'bg-[var(--panel)]',
      'border',
      error ? 'border-[var(--color-error)]' : 'border-[var(--border)]',
      'rounded-[var(--input-radius)]',
      'text-[var(--color-text-primary)]',
      'placeholder:text-[var(--color-text-muted)]',
      'transition-all duration-[var(--transition-normal)] ease-[var(--ease-default)]',
      'focus:outline-none focus:ring-2',
      error
        ? 'focus:ring-[var(--color-error)]/20 focus:border-[var(--color-error)]'
        : 'focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]',
      disabled && 'opacity-50 cursor-not-allowed bg-[var(--panel-strong)]',
      sizeStyles[size],
      icon && iconPosition === 'left' && iconPaddingLeft[size],
      icon && iconPosition === 'right' && iconPaddingRight[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const iconSizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
    const iconPositionClass = iconPosition === 'left' ? 'left-3' : 'right-3'

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${iconPositionClass} text-[var(--color-text-muted)] pointer-events-none`}
            >
              <span className={iconSizeClass}>{icon}</span>
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={baseStyles}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-[var(--text-xs)] text-[var(--color-error)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {helper && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-1.5 text-[var(--text-xs)] text-[var(--color-text-muted)]"
          >
            {helper}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

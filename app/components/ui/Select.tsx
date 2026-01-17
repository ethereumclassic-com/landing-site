'use client'

import { forwardRef, type SelectHTMLAttributes, useId } from 'react'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[]
  size?: SelectSize
  label?: string
  placeholder?: string
  error?: string
  helper?: string
}

const sizeStyles: Record<SelectSize, string> = {
  sm: 'h-8 text-[var(--text-sm)] px-3 pr-8',
  md: 'h-[var(--input-height)] text-[var(--text-sm)] px-4 pr-10',
  lg: 'h-12 text-[var(--text-base)] px-4 pr-10',
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      size = 'md',
      label,
      placeholder,
      error,
      helper,
      className = '',
      id,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const selectId = id || generatedId

    const baseStyles = [
      'w-full',
      'appearance-none',
      'bg-[var(--panel)]',
      'border',
      error ? 'border-[var(--color-error)]' : 'border-[var(--border)]',
      'rounded-[var(--input-radius)]',
      'text-[var(--color-text-primary)]',
      'cursor-pointer',
      'transition-all duration-[var(--transition-normal)] ease-[var(--ease-default)]',
      'focus:outline-none focus:ring-2',
      error
        ? 'focus:ring-[var(--color-error)]/20 focus:border-[var(--color-error)]'
        : 'focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]',
      disabled && 'opacity-50 cursor-not-allowed bg-[var(--panel-strong)]',
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Chevron icon styles
    const chevronSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
    const chevronPosition = size === 'sm' ? 'right-2' : 'right-3'

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={baseStyles}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${selectId}-error` : helper ? `${selectId}-helper` : undefined}
            value={value}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${chevronPosition} text-[var(--color-text-muted)] pointer-events-none`}
          >
            <svg
              className={chevronSize}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-1.5 text-[var(--text-xs)] text-[var(--color-error)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {helper && !error && (
          <p
            id={`${selectId}-helper`}
            className="mt-1.5 text-[var(--text-xs)] text-[var(--color-text-muted)]"
          >
            {helper}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select

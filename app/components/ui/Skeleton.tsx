'use client'

import { forwardRef, type HTMLAttributes } from 'react'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  lines?: number
  animated?: boolean
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'rounded-[var(--radius-sm)]',
  circular: 'rounded-full',
  rectangular: 'rounded-[var(--radius-md)]',
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      lines = 1,
      animated = true,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'bg-[var(--panel-strong)]',
      animated && 'animate-pulse',
      variantStyles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Default dimensions based on variant
    const getDefaultHeight = () => {
      if (height) return typeof height === 'number' ? `${height}px` : height
      switch (variant) {
        case 'text':
          return '1rem'
        case 'circular':
          return typeof width === 'number' ? `${width}px` : width || '2.5rem'
        case 'rectangular':
          return '8rem'
        default:
          return '1rem'
      }
    }

    const getDefaultWidth = () => {
      if (width) return typeof width === 'number' ? `${width}px` : width
      switch (variant) {
        case 'text':
          return '100%'
        case 'circular':
          return '2.5rem'
        case 'rectangular':
          return '100%'
        default:
          return '100%'
      }
    }

    // For text variant with multiple lines
    if (variant === 'text' && lines > 1) {
      return (
        <div ref={ref} className="space-y-2" {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={baseStyles}
              style={{
                width: index === lines - 1 ? '75%' : getDefaultWidth(),
                height: getDefaultHeight(),
                ...style,
              }}
            />
          ))}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={baseStyles}
        style={{
          width: getDefaultWidth(),
          height: getDefaultHeight(),
          ...style,
        }}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

// Skeleton Card preset for common card loading states
export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  showImage?: boolean
  showTitle?: boolean
  showDescription?: boolean
  showFooter?: boolean
}

export const SkeletonCard = forwardRef<HTMLDivElement, SkeletonCardProps>(
  (
    {
      showImage = true,
      showTitle = true,
      showDescription = true,
      showFooter = true,
      className = '',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`p-[var(--card-padding)] bg-[var(--panel)] border border-[var(--border)] rounded-[var(--card-radius)] ${className}`}
      {...props}
    >
      {showImage && (
        <Skeleton variant="rectangular" height="8rem" className="mb-4" />
      )}
      {showTitle && <Skeleton variant="text" width="60%" height="1.5rem" className="mb-2" />}
      {showDescription && <Skeleton variant="text" lines={3} className="mb-4" />}
      {showFooter && (
        <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--border)]">
          <Skeleton variant="rectangular" width="5rem" height="2rem" />
          <Skeleton variant="rectangular" width="5rem" height="2rem" />
        </div>
      )}
    </div>
  )
)

SkeletonCard.displayName = 'SkeletonCard'

// Skeleton Table Row preset
export interface SkeletonTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  columns?: number
}

export const SkeletonTableRow = forwardRef<HTMLTableRowElement, SkeletonTableRowProps>(
  ({ columns = 4, className = '', ...props }, ref) => (
    <tr ref={ref} className={className} {...props}>
      {Array.from({ length: columns }).map((_, index) => (
        <td key={index} className="px-4 py-3">
          <Skeleton variant="text" />
        </td>
      ))}
    </tr>
  )
)

SkeletonTableRow.displayName = 'SkeletonTableRow'

// Skeleton Avatar preset
export interface SkeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

const avatarSizes: Record<'sm' | 'md' | 'lg', number> = {
  sm: 32,
  md: 40,
  lg: 56,
}

export const SkeletonAvatar = forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ size = 'md', className = '', ...props }, ref) => (
    <Skeleton
      ref={ref}
      variant="circular"
      width={avatarSizes[size]}
      height={avatarSizes[size]}
      className={className}
      {...props}
    />
  )
)

SkeletonAvatar.displayName = 'SkeletonAvatar'

export default Skeleton

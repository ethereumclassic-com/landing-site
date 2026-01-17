'use client'

import Link from 'next/link'
import Image from 'next/image'
import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'interactive'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  href?: string
  external?: boolean
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-[var(--panel)] border border-[var(--border)]',
  elevated: 'bg-[var(--panel)] border border-[var(--border)] shadow-[var(--glow-card)]',
  outlined: 'bg-transparent border border-[var(--border-strong)]',
  interactive: 'bg-[var(--panel)] border border-[var(--border)] hover:bg-[var(--panel-hover)] hover:border-[var(--border-strong)] hover:shadow-[var(--glow-card)] transition-all duration-[var(--transition-normal)] ease-[var(--ease-default)] cursor-pointer',
}

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-[var(--card-padding-sm)]',
  md: 'p-[var(--card-padding)]',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      href,
      external = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'rounded-[var(--card-radius)]',
      variantStyles[variant],
      paddingStyles[padding],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    // Render as link if href is provided
    if (href) {
      const isExternal = external || /^https?:\/\//.test(href)

      if (isExternal) {
        return (
          <a
            href={href}
            className={`block ${baseStyles}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className={`block ${baseStyles}`}>
          {children}
        </Link>
      )
    }

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card sub-components
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center gap-3 mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

export interface CardIconProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const iconSizes: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

export const CardIcon = forwardRef<HTMLDivElement, CardIconProps>(
  ({ src, alt, children, size = 'md', className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`${iconSizes[size]} flex items-center justify-center rounded-[var(--radius-lg)] bg-[var(--panel-strong)] ${className}`}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt || ''} width={24} height={24} className="w-6 h-6 object-contain" />
      ) : (
        children
      )}
    </div>
  )
)

CardIcon.displayName = 'CardIcon'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', children, className = '', ...props }, ref) => (
    <Component
      ref={ref}
      className={`text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
)

CardTitle.displayName = 'CardTitle'

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={`text-[var(--text-sm)] text-[var(--color-text-secondary)] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`${className}`} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)

CardFooter.displayName = 'CardFooter'

export default Card

'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'
export type SectionBackground = 'default' | 'alt' | 'gradient'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: SectionPadding
  background?: SectionBackground
  children: ReactNode
}

const paddingStyles: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

const backgroundStyles: Record<SectionBackground, string> = {
  default: 'bg-[var(--color-bg-primary)]',
  alt: 'bg-[var(--color-bg-secondary)]',
  gradient:
    'bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      padding = 'lg',
      background = 'default',
      children,
      className = '',
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      className={[paddingStyles[padding], backgroundStyles[background], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  )
)

Section.displayName = 'Section'

export default Section

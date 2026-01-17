'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { Container } from './Container'
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs'

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: ReactNode
}

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ title, description, breadcrumbs, actions, className = '', ...props }, ref) => (
    <header
      ref={ref}
      className={[
        'py-8 md:py-12',
        'bg-[var(--color-bg-secondary)]',
        'border-b border-[var(--border)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} className="mb-4" />
        )}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-[var(--text-3xl)] md:text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)]">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-2xl">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
      </Container>
    </header>
  )
)

PageHeader.displayName = 'PageHeader'

export default PageHeader

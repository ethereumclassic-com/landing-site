'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: ReactNode
}

const DefaultSeparator = () => (
  <svg
    className="w-4 h-4 text-[var(--color-text-muted)]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator, className = '', ...props }, ref) => {
    if (items.length === 0) return null

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={className}
        {...props}
      >
        <ol className="flex items-center gap-2 text-[var(--text-sm)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    className="text-[var(--color-text-primary)] font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)]"
                    >
                      {item.label}
                    </Link>
                    {separator || <DefaultSeparator />}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs

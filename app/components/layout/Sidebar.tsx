'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type SidebarPosition = 'left' | 'right'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  position?: SidebarPosition
  sticky?: boolean
  width?: string
  children: ReactNode
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      position = 'left',
      sticky = true,
      width = '280px',
      children,
      className = '',
      style,
      ...props
    },
    ref
  ) => (
    <aside
      ref={ref}
      className={[
        'flex-shrink-0',
        sticky && 'sticky top-24 self-start',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        width,
        ...style,
      }}
      data-position={position}
      {...props}
    >
      {children}
    </aside>
  )
)

Sidebar.displayName = 'Sidebar'

// Two-column layout with sidebar
export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {
  sidebar: ReactNode
  sidebarPosition?: SidebarPosition
  sidebarWidth?: string
  sidebarSticky?: boolean
  children: ReactNode
}

export const SidebarLayout = forwardRef<HTMLDivElement, SidebarLayoutProps>(
  (
    {
      sidebar,
      sidebarPosition = 'left',
      sidebarWidth = '280px',
      sidebarSticky = true,
      children,
      className = '',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={[
        'flex gap-8 lg:gap-12',
        sidebarPosition === 'right' && 'flex-row-reverse',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Sidebar
        position={sidebarPosition}
        width={sidebarWidth}
        sticky={sidebarSticky}
        className="hidden lg:block"
      >
        {sidebar}
      </Sidebar>
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  )
)

SidebarLayout.displayName = 'SidebarLayout'

export default Sidebar

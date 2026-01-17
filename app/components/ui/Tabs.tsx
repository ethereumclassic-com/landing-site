'use client'

import { forwardRef, type HTMLAttributes, type KeyboardEvent } from 'react'

export type TabsVariant = 'default' | 'pills' | 'underline'

export interface Tab {
  id: string
  label: string
  count?: number
  disabled?: boolean
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: Tab[]
  activeTab: string
  onChange: (tabId: string) => void
  variant?: TabsVariant
}

const variantStyles: Record<TabsVariant, { container: string; tab: string; active: string }> = {
  default: {
    container: 'bg-[var(--panel)] p-1 rounded-[var(--radius-lg)] border border-[var(--border)]',
    tab: 'px-4 py-2 rounded-[var(--radius-md)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--panel-hover)]',
    active: 'bg-[var(--panel-strong)] text-[var(--color-text-primary)] shadow-sm',
  },
  pills: {
    container: 'gap-2',
    tab: 'px-4 py-2 rounded-full text-[var(--color-text-secondary)] border border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--panel)]',
    active: 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]',
  },
  underline: {
    container: 'border-b border-[var(--border)]',
    tab: 'px-4 py-3 text-[var(--color-text-secondary)] border-b-2 border-transparent -mb-px hover:text-[var(--color-text-primary)] hover:border-[var(--border-strong)]',
    active: 'text-[var(--color-primary)] border-[var(--color-primary)]',
  },
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      activeTab,
      onChange,
      variant = 'default',
      className = '',
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant]

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const enabledTabs = tabs.filter((tab) => !tab.disabled)
      const currentIndex = enabledTabs.findIndex((tab) => tab.id === tabs[index].id)

      let newIndex: number | null = null

      switch (e.key) {
        case 'ArrowLeft':
          newIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1
          break
        case 'ArrowRight':
          newIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0
          break
        case 'Home':
          newIndex = 0
          break
        case 'End':
          newIndex = enabledTabs.length - 1
          break
      }

      if (newIndex !== null) {
        e.preventDefault()
        const newTab = enabledTabs[newIndex]
        onChange(newTab.id)
        // Focus the new tab button
        const tabElement = document.querySelector(`[data-tab-id="${newTab.id}"]`) as HTMLElement
        tabElement?.focus()
      }
    }

    return (
      <div
        ref={ref}
        role="tablist"
        className={`flex ${styles.container} ${className}`}
        {...props}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab
          const isDisabled = tab.disabled

          return (
            <button
              key={tab.id}
              role="tab"
              data-tab-id={tab.id}
              aria-selected={isActive}
              aria-disabled={isDisabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !isDisabled && onChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={[
                'inline-flex items-center gap-2',
                'text-[var(--text-sm)] font-medium',
                'transition-all duration-[var(--transition-normal)] ease-[var(--ease-default)]',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
                isDisabled && 'opacity-50 cursor-not-allowed',
                !isDisabled && 'cursor-pointer',
                styles.tab,
                isActive && styles.active,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`text-[var(--text-xs)] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? variant === 'pills'
                        ? 'bg-white/20'
                        : 'bg-[var(--color-primary-alpha)] text-[var(--color-primary)]'
                      : 'bg-[var(--panel)] text-[var(--color-text-muted)]'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    )
  }
)

Tabs.displayName = 'Tabs'

// Tab Panel component for content
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  tabId: string
  activeTab: string
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ tabId, activeTab, children, className = '', ...props }, ref) => {
    if (tabId !== activeTab) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        aria-labelledby={tabId}
        tabIndex={0}
        className={className}
        {...props}
      >
        {children}
      </div>
    )
  }
)

TabPanel.displayName = 'TabPanel'

export default Tabs

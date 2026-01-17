'use client'

import {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  useRef,
  type HTMLAttributes,
} from 'react'
import Link from 'next/link'
import { Container } from './Container'

// Navigation item types
export interface NavItem {
  label: string
  href: string
}

export interface NavDropdownItem {
  label: string
  items: NavItem[]
}

export type NavEntry = NavItem | NavDropdownItem

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  items?: NavEntry[]
  ctaLabel?: string
  ctaHref?: string
  showSearch?: boolean
  onSearchClick?: () => void
}

// Check if item is a dropdown
const isDropdown = (item: NavEntry): item is NavDropdownItem => {
  return 'items' in item
}

// Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

// Default ETC Logo
const ETCLogo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">ETC</span>
    </div>
    <span className="hidden sm:inline font-semibold text-[var(--color-text-primary)]">
      Ethereum Classic
    </span>
  </Link>
)

// Default navigation items
const defaultNavItems: NavEntry[] = [
  { label: 'News', href: '/news' },
  { label: 'Wallet', href: '/wallet' },
  { label: 'Apps', href: '/apps' },
  { label: 'Buy', href: '/buy' },
  {
    label: 'Learn',
    items: [
      { label: 'What is ETC?', href: '/learn/what-is-ethereum-classic' },
      { label: 'Basics', href: '/learn/basics' },
      { label: 'Wallets', href: '/learn/wallets' },
      { label: 'Mining', href: '/learn/mining' },
    ],
  },
  { label: 'Mining', href: '/mining' },
  { label: 'Build', href: '/build' },
  {
    label: 'Markets',
    items: [
      { label: 'ETC Price', href: '/price/etc' },
      { label: 'Exchanges', href: '/exchanges' },
      { label: 'Converter', href: '/converter' },
    ],
  },
]

// Dropdown component
interface DropdownProps {
  item: NavDropdownItem
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

const Dropdown = ({ item, isOpen, onToggle, onClose }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={[
          'flex items-center gap-1 px-3 py-2',
          'text-[var(--text-sm)] font-medium',
          'text-[var(--color-text-secondary)]',
          'hover:text-[var(--color-text-primary)]',
          'transition-colors duration-[var(--transition-fast)]',
          'rounded-[var(--radius-md)]',
          'hover:bg-[var(--panel)]',
          isOpen && 'text-[var(--color-text-primary)] bg-[var(--panel)]',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDownIcon />
      </button>
      {isOpen && (
        <div
          className={[
            'absolute top-full left-0 mt-1',
            'min-w-[200px]',
            'py-2',
            'bg-[var(--color-bg-elevated)]',
            'border border-[var(--border)]',
            'rounded-[var(--radius-lg)]',
            'shadow-lg',
            'z-[var(--z-dropdown)]',
            'animate-[fade-in_var(--transition-fast)_ease-out]',
          ].join(' ')}
        >
          {item.items.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              onClick={onClose}
              className={[
                'block px-4 py-2',
                'text-[var(--text-sm)]',
                'text-[var(--color-text-secondary)]',
                'hover:text-[var(--color-text-primary)]',
                'hover:bg-[var(--panel)]',
                'transition-colors duration-[var(--transition-fast)]',
              ].join(' ')}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// Mobile menu component
interface MobileMenuProps {
  items: NavEntry[]
  isOpen: boolean
  onClose: () => void
  ctaLabel?: string
  ctaHref?: string
}

const MobileMenu = ({ items, isOpen, onClose, ctaLabel, ctaHref }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={[
          'absolute top-0 right-0 h-full w-full max-w-sm',
          'bg-[var(--color-bg-secondary)]',
          'border-l border-[var(--border)]',
          'overflow-y-auto',
          'animate-[slide-in-right_var(--transition-normal)_ease-out]',
        ].join(' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <span className="text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          <ul className="space-y-1">
            {items.map((item) => {
              const key = isDropdown(item) ? item.label : item.href

              if (isDropdown(item)) {
                const isExpanded = expandedItem === item.label
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                      className={[
                        'flex items-center justify-between w-full',
                        'px-4 py-3',
                        'text-[var(--text-base)]',
                        'text-[var(--color-text-secondary)]',
                        'hover:text-[var(--color-text-primary)]',
                        'hover:bg-[var(--panel)]',
                        'rounded-[var(--radius-md)]',
                        'transition-colors duration-[var(--transition-fast)]',
                      ].join(' ')}
                    >
                      {item.label}
                      <svg
                        className={[
                          'w-5 h-5 transition-transform duration-[var(--transition-fast)]',
                          isExpanded && 'rotate-180',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={onClose}
                              className={[
                                'block px-4 py-2',
                                'text-[var(--text-sm)]',
                                'text-[var(--color-text-muted)]',
                                'hover:text-[var(--color-text-primary)]',
                                'hover:bg-[var(--panel)]',
                                'rounded-[var(--radius-md)]',
                                'transition-colors duration-[var(--transition-fast)]',
                              ].join(' ')}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

              return (
                <li key={key}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={[
                      'block px-4 py-3',
                      'text-[var(--text-base)]',
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-text-primary)]',
                      'hover:bg-[var(--panel)]',
                      'rounded-[var(--radius-md)]',
                      'transition-colors duration-[var(--transition-fast)]',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          {ctaLabel && ctaHref && (
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <Link
                href={ctaHref}
                onClick={onClose}
                className={[
                  'block w-full px-4 py-3',
                  'text-center font-medium',
                  'text-white',
                  'bg-[var(--color-primary)]',
                  'hover:bg-[var(--color-primary-hover)]',
                  'rounded-[var(--radius-md)]',
                  'transition-colors duration-[var(--transition-fast)]',
                ].join(' ')}
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  (
    {
      logo,
      items = defaultNavItems,
      ctaLabel = 'Launch App',
      ctaHref = '/wallet',
      showSearch = true,
      onSearchClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    // Handle scroll for sticky header effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleDropdownToggle = useCallback((label: string) => {
      setOpenDropdown((prev) => (prev === label ? null : label))
    }, [])

    const handleDropdownClose = useCallback(() => {
      setOpenDropdown(null)
    }, [])

    return (
      <>
        <header
          ref={ref}
          className={[
            'sticky top-0 z-[var(--z-header)]',
            'transition-all duration-[var(--transition-normal)]',
            isScrolled
              ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--border)]'
              : 'bg-[var(--color-bg-primary)]',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          <Container>
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">{logo || <ETCLogo />}</div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {items.map((item) => {
                  if (isDropdown(item)) {
                    return (
                      <Dropdown
                        key={item.label}
                        item={item}
                        isOpen={openDropdown === item.label}
                        onToggle={() => handleDropdownToggle(item.label)}
                        onClose={handleDropdownClose}
                      />
                    )
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        'px-3 py-2',
                        'text-[var(--text-sm)] font-medium',
                        'text-[var(--color-text-secondary)]',
                        'hover:text-[var(--color-text-primary)]',
                        'transition-colors duration-[var(--transition-fast)]',
                        'rounded-[var(--radius-md)]',
                        'hover:bg-[var(--panel)]',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-2">
                {/* Search button */}
                {showSearch && (
                  <button
                    type="button"
                    onClick={onSearchClick}
                    className={[
                      'p-2',
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-text-primary)]',
                      'transition-colors duration-[var(--transition-fast)]',
                      'rounded-[var(--radius-md)]',
                      'hover:bg-[var(--panel)]',
                    ].join(' ')}
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </button>
                )}

                {/* CTA Button (desktop) */}
                {ctaLabel && ctaHref && (
                  <Link
                    href={ctaHref}
                    className={[
                      'hidden sm:inline-flex',
                      'px-4 py-2',
                      'text-[var(--text-sm)] font-medium',
                      'text-white',
                      'bg-[var(--color-primary)]',
                      'hover:bg-[var(--color-primary-hover)]',
                      'rounded-[var(--radius-md)]',
                      'transition-colors duration-[var(--transition-fast)]',
                    ].join(' ')}
                  >
                    {ctaLabel}
                  </Link>
                )}

                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className={[
                    'lg:hidden p-2',
                    'text-[var(--color-text-secondary)]',
                    'hover:text-[var(--color-text-primary)]',
                    'transition-colors duration-[var(--transition-fast)]',
                    'rounded-[var(--radius-md)]',
                    'hover:bg-[var(--panel)]',
                  ].join(' ')}
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </button>
              </div>
            </nav>
          </Container>
        </header>

        {/* Mobile menu */}
        <MobileMenu
          items={items}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
        />
      </>
    )
  }
)

Navigation.displayName = 'Navigation'

export default Navigation

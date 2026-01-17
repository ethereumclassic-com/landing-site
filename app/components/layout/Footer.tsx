'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import Link from 'next/link'
import { Container } from './Container'

// Footer link types
export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  label: string
  href: string
  icon: React.ReactNode
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  sections?: FooterSection[]
  socialLinks?: SocialLink[]
  copyright?: string
  legalLinks?: FooterLink[]
  showNewsletter?: boolean
}

// Default footer sections
const defaultSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Wallet', href: '/wallet' },
      { label: 'Buy ETC', href: '/buy' },
      { label: 'Apps', href: '/apps' },
      { label: 'Markets', href: '/price/etc' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'What is ETC?', href: '/learn/what-is-ethereum-classic' },
      { label: 'Basics', href: '/learn/basics' },
      { label: 'Mining Guides', href: '/learn/mining' },
      { label: 'Trading', href: '/learn/trading' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Exchanges', href: '/exchanges' },
      { label: 'Mining', href: '/mining' },
      { label: 'Build', href: '/build' },
      { label: 'Research', href: '/research' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Advertise', href: '/advertise' },
      { label: 'Partners', href: '/partners' },
    ],
  },
]

// Social icons
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const defaultSocialLinks: SocialLink[] = [
  { label: 'Twitter', href: 'https://twitter.com/eth_classic', icon: <TwitterIcon /> },
  { label: 'Discord', href: 'https://ethereumclassic.org/discord', icon: <DiscordIcon /> },
  { label: 'Telegram', href: 'https://t.me/ethclassic', icon: <TelegramIcon /> },
  { label: 'GitHub', href: 'https://github.com/ethereumclassic', icon: <GitHubIcon /> },
]

const defaultLegalLinks: FooterLink[] = [
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
]

// Newsletter component
const Newsletter = () => (
  <div className="py-12 border-b border-[var(--border)]">
    <Container>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)]">
            Stay Updated
          </h3>
          <p className="mt-1 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
            Get the latest news and updates about Ethereum Classic.
          </p>
        </div>
        <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className={[
              'flex-1 md:w-64 px-4 py-2',
              'text-[var(--text-sm)]',
              'bg-[var(--panel)]',
              'border border-[var(--border)]',
              'rounded-[var(--radius-md)]',
              'text-[var(--color-text-primary)]',
              'placeholder:text-[var(--color-text-muted)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]',
              'transition-all duration-[var(--transition-fast)]',
            ].join(' ')}
          />
          <button
            type="submit"
            className={[
              'px-6 py-2',
              'text-[var(--text-sm)] font-medium',
              'text-white',
              'bg-[var(--color-primary)]',
              'hover:bg-[var(--color-primary-hover)]',
              'rounded-[var(--radius-md)]',
              'transition-colors duration-[var(--transition-fast)]',
            ].join(' ')}
          >
            Subscribe
          </button>
        </form>
      </div>
    </Container>
  </div>
)

export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      sections = defaultSections,
      socialLinks = defaultSocialLinks,
      copyright = `© ${new Date().getFullYear()} EthereumClassic.com. All rights reserved.`,
      legalLinks = defaultLegalLinks,
      showNewsletter = true,
      className = '',
      ...props
    },
    ref
  ) => (
    <footer
      ref={ref}
      className={['bg-[var(--color-bg-secondary)]', className].filter(Boolean).join(' ')}
      {...props}
    >
      {/* Newsletter */}
      {showNewsletter && <Newsletter />}

      {/* Main footer content */}
      <Container>
        <div className="py-12 lg:py-16">
          {/* Link sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[var(--text-sm)] font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)]"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'p-2',
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-text-primary)]',
                      'hover:bg-[var(--panel)]',
                      'rounded-[var(--radius-md)]',
                      'transition-all duration-[var(--transition-fast)]',
                    ].join(' ')}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <Container>
          <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[var(--text-sm)] text-[var(--color-text-muted)]">{copyright}</p>
            {legalLinks.length > 0 && (
              <nav className="flex flex-wrap items-center gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[var(--text-sm)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-fast)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </Container>
      </div>
    </footer>
  )
)

Footer.displayName = 'Footer'

export default Footer

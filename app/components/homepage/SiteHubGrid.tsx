'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

interface Hub {
  label: string
  href: string
  subItems: string[]
  icon: React.ReactNode
  olympia?: boolean
}

const hubs: Hub[] = [
  {
    label: 'Buy ETC',
    href: '/buy',
    subItems: ['Exchanges', 'Instant Buy', 'P2P Trading'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: 'Learn',
    href: '/learn',
    subItems: ['What is ETC?', 'Basics', 'DeFi on ETC'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    label: 'Mining',
    href: '/mining',
    subItems: ['Mining Pools', 'Hardware', 'Profitability'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    label: 'Build',
    href: '/build',
    subItems: ['Documentation', 'Developer Tools', 'Grants'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: 'Olympia',
    href: '/olympia',
    subItems: ['Upgrade Details', 'Governance', 'Miners & Fees'],
    olympia: true,
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    label: 'Research',
    href: '/research',
    subItems: ['Markets', 'Supply Data', 'Price History'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    label: 'Exchanges',
    href: '/exchanges',
    subItems: ['Compare', 'Lowest Fees', 'No-KYC'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    label: 'Wallet',
    href: '/wallet',
    subItems: ['Reviews', 'Hardware', 'Compare'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
      </svg>
    ),
  },
  {
    label: 'Apps',
    href: '/apps',
    subItems: ['DeFi', 'Governance', 'Featured'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    label: 'Community',
    href: '/community',
    subItems: ['Social', 'Events', 'Contribute'],
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
]

function HubCard({ hub, index }: { hub: Hub; index: number }) {
  return (
    <FadeIn delay={index * 40}>
      <Link
        href={hub.href}
        className={`group flex h-full flex-col rounded-xl border p-4 transition-all hover:shadow-md ${
          hub.olympia
            ? 'border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 hover:border-[var(--brand-green)]/50 hover:bg-[var(--brand-green)]/10'
            : 'border-[var(--border-default)] bg-[var(--panel)] hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5'
        }`}
      >
        {/* Icon row */}
        <div className="flex items-center gap-2.5">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
            hub.olympia
              ? 'bg-[var(--brand-green)]/15 text-[var(--brand-green)]'
              : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] group-hover:bg-[var(--brand-green)]/10 group-hover:text-[var(--brand-green)]'
          } transition-colors`}>
            {hub.icon}
          </div>
          {hub.olympia && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
            </span>
          )}
        </div>

        {/* Label */}
        <p className={`mt-3 text-sm font-semibold transition-colors ${
          hub.olympia
            ? 'text-[var(--brand-green)]'
            : 'text-[var(--text-primary)] group-hover:text-[var(--brand-green)]'
        }`}>
          {hub.label}
        </p>

        {/* Sub-items */}
        <ul className="mt-2 space-y-0.5">
          {hub.subItems.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <span className="h-px w-2 shrink-0 bg-[var(--border-default)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Link>
    </FadeIn>
  )
}

export default function SiteHubGrid() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Explore Ethereum Classic
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Everything across the ETC ecosystem — select a section to explore
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {hubs.map((hub, index) => (
            <HubCard key={hub.href} hub={hub} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

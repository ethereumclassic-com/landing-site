import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'Core Developer Calls — Ethereum Classic',
  },
  description:
    'Ethereum Classic\'s Core Developer Calls, where client teams discuss ECIPs and schedule network upgrades: the record of each call, and the next one\'s agenda.',
  openGraph: { ...OG_BASE },
  keywords: [
    'Ethereum Classic',
    'Core Developer Calls',
    'CDC',
    'ECIP',
    'protocol governance',
    'consensus',
    'hard fork',
    'network upgrade',
    'ETC',
  ],
}

export default function CoreDevsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

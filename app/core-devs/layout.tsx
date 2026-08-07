import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Core Devs — Ethereum Classic',
    default: 'Core Developer Calls — Ethereum Classic',
  },
  description:
    'Where Ethereum Classic protocol decisions are made. Core Developer Calls bring together client teams to reach consensus on network upgrades, ECIP proposals, and protocol changes.',
  openGraph: {
    ...OG_BASE,
    title: 'Core Developer Calls — Ethereum Classic',
    description:
      'The decision-making forum for ETC protocol upgrades. Full archive of consensus calls with agendas, recordings, and ECIP references since 2019.',
  },
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

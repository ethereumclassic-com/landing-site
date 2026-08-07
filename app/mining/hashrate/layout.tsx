import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Network Hashrate — Live Chart and Explainer',
  description:
    'Live Ethereum Classic network hashrate with 7-day, 30-day, 1-year and full-history charts. How ETC hashrate is derived from difficulty and block time, why no one can measure it directly, and what it means for network security and mining returns.',
  keywords: [
    'ETC network hashrate',
    'Ethereum Classic hashrate',
    'ETC hashrate chart',
    'ETChash',
    'ETC mining hashrate',
    'network hashrate history',
    'ETC hashrate calculation',
    'ETC 51% attack cost',
    'ETC hashrate difficulty',
  ],
  openGraph: {
    ...OG_BASE,
    title: 'ETC Network Hashrate — Live Chart and Explainer',
    description:
      'Live Ethereum Classic network hashrate across four timeframes, and how the figure is derived from difficulty and block time.',
  },
}

export default function HashrateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

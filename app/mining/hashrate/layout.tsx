import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Hashrate: Live Chart and Explainer',
  description:
    'Live Ethereum Classic network hashrate over 7 days, 30 days, a year and its full history, and how the figure is derived from difficulty and block time.',
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
  openGraph: { ...OG_BASE },
}

export default function HashrateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

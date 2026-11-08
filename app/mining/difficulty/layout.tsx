import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Difficulty: Live Chart and Explainer',
  description:
    "Live Ethereum Classic network difficulty over 7 days, 30 days, a year and its full history, and how difficulty adjustment keeps ETC's block time steady.",
  keywords: [
    'ETC network difficulty',
    'Ethereum Classic difficulty',
    'ETC difficulty chart',
    'ETC difficulty adjustment',
    'ETChash difficulty',
    'ETC block time',
    'ETC mining difficulty',
    'network difficulty history',
    'ETC hashrate difficulty',
  ],
  openGraph: { ...OG_BASE },
}

export default function DifficultyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

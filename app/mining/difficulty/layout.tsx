import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Network Difficulty — Live Chart and Explainer',
  description:
    "Live Ethereum Classic network difficulty with 7-day, 30-day, 1-year and full-history charts. How ETC's difficulty adjustment holds block times steady as hashrate moves, what difficulty means for miners, and how it relates to network hashrate.",
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
  openGraph: {
    ...OG_BASE,
    title: 'ETC Network Difficulty — Live Chart and Explainer',
    description:
      "Live Ethereum Classic network difficulty, with charts across four timeframes and an explanation of how ETC's difficulty adjustment works.",
  },
}

export default function DifficultyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

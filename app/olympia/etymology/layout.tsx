import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Olympia: Etymology and Lore',
  description:
    "Why Olympia? Three traditions: the Olympic testnet that stress-tested Ethereum in 2015, a sanctuary sovereign to no city-state, and Marvel's Eternals.",
  keywords: [
    'Olympia Ethereum Classic',
    'Olympia upgrade etymology',
    'Ethereum Classic upgrade history',
    'Olympic testnet Ethereum',
    'ETC hard fork history',
    'ETC upgrade naming tradition',
    'Marvel Eternals ETC',
    'Panhellenic sanctuary',
    'Ethereum Classic origin story',
    'ekecheiria',
  ],
  // No title or description: the share card is drawn from the page's own, above.
  openGraph: { ...OG_BASE, type: 'article' },
}

export default function EtymologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

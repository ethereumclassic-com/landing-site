import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'A Decade of Conviction: The Road to Olympia',
  description:
    "The record behind the Olympia proposal: two rejected treasury proposals, the development teams that came and went, and a decade of funding Ethereum Classic.",
  keywords: [
    'Ethereum Classic history',
    'ETC network upgrade history',
    'Olympia upgrade origin',
    'ECIP-1051 rejected',
    'ECIP-1098 withdrawn',
    'ECIP-1111 ECIP-1112',
    'ETC treasury history',
    'ETCDEV collapse',
    'ETC Cooperative history',
    'Grayscale ETCG',
    'IOHK Mantis ETC',
    'Ethereum Classic DAO fork',
    'ETC 51% attacks 2020',
    'ETC funding history',
    'EVM proof of work history',
    'Fundonomy ETC',
    'Orbita ETC client',
    'August 2016 ETC meetup',
  ],
  // No title or description: the share card is drawn from the page's own, above.
  openGraph: { ...OG_BASE, type: 'article' },
}

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

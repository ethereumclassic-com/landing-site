import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Governance & DAO Apps',
  description:
    'Governance and DAO applications on Ethereum Classic, including Olympia DAO, the proposed governance of a treasury that the base fee would fund.',
  alternates: {
    canonical: 'https://ethereumclassic.com/apps/governance',
  },
  openGraph: {
    ...OG_BASE,
    url: 'https://ethereumclassic.com/apps/governance',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

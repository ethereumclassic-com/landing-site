import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Governance & DAO Apps',
  description:
    'On-chain governance and DAO applications on Ethereum Classic. Basefee-funded treasury, membership voting, and proposal lifecycle management.',
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

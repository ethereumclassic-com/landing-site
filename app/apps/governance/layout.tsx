import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance & DAO Apps',
  description:
    'On-chain governance and DAO applications on Ethereum Classic. Basefee-funded treasury, membership voting, and proposal lifecycle management.',
  alternates: {
    canonical: 'https://ethereumclassic.com/apps/governance',
  },
  openGraph: {
    title: 'Governance & DAO Apps — Ethereum Classic',
    description:
      'Decentralized governance tools on ETC — on-chain voting, treasury management, and proposal systems.',
    url: 'https://ethereumclassic.com/apps/governance',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

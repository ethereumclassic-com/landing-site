import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Decade of Conviction — The Foundations of Olympia',
  description:
    "The record behind Ethereum Classic's Olympia upgrade: two rejected treasury proposals, four development teams that came and went, and the decade-long chain of decisions that built the structural foundations of ETC's protocol-funded treasury and on-chain governance. From the August 2016 London meetup to the July 2025 ECIPs.",
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
  openGraph: {
    title: 'A Decade of Conviction — The Foundations of Olympia',
    description:
      "Two rejected treasury proposals, four development teams, and the decade-long chain of decisions that seeded Ethereum Classic's Olympia upgrade.",
    type: 'article',
  },
}

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

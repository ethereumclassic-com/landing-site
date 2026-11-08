import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Ethereum Classic',
    default: 'Olympia: EVM Alignment Through Glamsterdam | Ethereum Classic',
  },
  description:
    'Olympia is a proposed Ethereum Classic upgrade, targeted for 2027: EVM alignment through Glamsterdam and an EIP-1559 base fee credited to a treasury.',
  keywords: [
    'Olympia upgrade',
    'Olympia proposal',
    'Ethereum Classic upgrade',
    'EVM alignment',
    'Glamsterdam',
    'Dencun',
    'Pectra',
    'Fusaka',
    'ECIP-1111',
    'ECIP-1112',
    'ECIP-1113',
    'ECIP-1114',
    'ECIP-1121',
    'EIP-1559',
    'Sovereignty Vault',
    'Olympia Treasury',
    'Olympia DAO',
    'Ecosystem Growth DAO',
    'Ethereum Classic node upgrade',
    'Core-Geth',
  ],
  // No title or description: Next fills each Olympia page's card from that page's own metadata. A
  // title here would be every child page's share card, as the hub's once was.
  openGraph: { ...OG_BASE },
}

export default function OlympiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

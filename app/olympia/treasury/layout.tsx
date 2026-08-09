import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Olympia Treasury — Protocol-Funded Development',
  description:
    "The Olympia Treasury is an immutable, non-custodial contract that receives Ethereum Classic's EIP-1559 basefee at block finalization. ECIP-1112 defines how it is funded, who can spend it, and what it can never do — no minting, no upgrade path, and withdrawal restricted to a single authorized executor.",
  keywords: [
    'Olympia Treasury',
    'ECIP-1112',
    'ETC protocol treasury',
    'basefee treasury',
    'Ethereum Classic funding',
    'protocol-funded development',
    'ECIP-1111 basefee redirect',
    'Olympia DAO treasury',
    'non-custodial treasury',
    'ETC sustainable funding',
  ],
  openGraph: {
    ...OG_BASE,
    title: 'Olympia Treasury — Protocol-Funded Development',
    description:
      "An immutable, non-custodial contract funded by Ethereum Classic's basefee. What ECIP-1112 guarantees, and what it forbids.",
  },
}

export default function TreasuryLayout({ children }: { children: React.ReactNode }) {
  return children
}

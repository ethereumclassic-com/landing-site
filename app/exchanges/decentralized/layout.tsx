import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decentralized Exchanges (DEX) | Ethereum Classic',
  description: 'Trade ETC on decentralized exchanges. Non-custodial, permissionless trading without intermediaries.',
}

export default function DecentralizedLayout({ children }: { children: React.ReactNode }) {
  return children
}

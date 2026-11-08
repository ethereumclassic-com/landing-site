import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'No KYC Exchanges',
  description: 'Trade Ethereum Classic without identity verification. Privacy-focused exchanges and DEXs that allow anonymous trading.',
}

export default function NoKYCLayout({ children }: { children: React.ReactNode }) {
  return children
}

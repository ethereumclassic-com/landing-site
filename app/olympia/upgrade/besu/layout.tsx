import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Besu Upgrade Guide',
  description:
    'Step-by-step guide to upgrading Hyperledger Besu for the Olympia hard fork on Ethereum Classic.',
}

export default function BesuLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peer-to-Peer',
  description:
    'Buy ETC directly from other people. P2P marketplaces for Ethereum Classic.',
}

export default function P2pLayout({ children }: { children: React.ReactNode }) {
  return children
}

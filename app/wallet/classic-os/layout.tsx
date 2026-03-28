import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Classic OS Wallet',
  description:
    'Download Classic OS — the dedicated desktop wallet for Ethereum Classic.',
}

export default function ClassicOsLayout({ children }: { children: React.ReactNode }) {
  return children
}

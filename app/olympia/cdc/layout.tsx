import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Development Calls',
  description:
    'Archive of CDC calls coordinating the Olympia upgrade for Ethereum Classic.',
}

export default function CdcLayout({ children }: { children: React.ReactNode }) {
  return children
}

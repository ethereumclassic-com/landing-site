import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Upgrade Guide',
  description:
    'Step-by-step guide to upgrading Core-Geth for the Olympia hard fork on Ethereum Classic.',
}

export default function CoreGethLayout({ children }: { children: React.ReactNode }) {
  return children
}

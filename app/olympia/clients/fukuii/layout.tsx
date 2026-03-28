import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fukuii Upgrade Guide',
  description:
    'Step-by-step guide to upgrading Fukuii for the Olympia hard fork on Ethereum Classic.',
}

export default function FukuiiLayout({ children }: { children: React.ReactNode }) {
  return children
}

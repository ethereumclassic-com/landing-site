import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Olympia — Ethereum Classic',
    default: 'Olympia Network Upgrade — Ethereum Classic',
  },
  description:
    'Active protocol development for Ethereum Classic — EVM modernization, maintained clients, and funded development through sustainable basefee revenue. Block rewards and tips untouched.',
  openGraph: {
    title: 'Olympia Network Upgrade — Ethereum Classic',
    description:
      'EVM alignment to Fusaka, EIP-1559 basefee directed to protocol treasury, and three independent client implementations.',
    type: 'website',
  },
}

export default function OlympiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

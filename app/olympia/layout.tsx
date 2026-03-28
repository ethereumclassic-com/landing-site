import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Olympia — Ethereum Classic',
    default: 'Olympia Network Upgrade — Ethereum Classic',
  },
  description:
    'Olympia brings EIP-1559, on-chain governance, and a protocol treasury to Ethereum Classic. Three independent clients. Zero changes to block rewards.',
  openGraph: {
    title: 'Olympia Network Upgrade — Ethereum Classic',
    description:
      'EIP-1559 fee market, protocol treasury, on-chain governance, and 13 EIPs from Shanghai/Cancun — all in one upgrade.',
    type: 'website',
  },
}

export default function OlympiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

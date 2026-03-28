import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Upgrade History — Ethereum Classic',
  description:
    'Complete history of Ethereum Classic network upgrades from Atlantis through Olympia. Eight hard forks maintaining EVM compatibility and protocol evolution.',
  openGraph: {
    title: 'Network Upgrade History — Ethereum Classic',
    description:
      'Complete history of ETC network upgrades — Atlantis, Agharta, Phoenix, Thanos, Magneto, Mystique, Spiral, and Olympia.',
    type: 'website',
  },
}

export default function UpgradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

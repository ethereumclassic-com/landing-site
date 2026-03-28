import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Upgrade History — Ethereum Classic',
  description:
    'Complete history of Ethereum Classic network upgrades from Frontier through Olympia — every hard fork from genesis to EVM alignment with Fusaka.',
  openGraph: {
    title: 'Network Upgrade History — Ethereum Classic',
    description:
      'Complete history of ETC network upgrades from genesis through Olympia — Frontier, Homestead, Die Hard, Gotham, Atlantis, Phoenix, Spiral, and more.',
    type: 'website',
  },
}

export default function UpgradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upgrade Your Node',
  description:
    'How to upgrade your ETC node for Olympia. Guides for Core-Geth, Besu, and Fukuii.',
}

export default function UpgradeLayout({ children }: { children: React.ReactNode }) {
  return children
}

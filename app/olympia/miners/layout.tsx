import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miner Revenue Impact',
  description:
    'How Olympia affects ETC miners — block rewards untouched, basefee directed to treasury.',
}

export default function MinersLayout({ children }: { children: React.ReactNode }) {
  return children
}

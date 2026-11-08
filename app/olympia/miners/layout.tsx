import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miners and Olympia',
  description:
    'What the proposed Olympia upgrade would change for Ethereum Classic miners: block rewards and priority fees stay, and the base fee goes to the Treasury.',
}

export default function MinersLayout({ children }: { children: React.ReactNode }) {
  return children
}

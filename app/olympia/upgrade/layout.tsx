import type { Metadata } from 'next'

// The /olympia layout appends " | Ethereum Classic" through its title template, and its openGraph block
// carries no title or description, so this page's card is drawn from the two below.
export const metadata: Metadata = {
  title: 'Olympia for Node Operators',
  description:
    'What the proposed Olympia upgrade would change for an Ethereum Classic node, what to run until a client implements it, and every EIP ECIP-1121 classifies.',
}

export default function OlympiaUpgradeLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MetaMask for ETC',
  description:
    'How to add Ethereum Classic to MetaMask. Step-by-step setup guide.',
}

export default function MetamaskLayout({ children }: { children: React.ReactNode }) {
  return children
}

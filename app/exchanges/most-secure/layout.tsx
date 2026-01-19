import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Most Secure Exchanges | Ethereum Classic',
  description: 'Trade ETC on the most secure exchanges. Regulated platforms with insurance, cold storage, and proven security track records.',
}

export default function MostSecureLayout({ children }: { children: React.ReactNode }) {
  return children
}

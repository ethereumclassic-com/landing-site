import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Apps',
  description: 'NFT marketplaces and tools on Ethereum Classic. Mint, buy, and sell NFTs on ETC.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

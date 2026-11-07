import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description:
    'Run an Ethereum Classic node with Core-Geth, the recommended client, on its v1.13 line, or try Fukuii, an alternative client in alpha. Plus the ETC plugin framework.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

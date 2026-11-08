import type { Metadata } from 'next'
import { CORE_GETH_RECOMMENDED_LINE } from '@/lib/core-geth'

export const metadata: Metadata = {
  title: 'ETC Clients',
  description:
    `Run an Ethereum Classic node with Core-Geth, the recommended client, on its ${CORE_GETH_RECOMMENDED_LINE} line, or try Fukuii, an alternative client in alpha.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

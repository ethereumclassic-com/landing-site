import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Network Upgrade History | Ethereum Classic',
  description:
    'Every Ethereum Classic network upgrade from Frontier through Spiral, each with its ECIPs and activation block, and the proposed Olympia upgrade.',
  openGraph: { ...OG_BASE },
}

export default function UpgradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

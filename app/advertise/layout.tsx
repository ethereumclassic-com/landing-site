import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise — Ethereum Classic',
  description: 'Advertise on ethereumclassic.com. Reach the ETC community with sponsored listings and banner placements.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

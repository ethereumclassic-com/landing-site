import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Software',
  description:
    'Download mining software for Ethereum Classic. ETCHash-compatible miners.',
}

export default function SoftwareLayout({ children }: { children: React.ReactNode }) {
  return children
}

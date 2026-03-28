import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Hardware',
  description:
    'Best GPUs and ASICs for mining Ethereum Classic with ETCHash.',
}

export default function HardwareLayout({ children }: { children: React.ReactNode }) {
  return children
}

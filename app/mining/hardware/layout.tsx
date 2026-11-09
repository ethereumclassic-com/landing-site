import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Hardware',
  description:
    'Compare GPUs and ASICs for mining Ethereum Classic with Etchash: hashrate, power, efficiency and estimated profit.',
}

export default function HardwareLayout({ children }: { children: React.ReactNode }) {
  return children
}

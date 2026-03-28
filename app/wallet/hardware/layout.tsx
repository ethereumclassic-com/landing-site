import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hardware Wallets',
  description:
    'Secure your ETC with Ledger, Trezor, and other hardware wallets.',
}

export default function HardwareLayout({ children }: { children: React.ReactNode }) {
  return children
}

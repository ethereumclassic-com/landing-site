import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy with Bank Transfer',
  description:
    'Buy Ethereum Classic with bank transfer or wire. Lower fees for larger purchases.',
}

export default function BankLayout({ children }: { children: React.ReactNode }) {
  return children
}

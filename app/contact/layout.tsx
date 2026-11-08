import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Ethereum Classic',
  description:
    'Email Ethereum Classic by topic: partnerships, listings, advertising, press, grants or the website, and report a vulnerability to the security address.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

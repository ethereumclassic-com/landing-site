import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Readiness',
  description:
    "How Ethereum Classic's clients get ready for Olympia: run Core-Geth's v1.13 line or Fukuii's latest release today, then take each client's Olympia release before activation.",
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}

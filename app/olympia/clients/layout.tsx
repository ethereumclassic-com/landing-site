import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Olympia Client Readiness',
  description:
    "No released client implements Olympia. What each client's maintainers publish about it, and what to run today: Core-Geth's v1.13 line, or Fukuii.",
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children
}

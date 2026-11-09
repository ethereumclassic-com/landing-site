import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Channels',
  description: 'Where to find Ethereum Classic on social media: Discord, X, Telegram, Reddit, GitHub and YouTube.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

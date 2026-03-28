import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Channels',
  description: 'Official Ethereum Classic social media channels — Discord, Twitter, Telegram, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

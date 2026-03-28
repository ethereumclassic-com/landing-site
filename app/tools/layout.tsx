import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Tools — Ethereum Classic',
    default: 'Ethereum Classic Tools',
  },
  description:
    'Gas tracker, converter, calculator, block explorer, and contract verification tools for ETC.',
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}

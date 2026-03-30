import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cdcEntries } from '../data/index'
import CDCPostContent from './CDCPostContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cdcEntries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = cdcEntries.find((e) => e.slug === slug)
  if (!entry) return {}

  const title = entry.forkBlock
    ? `${entry.title} — Block ${entry.forkBlock.toLocaleString()}`
    : entry.title

  return {
    title,
    description: entry.summary,
    openGraph: {
      title: `${title} | Core Devs — Ethereum Classic`,
      description: entry.summary,
      type: 'article',
    },
    keywords: [
      'Ethereum Classic',
      entry.title,
      ...entry.ecipRefs.map((ref) => ref.toUpperCase().replace('-', ' ')),
      'network upgrade',
      'hard fork',
      'ETC',
    ],
  }
}

export default async function CDCPostPage({ params }: PageProps) {
  const { slug } = await params
  const entryIndex = cdcEntries.findIndex((e) => e.slug === slug)
  const entry = cdcEntries[entryIndex]

  if (!entry) notFound()

  const prevEntry = entryIndex > 0 ? cdcEntries[entryIndex - 1] : null
  const nextEntry = entryIndex < cdcEntries.length - 1 ? cdcEntries[entryIndex + 1] : null

  return <CDCPostContent entry={entry} prevEntry={prevEntry} nextEntry={nextEntry} />
}

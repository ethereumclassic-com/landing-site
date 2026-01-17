import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ tag: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const tagName = tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${tagName} | Ethereum Classic News`,
    description: `News articles tagged with ${tagName.toLowerCase()} from the Ethereum Classic ecosystem.`,
  }
}

export default async function NewsTagPage({ params }: Props) {
  const { tag } = await params
  const tagName = tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={`Tagged: ${tagName}`}
      description={`Browse all news articles tagged with "${tagName.toLowerCase()}" from the Ethereum Classic ecosystem.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to News', href: '/news' }}
      relatedLinks={[
        { label: 'News Hub', href: '/news' },
        { label: 'Community', href: '/community' },
        { label: 'Learn about ETC', href: '/learn' },
      ]}
    />
  )
}

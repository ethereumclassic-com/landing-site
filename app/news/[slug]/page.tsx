import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${title} | Ethereum Classic News`,
    description: `Read the latest news article about Ethereum Classic.`,
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={title}
      description="This news article is coming soon. Stay tuned for the latest updates, announcements, and developments in the Ethereum Classic ecosystem."
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

import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${articleTitle} | Ethereum Classic`,
    description: `Learn about ${articleTitle.toLowerCase()} in our comprehensive guide.`,
  }
}

export default async function BasicsArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Comprehensive guide to ${articleTitle.toLowerCase()}. Part of our basics series to help you understand blockchain and cryptocurrency fundamentals.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Basics', href: '/learn/basics' }}
      relatedLinks={[
        { label: 'ETC Basics', href: '/learn/basics' },
        { label: 'What is ETC?', href: '/learn/ethereum-classic' },
        { label: 'Learning Center', href: '/learn' },
      ]}
    />
  )
}

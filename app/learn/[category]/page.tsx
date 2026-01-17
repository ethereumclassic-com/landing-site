import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${categoryName} | Ethereum Classic`,
    description: `Learn about ${categoryName.toLowerCase()} in our comprehensive guides.`,
  }
}

export default async function LearnCategoryPage({ params }: Props) {
  const { category } = await params
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={categoryName}
      description={`Explore our ${categoryName.toLowerCase()} guides and articles. Comprehensive resources to help you understand and use Ethereum Classic effectively.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'Learning Center', href: '/learn' },
        { label: 'ETC Basics', href: '/learn/basics' },
        { label: 'What is ETC?', href: '/learn/ethereum-classic' },
      ]}
    />
  )
}

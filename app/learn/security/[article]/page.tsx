import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getArticleBySlug } from '../../data/articles'
import ArticlePageClient from '../../components/ArticlePageClient'
import SecurityBestPractices from './content/security-best-practices'
import AvoidingScams from './content/avoiding-scams'
import PrivateKeyManagement from './content/private-key-management'
import SafeDefiPractices from './content/safe-defi-practices'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('security')
  return articles.map((article) => ({
    article: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Ethereum Classic',
    }
  }

  return {
    title: `${article.title} | Ethereum Classic`,
    description: article.description,
  }
}

const articleContent: Record<string, React.ReactNode> = {
  'security-best-practices': <SecurityBestPractices />,
  'avoiding-scams': <AvoidingScams />,
  'private-key-management': <PrivateKeyManagement />,
  'safe-defi-practices': <SafeDefiPractices />,
}

export default async function SecurityArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article || article.category !== 'security') {
    notFound()
  }

  const content = articleContent[slug]
  if (!content) notFound()

  return <ArticlePageClient article={article} content={content} />
}

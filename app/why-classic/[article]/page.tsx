import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { philosophyArticles, getPhilosophyArticle } from '../data/philosophy'
import WhyClassicArticleClient from '../components/WhyClassicArticleClient'
import { ArticleJsonLd } from '@/app/components/JsonLd'
import Genesis from './content/genesis'
import CodeIsLaw from './content/code-is-law'
import Decentralism from './content/decentralism'
import ProofOfWork from './content/proof-of-work'
import SoundMoney from './content/sound-money'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  return philosophyArticles.map((article) => ({
    article: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article: slug } = await params
  const article = getPhilosophyArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Ethereum Classic',
    }
  }

  return {
    title: `${article.title} | Why Classic`,
    description: article.description,
  }
}

const articleContent: Record<string, React.ReactNode> = {
  genesis: <Genesis />,
  'code-is-law': <CodeIsLaw />,
  decentralism: <Decentralism />,
  'proof-of-work': <ProofOfWork />,
  'sound-money': <SoundMoney />,
}

export default async function WhyClassicArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getPhilosophyArticle(slug)

  if (!article) {
    notFound()
  }

  const content = articleContent[slug]
  if (!content) notFound()

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={`https://ethereumclassic.com/why-classic/${article.slug}`}
        datePublished="2026-03-30"
      />
      <WhyClassicArticleClient article={article} content={content} />
    </>
  )
}

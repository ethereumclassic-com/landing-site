import type { Metadata } from 'next'
import { getAllCategories, getArticlesByCategory, categoryDescriptions } from '../../data/articles'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getAllCategories().find((c) => c.toLowerCase() === slug.toLowerCase())

  if (!category) {
    return { title: 'Category Not Found | Ethereum Classic News' }
  }

  const count = getArticlesByCategory(category).length
  // The /news layout supplies the suffix through its title template.
  const description = `${categoryDescriptions[category]} ${count} ${count === 1 ? 'article' : 'articles'}.`

  return {
    title: category,
    description,
    alternates: { canonical: `https://ethereumclassic.com/news/category/${slug}` },
    openGraph: { ...OG_BASE, title: `${category} — Ethereum Classic News`, description },
  }
}

export default function NewsCategoryLayout({ children }: { children: React.ReactNode }) {
  return children
}

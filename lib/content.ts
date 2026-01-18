// Server-only content utilities - uses fs, cannot be imported in client components
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Article, ArticleCategory } from './content-types'

// Re-export types for convenience
export type { Article, ArticleCategory, ArticleFrontmatter } from './content-types'
export { articleTemplate, categoryDescriptions, categoryIcons } from './content-types'

// Content directory paths
const CONTENT_DIR = path.join(process.cwd(), 'content')
const NEWS_DIR = path.join(CONTENT_DIR, 'news')

// Check if content directory exists
function ensureContentDir(): void {
  if (!fs.existsSync(NEWS_DIR)) {
    fs.mkdirSync(NEWS_DIR, { recursive: true })
  }
}

// Get all MDX files from a directory
function getMdxFiles(dir: string): string[] {
  ensureContentDir()
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
}

// Parse a single MDX file
function parseArticle(filePath: string): Article | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const slug = path.basename(filePath).replace(/\.(mdx|md)$/, '')

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || 'Updates',
      featured: data.featured || false,
      tags: data.tags || [],
      image: data.image,
      author: data.author,
      readTime: data.readTime,
      externalLink: data.externalLink,
      content,
    }
  } catch {
    return null
  }
}

// Get all news articles from MDX files
export function getMdxArticles(): Article[] {
  const files = getMdxFiles(NEWS_DIR)
  const articles: Article[] = []

  for (const file of files) {
    const article = parseArticle(path.join(NEWS_DIR, file))
    if (article) {
      articles.push(article)
    }
  }

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single article by slug
export function getMdxArticleBySlug(slug: string): Article | null {
  const mdxPath = path.join(NEWS_DIR, `${slug}.mdx`)
  const mdPath = path.join(NEWS_DIR, `${slug}.md`)

  if (fs.existsSync(mdxPath)) {
    return parseArticle(mdxPath)
  }
  if (fs.existsSync(mdPath)) {
    return parseArticle(mdPath)
  }
  return null
}

// Get articles by category
export function getMdxArticlesByCategory(category: ArticleCategory): Article[] {
  return getMdxArticles().filter((article) => article.category === category)
}

// Get featured articles
export function getFeaturedMdxArticles(): Article[] {
  return getMdxArticles().filter((article) => article.featured)
}

// Get articles by tag
export function getMdxArticlesByTag(tag: string): Article[] {
  return getMdxArticles().filter((article) =>
    article.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

// Get recent articles
export function getRecentMdxArticles(limit: number = 10): Article[] {
  return getMdxArticles().slice(0, limit)
}

// Get all unique tags
export function getAllMdxTags(): string[] {
  const tags = new Set<string>()
  getMdxArticles().forEach((article) => {
    article.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Get related articles
export function getRelatedMdxArticles(article: Article, limit: number = 3): Article[] {
  const articles = getMdxArticles().filter((a) => a.slug !== article.slug)

  // Score articles by relevance
  const scored = articles.map((a) => {
    let score = 0

    // Same category
    if (a.category === article.category) score += 2

    // Matching tags
    const matchingTags = a.tags?.filter((tag) => article.tags?.includes(tag)) || []
    score += matchingTags.length

    return { article: a, score }
  })

  // Sort by score, then by date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return new Date(b.article.date).getTime() - new Date(a.article.date).getTime()
  })

  return scored.slice(0, limit).map((s) => s.article)
}

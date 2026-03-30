import { articles } from '../data/articles'

const baseUrl = 'https://ethereumclassic.com'

export async function GET() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const recentArticles = sortedArticles.slice(0, 50)

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Ethereum Classic News',
    home_page_url: `${baseUrl}/news`,
    feed_url: `${baseUrl}/news/feed.json`,
    description:
      'Latest news and updates from the Ethereum Classic ecosystem. Network upgrades, development progress, community announcements, and more.',
    icon: `${baseUrl}/etc-logo.png`,
    favicon: `${baseUrl}/favicon-32x32.png`,
    language: 'en-US',
    authors: [
      {
        name: 'Ethereum Classic',
        url: baseUrl,
      },
    ],
    items: recentArticles.map((article) => ({
      id: `${baseUrl}/news/${article.slug}`,
      url: `${baseUrl}/news/${article.slug}`,
      title: article.title,
      summary: article.excerpt,
      ...(article.content ? { content_text: article.content } : {}),
      date_published: new Date(article.date).toISOString(),
      ...(article.author
        ? { authors: [{ name: article.author }] }
        : {}),
      tags: [article.category, ...(article.tags ?? [])],
    })),
  }

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

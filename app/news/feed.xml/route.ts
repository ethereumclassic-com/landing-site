import { articles } from '../data/articles'

const baseUrl = 'https://ethereumclassic.com'

export async function GET() {
  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Take the most recent 50 articles
  const recentArticles = sortedArticles.slice(0, 50)

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Ethereum Classic News</title>
    <link>${baseUrl}/news</link>
    <description>Latest news and updates from the Ethereum Classic ecosystem. Network upgrades, development progress, community announcements, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/news/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/etc-logo.png</url>
      <title>Ethereum Classic News</title>
      <link>${baseUrl}/news</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} EthereumClassic.com</copyright>
    <managingEditor>news@ethereumclassic.com (EthereumClassic.com)</managingEditor>
    <webMaster>webmaster@ethereumclassic.com (EthereumClassic.com)</webMaster>
    <ttl>60</ttl>
    ${recentArticles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/news/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/news/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${article.category}</category>
      ${article.author ? `<author>news@ethereumclassic.com (${article.author})</author>` : ''}
      ${article.tags ? article.tags.map((tag) => `<category>${tag}</category>`).join('\n      ') : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

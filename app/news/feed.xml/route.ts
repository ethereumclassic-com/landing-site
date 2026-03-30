import { articles } from '../data/articles'

const baseUrl = 'https://ethereumclassic.com'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const recentArticles = sortedArticles.slice(0, 50)
  const lastBuildDate = new Date(sortedArticles[0].date).toUTCString()

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Ethereum Classic News</title>
    <link>${baseUrl}/news</link>
    <description>Latest news and updates from the Ethereum Classic ecosystem. Network upgrades, development progress, community announcements, and more.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
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
      ${article.content ? `<content:encoded><![CDATA[${article.content}]]></content:encoded>` : ''}
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
      ${article.author ? `<dc:creator>${escapeXml(article.author)}</dc:creator>` : ''}
      ${article.author ? `<author>news@ethereumclassic.com (${escapeXml(article.author)})</author>` : ''}
      ${article.tags ? article.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ') : ''}
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

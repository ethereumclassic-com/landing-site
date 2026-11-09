import { articles } from '../data/articles'
import { articleHtml } from '../lib/content'
import { CARD_SIZE, cardUrl } from '../lib/images'

// The feed changes only when the articles do, so it is written once per build.
export const dynamic = 'force-static'

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
  // An entry is updated when it is corrected, and the feed when any entry is.
  const entryUpdated = (article: (typeof articles)[number]) => new Date(article.updated ?? article.date).toISOString()
  const updated = recentArticles.map(entryUpdated).sort().at(-1)!

  const atomXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <title>Ethereum Classic News</title>
  <subtitle>Latest news and updates from the Ethereum Classic ecosystem.</subtitle>
  <link href="${baseUrl}/news/atom.xml" rel="self" type="application/atom+xml"/>
  <link href="${baseUrl}/news" rel="alternate" type="text/html"/>
  <id>${baseUrl}/news</id>
  <updated>${updated}</updated>
  <icon>${baseUrl}/icons/favicon-32x32.png</icon>
  <logo>${baseUrl}/icons/icon-512.png</logo>
  <rights>Copyright ${new Date().getFullYear()} ethereumclassic.com</rights>
  <author>
    <name>Ethereum Classic</name>
    <uri>${baseUrl}</uri>
  </author>
  ${recentArticles
    .map(
      (article) => `
  <entry>
    <title>${escapeXml(article.title)}</title>
    <link href="${baseUrl}/news/${article.slug}" rel="alternate" type="text/html"/>
    <id>${baseUrl}/news/${article.slug}</id>
    <published>${new Date(article.date).toISOString()}</published>
    <updated>${entryUpdated(article)}</updated>
    <summary>${escapeXml(article.excerpt)}</summary>
    ${article.content ? `<content type="html">${escapeXml(articleHtml(article.content))}</content>` : ''}
    ${article.author ? `<author><name>${escapeXml(article.author)}</name></author>` : ''}
    <category term="${escapeXml(article.category)}"/>
    ${article.tags ? article.tags.map((tag) => `<category term="${escapeXml(tag)}"/>`).join('\n    ') : ''}
    <media:content url="${cardUrl(article.slug)}" medium="image" type="image/png" width="${CARD_SIZE.width}" height="${CARD_SIZE.height}"/>
  </entry>`
    )
    .join('')}
</feed>`

  return new Response(atomXml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

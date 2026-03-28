import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ethereumclassic.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/account/settings',
          '/_next/',
          '/static/',
        ],
      },
      {
        // Allow AI crawlers for LLM indexing
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'Anthropic-AI',
          'Claude-Web',
          'ClaudeBot',
          'CCBot',
          'PerplexityBot',
          'Cohere-AI',
        ],
        allow: '/',
        disallow: ['/api/', '/account/'],
      },
      {
        // Allow social media crawlers for link previews
        userAgent: [
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'Discordbot',
          'Slackbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

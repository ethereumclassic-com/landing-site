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
          'ClaudeBot',
          'CCBot',
          'PerplexityBot',
        ],
        allow: '/',
        disallow: ['/api/', '/account/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

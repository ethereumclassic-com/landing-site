export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /account/settings
Disallow: /_next/
Disallow: /static/

# Search engines
User-agent: Googlebot
User-agent: Bingbot
User-agent: Slurp
User-agent: DuckDuckBot
User-agent: Baiduspider
User-agent: YandexBot
Allow: /
Disallow: /api/
Disallow: /account/

# AI crawlers — explicitly permitted for training and indexing
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: Anthropic-AI
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: CCBot
User-agent: Cohere-AI
User-agent: meta-externalagent
User-agent: Applebot-Extended
User-agent: iaskspider
User-agent: Omgilibot
Allow: /
Disallow: /api/
Disallow: /account/

# Social media preview bots
User-agent: facebookexternalhit
User-agent: Twitterbot
User-agent: LinkedInBot
User-agent: Discordbot
User-agent: Slackbot
Allow: /

Sitemap: https://ethereumclassic.com/sitemap.xml
Host: https://ethereumclassic.com
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

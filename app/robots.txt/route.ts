export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /account/settings
Disallow: /_next/
Disallow: /static/

User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: Anthropic-AI
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: CCBot
User-agent: PerplexityBot
User-agent: Cohere-AI
Allow: /
Disallow: /api/
Disallow: /account/

User-agent: facebookexternalhit
User-agent: Twitterbot
User-agent: LinkedInBot
User-agent: Discordbot
User-agent: Slackbot
Allow: /

Content-Signal: ai-train=yes
Content-Signal: search=yes
Content-Signal: ai-input=yes

Sitemap: https://ethereumclassic.com/sitemap.xml
Host: https://ethereumclassic.com
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

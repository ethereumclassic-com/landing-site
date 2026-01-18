// Article types - can be imported in client components
export type ArticleCategory = 'Updates' | 'Security' | 'Ecosystem' | 'Community'

export interface ArticleFrontmatter {
  title: string
  excerpt: string
  date: string
  category: ArticleCategory
  featured?: boolean
  tags?: string[]
  image?: string
  author?: string
  readTime?: number
  externalLink?: string
}

export interface Article extends ArticleFrontmatter {
  slug: string
  content: string
}

// Template for new articles
export const articleTemplate = `---
title: "Article Title"
excerpt: "A brief description of the article content."
date: "${new Date().toISOString().split('T')[0]}"
category: "Updates"
featured: false
tags:
  - Tag1
  - Tag2
author: "ETC Community"
readTime: 3
---

## Introduction

Write your article content here using Markdown syntax.

## Main Content

- Use bullet points for lists
- **Bold text** for emphasis
- \`code\` for inline code

### Subheadings

Add subheadings to organize your content.

## Conclusion

Wrap up your article with a conclusion.
`

// Category descriptions
export const categoryDescriptions: Record<ArticleCategory, string> = {
  Updates: 'Network upgrades, client releases, and protocol changes',
  Security: 'Security advisories, best practices, and network health',
  Ecosystem: 'DeFi, dApps, and project announcements',
  Community: 'Events, governance, and community initiatives',
}

// Category icons (for reference)
export const categoryIcons: Record<ArticleCategory, string> = {
  Updates: '🔄',
  Security: '🛡️',
  Ecosystem: '🌐',
  Community: '👥',
}

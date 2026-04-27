'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { categoryDescriptions, type ArticleCategory } from '@/lib/content-types'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const categories: ArticleCategory[] = ['Updates', 'Security', 'Ecosystem', 'Community']

interface ArticleForm {
  title: string
  excerpt: string
  date: string
  category: ArticleCategory
  featured: boolean
  tags: string
  author: string
  readTime: number
  content: string
}

export default function ContentEditorPage() {
  const [form, setForm] = useState<ArticleForm>({
    title: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Updates',
    featured: false,
    tags: '',
    author: 'ETC Community',
    readTime: 3,
    content: `## Introduction

Write your article content here using Markdown syntax.

## Main Content

- Use bullet points for lists
- **Bold text** for emphasis
- \`code\` for inline code

### Subheadings

Add subheadings to organize your content.

## Conclusion

Wrap up your article with a conclusion.`,
  })

  const [copied, setCopied] = useState(false)

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const generateMdx = () => {
    const tagsArray = form.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

    const tagsYaml =
      tagsArray.length > 0 ? `tags:\n${tagsArray.map((t) => `  - ${t}`).join('\n')}` : ''

    return `---
title: "${form.title}"
excerpt: "${form.excerpt}"
date: "${form.date}"
category: "${form.category}"
featured: ${form.featured}
${tagsYaml}
author: "${form.author}"
readTime: ${form.readTime}
---

${form.content}`
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generateMdx())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const content = generateMdx()
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${generateSlug(form.title) || 'article'}.mdx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleLoadTemplate = () => {
    setForm({
      title: 'Article Title',
      excerpt: 'A brief description of the article content.',
      date: new Date().toISOString().split('T')[0],
      category: 'Updates',
      featured: false,
      tags: 'Tag1, Tag2',
      author: 'ETC Community',
      readTime: 3,
      content: `## Introduction

Write your article content here using Markdown syntax.

## Main Content

- Use bullet points for lists
- **Bold text** for emphasis
- \`code\` for inline code

### Subheadings

Add subheadings to organize your content.

## Conclusion

Wrap up your article with a conclusion.`,
    })
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
            Content Editor
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Create and edit MDX articles for EthereumClassic.com. Fill in the form below to generate
            an MDX file ready for the content directory.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Editor Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Article Details
                </h2>
                <button
                  onClick={handleLoadTemplate}
                  className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--color-text-primary)]"
                >
                  Load Template
                </button>
              </div>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Enter article title"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                  {form.title && (
                    <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                      Slug: {generateSlug(form.title)}.mdx
                    </p>
                  )}
                </div>

                {/* Excerpt */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Excerpt *
                  </label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    placeholder="Brief description for article cards and SEO"
                    rows={2}
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>

                {/* Date & Category Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value as ArticleCategory })}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                      {categoryDescriptions[form.category]}
                    </p>
                  </div>
                </div>

                {/* Author & Read Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      Author
                    </label>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                      placeholder="Author name"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                      Read Time (min)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={60}
                      value={form.readTime}
                      onChange={(e) => setForm({ ...form, readTime: parseInt(e.target.value) || 3 })}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Tags
                  </label>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="Comma-separated tags (e.g., Mining, DeFi, Tutorial)"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>

                {/* Featured */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="h-4 w-4 rounded border-[var(--border)] bg-[var(--bg)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <label
                    htmlFor="featured"
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Featured Article
                  </label>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    (Highlighted on homepage)
                  </span>
                </div>

                {/* Content */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Content (Markdown) *
                  </label>
                  <textarea
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Write your article content in Markdown..."
                    rows={12}
                    className="w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Generated MDX
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="rounded-lg border border-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--background)]"
                  >
                    Download
                  </button>
                </div>
              </div>

              <pre className="max-h-[600px] overflow-auto rounded-lg bg-[var(--bg)] p-4 text-sm">
                <code className="text-[var(--color-text-secondary)]">{generateMdx()}</code>
              </pre>

              {/* Instructions */}
              <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                <h3 className="mb-2 font-semibold text-[var(--color-text-primary)]">
                  How to Publish
                </h3>
                <ol className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>
                    1. Download or copy the MDX file above
                  </li>
                  <li>
                    2. Save to <code className="rounded bg-[var(--panel)] px-1.5 py-0.5">/content/news/</code> directory
                  </li>
                  <li>
                    3. Commit and push to the repository
                  </li>
                  <li>
                    4. The article will appear on the News page automatically
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Markdown Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Markdown Quick Reference
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Headings</h3>
                <pre className="rounded bg-[var(--bg)] p-3 text-xs text-[var(--color-text-secondary)]">
                  {`## Heading 2
### Heading 3
#### Heading 4`}
                </pre>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Formatting</h3>
                <pre className="rounded bg-[var(--bg)] p-3 text-xs text-[var(--color-text-secondary)]">
                  {`**bold text**
*italic text*
\`inline code\`
[link text](url)`}
                </pre>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Lists</h3>
                <pre className="rounded bg-[var(--bg)] p-3 text-xs text-[var(--color-text-secondary)]">
                  {`- Bullet point
- Another point

1. Numbered
2. List`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

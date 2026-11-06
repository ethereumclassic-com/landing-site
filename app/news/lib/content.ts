/**
 * The article body grammar, parsed once and rendered twice: as React on the
 * article page and as HTML in the feeds. A second parser would drift from this
 * one, and the feeds would then show a reader markup the page never renders.
 *
 * The grammar is deliberately small: `##` and `###` headings, `-` and `1.`
 * lists, `- [ ]` task items, fenced code, pipe tables, and paragraphs whose
 * inline text carries **bold**, [links](href) and `code`. Paragraphs, list
 * items and table cells are read for inline markup; headings, task items and
 * the text inside bold are plain text.
 */

export type Inline =
  | { type: 'text'; text: string }
  | { type: 'bold'; text: string }
  | { type: 'link'; text: string; href: string }
  | { type: 'code'; text: string }

export type Block =
  | { type: 'h2' | 'h3'; text: string }
  | { type: 'p'; inline: Inline[] }
  | { type: 'ul' | 'ol'; items: Inline[][] }
  | { type: 'task'; checked: boolean; text: string }
  | { type: 'code'; text: string }
  | { type: 'table'; header: Inline[][]; rows: Inline[][][] }

const BOLD = /\*\*(.+?)\*\*/
const LINK = /\[([^\]]+)\]\(([^)]+)\)/
const CODE = /`([^`]+)`/

export function parseInline(text: string): Inline[] {
  const parts: Inline[] = []
  let remaining = text

  while (remaining.length > 0) {
    const candidates = [
      { type: 'bold' as const, match: remaining.match(BOLD) },
      { type: 'link' as const, match: remaining.match(LINK) },
      { type: 'code' as const, match: remaining.match(CODE) },
    ]
      .filter((c): c is { type: 'bold' | 'link' | 'code'; match: RegExpMatchArray } => c.match !== null)
      .sort((a, b) => a.match.index! - b.match.index!)

    const first = candidates[0]
    if (!first) {
      parts.push({ type: 'text', text: remaining })
      break
    }

    const index = first.match.index!
    if (index > 0) parts.push({ type: 'text', text: remaining.slice(0, index) })
    if (first.type === 'link') parts.push({ type: 'link', text: first.match[1], href: first.match[2] })
    else parts.push({ type: first.type, text: first.match[1] })
    remaining = remaining.slice(index + first.match[0].length)
  }

  return parts
}

const SEPARATOR_CELL = /^[-|:]+$/

export function parseArticle(content: string): Block[] {
  const blocks: Block[] = []
  let list: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let inCode = false
  let code: string[] = []
  let inTable = false
  let tableRows: string[][] = []

  const flushList = () => {
    if (list.length > 0 && listType) {
      blocks.push({ type: listType, items: list.map(parseInline) })
    }
    list = []
    listType = null
  }

  const flushTable = () => {
    if (tableRows.length > 1) {
      const [header, ...rows] = tableRows
      blocks.push({
        type: 'table',
        header: header.map((cell) => parseInline(cell.trim())),
        rows: rows
          .filter((row) => !row.every((cell) => SEPARATOR_CELL.test(cell.trim())))
          .map((row) => row.map((cell) => parseInline(cell.trim()))),
      })
      tableRows = []
      inTable = false
    }
  }

  for (const line of content.split('\n')) {
    if (line.startsWith('```')) {
      if (inCode) {
        blocks.push({ type: 'code', text: code.join('\n') })
        code = []
        inCode = false
      } else {
        flushList()
        flushTable()
        inCode = true
      }
      continue
    }

    if (inCode) {
      code.push(line)
      continue
    }

    if (line.includes('|') && line.trim().startsWith('|')) {
      flushList()
      inTable = true
      tableRows.push(line.split('|').slice(1, -1))
      continue
    } else if (inTable) {
      flushTable()
    }

    if (line.trim() === '') {
      flushList()
      continue
    }

    if (line.startsWith('## ')) {
      flushList()
      blocks.push({ type: 'h2', text: line.slice(3) })
      continue
    }

    if (line.startsWith('### ')) {
      flushList()
      blocks.push({ type: 'h3', text: line.slice(4) })
      continue
    }

    const ordered = line.match(/^(\d+)\.\s+(.+)$/)
    if (ordered) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      list.push(ordered[2])
      continue
    }

    if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      flushList()
      blocks.push({ type: 'task', checked: line.startsWith('- [x] '), text: line.slice(6) })
      continue
    }

    if (line.startsWith('- ')) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      list.push(line.slice(2))
      continue
    }

    flushList()
    blocks.push({ type: 'p', inline: parseInline(line) })
  }

  flushList()
  flushTable()

  return blocks
}

// ---------------------------------------------------------------------------
// HTML, for the feeds
// ---------------------------------------------------------------------------

const SITE = 'https://ethereumclassic.com'

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** A feed is read away from the site, so a site-relative link is made absolute. */
function absolute(href: string): string {
  return href.startsWith('/') ? `${SITE}${href}` : href
}

function inlineHtml(parts: Inline[]): string {
  return parts
    .map((part) => {
      switch (part.type) {
        case 'text':
          return escapeHtml(part.text)
        case 'bold':
          return `<strong>${escapeHtml(part.text)}</strong>`
        case 'code':
          return `<code>${escapeHtml(part.text)}</code>`
        case 'link':
          return `<a href="${escapeHtml(absolute(part.href))}">${escapeHtml(part.text)}</a>`
      }
    })
    .join('')
}

/** The article body as HTML: the same blocks the article page renders, without its styling. */
export function articleHtml(content: string): string {
  return parseArticle(content)
    .map((block) => {
      switch (block.type) {
        case 'h2':
        case 'h3':
          return `<${block.type}>${escapeHtml(block.text)}</${block.type}>`
        case 'p':
          return `<p>${inlineHtml(block.inline)}</p>`
        case 'ul':
        case 'ol':
          return `<${block.type}>${block.items.map((item) => `<li>${inlineHtml(item)}</li>`).join('')}</${block.type}>`
        case 'task':
          return `<p>${block.checked ? '☑' : '☐'} ${escapeHtml(block.text)}</p>`
        case 'code':
          return `<pre><code>${escapeHtml(block.text)}</code></pre>`
        case 'table':
          return [
            '<table>',
            `<thead><tr>${block.header.map((cell) => `<th>${inlineHtml(cell)}</th>`).join('')}</tr></thead>`,
            `<tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>`,
            '</table>',
          ].join('')
      }
    })
    .join('\n')
}

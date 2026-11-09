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
 *
 * Two blocks go past that. A callout is a run of `>` lines: an optional
 * `> **Title**`, then `> - ` items. An embed is a line of its own, `::name`,
 * that places a component the article page renders and the feeds render as
 * plain HTML. Every name must be in EMBEDS, so a misspelled one fails the build
 * rather than rendering nothing.
 */

import { CORE_GETH_MIGRATE_GUIDE_URL } from '@/lib/core-geth'
import { ENODE_CAPTION, MOVE_PHASES, PHASES_CAPTION, VERSION_CHECKS, panelFor } from './moves'
import { MOVE_RECORDINGS, recordingSrc } from './recordings'

export type Inline =
  | { type: 'text'; text: string }
  | { type: 'bold'; text: string }
  | { type: 'link'; text: string; href: string }
  | { type: 'code'; text: string }

/** The components an article can place with `::name`. */
export const EMBEDS = ['version-check', 'move-phases', 'move-steps', 'enode-change'] as const
export type EmbedName = (typeof EMBEDS)[number]

export type Block =
  | { type: 'h2' | 'h3'; text: string }
  | { type: 'p'; inline: Inline[] }
  | { type: 'ul' | 'ol'; items: Inline[][] }
  | { type: 'task'; checked: boolean; text: string }
  | { type: 'code'; text: string }
  | { type: 'table'; header: Inline[][]; rows: Inline[][][] }
  | { type: 'callout'; title?: string; items: Inline[][] }
  | { type: 'embed'; name: EmbedName }

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
const CALLOUT_TITLE = /^\*\*(.+)\*\*$/
const EMBED = /^::([a-z-]+)$/

function isEmbed(name: string): name is EmbedName {
  return (EMBEDS as readonly string[]).includes(name)
}

export function parseArticle(content: string): Block[] {
  const blocks: Block[] = []
  let list: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let inCode = false
  let code: string[] = []
  let inTable = false
  let tableRows: string[][] = []
  let callout: { title?: string; items: string[] } | null = null

  const flushList = () => {
    if (list.length > 0 && listType) {
      blocks.push({ type: listType, items: list.map(parseInline) })
    }
    list = []
    listType = null
  }

  const flushCallout = () => {
    if (callout) {
      if (callout.items.length === 0) throw new Error(`a callout has no items: ${callout.title ?? ''}`)
      blocks.push({ type: 'callout', title: callout.title, items: callout.items.map(parseInline) })
      callout = null
    }
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

    if (line.startsWith('> ')) {
      flushList()
      flushTable()
      const text = line.slice(2)
      const title = text.match(CALLOUT_TITLE)
      if (!callout) callout = { items: [] }
      if (title && callout.items.length === 0 && callout.title === undefined) {
        callout.title = title[1]
      } else if (text.startsWith('- ')) {
        callout.items.push(text.slice(2))
      } else {
        throw new Error(`a callout line is neither its title nor an item: ${line}`)
      }
      continue
    }
    flushCallout()

    const embed = line.match(EMBED)
    if (embed) {
      flushList()
      flushTable()
      if (!isEmbed(embed[1])) throw new Error(`no embed is named ::${embed[1]}`)
      blocks.push({ type: 'embed', name: embed[1] })
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
  flushCallout()

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

function noteHtml(text: string): string {
  return inlineHtml(parseInline(text))
}

function plainText(text: string): string {
  return parseInline(text)
    .map((part) => part.text)
    .join('')
}

/**
 * An embed as a feed reader shows it: what the component says, as text. The move steps are the
 * Linux tab with its recordings' last frames, and a link to the other platforms' tabs.
 */
function embedHtml(name: EmbedName): string {
  switch (name) {
    case 'version-check':
      return `<ul>${VERSION_CHECKS.map((check) => `<li>${escapeHtml(check.label)}: <code>${escapeHtml(check.line)}</code></li>`).join('')}</ul>`
    case 'move-phases':
      return [
        `<p>${noteHtml(PHASES_CAPTION)}</p>`,
        `<ol>${MOVE_PHASES.map((phase) => `<li><strong>${escapeHtml(phase.label)}:</strong> ${phase.steps.map((step) => `${step.number}. ${escapeHtml(step.title)}`).join('; ')}</li>`).join('')}</ol>`,
      ].join('')
    case 'move-steps': {
      const steps = panelFor('linux').steps.map((step, index) =>
        [
          `<h3>${index + 1}. ${escapeHtml(step.title)}</h3>`,
          step.before ? `<p>${noteHtml(step.before)}</p>` : '',
          step.code ? `<pre><code>${escapeHtml(step.code)}</code></pre>` : '',
          step.after ? `<p>${noteHtml(step.after)}</p>` : '',
          ...MOVE_RECORDINGS.filter((recording) => recording.step === step.title).map(
            (recording) =>
              `<p><img src="${SITE}${recordingSrc(recording, 'png')}" width="${recording.width}" height="${recording.height}" alt="${escapeHtml(plainText(recording.caption))}"></p>`,
          ),
        ].join(''),
      )
      return [
        `<p>The Linux steps, as <a href="${escapeHtml(`${CORE_GETH_MIGRATE_GUIDE_URL}#steps`)}">coregeth.com's migration guide</a> gives them. The same guide has them for macOS, Windows, containers and a build from source.</p>`,
        ...steps,
      ].join('')
    }
    case 'enode-change':
      return `<p>${noteHtml(ENODE_CAPTION)}</p>`
  }
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
        case 'callout':
          return [
            '<blockquote>',
            block.title ? `<p><strong>${escapeHtml(block.title)}</strong></p>` : '',
            `<ul>${block.items.map((item) => `<li>${inlineHtml(item)}</li>`).join('')}</ul>`,
            '</blockquote>',
          ].join('')
        case 'embed':
          return embedHtml(block.name)
      }
    })
    .join('\n')
}

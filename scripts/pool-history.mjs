#!/usr/bin/env node
/**
 * Generates app/mining/data/pool-history.json: how many blocks each miner address found on each UTC day, from a
 * sample of the chain read from Blockscout. /mining/pools charts it by week and names each address with
 * lib/pool-addresses.json when the site builds, so identifying an address later re-attributes its history
 * without another run.
 *
 *   node scripts/pool-history.mjs              extends the file through yesterday (UTC)
 *   node scripts/pool-history.mjs --days 365   writes a new file covering the last 365 complete days
 *
 * The sample is 50 consecutive blocks every 690 blocks: about ten a day, spread across its hours, so a pool
 * that mines only part of the day is counted in proportion. Each block is dated by its own timestamp.
 * Requests go one at a time with a pause, as Blockscout limits bursts; a year takes about an hour.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'app', 'mining', 'data', 'pool-history.json')
const ADDRESSES = path.join(ROOT, 'lib', 'pool-addresses.json')
const BLOCKSCOUT = 'https://etc.blockscout.com/api/v2'
const STEP = 690
const PAGE = 50
const PAUSE_MS = 700

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function getJson(url, attempt = 1) {
  await sleep(PAUSE_MS)
  let response
  try {
    response = await fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'ethereumclassic.com pool-history script' } })
  } catch (error) {
    if (attempt < 6) {
      await sleep(attempt * 10000)
      return getJson(url, attempt + 1)
    }
    throw error
  }
  if ((response.status === 429 || response.status >= 500) && attempt < 8) {
    await sleep(attempt * 15000)
    return getJson(url, attempt + 1)
  }
  if (!response.ok) throw new Error(`${url}: ${response.status}`)
  return response.json()
}

const dayOf = (iso) => iso.slice(0, 10)
const addDays = (day, n) => new Date(Date.parse(`${day}T00:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10)

function write(file, data) {
  const lines = [
    '{',
    `  "about": ${JSON.stringify(data.about)},`,
    `  "generated": ${JSON.stringify(data.generated)},`,
    `  "sampleStep": ${data.sampleStep},`,
    `  "sampleSize": ${data.sampleSize},`,
    '  "miners": [',
    data.miners.map((miner) => `    ${JSON.stringify(miner)}`).join(',\n'),
    '  ],',
    '  "days": [',
    data.days.map((day) => `    ${JSON.stringify(day)}`).join(',\n'),
    '  ]',
    '}',
  ]
  writeFileSync(file, `${lines.join('\n')}\n`)
}

async function main() {
  const args = process.argv.slice(2)
  const daysArg = args.includes('--days') ? Number(args[args.indexOf('--days') + 1]) : null
  if (daysArg !== null && !(daysArg > 0)) throw new Error('--days takes a positive number')
  const existing = daysArg === null && existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : null
  const endDay = addDays(new Date().toISOString().slice(0, 10), -1)
  const startDay = existing ? addDays(existing.days.at(-1).day, 1) : addDays(endDay, -((daysArg ?? 365) - 1))
  if (startDay > endDay) {
    console.log(`pool-history: up to date through ${endDay}`)
    return
  }

  const head = await getJson(`${BLOCKSCOUT}/blocks?type=block`)
  let position = head.items[0].height + 1
  const counts = new Map()
  let pages = 0
  for (;;) {
    const page = await getJson(`${BLOCKSCOUT}/blocks?type=block&block_number=${position}`)
    pages++
    for (const item of page.items) {
      const day = dayOf(item.timestamp)
      if (day < startDay || day > endDay) continue
      const byMiner = counts.get(day) ?? new Map()
      const address = item.miner.hash.toLowerCase()
      byMiner.set(address, (byMiner.get(address) ?? 0) + 1)
      counts.set(day, byMiner)
    }
    const oldest = page.items.at(-1)
    if (!oldest || dayOf(oldest.timestamp) < startDay) break
    if (pages % 100 === 0) console.log(`pool-history: ${pages} samples read, back to ${oldest.timestamp}`)
    position -= STEP
  }

  const miners = existing ? [...existing.miners] : []
  const index = new Map(miners.map((miner, i) => [miner, i]))
  const newDays = [...counts.keys()].sort().map((day) => {
    const pairs = [...counts.get(day)]
      .sort((a, b) => b[1] - a[1])
      .map(([address, blocks]) => {
        if (!index.has(address)) {
          index.set(address, miners.length)
          miners.push(address)
        }
        return [index.get(address), blocks]
      })
    return { day, sampled: pairs.reduce((sum, [, blocks]) => sum + blocks, 0), miners: pairs }
  })
  const missing = []
  for (let day = startDay; day <= endDay; day = addDays(day, 1)) if (!counts.has(day)) missing.push(day)
  if (missing.length) console.warn(`pool-history: no sampled blocks on ${missing.join(', ')}`)

  const days = [...(existing?.days ?? []), ...newDays]
  write(OUT, {
    about:
      'Generated by scripts/pool-history.mjs from Blockscout block data; do not edit by hand. Each day counts ' +
      'the miners of a sample of its blocks, 50 consecutive blocks every 690. "miners" lists each address once; ' +
      'a day pairs an index in that list with the blocks that address found in the sample.',
    generated: new Date().toISOString(),
    sampleStep: STEP,
    sampleSize: PAGE,
    miners,
    days,
  })

  const named = JSON.parse(readFileSync(ADDRESSES, 'utf8'))
  const unnamed = new Map()
  for (const day of newDays) for (const [i, blocks] of day.miners) if (!named[miners[i]]) unnamed.set(miners[i], (unnamed.get(miners[i]) ?? 0) + blocks)
  const sampled = newDays.reduce((sum, day) => sum + day.sampled, 0)
  console.log(`pool-history: ${newDays.length} days added (${startDay} to ${endDay}), ${sampled} blocks from ${pages} samples`)
  for (const [address, blocks] of [...unnamed].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
    console.log(`  unnamed ${address}: ${blocks} blocks (${((100 * blocks) / sampled).toFixed(1)}%)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

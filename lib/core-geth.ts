import { GUIDE_PAGES, MOVE_FLOOR } from './core-geth-record'

/**
 * Core-Geth addresses and facts shared across the site.
 *
 * The commands to install a node, move a v1.12 node and verify a download are
 * coregeth.com's: its /downloads/ page and its guides render the same steps from one
 * module. This site links those pages rather than writing its own: the one copy it
 * carries, the move steps in its walkthrough, is generated from /downloads/
 * (lib/core-geth-moves.ts). So copy written here names no release: a
 * recommendation names the line, and a link to the release itself is `releases/latest`.
 *
 * A version a fix first shipped in ("fixed in v1.13.0") is history, not the
 * current release, so copy that states one keeps it written out.
 */

/** The line to run, never a patch, so a release inside the line needs no edit here. */
export const CORE_GETH_RECOMMENDED_LINE = 'v1.13'

export const CORE_GETH_REPO_URL = 'https://github.com/ethereumclassic/core-geth'
/** The current release, whatever it is. A link to the release itself uses this, never a tag. */
export const CORE_GETH_LATEST_RELEASE_URL = `${CORE_GETH_REPO_URL}/releases/latest`
export const CORE_GETH_SECURITY_POLICY_URL = `${CORE_GETH_REPO_URL}/blob/main/SECURITY.md`

/** The project homepage, as distinct from the docs site below. */
export const CORE_GETH_HOMEPAGE_URL = 'https://coregeth.com'

/**
 * Where a reader told to install a node, or to verify a download, lands. Each fragment is a
 * section id on that page. Never link a `*-title` heading id or a tab id there: those are
 * layout and can change.
 */
export const CORE_GETH_DOWNLOADS_URL = `${CORE_GETH_HOMEPAGE_URL}/downloads/`
export const CORE_GETH_INSTALL_STEPS_URL = `${CORE_GETH_DOWNLOADS_URL}#install`
export const CORE_GETH_VERIFY_URL = `${CORE_GETH_DOWNLOADS_URL}#verify`
/**
 * coregeth.com's guides, at the hrefs it gives them. A reader moving a node lands on the migration
 * guide, which walks through the same steps as /downloads/, and a v1.12 node that has to wait before
 * it moves goes to the discovery guide: coregeth.com's own routing. A node on a release before
 * MOVE_FLOOR goes to the migration guide's check of what a node runs, which gives its route: a resync,
 * then a fresh install with the install guide.
 */
export const CORE_GETH_GUIDES_URL = coregethHref(GUIDE_PAGES.index.href)
export const CORE_GETH_MIGRATE_GUIDE_URL = coregethHref(GUIDE_PAGES.migrate.href)
export const CORE_GETH_DISCOVERY_GUIDE_URL = coregethHref(GUIDE_PAGES.discovery.href)
export const CORE_GETH_MOVE_CHECK_URL = `${CORE_GETH_MIGRATE_GUIDE_URL}#check`
export const CORE_GETH_INSTALL_GUIDE_URL = coregethHref(GUIDE_PAGES.install.href)
/** The audits, the release record and what the network runs. */
export const CORE_GETH_SECURITY_URL = `${CORE_GETH_HOMEPAGE_URL}/security/`
/** MESS, and why v1.13.0 ships it on by default. */
export const CORE_GETH_MESS_DEFAULT_URL = `${CORE_GETH_SECURITY_URL}2026-09-core-geth-v1.13.0-release-report/#mess-is-on-by-default`
/** coregeth.com's machine-readable summary, generated from the data lib/core-geth-record.ts mirrors. */
export const CORE_GETH_LLMS_URL = `${CORE_GETH_HOMEPAGE_URL}/llms.txt`

/**
 * An href from lib/core-geth-record.ts, made absolute. That module keeps coregeth.com's hrefs as
 * coregeth.com writes them, so a site-relative one (`/downloads/`) is a coregeth.com page.
 */
export function coregethHref(href: string): string {
  return href.startsWith('/') ? `${CORE_GETH_HOMEPAGE_URL}${href}` : href
}
/** The lineage of the code and of the organizations that maintained it. */
export const CORE_GETH_ABOUT_URL = `${CORE_GETH_HOMEPAGE_URL}/about/`
/** Who maintains and funds the client, and the routes for sponsoring it. */
export const CORE_GETH_SPONSOR_URL = `${CORE_GETH_HOMEPAGE_URL}/sponsor/`

export const CORE_GETH_DOCS_URL = 'https://docs.coregeth.com/'
export const CORE_GETH_INSTALL_URL = `${CORE_GETH_DOCS_URL}getting-started/installation/`
/**
 * Removing the chain database so a node syncs again from its peers: the step coregeth.com's migration
 * guide links for a node on a release before MOVE_FLOOR, which does not schedule Spiral and so has
 * followed an obsolete chain since block 19,250,000.
 */
export const CORE_GETH_RESYNC_URL = `${CORE_GETH_DOCS_URL}operate/maintenance/#resync-from-scratch`
/** This site's walkthrough of the same move: coregeth.com's steps, with recordings of a real node making it. */
export const CORE_GETH_MOVE_GUIDE_PATH = '/news/core-geth-v1-12-to-v1-13-migration'
/** Where each service the ETC Cooperative maintained continues as it winds down. */
export const CORE_GETH_TRANSITION_URL = `${CORE_GETH_DOCS_URL}etc-cooperative-transition/`

/**
 * The Ethereum Classic DAO: the standing legal entity that maintains and funds the
 * client today as its funder of last resort, with Ethereum Classic's core developers
 * and community contributors doing the work.
 */
export const ETHEREUM_CLASSIC_DAO_URL = 'https://ethereumclassicdao.org'

export interface CoreGethTask {
  title: string
  body: string
  links: { label: string; href: string }[]
}

/**
 * One sentence per task a node operator comes for, each linking the page that
 * carries its steps. Read by the Core-Geth client page and the Olympia client guide.
 */
export const CORE_GETH_TASKS: CoreGethTask[] = [
  {
    title: 'Install and run a node',
    body: 'The archive for each platform with its checksum, the container image, and the commands from download to a running node.',
    links: [{ label: 'Install Core-Geth', href: CORE_GETH_INSTALL_STEPS_URL }],
  },
  {
    title: 'Move a v1.12 node to the v1.13 line',
    body: `For a node on ${MOVE_FLOOR} or later, one step at a time on each platform, ending with deleting the v1.12 binary once the node is stable. Your chain data carries over, and the P2P node key is rotated, which is required because CVE-2026-26315 leaks bits of that key. The install steps are the wrong ones for this, because they start a node before its key changes.`,
    links: [
      { label: 'Migration guide', href: CORE_GETH_MIGRATE_GUIDE_URL },
      { label: 'Walkthrough with recordings', href: CORE_GETH_MOVE_GUIDE_PATH },
    ],
  },
  {
    title: `A node on a release older than ${MOVE_FLOOR}`,
    body: "Those releases do not schedule the Spiral upgrade, so the node has followed an obsolete chain since block 19,250,000 and cannot move in place. Remove its chain database as Resync from scratch shows, which keeps the node's P2P node key, rename that key as the move steps do, and then install and start the v1.13 line with the install guide, which syncs the chain again.",
    links: [
      { label: 'Check what your node runs', href: CORE_GETH_MOVE_CHECK_URL },
      { label: 'Resync from scratch', href: CORE_GETH_RESYNC_URL },
      { label: 'Install guide', href: CORE_GETH_INSTALL_GUIDE_URL },
    ],
  },
  {
    title: 'A v1.12 node that cannot move yet',
    body: 'It can read the peer discovery lists and bootnodes the v1.13 line ships until it moves. It goes on running its v1.12 release, so this closes none of the flaws the audits found in the v1.12 line.',
    links: [{ label: GUIDE_PAGES.discovery.title, href: CORE_GETH_DISCOVERY_GUIDE_URL }],
  },
  {
    title: 'Verify a download',
    body: "Check each file's checksum, and its build attestation, which ties the file to the release workflow that built it.",
    links: [{ label: 'Verify a download', href: CORE_GETH_VERIFY_URL }],
  },
  {
    title: 'Build from source',
    body: "A source build clones the main branch, where every change arrives through a pull request that needs an approving review and the project's required checks. A build of main reports v1.13.1-unstable, and like v1.13.1 it runs with MESS off by default.",
    links: [{ label: 'Build from source', href: CORE_GETH_INSTALL_STEPS_URL }],
  },
]

/**
 * Core-Geth addresses and facts shared across the site.
 *
 * The commands to install a node, move a v1.12 node and verify a download are
 * coregeth.com's, on its /downloads/ page, which is kept in step with the
 * documentation's guides. This site links those sections rather than writing its
 * own: the one copy it carries, the move steps in its migration guide, is generated
 * from that page (lib/core-geth-moves.ts). So copy written here names no release: a
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
 * Where a reader told to install or move a node lands. Each fragment is a section
 * id on that page. Never link a `*-title` heading id or a tab id there: those are
 * layout and can change.
 */
export const CORE_GETH_DOWNLOADS_URL = `${CORE_GETH_HOMEPAGE_URL}/downloads/`
export const CORE_GETH_INSTALL_STEPS_URL = `${CORE_GETH_DOWNLOADS_URL}#install`
export const CORE_GETH_UPGRADE_STEPS_URL = `${CORE_GETH_DOWNLOADS_URL}#upgrade`
export const CORE_GETH_DISCOVERY_FLAG_URL = `${CORE_GETH_DOWNLOADS_URL}#discovery-flag`
export const CORE_GETH_VERIFY_URL = `${CORE_GETH_DOWNLOADS_URL}#verify`
/** The audits, the release record and what the network runs. */
export const CORE_GETH_SECURITY_URL = `${CORE_GETH_HOMEPAGE_URL}/security/`
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
/** The move from any v1.12.x release, with its required node key rotation. Named for v1.13.0, and the guide for the v1.13 line. */
export const CORE_GETH_MIGRATION_URL = `${CORE_GETH_DOCS_URL}tutorials/v1.13.0-migration/`
/** This site's walkthrough of the same move: coregeth.com's steps, with recordings of a real node making it. */
export const CORE_GETH_MOVE_GUIDE_PATH = '/news/core-geth-v1-12-to-v1-13-migration'
export const CORE_GETH_BUILD_FROM_SOURCE_URL = `${CORE_GETH_DOCS_URL}developers/build-from-source/`
/** MESS, and how each release sets its default. */
export const CORE_GETH_MESS_URL = `${CORE_GETH_DOCS_URL}operate/mess/`
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
    body: 'One step at a time on each platform. Your chain data carries over, and the P2P node key is rotated, which is required. The install steps are the wrong ones for this, because they start a node before its key changes.',
    links: [
      { label: 'Steps for each platform', href: CORE_GETH_UPGRADE_STEPS_URL },
      { label: 'Migration guide', href: CORE_GETH_MIGRATION_URL },
      { label: 'Walkthrough with recordings', href: CORE_GETH_MOVE_GUIDE_PATH },
    ],
  },
  {
    title: 'A v1.12 node that cannot move yet',
    body: "Adding the --discovery.dns flag points it at the ethereumclassic GitHub organization's peer discovery lists. It is a small step that closes none of the flaws the audits found in the v1.12 line.",
    links: [{ label: 'The discovery flag', href: CORE_GETH_DISCOVERY_FLAG_URL }],
  },
  {
    title: 'Verify a download',
    body: "Check each file's checksum, and its build attestation, which ties the file to the release workflow that built it.",
    links: [{ label: 'Verify a download', href: CORE_GETH_VERIFY_URL }],
  },
  {
    title: 'Build from source',
    body: "A source build clones the main branch, where every change arrives through a pull request that needs an approving review and the project's required checks.",
    links: [{ label: 'Build from source', href: CORE_GETH_BUILD_FROM_SOURCE_URL }],
  },
]

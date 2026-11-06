/**
 * Community links that get shared as URLs rather than only clicked.
 *
 * Link Discord with DISCORD_URL everywhere: pages, structured data and the llms
 * files. Only app/discord/route.ts reads the invite, and redirects to it. An
 * invite can be rotated or revoked, so the address readers copy stays the site's
 * own, and the invite has one place to change.
 */

/** ethereumclassic.com/discord: the address every page links and shares. */
export const DISCORD_URL = 'https://ethereumclassic.com/discord'

/** The invite /discord redirects to. Read only by app/discord/route.ts. */
export const DISCORD_INVITE_URL = 'https://discord.com/invite/Tq57jxSwsa'

/**
 * Where a pool, an exchange or a service provider reports a vulnerability. A
 * person answers it, one of the core developers who maintain Core-Geth. It is the
 * address the client's SECURITY.md and its ETC Cooperative transition page give,
 * on ethereumclassic.net, the domain for the public goods in the ethereumclassic
 * organization; check it against them before changing it here.
 */
export const SECURITY_CONTACT_EMAIL = 'security@ethereumclassic.net'

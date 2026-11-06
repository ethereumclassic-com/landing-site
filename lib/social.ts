/**
 * Community links that get shared as URLs rather than only clicked.
 *
 * The Discord invite lives here because ethereumclassic.com/discord redirects to
 * it, in app/discord/route.ts. An invite can be rotated or revoked, so having one
 * place to change it matters more than for a link that only ever sits in a footer.
 */

export const DISCORD_INVITE_URL = 'https://discord.com/invite/Tq57jxSwsa'

/**
 * Where a pool, an exchange or a service provider reports a vulnerability. A
 * person answers it, one of the core developers who maintain Core-Geth. It is the
 * address the client's SECURITY.md and its ETC Cooperative transition page give,
 * on ethereumclassic.net, the domain for the public goods in the ethereumclassic
 * organization; check it against them before changing it here.
 */
export const SECURITY_CONTACT_EMAIL = 'security@ethereumclassic.net'

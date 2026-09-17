import { NextResponse } from 'next/server'

import { DISCORD_INVITE_URL } from '@/lib/social'

/**
 * ethereumclassic.com/discord, so the link that gets shared in a talk, a podcast
 * or a printed slide is the site's own rather than an opaque invite code.
 *
 * Temporary (307) on purpose. A permanent redirect is cached by browsers and by
 * intermediaries, so if the invite is ever rotated, everyone who followed the old
 * one would keep being sent to a dead invite with no way to correct it from here.
 */
export function GET() {
  return NextResponse.redirect(DISCORD_INVITE_URL, 307)
}

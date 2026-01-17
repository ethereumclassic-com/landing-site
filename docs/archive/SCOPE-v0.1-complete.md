# ethereumclassic.com v0.1 — Locked Scope (ARCHIVED)

**Status:** COMPLETE - Archived on 2026-01-16
**Replaced by:** v0.2 implementation - See [../SCOPE-v0.2-roadmap.md](../SCOPE-v0.2-roadmap.md)

---

This document defines the complete and exclusive scope for
**ethereumclassic.com v0.1**.

ethereumclassic.com is a **for-profit funnel**, not a community website,
documentation portal, or application dashboard.

Anything not explicitly listed here is out of scope.

---

## 1. Product Purpose

ethereumclassic.com answers one question:

> "Why should I use Ethereum Classic, and where do I go next?"

It exists to:
- orient new users
- establish legitimacy
- route visitors into real ETC activity

It does **not** attempt to retain users.

Success is measured by **downstream clicks**, not time on site.

---

## 2. Positioning (Non-Negotiable)

ethereumclassic.com positions Ethereum Classic as:

- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with the Ethereum ecosystem
- A first-class execution layer for real on-chain activity

The site is **forward-looking**.
It does not focus on historical disputes, forks, or governance debates.

---

## 3. Homepage Structure (Fixed)

The homepage consists of **exactly five sections**:

### 3.1 Hero

- Clear positioning statement
- One primary CTA

Purpose: immediate orientation.

---

### 3.2 Why Ethereum Classic

- 3–4 concise value statements:
  - Proof-of-Work security
  - Longevity and reliability
  - Smart contracts
  - EVM compatibility

No technical deep dives.

---

### 3.3 What Can I Do on ETC?

Three equal paths:

1. **Use ETC**
   → On-chain applications (ClassicOS, ETCswap)

2. **Earn ETC**
   → Mining, pools, yield opportunities

3. **Build on ETC**
   → Clients, infrastructure, protocol development

Each path has a single CTA.

---

### 3.4 Who Is ETC For?

Brief segmentation:
- users
- miners
- builders
- institutions

Purpose: recognition, not education.

---

### 3.5 Footer

- Essential navigation
- External links
- Legitimacy signals

No content expansion.

---

## 4. In-Scope Features

### 4.1 Routing & CTAs

ethereumclassic.com may link to:
- ClassicOS
- ETCswap (v2 / v3)
- Mining resources
- Exchanges (with referral codes)
- Wallets and hardware providers (with referral codes)

All links are tracked.

---

### 4.2 Trust & Legitimacy Signals

Allowed lightweight indicators:
- Network age
- Hashrate (simple display)
- Active clients (e.g. Fukuii, Core-Geth, Besu)
- Exchange availability

No interactive dashboards.

---

### 4.3 SEO & Analytics

- Basic SEO metadata
- OpenGraph tags
- Sitemap + robots.txt
- Analytics integration

No blog, no CMS, no content engine.

---

## 5. Explicitly Out of Scope (v0.1)

The following are **not permitted** on ethereumclassic.com v0.1:

- Wallet connection
- Portfolio views
- DEX interfaces
- Charts or advanced metrics dashboards
- DeFi protocol management
- Governance or ECIP content
- Historical timelines or essays
- Documentation or tutorials
- User accounts
- Community forums or chats

Any interactive functionality belongs in **ClassicOS**, not here.

---

## 6. UX & Design Principles

- Fast load time
- Mobile-first
- Minimal copy
- Action-oriented CTAs

ethereumclassic.com is a **router**, not a destination.

### 6.1 Motion & Visual Language

ethereumclassic.com should avoid a flat, static appearance.

Design principles:
- Subtle motion and transitions are encouraged
- Component-based layouts over long static sections
- Modern, protocol-grade aesthetic (not "Web3 startup")

Visual inspiration may be taken from sites such as:
- aura.build

Implementation guidance:
- Prefer native CSS, lightweight JS, or framework primitives
- Avoid hard dependencies on third-party animation libraries unless justified
- Emulate interaction patterns where feasible instead of importing templates

Motion should enhance clarity and polish,
not distract from routing and CTAs.

---

## 7. Definition of "Done"

ethereumclassic.com v0.1 is complete when:

- A cold visitor can:
  - understand what Ethereum Classic is
  - identify themselves in one of the three paths
  - click into real ETC usage within 60 seconds
- All CTAs resolve to real destinations
- No placeholder content exists
- The site is deployed to production

---

## 8. Change Control

Any change to this scope requires:
- a written decision in `control/decisions/`
- Architect approval

Absent that, this scope is final.

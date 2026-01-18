'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

type Category = 'all' | 'apparel' | 'accessories' | 'hardware'

// Sample merchandise products (would be from Printful API in production)
const products = [
  // Apparel
  {
    id: 'etc-tshirt-black',
    name: 'ETC Classic Logo Tee',
    description: 'Premium cotton t-shirt with embroidered Ethereum Classic logo',
    category: 'apparel' as const,
    price: 29.99,
    image: '/store/tshirt-black.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Forest Green'],
  },
  {
    id: 'etc-hoodie',
    name: 'ETC Proof-of-Work Hoodie',
    description: 'Heavyweight hoodie with "Secured by Proof-of-Work" design',
    category: 'apparel' as const,
    price: 59.99,
    image: '/store/hoodie.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal'],
  },
  {
    id: 'etc-cap',
    name: 'ETC Snapback Cap',
    description: 'Structured snapback with embroidered ETC logo',
    category: 'accessories' as const,
    price: 24.99,
    image: '/store/cap.png',
    colors: ['Black', 'Green'],
  },
  // Accessories
  {
    id: 'etc-mug',
    name: 'ETC Developer Mug',
    description: 'Ceramic mug with "Building on ETC" design',
    category: 'accessories' as const,
    price: 16.99,
    image: '/store/mug.png',
    colors: ['White', 'Black'],
  },
  {
    id: 'etc-sticker-pack',
    name: 'ETC Sticker Pack',
    description: 'Set of 10 high-quality vinyl stickers',
    category: 'accessories' as const,
    price: 9.99,
    image: '/store/stickers.png',
  },
  {
    id: 'etc-mousepad',
    name: 'ETC Mining Mousepad',
    description: 'Large desk mousepad with network visualization design',
    category: 'accessories' as const,
    price: 19.99,
    image: '/store/mousepad.png',
  },
  // Hardware (Affiliate links)
  {
    id: 'trezor-model-t',
    name: 'Trezor Model T',
    description: 'Premium hardware wallet with touchscreen. Supports ETC.',
    category: 'hardware' as const,
    price: 219,
    image: '/store/trezor.png',
    affiliate: true,
    affiliateLink: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
  },
  {
    id: 'ledger-nano-x',
    name: 'Ledger Nano X',
    description: 'Bluetooth-enabled hardware wallet. Full ETC support.',
    category: 'hardware' as const,
    price: 149,
    image: '/store/ledger.png',
    affiliate: true,
    affiliateLink: 'https://shop.ledger.com/?r=bbf4d7f32e72',
  },
]

const categories = [
  { id: 'all' as const, label: 'All Products' },
  { id: 'apparel' as const, label: 'Apparel' },
  { id: 'accessories' as const, label: 'Accessories' },
  { id: 'hardware' as const, label: 'Hardware Wallets' },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  const isAffiliate = 'affiliate' in product && product.affiliate

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
    >
      {/* Product Image Placeholder */}
      <div className="relative aspect-square bg-[var(--bg)] flex items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">Image coming soon</p>
        </div>
        {isAffiliate && (
          <span className="absolute top-2 right-2 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
            Partner
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)] line-clamp-2">{product.description}</p>

        {'sizes' in product && product.sizes && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.sizes.map(size => (
              <span key={size} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                {size}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[var(--color-primary)]">${product.price}</span>
          {isAffiliate && 'affiliateLink' in product ? (
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/30"
            >
              Buy Now
            </a>
          ) : (
            <button
              disabled
              className="rounded-lg bg-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-primary)]/50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
              Coming Soon
            </span>

            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              ETC Merchandise Store
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Official Ethereum Classic merchandise. Show your support for Proof-of-Work with premium
              apparel, accessories, and hardware wallets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-medium text-amber-400">Store Under Construction</p>
                  <p className="text-sm text-amber-400/80">
                    Merchandise purchases coming soon. Hardware wallet links are active affiliate partners.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-primary)] text-black'
                    : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Printful Partnership */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="text-xl font-bold text-white">About Our Store</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Print-on-Demand Merchandise</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Apparel and accessories are fulfilled via Printful&apos;s print-on-demand service.
                  This means each item is printed and shipped individually, reducing waste and ensuring
                  fresh, quality products.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Hardware Wallet Partners</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Hardware wallets link to official manufacturer stores through affiliate partnerships.
                  EthereumClassic.com may receive commission on qualifying purchases, which supports
                  ongoing development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Designs CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Submit Your Design</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Have a great ETC design idea? We&apos;re looking for community submissions for official
              merchandise. Selected designs earn royalties on each sale.
            </p>
            <div className="mt-6">
              <Link
                href="/contact?type=design"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Submit Design
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Product images are placeholders. Actual merchandise designs and pricing subject to change.
            Hardware wallet purchases are processed through official manufacturer stores.
            EthereumClassic.com may receive affiliate commission on qualifying purchases.
          </p>
        </div>
      </section>
    </main>
  )
}

/**
 * JSON-LD Structured Data Components
 * Provides rich snippets for search engines and LLM crawlers
 */
import { CORRECTIONS_EMAIL, ETC_IDENTITY_URLS, SITE_DESCRIPTION, SITE_REPO_URL, SITE_URL } from '@/lib/site-identity'

const PUBLISHER_ID = `${SITE_URL}/#publisher`
const NETWORK_ID = `${SITE_URL}/#ethereum-classic`
const CONTRIBUTORS_ID = `${SITE_URL}/#contributors`
// The generated 512px mark, the asset the favicons and PWA icons are cut from (`pnpm brand:icons`).
const LOGO_URL = `${SITE_URL}/icons/icon-512.png`

/**
 * The site's structured data, one graph on every page: the website, the network it is about, who
 * publishes it and who contributes to it, the shape ethereum.org uses. The network is a Thing linked to
 * the pages that identify it (Wikidata, Wikipedia, its GitHub organization, the community site and the
 * price trackers), not an Organization: no organization is Ethereum Classic, and nothing here says this
 * site speaks for it. The site's standing comes from linking every claim to its source (lib/site-identity).
 */
export function SiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Ethereum Classic',
        alternateName: ['ethereumclassic.com', 'ETC'],
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        about: { '@id': NETWORK_ID },
        publisher: { '@id': PUBLISHER_ID },
        contributor: { '@id': CONTRIBUTORS_ID },
        // No SearchAction: the site has no /search route for one to point at.
      },
      {
        '@type': 'Thing',
        '@id': NETWORK_ID,
        name: 'Ethereum Classic',
        alternateName: 'ETC',
        description:
          'Ethereum Classic is the original Ethereum blockchain and immutable infrastructure for programmable global finance: a Proof-of-Work network with native smart contracts and a fixed monetary policy, producing blocks continuously since July 30, 2015.',
        sameAs: ETC_IDENTITY_URLS,
      },
      {
        '@type': 'Organization',
        '@id': PUBLISHER_ID,
        name: 'ethereumclassic.com',
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'editorial',
          email: CORRECTIONS_EMAIL,
          url: `${SITE_URL}/contact`,
        },
        sameAs: ['https://github.com/ethereumclassic-com'],
      },
      {
        '@type': 'Organization',
        '@id': CONTRIBUTORS_ID,
        name: 'Ethereum Classic community',
        description: 'The open-source contributors to ethereumclassic.com.',
        url: `${SITE_REPO_URL}/graphs/contributors`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Breadcrumb schema generator
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Article schema for news and learn content
interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'ETC Community',
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': PUBLISHER_ID,
      name: 'ethereumclassic.com',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// FAQ schema for FAQ pages
interface FAQItem {
  question: string
  answer: string
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Product schema for hardware/software pages
interface ProductJsonLdProps {
  name: string
  description: string
  url: string
  image?: string
  brand?: string
  category?: string
}

export function ProductJsonLd({ name, description, url, image, brand, category }: ProductJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    url: url,
    ...(image && { image: image }),
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand,
      },
    }),
    ...(category && { category: category }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Software Application schema for wallets and apps
interface SoftwareJsonLdProps {
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem?: string
  offers?: {
    price: string
    priceCurrency: string
  }
}

export function SoftwareJsonLd({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem,
  offers,
}: SoftwareJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    ...(operatingSystem && { operatingSystem: operatingSystem }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

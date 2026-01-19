/**
 * JSON-LD Structured Data Components
 * Provides rich snippets for search engines and LLM crawlers
 */

// Organization schema for the website
export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ethereum Classic',
    alternateName: 'ETC',
    url: 'https://ethereumclassic.com',
    logo: 'https://ethereumclassic.com/etc-logo.png',
    description:
      'Ethereum Classic is the original Ethereum blockchain, maintaining proof-of-work consensus and smart contract capabilities.',
    foundingDate: '2016-07-20',
    sameAs: [
      'https://twitter.com/eth_classic',
      'https://github.com/ethereumclassic',
      'https://discord.gg/ethereumclassic',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://ethereumclassic.com/contact',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Website schema for search features
export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ethereum Classic',
    url: 'https://ethereumclassic.com',
    description:
      'The official resource for Ethereum Classic. Get wallets, buy ETC, explore apps, and learn about the proof-of-work blockchain.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ethereumclassic.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Cryptocurrency schema for ETC
export function CryptocurrencyJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Ethereum Classic',
    alternateName: 'ETC',
    description:
      'Ethereum Classic (ETC) is a decentralized, proof-of-work cryptocurrency and smart contract platform.',
    category: 'Cryptocurrency',
    url: 'https://ethereumclassic.com',
    provider: {
      '@type': 'Organization',
      name: 'Ethereum Classic Network',
    },
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
      name: 'EthereumClassic.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ethereumclassic.com/etc-logo.png',
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

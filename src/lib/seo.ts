import { fullAddress, site } from '@/content/site'

export type PageMeta = {
  path: string
  title: string
  description: string
}

/** Per-page SEO metadata. The prerender step writes these into each page's <head>. */
export const pages = {
  home: {
    path: '/',
    title: 'Graphic Illusions | Nationwide Corporate Sign Programs',
    description:
      'Nationwide sign programs managed end to end: brand management, fabrication, subcontractor management, local permits and installation, backed by a Maryland sign shop with 30 years in the trade.',
  },
  howItWorks: {
    path: '/how-it-works',
    title: 'How a Multi-Site Sign Rollout Works | Graphic Illusions',
    description:
      'How Graphic Illusions runs multi-site sign rollouts: brand standards, site surveys and permits, fabrication, subcontractor management, installation and home shop backup.',
  },
  work: {
    path: '/work',
    title: 'Our Work: Sign & Graphics Gallery | Graphic Illusions',
    description:
      'Search our gallery of custom signs, channel letters, carved and CNC signs, vehicle wraps, boat lettering, laser engraving and digital graphics.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found | Graphic Illusions',
    description: 'That page does not exist. Browse our corporate sign programs, how a rollout works or our gallery of work.',
  },
} satisfies Record<string, PageMeta>

/** Pages that get their own prerendered HTML file and a sitemap entry. */
export const indexablePages: PageMeta[] = [pages.home, pages.howItWorks, pages.work]

export function canonicalUrl(path: string): string {
  return `${site.url}${path === '/' ? '/' : path}`
}

/** schema.org LocalBusiness data so search engines can show address and phone. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.legalName,
    url: site.url,
    telephone: `+1-${site.phone}`,
    ...(site.email ? { email: site.email } : {}),
    image: `${site.url}/og-logo.png`,
    logo: `${site.url}/og-logo.png`,
    description: pages.home.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: ['United States', 'Anne Arundel County, MD'],
    knowsAbout: [
      'Channel letters',
      'Carved and CNC signs',
      'Vehicle wraps',
      'Boat lettering',
      'Laser engraving',
      'Digital graphics',
      'Multi-site sign programs',
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
  }
}

/** The <head> tags for a page, as an HTML string (used by the prerender step). */
export function headTags(meta: PageMeta): string {
  const url = canonicalUrl(meta.path)
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${site.url}/og-logo.png" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<script type="application/ld+json">${JSON.stringify(localBusinessJsonLd()).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

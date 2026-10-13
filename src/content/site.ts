/**
 * Business facts used across the site. Anything still in [BRACKETS] is a
 * placeholder from the design mocks waiting on real details.
 */
export const site = {
  name: 'Graphic Illusions',
  legalName: 'Graphic Illusions, LLC',
  url: 'https://graphicillusions.com',
  phone: '443-790-2580',
  phoneHref: 'tel:+14437902580',
  /** Shown as an "Or write to" link in contact sections; null hides it. */
  email: 'andy@graphicillusions.com' as string | null,
  address: {
    street: '786 Olivia Way',
    city: 'Pasadena',
    region: 'MD',
    postalCode: '21122',
    country: 'US',
  },
  yearsInTrade: 30,
} as const

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`

export type NavItem = { label: string; to: string }

export const mainNav: NavItem[] = [
  { label: 'Corporate programs', to: '/' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Our work', to: '/work' },
]

export const primaryCta: NavItem = { label: 'Contact us', to: '/#contact' }

import broadleaf from '@/assets/work/broadleaf-tobacco.png'
import fireStation from '@/assets/work/fire-station-1.jpg'
import mariaDs from '@/assets/work/maria-ds.jpg'
import roofworks from '@/assets/work/roofworks.jpg'

export const categories = [
  'Carved signs',
  'Channel letters',
  'Vehicles',
  'Laser engraving',
  'Digital graphics',
  'Corporate design',
] as const

export type Category = (typeof categories)[number]

/** Border tint for a tile, cycling through the logo's blues and purples. */
export type Tone = 'blue' | 'purple' | 'sky'

export type Project = {
  id: string
  title: string
  category: Category
  /** Short label shown under the title, e.g. "Storefront sign". */
  kind: string
  tags: string[]
  tone: Tone
  image?: string
  alt?: string
  featured?: boolean
}

/**
 * Gallery entries. Projects without an `image` render as striped placeholder
 * tiles, matching the mocks, until real photos are added.
 */
export const projects: Project[] = [
  {
    id: 'broadleaf-tobacco',
    title: 'Broadleaf Tobacco',
    category: 'Channel letters',
    kind: 'Storefront sign',
    tags: ['storefront', 'dimensional', 'logo'],
    tone: 'sky',
    image: broadleaf,
    alt: 'Broadleaf Tobacco dimensional storefront sign',
    featured: true,
  },
  {
    id: 'fire-station-1',
    title: 'Fire Station 1',
    category: 'Channel letters',
    kind: 'Illuminated sign',
    tags: ['illuminated', 'restaurant', 'brewery'],
    tone: 'blue',
    image: fireStation,
    alt: 'Fire Station 1 illuminated sign at night',
    featured: true,
  },
  {
    id: 'maria-ds',
    title: "Maria D's",
    category: 'Channel letters',
    kind: 'Storefront sign',
    tags: ['storefront', 'restaurant', 'dimensional'],
    tone: 'purple',
    image: mariaDs,
    alt: "Maria D's restaurant sign over a striped awning",
    featured: true,
  },
  {
    id: 'roofworks',
    title: 'Roofworks',
    category: 'Vehicles',
    kind: 'Vehicle graphics',
    tags: ['van', 'lettering', 'fleet', 'wrap'],
    tone: 'purple',
    image: roofworks,
    alt: 'Roofworks van with vehicle graphics',
    featured: true,
  },
  { id: 'carved-1', title: '[Project name]', category: 'Carved signs', kind: 'Carved sign', tags: ['3D CNC', 'dimensional'], tone: 'blue' },
  { id: 'carved-2', title: '[Project name]', category: 'Carved signs', kind: 'Carved sign', tags: ['wood', 'routed'], tone: 'purple' },
  { id: 'boat-1', title: '[Project name]', category: 'Vehicles', kind: 'Boat lettering', tags: ['boat lettering', 'marine'], tone: 'sky' },
  { id: 'laser-1', title: '[Project name]', category: 'Laser engraving', kind: 'Laser engraving', tags: ['acrylic', 'plaques'], tone: 'blue' },
  { id: 'laser-2', title: '[Project name]', category: 'Laser engraving', kind: 'Laser engraving', tags: ['wood', 'awards'], tone: 'purple' },
  { id: 'digital-1', title: '[Project name]', category: 'Digital graphics', kind: 'Banners', tags: ['banners', 'large format'], tone: 'sky' },
  { id: 'digital-2', title: '[Project name]', category: 'Digital graphics', kind: 'Window graphics', tags: ['printed', 'window'], tone: 'blue' },
  { id: 'corporate-1', title: '[Project name]', category: 'Corporate design', kind: 'Branding', tags: ['logo', 'branding'], tone: 'purple' },
  { id: 'corporate-2', title: '[Project name]', category: 'Corporate design', kind: 'Signage', tags: ['start-up', 'signage'], tone: 'sky' },
]

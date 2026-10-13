import { describe, expect, it } from 'vitest'

import type { Project } from '@/content/gallery'
import { countLabel, filterProjects } from './search'

const sample: Project[] = [
  { id: 'a', title: 'Broadleaf Tobacco', category: 'Channel letters', kind: 'Storefront sign', tags: ['storefront', 'dimensional'], tone: 'sky' },
  { id: 'b', title: 'Roofworks', category: 'Vehicles', kind: 'Vehicle graphics', tags: ['van', 'wrap'], tone: 'blue' },
  { id: 'c', title: 'Harbor Belle', category: 'Vehicles', kind: 'Boat lettering', tags: ['boat lettering', 'marine'], tone: 'purple' },
  { id: 'd', title: 'Oak Sign', category: 'Carved signs', kind: 'Carved sign', tags: ['wood', 'routed'], tone: 'blue' },
]

describe('filterProjects', () => {
  it('returns everything for an empty query and All', () => {
    expect(filterProjects(sample, '')).toHaveLength(4)
    expect(filterProjects(sample, '   ', 'All')).toHaveLength(4)
  })

  it('filters by category', () => {
    expect(filterProjects(sample, '', 'Vehicles').map((p) => p.id)).toEqual(['b', 'c'])
  })

  it('matches title, kind and tags case-insensitively', () => {
    expect(filterProjects(sample, 'BROADLEAF').map((p) => p.id)).toEqual(['a'])
    expect(filterProjects(sample, 'boat').map((p) => p.id)).toEqual(['c'])
    expect(filterProjects(sample, 'wrap').map((p) => p.id)).toEqual(['b'])
  })

  it('requires every word to match', () => {
    expect(filterProjects(sample, 'carved wood').map((p) => p.id)).toEqual(['d'])
    expect(filterProjects(sample, 'carved van')).toEqual([])
  })

  it('combines the query with the category', () => {
    expect(filterProjects(sample, 'sign', 'Carved signs').map((p) => p.id)).toEqual(['d'])
  })
})

describe('countLabel', () => {
  it('pluralises', () => {
    expect(countLabel(0)).toBe('0 projects')
    expect(countLabel(1)).toBe('1 project')
    expect(countLabel(12)).toBe('12 projects')
  })
})

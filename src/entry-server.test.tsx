import { describe, expect, it } from 'vitest'

import { headTags, indexablePages, render } from './entry-server'

describe('prerender', () => {
  it.each(indexablePages.map((p) => [p.path, p] as const))('renders %s with one h1 and its head tags', (path, meta) => {
    const html = render(path)
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
    const head = headTags(meta)
    expect(head).toContain(`<title>${meta.title.replace(/&/g, '&amp;')}</title>`)
    expect(head).toContain('rel="canonical"')
    expect(head).toContain('"@type":"LocalBusiness"')
  })

  it('gives every page a unique title and description', () => {
    expect(new Set(indexablePages.map((p) => p.title)).size).toBe(indexablePages.length)
    expect(new Set(indexablePages.map((p) => p.description)).size).toBe(indexablePages.length)
  })

  it('renders the not-found page for unknown paths', () => {
    expect(render('/nope')).toContain("We couldn&#x27;t find that page.")
  })
})

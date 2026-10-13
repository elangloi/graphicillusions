import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { projects } from '@/content/gallery'
import { renderAt } from '@/test/render'

function tiles() {
  return within(screen.getByRole('main')).queryAllByRole('listitem')
}

describe('gallery', () => {
  it('shows every project with a count', () => {
    renderAt('/work')
    expect(screen.getByRole('heading', { level: 1, name: 'Our work' })).toBeInTheDocument()
    expect(screen.getByText(`${projects.length} projects`)).toBeInTheDocument()
    expect(tiles()).toHaveLength(projects.length)
  })

  it('narrows results as you type', async () => {
    renderAt('/work')
    await userEvent.type(screen.getByRole('searchbox', { name: 'Search the gallery' }), 'roofworks')
    expect(screen.getByText('1 project')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Roofworks/ })).toBeInTheDocument()
  })

  it('filters by category chip', async () => {
    renderAt('/work')
    await userEvent.click(screen.getByRole('radio', { name: 'Laser engraving' }))
    const expected = projects.filter((p) => p.category === 'Laser engraving').length
    expect(screen.getByText(`${expected} projects`)).toBeInTheDocument()
  })

  it('reads the search and category from the URL', () => {
    renderAt('/work?category=Channel%20letters&q=restaurant')
    expect(screen.getByRole('searchbox')).toHaveValue('restaurant')
    expect(screen.getByRole('radio', { name: 'Channel letters' })).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('2 projects')).toBeInTheDocument()
  })

  it('shows an empty state when nothing matches', async () => {
    renderAt('/work')
    await userEvent.type(screen.getByRole('searchbox'), 'zeppelin')
    expect(screen.getByRole('heading', { name: 'Nothing matches that search' })).toBeInTheDocument()
  })

  it('opens a project in the lightbox', async () => {
    renderAt('/work')
    await userEvent.click(screen.getByRole('button', { name: /Fire Station 1/ }))
    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByRole('heading', { name: 'Fire Station 1' })).toBeInTheDocument()
    expect(within(dialog).getByText('illuminated')).toBeInTheDocument()
  })
})

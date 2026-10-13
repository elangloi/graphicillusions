import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { renderAt } from '@/test/render'

describe('site header', () => {
  it('marks the current page in the main nav', () => {
    renderAt('/how-it-works')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'How it works' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'Corporate programs' })).not.toHaveAttribute('aria-current')
  })

  it('opens the mobile menu and navigates from it', async () => {
    renderAt('/')
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    await userEvent.click(within(menu).getByRole('link', { name: 'Our work' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Our work' })).toBeInTheDocument()
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

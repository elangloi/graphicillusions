import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

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

describe('contact us link', () => {
  it('scrolls to the contact section on every click, from any page', async () => {
    const spy = vi.spyOn(Element.prototype, 'scrollIntoView')
    renderAt('/how-it-works')
    const link = within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', { name: 'Contact us' })

    await userEvent.click(link)
    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1))
    expect(spy.mock.contexts[0]).toHaveProperty('id', 'contact')

    await userEvent.click(link)
    await waitFor(() => expect(spy).toHaveBeenCalledTimes(2))
    spy.mockRestore()
  })
})

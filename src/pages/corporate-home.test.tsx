import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderAt } from '@/test/render'

describe('corporate home contact section', () => {
  it('offers phone and email', () => {
    const { container } = renderAt('/')
    const contact = container.querySelector<HTMLElement>('#contact')!
    expect(within(contact).getByRole('link', { name: 'Call 443-790-2580' })).toHaveAttribute('href', 'tel:+14437902580')
    expect(within(contact).getByRole('link', { name: 'andy@graphicillusions.com' })).toHaveAttribute('href', 'mailto:andy@graphicillusions.com')
    expect(within(contact).queryByRole('link', { name: 'Email us' })).not.toBeInTheDocument()
  })

  it('no longer links to a local shop page', () => {
    renderAt('/')
    expect(screen.queryByRole('link', { name: /local shop/i })).not.toBeInTheDocument()
  })
})

describe('rollout timeline', () => {
  it('leaves out "Your role" for steps where the client does nothing', () => {
    renderAt('/how-it-works')
    const step = screen.getByRole('heading', { name: 'Subcontractor hand-off' }).closest('li')!
    expect(within(step).getByText('We handle')).toBeInTheDocument()
    expect(within(step).queryByText('Your role')).not.toBeInTheDocument()
    expect(screen.getAllByText('Your role')).toHaveLength(5)
  })
})

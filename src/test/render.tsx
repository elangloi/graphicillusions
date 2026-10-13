import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { App } from '@/App'

/** Renders the whole app at `url` inside an in-memory router. */
export function renderAt(url: string) {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )
}

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { App } from './App'

/** Renders one route to HTML for the build-time prerender step. */
export function render(url: string, basename = '/') {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url} basename={basename}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export { headTags, indexablePages, pages, canonicalUrl } from './lib/seo'

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'
import { App } from './App'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (see scripts/prerender.ts), so hydrate them.
// The dev server serves an empty root, and a URL with a query (e.g. a gallery
// search) won't match the prerendered markup, so those render from scratch.
if (container.firstElementChild && !window.location.search) hydrateRoot(container, app)
else createRoot(container).render(app)

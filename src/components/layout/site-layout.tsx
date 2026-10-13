import { Outlet } from 'react-router'

import { ScrollManager } from './scroll-manager'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-card px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollManager />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

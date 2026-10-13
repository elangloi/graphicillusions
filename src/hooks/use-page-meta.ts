import { useEffect } from 'react'

import type { PageMeta } from '@/lib/seo'

/** Keeps the tab title and meta description in sync during client-side navigation. */
export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [meta])
}

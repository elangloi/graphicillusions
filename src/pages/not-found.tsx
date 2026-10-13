import { Link } from 'react-router'

import { PageHero } from '@/components/layout/page-hero'
import { Button } from '@/components/ui/button'
import { usePageMeta } from '@/hooks/use-page-meta'
import { pages } from '@/lib/seo'

export function NotFound() {
  usePageMeta(pages.notFound)

  return (
    <div className="pb-24">
      <PageHero eyebrow="404" title="We couldn't find that page.">
        It may have moved when we rebuilt the site.
      </PageHero>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Corporate programs</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/work">Browse our work</Link>
        </Button>
      </div>
    </div>
  )
}

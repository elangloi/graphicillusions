import { Container } from '@/components/layout/container'
import { SectionHeading } from '@/components/layout/section-heading'
import { GalleryBrowser } from '@/components/gallery/gallery-browser'
import { CtaPanel } from '@/components/sections/cta-panel'
import { projects } from '@/content/gallery'
import { usePageMeta } from '@/hooks/use-page-meta'
import { pages } from '@/lib/seo'

export function Work() {
  usePageMeta(pages.work)

  return (
    <Container className="pt-8 pb-16 sm:pt-10 sm:pb-24">
      <SectionHeading
        as="h1"
        eyebrow="Gallery"
        title="Our work"
        description="Every piece is made to last. Search by type, material or keyword, or filter by category."
      />
      <GalleryBrowser projects={projects} />
      <CtaPanel title="Want something built to last?" className="mt-14 sm:items-center" />
    </Container>
  )
}

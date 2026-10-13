import { Link } from 'react-router'
import { ClipboardCheckIcon, CogIcon, PenToolIcon, TruckIcon } from 'lucide-react'

import { Eyebrow } from '@/components/brand/eyebrow'
import { IconRing } from '@/components/brand/icon-ring'
import { Logo } from '@/components/brand/logo'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { ProjectTile } from '@/components/gallery/project-tile'
import { ContactActions } from '@/components/sections/contact-actions'
import { FeatureCard } from '@/components/sections/feature-card'
import { Button } from '@/components/ui/button'
import { projects, type Category } from '@/content/gallery'
import { site, fullAddress } from '@/content/site'
import { usePageMeta } from '@/hooks/use-page-meta'
import { pages } from '@/lib/seo'

const crafts: { title: string; body: string; category: Category }[] = [
  { title: 'Carved & CNC signs', body: 'Dimensional 3D carved signs, cut and finished in our own shop.', category: 'Carved signs' },
  { title: 'Digital graphics', body: 'Banners, printed graphics and large-format work for any surface.', category: 'Digital graphics' },
  { title: 'Corporate design', body: 'Logos, signage and marketing concepts that fit together.', category: 'Corporate design' },
  { title: 'Channel letters', body: 'Custom channel letters and electrical signs for storefronts.', category: 'Channel letters' },
  { title: 'Laser engraving', body: 'Precision laser engraving and machining on wood, acrylic and more.', category: 'Laser engraving' },
  { title: 'Vehicles & boats', body: 'Vehicle wraps, fleet graphics and boat lettering.', category: 'Vehicles' },
]

const processSteps = [
  { icon: <PenToolIcon />, title: 'Design', body: 'Sketches, layouts and proofs built around your brand.' },
  { icon: <ClipboardCheckIcon />, title: 'Permits', body: 'Drawings and paperwork handled for you.' },
  { icon: <CogIcon />, title: 'Fabrication', body: 'Cut, printed and finished in our own shop.' },
  { icon: <TruckIcon />, title: 'Installation', body: 'Installed by the same team that built it.' },
]

const featured = projects.filter((p) => p.featured)
const [heroLarge, ...heroSmall] = featured

export function LocalShop() {
  usePageMeta(pages.localShop)

  return (
    <>
      <section>
        <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-center gap-12 pt-8 pb-16 sm:pt-14 sm:pb-22">
          <div className="flex flex-col gap-6">
            <Logo className="w-[min(420px,100%)]" />
            <Eyebrow>Family owned · Pasadena, Maryland</Eyebrow>
            <h1 className="text-[34px] leading-[1.08] sm:text-[54px]">Signs made to last, by a family that stands behind them.</h1>
            <p className="m-0 max-w-[520px] text-lg text-soft sm:text-[19px]">
              For over {site.yearsInTrade} years our family has designed, carved and built signs in our own Maryland
              shop, one at a time, never off a template.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/work">Browse the gallery</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
          {heroLarge && (
            <div className="grid grid-cols-2 gap-4">
              <ProjectTile project={heroLarge} className="row-span-2 min-h-[300px]" />
              {heroSmall.slice(0, 2).map((project) => (
                <ProjectTile key={project.id} project={project} className="min-h-[142px]" />
              ))}
            </div>
          )}
        </Container>
      </section>

      <Section id="services">
        <SectionHeading eyebrow="What we make" title="Six crafts, one family shop" />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5 p-0">
          {crafts.map((craft, i) => (
            <li key={craft.title}>
              <Link to={`/work?category=${encodeURIComponent(craft.category)}`} className="block h-full">
                <FeatureCard
                  number={String(i + 1).padStart(2, '0')}
                  title={craft.title}
                  footer={<span className="font-semibold text-sky">See the work →</span>}
                >
                  {craft.body}
                </FeatureCard>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="band" aria-labelledby="process-heading">
        <SectionHeading eyebrow="Our process" title={<span id="process-heading">From idea to installed, all under one roof</span>} />
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-8 p-0">
          {processSteps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-start gap-3">
              <IconRing size="md" aria-hidden="true">
                {step.icon}
              </IconRing>
              <span className="font-heading text-sm text-sky">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl">{step.title}</h3>
              <p className="m-0 max-w-[260px] text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Recent work"
          title="Built here, made to last"
          action={
            <Button asChild variant="outline">
              <Link to="/work">View full gallery</Link>
            </Button>
          }
        />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4 p-0">
          {featured.map((project) => (
            <li key={project.id}>
              <Link to={`/work?q=${encodeURIComponent(project.title)}`} className="block">
                <ProjectTile project={project} />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="about">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-10 rounded-3xl border border-border bg-muted p-6 sm:p-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-[26px] leading-[1.15] sm:text-[32px]">A family shop, not a sign factory.</h2>
            <p className="m-0 text-lg text-soft">
              We would rather build a sign once and build it right than rush out the cheapest one. Every piece is made in
              our own shop, on our own CNC machine and large-format printer, so the people who design your sign are the
              people who make it. [FAMILY STORY: who started the shop, and when]
            </p>
            <ContactActions />
          </div>
          <div className="flex flex-col gap-5">
            <FeatureCard title="Made in-house">
              Routed, printed and finished under one roof, with no outsourcing to a faceless vendor.
            </FeatureCard>
            <FeatureCard title="One of a kind">
              Each sign is unique, so it sets you apart from competitors instead of matching them.
            </FeatureCard>
            <FeatureCard title="Built for the long run">
              Quality materials and finishing meant to look good for years, not seasons. [ADD: materials, finishes, warranty]
            </FeatureCard>
          </div>
        </div>
      </Section>

      <Section id="contact" aria-label="Contact">
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5 p-0">
          <li className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-7">
            <Eyebrow>Call</Eyebrow>
            <a href={site.phoneHref} className="font-heading text-[22px] hover:text-sky">
              {site.phone}
            </a>
          </li>
          <li className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-7">
            <Eyebrow>Visit</Eyebrow>
            <address className="text-lg not-italic">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky"
              >
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </a>
            </address>
          </li>
          <li className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-7">
            <Eyebrow>Email</Eyebrow>
            {site.email ? (
              <a href={`mailto:${site.email}`} className="text-lg hover:text-sky">
                {site.email}
              </a>
            ) : (
              <span className="text-lg text-soft">[EMAIL ADDRESS]</span>
            )}
          </li>
        </ul>
      </Section>
    </>
  )
}

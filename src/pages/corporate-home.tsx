import { Link } from 'react-router'
import { HomeIcon, LayersIcon, MapPinIcon, NetworkIcon, CogIcon, TruckIcon } from 'lucide-react'

import { Eyebrow } from '@/components/brand/eyebrow'
import { GradientText } from '@/components/brand/gradient-text'
import { Logo } from '@/components/brand/logo'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { CtaPanel } from '@/components/sections/cta-panel'
import { FeatureCard } from '@/components/sections/feature-card'
import { Globe } from '@/components/sections/globe'
import { LogoWall } from '@/components/sections/logo-wall'
import { Milestones } from '@/components/sections/milestones'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'
import { usePageMeta } from '@/hooks/use-page-meta'
import { pages } from '@/lib/seo'

const services = [
  {
    icon: <LayersIcon />,
    title: 'Nationwide brand management',
    body: 'Your sign standards applied consistently at every location, from colors and materials to mounting and lighting.',
  },
  {
    icon: <CogIcon />,
    title: 'Fabrication',
    body: "Built in our own shop or by fabricators we've vetted, held to the same standard either way.",
  },
  {
    icon: <NetworkIcon />,
    title: 'Subcontractor management',
    body: "We hire, brief and oversee local crews, and hand off each job with drawings and specs they can't misread.",
  },
  {
    icon: <MapPinIcon />,
    title: 'Local policy & site needs',
    body: 'Permits, zoning rules, landlord approvals and site surveys, handled location by location.',
  },
  {
    icon: <TruckIcon />,
    title: 'Installation',
    body: 'Scheduled, installed and signed off at every site, with one team tracking the whole rollout.',
  },
  {
    icon: <HomeIcon />,
    title: 'Home shop backup',
    body: "When a local vendor falls short, our own shop steps in to fabricate, repair or replace, so gaps don't become delays.",
    highlight: true,
  },
]

export function CorporateHome() {
  usePageMeta(pages.home)

  return (
    <>
      <section>
        <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-center gap-10 pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="flex flex-col gap-6">
            <Logo />
            <Eyebrow>Corporate &amp; multi-site programs</Eyebrow>
            <h1 className="text-[34px] leading-[1.08] sm:text-[54px]">
              Every location. <GradientText>One accountable partner.</GradientText>
            </h1>
            <p className="m-0 max-w-[540px] text-lg text-soft sm:text-[19px]">
              Nationwide brand management, fabrication, subcontractor oversight, local permits and installation,
              managed end to end by a team with {site.yearsInTrade} years in the trade.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="#contact">Plan a rollout</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>
          <Globe />
        </Container>
      </section>

      <Section tone="band" containerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-center gap-10">
        <h2 className="text-[28px] leading-[1.15] sm:text-[40px]">
          You don't need to deal with <GradientText>each site.</GradientText>
        </h2>
        <div className="flex flex-col gap-4 text-lg sm:text-[19px]">
          <p className="m-0 text-soft">
            With {site.yearsInTrade} years of expertise, starting small and scaling up, we handle the management for you.
            Our depth of knowledge across the tradecraft, from design and carving to electrical and install, means we
            know what each site needs before it becomes your problem.
          </p>
          <p className="m-0 font-semibold">You focus on the bigger picture. We handle every location.</p>
        </div>
      </Section>

      <Section aria-labelledby="manage-heading">
        <SectionHeading eyebrow="What we manage" title={<span id="manage-heading">One program, every piece of it</span>} />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5 p-0">
          {services.map((service) => (
            <li key={service.title}>
              <FeatureCard icon={service.icon} title={service.title} highlight={service.highlight}>
                {service.body}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="gradient-rim grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] items-start gap-12 rounded-3xl border-2 border-transparent p-6 sm:p-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>The home shop advantage</Eyebrow>
            <h2 className="text-2xl leading-[1.2] sm:text-[30px]">A real shop behind every subcontractor.</h2>
            <p className="m-0 text-lg text-soft">
              Many national programs are run by brokers who never touch the work, so when a local vendor misses, you
              wait. We're craftspeople first. Our Pasadena shop is the fallback that covers the gaps in any rollout.
            </p>
          </div>
          <Milestones
            items={[
              { title: 'Started small', detail: '[YEAR]: a family sign shop in Pasadena, Maryland' },
              { title: 'Grew with our clients', detail: '[YEAR]: regional and multi-location work' },
              { title: 'Scaled up', detail: 'Today: nationwide programs, still backed by the original shop' },
            ]}
          />
        </div>
      </Section>

      <Section>
        <LogoWall title="Programs we've managed" logos={Array.from({ length: 5 }, () => ({ name: '[CLIENT LOGO]' }))} />
      </Section>

      <Section id="contact">
        <CtaPanel title="Planning a rollout across multiple locations?">
          Tell us how many sites, where they are and when you need them done. We'll map out the program.
        </CtaPanel>
      </Section>
    </>
  )
}

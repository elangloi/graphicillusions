import { ArrowRightIcon, CheckIcon, CircleAlertIcon, CogIcon, HomeIcon, LayersIcon, MapPinIcon, NetworkIcon, TruckIcon } from 'lucide-react'

import { GradientText } from '@/components/brand/gradient-text'
import { PageHero } from '@/components/layout/page-hero'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { CtaPanel } from '@/components/sections/cta-panel'
import { FlowSteps } from '@/components/sections/flow-steps'
import { ProcessTimeline, type TimelineStep } from '@/components/sections/process-timeline'
import { ResponsibilityTable } from '@/components/sections/responsibility-table'
import { site } from '@/content/site'
import { usePageMeta } from '@/hooks/use-page-meta'
import { pages } from '@/lib/seo'

const steps: TimelineStep[] = [
  {
    icon: <LayersIcon />,
    eyebrow: 'Step 01',
    title: 'Discovery & brand standards',
    body: 'We learn your brand standards, your site list and your timeline, then build a sign package for each type of location.',
    weHandle: 'Sign packages and specs',
    yourRole: 'Share guidelines and sites',
    photo: { label: '[Photo: sign package / brand standards]', caption: 'Spec sheets for a multi-site client' },
  },
  {
    icon: <MapPinIcon />,
    eyebrow: 'Step 02',
    title: 'Site surveys & local approvals',
    body: 'Every site is surveyed, and every local requirement is handled where it applies: permits, zoning, landlord rules and HOA approvals.',
    weHandle: 'Surveys, permits, approvals',
    yourRole: 'Nothing, we report back',
    photo: { label: '[Photo: site survey]', caption: 'Measuring a facade before drawing' },
  },
  {
    icon: <CogIcon />,
    eyebrow: 'Step 03',
    title: 'Fabrication',
    body: "Signs are built in our home shop or by regional fabricators we've vetted, all to one spec, so location 40 matches location 1.",
    weHandle: 'Production and quality checks',
    yourRole: 'Approve the first sample',
    photo: { label: '[Photo: production sample in the shop]', caption: 'First article before the full run' },
  },
  {
    icon: <NetworkIcon />,
    eyebrow: 'Step 04',
    title: 'Subcontractor hand-off',
    body: `We hire and brief local installers with drawings, specs and site notes, and we stay on the job until it's done right. Our ${site.yearsInTrade} years across the tradecraft means we know what to ask for and what to check.`,
    weHandle: 'Hiring, briefing, oversight',
    yourRole: 'None',
    photo: { label: '[Photo: installer briefing]', caption: 'Walking a local crew through the spec' },
  },
  {
    icon: <TruckIcon />,
    eyebrow: 'Step 05',
    title: 'Installation & sign-off',
    body: 'Each install is scheduled, completed and checked against your standard. [CONFIRM: completion photos or a report for every site]',
    weHandle: 'Scheduling, install, sign-off',
    yourRole: 'Review the completion report',
    photo: { label: '[Photo: completed location]', caption: 'A finished multi-site storefront' },
  },
  {
    icon: <HomeIcon />,
    eyebrow: 'Step 06 · The difference',
    title: 'Home shop backup & support',
    body: "If a vendor misses, a sign is damaged or a site needs a change, our own Pasadena shop covers it. That's the advantage of a partner that still builds signs.",
    weHandle: 'Fixes, replacements, changes',
    yourRole: 'One call to us',
    photo: { label: '[Photo: the Pasadena shop team]', caption: 'The family behind every program' },
    highlight: true,
  },
]

export function HowItWorks() {
  usePageMeta(pages.howItWorks)

  return (
    <>
      <PageHero
        eyebrow="How a rollout works"
        title={
          <>
            From brand standard to <GradientText>every storefront.</GradientText>
          </>
        }
      >
        The same idea that runs our family shop, one team responsible from start to finish, scaled up for multi-site
        programs. You make a few decisions. We manage everything else, site by site.
      </PageHero>

      <Section aria-label="Rollout steps">
        <ProcessTimeline steps={steps} />
      </Section>

      <Section tone="band">
        <SectionHeading
          eyebrow="Who does what"
          title={
            <>
              Your list is short. <GradientText>Ours is long.</GradientText>
            </>
          }
        />
        <ResponsibilityTable
          companyName={site.name}
          rows={[
            { task: 'Brand standards & sign packages', you: 'Share & approve' },
            { task: 'Site surveys', you: null },
            { task: 'Permits, zoning & landlord approvals', you: null },
            { task: 'Fabrication & quality control', you: 'Approve sample' },
            { task: 'Finding & managing local installers', you: null },
            { task: 'Installation & sign-off', you: 'Review report' },
            { task: 'Fixing gaps & replacements', you: 'One call' },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="When something goes wrong" title="The home shop covers the gap." />
        <FlowSteps
          steps={[
            { icon: <CircleAlertIcon />, title: 'A local vendor misses', body: 'Late, damaged, or not up to spec.', variant: 'muted' },
            { icon: <ArrowRightIcon />, title: 'We catch it', body: 'Our oversight flags it before it reaches you.' },
            { icon: <HomeIcon />, title: 'Home shop steps in', body: 'We fabricate, repair or replace it ourselves.', variant: 'highlight' },
            { icon: <CheckIcon />, title: 'Site stays on schedule', body: 'Your rollout keeps moving.' },
          ]}
        />
      </Section>

      <Section id="contact">
        <CtaPanel variant="gradient" title="Focus on the bigger picture. We'll handle every site.">
          Send us your site list and timeline, and we'll map out the program.
        </CtaPanel>
      </Section>
    </>
  )
}

import { cn } from 'cn'

import type { Project, Tone } from '@/content/gallery'

const toneBorder: Record<Tone, string> = {
  blue: 'border-[#2f4f8f]',
  purple: 'border-[#4e3f8f]',
  sky: 'border-[#2a6fa8]',
}

type ProjectTileProps = {
  project: Project
  /** Second caption line; defaults to the project's kind. */
  detail?: string
  /** Extra caption text shown from the sm breakpoint up (tiles are too narrow on phones). */
  extra?: string
  onSelect?: (project: Project) => void
  className?: string
}

/**
 * Photo tile with a fade-up caption. Renders a button when `onSelect` is
 * given (opens the lightbox), otherwise a static figure.
 */
export function ProjectTile({ project, detail, extra, onSelect, className }: ProjectTileProps) {
  const body = (
    <>
      {project.image ? (
        <img
          src={project.image}
          alt={project.alt ?? project.title}
          loading="lazy"
          className="absolute inset-0 block size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <span aria-hidden="true" className="bg-stripes absolute inset-0" />
      )}
      <span className="relative block w-full bg-[linear-gradient(0deg,rgba(7,16,28,.92),rgba(7,16,28,0))] px-4 py-3.5 text-left">
        <b className="block text-base font-semibold">{project.title}</b>
        <span className="text-[13px] text-muted-foreground">
          {detail ?? project.kind}
          {extra && <span className="hidden sm:inline"> · {extra}</span>}
        </span>
      </span>
    </>
  )

  const classes = cn(
    'group relative flex min-h-[220px] items-end overflow-hidden rounded-[14px] border text-foreground',
    toneBorder[project.tone],
    className,
  )

  if (onSelect && project.image) {
    return (
      <button
        type="button"
        onClick={() => onSelect(project)}
        className={cn(classes, 'w-full focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:outline-none')}
        aria-label={`${project.title}, ${project.kind}. View larger`}
      >
        {body}
      </button>
    )
  }
  return <div className={classes}>{body}</div>
}

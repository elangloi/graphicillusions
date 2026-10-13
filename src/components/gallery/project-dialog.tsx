import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Project } from '@/content/gallery'

/** Lightbox showing a project's photo larger, with its category and tags. */
export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[min(900px,calc(100%-2rem))] gap-5 border-border bg-card p-4 sm:max-w-[min(900px,calc(100%-2rem))] sm:p-6">
        {project && (
          <>
            {project.image && (
              <img
                src={project.image}
                alt={project.alt ?? project.title}
                className="max-h-[70vh] w-full rounded-xl bg-background object-contain"
              />
            )}
            <DialogHeader className="text-left">
              <DialogTitle className="font-heading text-xl">{project.title}</DialogTitle>
              <DialogDescription className="text-soft">
                {project.category} · {project.kind}
              </DialogDescription>
            </DialogHeader>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Tags">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="outline" className="border-border-strong text-soft">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

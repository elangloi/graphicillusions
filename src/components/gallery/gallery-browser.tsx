import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'

import { categories, type Category, type Project } from '@/content/gallery'
import { site } from '@/content/site'
import { countLabel, filterProjects, type CategoryFilter as Filter } from '@/lib/search'
import { CategoryFilter } from './category-filter'
import { GallerySearch } from './gallery-search'
import { ProjectDialog } from './project-dialog'
import { ProjectTile } from './project-tile'

function parseCategory(value: string | null): Filter {
  return value && (categories as readonly string[]).includes(value) ? (value as Category) : 'All'
}

/**
 * Searchable, filterable gallery grid. The query and category live in the URL
 * (?q=…&category=…) so searches can be linked to and survive a refresh.
 */
export function GalleryBrowser({ projects }: { projects: readonly Project[] }) {
  const [params, setParams] = useSearchParams()
  const [selected, setSelected] = useState<Project | null>(null)
  const query = params.get('q') ?? ''
  const category = parseCategory(params.get('category'))

  const shown = useMemo(() => filterProjects(projects, query, category), [projects, query, category])

  function update(next: { q?: string; category?: Filter }) {
    const merged = { q: next.q ?? query, category: next.category ?? category }
    const out = new URLSearchParams()
    if (merged.q) out.set('q', merged.q)
    if (merged.category !== 'All') out.set('category', merged.category)
    setParams(out, { replace: true, preventScrollReset: true })
  }

  return (
    <div>
      <GallerySearch value={query} onChange={(q) => update({ q })} />
      <div className="mt-6 mb-2">
        <CategoryFilter categories={categories} value={category} onChange={(c) => update({ category: c })} />
      </div>
      <p className="mt-4 mb-6 text-sm text-dim" aria-live="polite">
        {countLabel(shown.length)}
      </p>

      {shown.length > 0 ? (
        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-[repeat(auto-fill,minmax(min(270px,100%),1fr))] sm:gap-4">
          {shown.map((project) => (
            <li key={project.id}>
              <ProjectTile
                project={project}
                detail={project.category}
                extra={project.tags.join(', ')}
                onSelect={setSelected}
                className="min-h-[180px] sm:min-h-[220px]"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-[14px] border border-dashed border-border-strong px-6 py-14 text-center">
          <h2 className="mb-2 text-xl">Nothing matches that search</h2>
          <p className="m-0 text-muted-foreground">
            Try a broader word, or call{' '}
            <a href={site.phoneHref} className="text-sky underline-offset-4 hover:underline">
              {site.phone}
            </a>{' '}
            and we'll show you more.
          </p>
        </div>
      )}

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

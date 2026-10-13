import type { Category, Project } from '@/content/gallery'

export type CategoryFilter = Category | 'All'

/** Lower-cased text a project can be found by: title, category, kind and tags. */
export function searchableText(project: Project): string {
  return [project.title, project.category, project.kind, ...project.tags].join(' ').toLowerCase()
}

/**
 * Filters projects by category and a free-text query. Every word in the query
 * must appear somewhere in the project's text, so "carved wood" narrows rather
 * than widens the results.
 */
export function filterProjects(
  projects: readonly Project[],
  query: string,
  category: CategoryFilter = 'All',
): Project[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  return projects.filter((project) => {
    if (category !== 'All' && project.category !== category) return false
    if (terms.length === 0) return true
    const text = searchableText(project)
    return terms.every((term) => text.includes(term))
  })
}

export function countLabel(count: number): string {
  return `${count} ${count === 1 ? 'project' : 'projects'}`
}

/**
 * Build-time prerender: renders every indexable route to static HTML so search
 * engines and link previews see real content and per-page <head> tags. Also
 * writes 404.html (GitHub Pages' fallback), sitemap.xml and robots.txt.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server entry).
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')
const base = process.env.BASE_PATH ?? '/'

type PageMeta = { path: string; title: string; description: string }
type ServerEntry = {
  render: (url: string, basename?: string) => string
  headTags: (meta: PageMeta) => string
  canonicalUrl: (path: string) => string
  indexablePages: PageMeta[]
  pages: Record<string, PageMeta>
}

const server: ServerEntry = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

function page(meta: PageMeta, url: string): string {
  // React emits resource hints (e.g. image preloads) ahead of the app markup.
  // They belong in <head>; left inside #root they break hydration.
  const rendered = server.render(url, base)
  const hints = rendered.match(/^(?:<link [^>]*\/>)*/)?.[0] ?? ''
  return template
    .replace(/<!--head-tags-->[\s\S]*<!--\/head-tags-->/, `${server.headTags(meta)}\n    ${hints}`)
    .replace('<!--app-html-->', rendered.slice(hints.length))
}

function write(file: string, html: string) {
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log(`  prerendered ${file.slice(dist.length)}`)
}

for (const meta of server.indexablePages) {
  // /work is written as work.html: GitHub Pages and `vite preview` both serve it at
  // /work with no trailing-slash redirect, matching the canonical URLs.
  const file = meta.path === '/' ? join(dist, 'index.html') : join(dist, `${meta.path.slice(1)}.html`)
  write(file, page(meta, meta.path))
}

// GitHub Pages serves 404.html for unknown paths. It carries the not-found page
// with noindex so stray URLs don't get indexed.
write(
  join(dist, '404.html'),
  page(server.pages.notFound, '/404').replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'),
)

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${server.indexablePages
  .map((meta) => `  <url><loc>${server.canonicalUrl(meta.path)}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${server.canonicalUrl('/sitemap.xml')}\n`)
console.log('  wrote sitemap.xml and robots.txt')

rmSync(ssrDir, { recursive: true, force: true })

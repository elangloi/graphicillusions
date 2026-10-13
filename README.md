# Graphic Illusions website

The rebuilt graphicillusions.com: a dark, mobile-first site in the logo's blue/purple/pink palette, built from the
"Graphic Illusions Redesign" mocks (corporate variant).

- **Stack:** Vite + React 19 + TypeScript, Tailwind CSS v4, shadcn/ui (Radix), React Router, Vitest + Testing Library.
- **Pages:** `/` corporate programs, `/how-it-works` rollout process, `/work` searchable gallery, `/local-shop` family shop.
- **SEO:** every page is prerendered to static HTML at build time with its own title, description, canonical URL,
  Open Graph tags and LocalBusiness JSON-LD; the build also writes `sitemap.xml`, `robots.txt` and `404.html`.

## Commands

```sh
pnpm install
pnpm dev        # http://localhost:5180
pnpm test       # vitest (watch); pnpm test:run for a single pass
pnpm build      # typecheck, client + SSR build, prerender into dist/
pnpm preview    # serve dist/
```

Set `BASE_PATH=/graphicillusions/` when building for a GitHub Pages project URL instead of the custom domain.

## Where things live

- `src/index.css` – brand tokens (colors, fonts, gradients) and utilities like `text-gradient`, `border-gradient`.
- `src/components/ui` – shadcn primitives (Button is restyled to the brand pill buttons).
- `src/components/brand`, `layout`, `sections`, `gallery` – reusable site components.
- `src/content/site.ts` – phone, address, email, nav. `src/content/gallery.ts` – gallery projects.
- `src/lib/seo.ts` – per-page metadata; `scripts/prerender.ts` – static HTML generation.

## Adding gallery work

Drop the photo in `src/assets/work/`, import it in `src/content/gallery.ts` and add a project entry with a
category, kind and search tags. Entries without an image show as striped placeholders.

Anything in `[BRACKETS]` on the site is a placeholder from the mocks waiting on real details.

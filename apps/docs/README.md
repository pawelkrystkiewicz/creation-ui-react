# @creation-ui/docs

Documentation site for Creation UI, built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).

## Development

```bash
# From the monorepo root
bun dev

# Or directly
cd apps/docs
bun dev
```

## Build

```bash
bun run build
```

The build includes a post-build step that generates a [Pagefind](https://pagefind.app/) search index.

## Tech Stack

- Next.js 16 with Turbopack
- Nextra 4 for docs theming
- Recharts for chart examples
- Pagefind for full-text search

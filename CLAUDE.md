# Creation UI React

Accessible React component library (35+ components) built with Tailwind CSS v4, published as `@creation-ui/react` on npm.

## Stack

- Turborepo monorepo, Bun package manager
- React + TypeScript (strict mode)
- Tailwind CSS v4 + Class Variance Authority (CVA)
- tsup (ESM + CJS build)
- Vitest + Playwright CT (testing)
- Changesets (versioning + releases)

## Structure

- `packages/ui/` — main `@creation-ui/react` package (components in `src/`)
- `packages/eslint-config/` — shared ESLint config
- `packages/typescript-config/` — shared TS configs
- `apps/docs/` — documentation site (Next.js 16 + Nextra 4)
- `scripts/` — utility scripts (version calculation, screenshots)

## Commands

- `bun dev` — start all dev servers
- `bun run build` — build all packages
- `bun run test` — run root-level tests (scripts)
- `bun run test:unit` — unit tests (packages/ui)
- `bun run test:visual` — visual regression tests (packages/ui)
- `bun run test:unit:coverage` — unit tests with coverage
- `bun run lint` — lint all packages
- `bun run format` — format with Prettier

## Verification

Before completing work, run:
1. `bun run lint` — ensure no lint errors
2. `bun run test:unit` — ensure tests pass
3. In `packages/ui`: `bun run typecheck` — ensure types are correct

## Code Conventions

- No semicolons, single quotes, trailing commas
- Functional components with hooks, named exports
- `interface` for props, `type` for unions
- CVA for component variants, `clsx` + `tailwind-merge` for class composition
- See `.cursorrules` for full style guide

## Component Development

- Components live in `packages/ui/src/[component-name]/`
- Tests in `[component-name]/__specs__/` (`.spec.tsx` unit, `.visual.spec.tsx` visual)
- Generate scaffold: `cd packages/ui && bun run init:component`
- See `packages/ui/component-testing-strategy.md` for testing patterns

## Releases

- `bun run changeset` — create a changeset
- `bun run version-packages` — bump versions
- `bun run release` — build + publish to npm

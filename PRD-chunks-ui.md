# Chunks UI — Product Requirements Document

> **Author:** Pawel Krystkiewicz
> **Date:** 2026-03-07
> **Status:** Draft
> **Replaces:** `@creation-ui/react` (v16+)
> **npm:** `chunks-ui`
> **Docs:** ui-kit.chunk-creations.com

---

## 1. Goals & Non-Goals

### Goals

- **Personal design system.** A single source of truth consumed by all Chunk Creations projects.
  `npm update chunks-ui` propagates fixes everywhere — this is not a shadcn-style registry where you copy/paste and own the source.
- **Clean break.** Drop the `@creation-ui` paid npm org, reset the version history, and shed 2+ years of accumulated complexity.
- **Lean component set.** Ship only components that are actually used. If Tailwind can do it inline, it doesn't need a component.
- **LLM-friendly.** Familiar patterns, minimal indirection. Any LLM should be able to read/write code using these components without hitting exotic abstractions. Ship an `llms.txt` at `ui-kit.chunk-creations.com/llms.txt` following the same convention Base UI uses at `base-ui.com/llms.txt`.
- **Motion as first-class.** Animations are designed into the component API from day one, not retrofitted.

### Non-Goals

- **Public adoption.** This is not marketed to the community. No Discord, no contributor guidelines, no "getting started" tutorial. The docs site exists for personal reference and portfolio showcase.
- **Framework-agnostic.** React 19 only. No Vue/Svelte/Solid ports.
- **Component kitchen sink.** Not competing with shadcn, Radix Themes, or MUI on component count.
- **Backward compatibility with Creation UI.** API will be redesigned where it makes sense. No adapter layer.

---

## 2. Component Scope

### 2.1 Selection criteria

A component earns its place if it meets **at least two** of:
1. Used in 2+ personal projects
2. Non-trivial to implement from scratch (accessibility, positioning, state)
3. Provides meaningful animation choreography via Motion

### 2.2 Component list

Components are ordered by build priority. Tier 1 ships in v1.0.0. Tier 2 lands in v1.x patches. Tier 3 is aspirational.

#### Tier 1 — Core (v1.0.0)

| # | Component | Base UI primitive | Notes |
|---|-----------|-------------------|-------|
| 1 | **Button** | `Button` | Variants: contained, outlined, ghost, link. Loading state with Loader. |
| 2 | **Input** | `Input` + `Field` | Start/end adornments, clear button, error state. |
| 3 | **Textarea** | `Field` | Auto-resize option. |
| 4 | **Checkbox** | `Checkbox` | Indeterminate state. |
| 5 | **Radio** | `Radio` | Group wrapper included. |
| 6 | **Switch** | `Switch` | — |
| 7 | **Select** | `Select` | Single select with grouped options. Positioning via Base UI's built-in Floating UI. |
| 8 | **Combobox** | `Combobox` | Replaces Creation UI's custom Autocomplete. Searchable select, no free-form text. |
| 9 | **Tabs** | `Tabs` | **Primary animated component.** Motion indicator + content slide. See [Section 6](#6-animation-system). |
| 10 | **Dialog** | `Dialog` | Modal + non-modal. Motion enter/exit. |
| 11 | **Drawer** | `Drawer` | Side/bottom sheets. Motion enter/exit. |
| 12 | **Popover** | `Popover` | Positioned popup. Motion scale/fade. |
| 13 | **Tooltip** | `Tooltip` | Delay, positioning via Base UI. |
| 14 | **Card** | — (custom) | Compound: Card, Card.Header, Card.Title, Card.Description, Card.Content, Card.Footer. |
| 15 | **Avatar** | `Avatar` | Image + fallback initials. |
| 16 | **Chip** | — (custom) | Removable tag. Uses ClearButton internally. |
| 17 | **ClearButton** | — (custom) | Exported publicly. Small icon button for clearing values. |
| 18 | **Loader** | — (custom) | Animated SVG spinner. |
| 19 | **Separator** | `Separator` | Horizontal/vertical. |
| 20 | **Field** | `Field` | Label + description + error wrapper. Composition root for form controls. |

#### Tier 2 — Extended (v1.1+)

| # | Component | Base UI primitive | Notes |
|---|-----------|-------------------|-------|
| 21 | **Accordion** | `Accordion` | Motion height animation via `Collapsible`. |
| 22 | **Toast** | `Toast` | Notification stack. Motion enter/exit/reorder. |
| 23 | **Menu** | `Menu` | Dropdown/context menu. |
| 24 | **Toggle Group** | `Toggle Group` | Segmented control / button group. |
| 25 | **Progress** | `Progress` | Linear progress bar. |
| 26 | **Calendar** | — (custom) | Date grid. Simplify from Creation UI's 6-file implementation. |
| 27 | **DatePicker** | — (custom) | Calendar + Input + Popover composition. |
| 28 | **Scroll Area** | `Scroll Area` | Custom scrollbar styling. |
| 29 | **Number Field** | `Number Field` | Numeric input with stepper. |
| 30 | **Slider** | `Slider` | Range input. |

#### Removed — Not carried forward

| Component | Reason |
|-----------|--------|
| **Flex** | `className="flex gap-4 items-center"` — Tailwind does this in 5 tokens. |
| **Show** | `{condition && <X />}` — React syntax. |
| **For** | `items.map(item => ...)` — React syntax. |
| **Link** | Empty shell. Users import Next.js `Link` or React Router `Link` directly. |
| **DarkModeToggle** | App-level concern. Too opinionated (specific SVGs, animation library). |
| **LoadingOverlay** | Two-line composition: `<Overlay><Loader /></Overlay>`. |
| **Highlighter** | Niche search highlighting. Belongs in app code. |
| **Icon** (built-in paths) | Hardcoded SVG paths lock users in. Pass `<LucideIcon />` as children/prop instead. |
| **TouchTarget** | Useful but too small. Ship as a CSS utility (`touch-target` class), not a component. |
| **Overlay** | Absorbed into Dialog/Drawer internals. Not standalone. |
| **DropdownChevron** | Internal-only. Not exported. |

### 2.3 Design principle: One component, one job

**The "dropdown" problem.** In large design systems (including the one maintained at Autodesk), the single biggest source of bugs and support tickets is a "dropdown" / "autocomplete" God Component that tries to be Select, Combobox, and Search Box simultaneously. Every bug fix in one mode breaks two others. Forty props, infinite edge cases.

Chunks follows Base UI's separation into three distinct components with clear boundaries:

| Component | Input type | Must pick from list? | Multi-select? | Use case |
|-----------|-----------|---------------------|---------------|----------|
| **Select** | No text input (click to open) | Yes | No (v1) | Country picker, status dropdown |
| **Combobox** | Text input filters the list | Yes | Yes (chips) | User picker, tag selector |
| **Autocomplete** | Text input IS the value | No — free-form | No | Search box, address field |

**Rule:** If a component needs a config prop to switch between fundamentally different interaction models (`mode="select" | "combobox" | "search"`), it should be three components instead. Shared logic lives in Base UI's headless layer — the styled components stay small, focused, and independently testable.

v1.0.0 ships Select + Combobox. Autocomplete joins in v1.x if needed.

### 2.4 Base UI coverage

Base UI v1.2 provides 36+ headless primitives. Chunks uses ~20 of them. The key win: **Floating UI is bundled inside Base UI** — no separate `@floating-ui/react` dependency. Components that previously needed manual positioning (Autocomplete, Popover, DatePicker, Select) get it for free via Base UI's `*.Positioner` subparts.

The custom Autocomplete from Creation UI is **replaced entirely** by Base UI's `Combobox` (selection from list). No custom floating logic needed.

---

## 3. Color System & CSS Variables

### 3.1 Foundation: Chunk Creations tokens

The existing OKLCH color system from Creation UI is carried forward verbatim. These values are the Chunk Creations brand:

```css
:root {
  /* Semantic colors */
  --primary:              oklch(60.48% 0.2165 257.21);  /* Blue */
  --primary-foreground:   oklch(0.985 0 0);

  --success:              oklch(75.14% 0.1514 166.5);   /* Green */
  --success-foreground:   oklch(0.985 0 0);

  --warning:              oklch(77.97% 0.1665 72.45);   /* Amber */
  --warning-foreground:   oklch(0.145 0 0);

  --destructive:          oklch(66.16% 0.2249 25.88);   /* Red */
  --destructive-foreground: oklch(0.985 0 0);

  /* Surface colors */
  --background:           oklch(1 0 0);
  --foreground:           oklch(0.145 0 0);
  --card:                 oklch(1 0 0);
  --card-foreground:      oklch(0.145 0 0);
  --popover:              oklch(1 0 0);
  --popover-foreground:   oklch(0.145 0 0);

  /* Neutral palette */
  --secondary:            oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted:                oklch(0.97 0 0);
  --muted-foreground:     oklch(0.556 0 0);
  --accent:               oklch(0.97 0 0);
  --accent-foreground:    oklch(0.205 0 0);

  /* Utility */
  --border:               oklch(0.922 0 0);
  --input:                oklch(0.922 0 0);
  --ring:                 oklch(0.708 0 0);
  --radius:               0.625rem;
}
```

### 3.2 Naming convention

Follows the **shadcn/ui CSS variable convention** exactly:

| Variable | Tailwind usage | Purpose |
|----------|---------------|---------|
| `--primary` | `bg-primary text-primary-foreground` | Brand blue |
| `--success` | `bg-success text-success-foreground` | Positive actions, confirmations |
| `--warning` | `bg-warning text-warning-foreground` | Caution states |
| `--destructive` | `bg-destructive text-destructive-foreground` | Deletions, errors |
| `--muted` | `bg-muted text-muted-foreground` | Subdued surfaces |
| `--accent` | `bg-accent text-accent-foreground` | Hover/focus highlights |
| `--border` | `border-border` | Default borders |
| `--ring` | `ring-ring` | Focus rings |

### 3.3 Tailwind v4 integration

Variables are exposed to Tailwind via `@theme inline`:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  /* ... all other tokens ... */
}
```

### 3.4 Dark mode

Dark mode uses the `.dark` class on `<html>` (same as shadcn). The same variable names are redefined:

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(60.48% 0.2165 257.21); /* Same blue */
  /* ... rest of dark palette ... */
}
```

### 3.5 Design tokens beyond color

Carried forward from Creation UI:

```css
@theme inline {
  /* Typography */
  --font-sans: 'Manrope', sans-serif;
  --font-mono: 'Fira Code', monospace;

  /* Easing curves */
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);

  /* Component sizing */
  --ui-height: 35px;
  --ui-icon-height: calc(var(--ui-height) * 0.5);

  /* Z-index layers */
  --ui-z-base: 0;
  --ui-z-dropdowns: 200;
  --ui-z-tooltips: 400;
  --ui-z-overlays: 500;
  --ui-z-drawers: 600;
  --ui-z-modals: 700;
  --ui-z-notifications: 800;

  /* Border radius */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

### 3.6 What changes from Creation UI

| Aspect | Creation UI | Chunks |
|--------|-------------|--------|
| Color space | OKLCH | OKLCH (same) |
| Variable naming | shadcn-compatible | shadcn-compatible (same) |
| `--trigger-color` dynamic prop | Used for button color switching | **Removed.** Use CVA variants with explicit classes instead. |
| `mono` color token | 5th semantic color | **Removed.** Use `--secondary` or `--muted`. |
| Chart colors | 5 chart variables | Carried forward. |
| Sidebar tokens | Full sidebar palette | Carried forward. |

---

## 4. Package Structure

### 4.1 Decision: Single package

**`chunks-ui` is a single npm package.** Not a monorepo, not scoped.

Rationale:
- This is a personal library with one consumer (me).
- A monorepo adds turborepo config, workspace linking, cross-package types — overhead that pays off at scale, not for a personal kit.
- `@creation-ui/react` was a monorepo and the infra complexity was disproportionate to the value.
- A single package with tree-shaking (via `sideEffects: false` + ESM exports) achieves the same bundle size benefit.

### 4.2 Package details

```json
{
  "name": "chunks-ui",
  "version": "1.0.0",
  "type": "module",
  "sideEffects": false,
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./theme.css": "./dist/theme.css"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0"
  },
  "dependencies": {
    "@base-ui/react": "^1.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0"
  }
}
```

### 4.3 Directory structure

```
chunks-ui/
  src/
    components/
      button/
        button.tsx
        button.variants.ts
        index.ts
      tabs/
        tabs.tsx
        tabs-indicator.tsx
        tabs-content.tsx
        tabs.variants.ts
        index.ts
      ...
    lib/
      cn.ts              # clsx + tailwind-merge helper
      motion.ts           # Shared spring configs, transition presets
    theme.css             # CSS variables (imported by consumers)
    index.ts              # Barrel export
  tsconfig.json
  tsup.config.ts
  vitest.config.ts
  package.json
```

### 4.4 Build tooling

| Tool | Purpose |
|------|---------|
| **tsup** | Build ESM + CJS bundles, generate `.d.ts` |
| **Vitest** | Unit tests |
| **Playwright CT** | Visual regression tests (inherited pattern from Creation UI) |
| **Biome** | Linting + formatting (replaces ESLint + Prettier — single tool, faster) |
| **Bun** | Package manager + script runner |

### 4.5 Consuming the package

```tsx
// app/layout.tsx or global entry
import 'chunks-ui/theme.css'

// In components
import { Button, Tabs, Input } from 'chunks-ui'
```

The consumer's Tailwind CSS v4 config picks up the CSS variables from `theme.css` automatically — no `tailwind.config.ts` plugin needed.

---

## 5. Versioning Strategy

### 5.1 Version scheme

- **Start at `1.0.0`.** No 0.x games. The library is used in production from day one.
- **Semantic versioning** with Conventional Commits:
  - `fix:` → patch (1.0.x)
  - `feat:` → minor (1.x.0)
  - `BREAKING CHANGE:` → major (x.0.0) — **manually triggered only**

### 5.2 Release process

1. Feature branch → PR → merge to `main`
2. `bun run changeset` — author writes human-readable changeset
3. Changesets PR accumulates changes
4. When ready: merge Changesets PR → `bun run release` (build + `npm publish`)

### 5.3 Why not release-please

release-please auto-bumps majors from commit messages, which has caused version inflation in `@creation-ui/react` (currently v16+ for what should be v3). Changesets gives manual control: the author decides if a breaking change warrants a major bump or can be absorbed as a minor.

### 5.4 Git conventions

- Branch naming: `feat/component-name`, `fix/issue-description`
- Commit format: `type(scope): message` — e.g. `feat(tabs): add motion indicator animation`
- Tags: `v1.0.0`, `v1.1.0`, etc.

---

## 6. Animation System

### 6.1 Philosophy

Motion (framer-motion v11+ / motion.dev v12+) is a **peer dependency** and a **first-class design tool**. Animations are:
- Intentional (every animation has a purpose: orientation, feedback, continuity)
- Consistent (shared spring configs across all components)
- Opt-out friendly (components work without Motion installed, animations just don't run)

### 6.2 Motion as peer dependency

```json
"peerDependencies": {
  "motion": "^12.0.0"
}
"peerDependenciesMeta": {
  "motion": { "optional": true }
}
```

Components detect Motion availability at runtime. If absent, they render static equivalents — Base UI's headless behavior still works, only transitions are lost.

### 6.3 Shared spring presets

Defined in `src/lib/motion.ts`:

```ts
export const springs = {
  /** Indicator movement — bouncy, playful */
  indicator: { type: 'spring', stiffness: 300, damping: 32 },

  /** Content transitions — snappy, no overshoot */
  content: { type: 'spring', stiffness: 300, damping: 30, bounce: 0, restDelta: 0.01 },

  /** Enter/exit overlays — gentle fade */
  overlay: { type: 'spring', stiffness: 200, damping: 25 },

  /** Micro-interactions — fast response */
  micro: { type: 'spring', stiffness: 400, damping: 28 },
} as const
```

All components reference these presets. No magic numbers scattered across files.

### 6.4 Tabs — Reference implementation

Tabs is the most complex animated component and sets the pattern for everything else.

#### 6.4.1 Indicator animation

The active tab indicator slides between triggers, inspired by animate-ui's approach:

**Strategy:** All tab panels stay mounted. A single `motion.div` indicator animates between tabs by measuring trigger bounds and applying `animate={{ left, width }}` with the `indicator` spring.

```
┌─────────────────────────────────────────┐
│  [Tab 1]  [Tab 2]  [Tab 3]             │
│  ════════                               │  ← indicator slides
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Content slides L/R              │    │
│  │ (all panels mounted,            │    │
│  │  translateX animates)           │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

**Two complementary approaches are available:**

1. **Base UI's CSS approach (default):** Use `Tabs.Indicator` + its built-in CSS variables (`--active-tab-left`, `--active-tab-width`). Add a CSS `transition` and it works with zero JS animation overhead.

2. **Motion enhancement (opt-in):** Wrap the indicator in `motion.div` with the `indicator` spring. Provides springy physics that CSS `transition` can't replicate.

The component API supports both:

```tsx
<Tabs.Root>
  <Tabs.List>
    <Tabs.Tab value="a">Tab A</Tabs.Tab>
    <Tabs.Tab value="b">Tab B</Tabs.Tab>
    <Tabs.Indicator /> {/* CSS transition by default */}
  </Tabs.List>
  <Tabs.Panel value="a">...</Tabs.Panel>
  <Tabs.Panel value="b">...</Tabs.Panel>
</Tabs.Root>
```

#### 6.4.2 Content transition

Content uses the **mounted-slide pattern** from animate-ui:

1. All panels render simultaneously in a horizontal flex row (`overflow: hidden`)
2. A `motion.div` wrapper animates `x: -activeIndex * 100%` with the `content` spring
3. Inactive panels get `pointer-events: none` + `aria-hidden`
4. The container height animates to match the active panel (via `ResizeObserver`)

**Direction awareness:** Base UI's `data-activation-direction` attribute on `Tabs.Root` and `Tabs.Tab` provides left/right direction. This drives slide direction automatically.

#### 6.4.3 Degradation without Motion

If `motion` is not installed:
- Indicator uses CSS `transition: left 200ms, width 200ms` (Base UI's built-in CSS vars still work)
- Content swaps instantly (no slide, `display: none` on inactive panels)
- Fully functional, just not animated

### 6.5 Pattern for future animated components

Every animated component follows the same recipe:

| Step | Detail |
|------|--------|
| 1. Base UI primitive | Use the headless component for structure + a11y |
| 2. CSS fallback | Style with Tailwind. Add CSS transitions for basic animation. |
| 3. Motion enhancement | Wrap key elements in `motion.div`. Use presets from `springs`. |
| 4. `AnimatePresence` | For mount/unmount animations (dialogs, toasts, drawers). |
| 5. `useReducedMotion()` | Respect `prefers-reduced-motion`. Disable spring physics. |

**Planned Motion adoption by component:**

| Component | Animation type | Priority |
|-----------|---------------|----------|
| **Tabs** | Indicator slide + content slide | v1.0.0 |
| **Dialog** | Scale + fade enter/exit | v1.0.0 |
| **Drawer** | Slide from edge + overlay fade | v1.0.0 |
| **Popover** | Scale + fade with origin | v1.0.0 |
| **Tooltip** | Fade + slight translate | v1.0.0 |
| **Accordion** | Height collapse/expand | v1.1.0 |
| **Toast** | Slide-in + reorder layout | v1.1.0 |
| **Menu** | Scale + fade from trigger | v1.1.0 |

---

## 7. Migration Path from @creation-ui/react

### 7.1 Deprecation timeline

| Date | Action |
|------|--------|
| **v1.0.0 of chunks-ui** | Publish `@creation-ui/react` patch with deprecation notice in README + npm `deprecated` flag |
| **+3 months** | Archive `@creation-ui/react` GitHub repo |
| **+6 months** | Unpublish from npm (or let it sit deprecated) |

### 7.2 Key API differences

| Aspect | `@creation-ui/react` | `chunks-ui` |
|--------|---------------------|-------------|
| Headless layer | `@headlessui/react` | `@base-ui/react` |
| Composition | `forwardRef` + `memo` | Base UI `render` prop |
| Positioning | `@floating-ui/react` (direct) | Built into Base UI (internal) |
| Autocomplete | Custom (InputContainer + floating-ui + keyboard) | Base UI `Combobox` / `Autocomplete` |
| Animation | `@headlessui/react` Transition + CSS classes | Motion (`motion.div`, `AnimatePresence`) |
| Color tokens | Same OKLCH values | Same OKLCH values (compatible) |
| `Flex`, `Show`, `For` | Exported components | **Removed** — use JSX/Tailwind |
| `DarkModeToggle` | Component with react-spring | **Removed** — app-level |
| Import path | `import { X } from '@creation-ui/react'` | `import { X } from 'chunks-ui'` |

### 7.3 Migration recipe (per consuming project)

```bash
# 1. Install
bun add chunks-ui motion
bun remove @creation-ui/react @headlessui/react @floating-ui/react

# 2. Replace imports
# find & replace: '@creation-ui/react' → 'chunks-ui'

# 3. Replace removed components
# <Flex> → <div className="flex ...">
# <Show when={x}> → {x && ...}
# <For each={items}> → {items.map(...)}

# 4. Replace Autocomplete → Combobox
# Different API: Base UI compound components

# 5. Import theme CSS
# import 'chunks-ui/theme.css' in app entry
```

---

## 8. Repository Structure Decision

### Decision: Single repo, single package

**No monorepo.** No turborepo. No workspace protocol.

```
chunks-ui/           ← single git repo, single npm package
  src/
  dist/
  docs/              ← docs site lives here as a subdirectory (Next.js + Nextra)
  package.json
```

### Rationale

| Concern | Monorepo answer | Single-repo answer |
|---------|----------------|-------------------|
| Docs site | Separate `apps/docs` workspace | `docs/` subdirectory, deployed separately via Vercel |
| Shared configs | `packages/config-*` workspaces | `.config/` files in root — there's only one package to configure |
| Build orchestration | Turborepo `pipeline` | One `tsup` command. No orchestration needed. |
| Testing | Cross-workspace test runner | One Vitest config. |
| CI time | Turborepo cache | Single build ≈ 5 seconds. Cache is irrelevant. |

The docs site (`docs/`) has its own `package.json` and is deployed independently to `ui-kit.chunk-creations.com` via Vercel. It imports `chunks-ui` from the parent directory during development (symlink) and from npm in production.

---

## 9. Documentation Site

### Domain

`ui-kit.chunk-creations.com`

### Stack

- **Next.js 16** + **Nextra 4** (same stack as current Creation UI docs — proven, low-maintenance)
- Deployed on Vercel
- Component playground with live code (via Nextra's built-in MDX code blocks)

### Content structure

```
/                     → Overview + install
/components/button    → Per-component page: API, variants, examples
/components/tabs      → Animated demo is the hero
/theme                → Color system, CSS variables, customization
/migration            → Guide from @creation-ui/react
```

---

## 10. Appendix: Component Audit of @creation-ui/react

Full categorization of existing components from the source repository.

### A. Primitives (used by other components internally)

These are the foundation — they must be built first in any implementation order:

| Component | Internal consumers | Chunks equivalent |
|-----------|-------------------|-------------------|
| Button | — | Button |
| Input | DatePicker | Input |
| InputContainer | Input, Autocomplete | **Absorbed into Input** — not a separate export |
| Label | All form components via Field | Field (Base UI) |
| Field | All form components | Field (Base UI) |
| Description | All form components via Field | Field (Base UI) |
| Error | All form components via Field | Field (Base UI) |
| Checkbox | — | Checkbox |
| Radio | ToggleGroup | Radio |
| Switch | — | Switch |
| Textarea | — | Textarea |
| Icon | ClearButton, DropdownChevron, many others | **Removed** — users bring their own icon library |
| Loader | Button (loading state), LoadingOverlay | Loader |
| Overlay | Drawer, Modal, LoadingOverlay | **Absorbed** into Dialog/Drawer internals |
| TouchTarget | Button | **CSS utility** — not a component |
| ClearButton | Input, Autocomplete | ClearButton (exported) |
| DropdownChevron | Select, Autocomplete | **Internal-only** in Combobox/Select |

### B. Composed components (built on primitives)

| Component | Composition | Chunks equivalent |
|-----------|-------------|-------------------|
| Card | Custom compound component | Card |
| Chip | ClearButton + styling | Chip |
| Tooltip | Pure CSS | Tooltip (Base UI) |
| Modal | Headless UI Dialog + Overlay | Dialog (Base UI) |
| Drawer | Overlay + Headless Transition | Drawer (Base UI) |
| Popover | Floating UI context-based | Popover (Base UI) |
| Select | Context-based, floating-ui | Select (Base UI) |
| Autocomplete | InputContainer + floating-ui + keyboard | **Combobox** (Base UI) |
| Calendar | Context-based, 6+ internal components | Calendar (simplified) |
| DatePicker | Calendar + Input + Popover | DatePicker |
| ToggleGroup | RadioGroup + ToggleOption | Toggle Group (Base UI) |
| LoadingOverlay | Loader + Overlay | **Removed** — trivial composition |
| Highlighter | Pure text processing | **Removed** — app-level |
| Avatar | Image + fallback | Avatar (Base UI) |
| DarkModeToggle | react-spring animations | **Removed** — app-level |

### C. Removed — pure abstractions

| Component | What it wraps | Replacement |
|-----------|--------------|-------------|
| **Flex** | `<div style={{ display: 'flex' }}>` | `<div className="flex gap-4">` |
| **Show** | `{condition && children}` | `{condition && <X />}` |
| **For** | `items.map(renderFn)` | `{items.map(item => ...)}` |
| **Link** | Nothing — empty placeholder | Import from Next.js / React Router |

---

## 11. LLM-Friendliness: `llms.txt`

### 11.1 What and why

Base UI ships `base-ui.com/llms.txt` (summary) and `base-ui.com/llms-full.txt` (complete API reference) — machine-readable documentation designed for LLMs to consume in a single fetch. This is now an emerging standard ([llmstxt.org](https://llmstxt.org/)).

Chunks UI will ship the same:

| File | URL | Content |
|------|-----|---------|
| `llms.txt` | `ui-kit.chunk-creations.com/llms.txt` | Component list, install, import patterns, key conventions (~2k tokens) |
| `llms-full.txt` | `ui-kit.chunk-creations.com/llms-full.txt` | Full API: every component's props, variants, slots, examples (~10-15k tokens) |

### 11.2 What goes in `llms.txt`

```
# Chunks UI

Personal React component library built on Base UI + Tailwind CSS v4 + Motion.

## Install
npm i chunks-ui motion

## Import
import { Button, Tabs, Input } from 'chunks-ui'
import 'chunks-ui/theme.css'

## Components (20 core)
Button, Input, Textarea, Checkbox, Radio, Switch, Select, Combobox,
Tabs, Dialog, Drawer, Popover, Tooltip, Card, Avatar, Chip,
ClearButton, Loader, Separator, Field

## Styling
- CSS variables (shadcn convention): --primary, --destructive, --success, --warning
- Tailwind: bg-primary, text-destructive-foreground, etc.
- CVA for variants: color, size, variant props

## Animation
- Motion (peer dep) for springs: indicator slides, content transitions, enter/exit
- Works without Motion installed (CSS transition fallback)

## Base UI
Built on @base-ui/react. Compound component pattern:
<Tabs.Root> <Tabs.List> <Tabs.Tab /> <Tabs.Indicator /> </Tabs.List> <Tabs.Panel /> </Tabs.Root>
Composition via `render` prop (not asChild).
```

### 11.3 Why this matters for a personal library

Even though Chunks UI isn't for public adoption, the primary consumer **is** an LLM — Claude, Cursor, Copilot writing code in projects that use this library. The `llms.txt` is not documentation for humans who might adopt it. It's a context file for the AI coding assistants that will be asked to use it daily.

This also means:
- **Component APIs should be conventional.** If an LLM trained on shadcn/ui and Radix can guess the API, the design is right.
- **No clever abstractions.** `render` prop from Base UI is the most exotic pattern. Everything else is plain React.
- **Props over config objects.** `<Button color="primary" variant="outlined">` not `<Button config={{ color: 'primary', variant: 'outlined' }}>`.

---

## 12. Open Questions

1. ~~**Autocomplete vs Combobox:**~~ **RESOLVED.** Ship `Combobox` only in v1.0.0. Creation UI's "Autocomplete" is semantically a Combobox (must pick from list, multi-select with chips, `onCreate` = "creatable combobox"). Base UI's `Autocomplete` (free-form text + suggestions) is a search-box pattern — add in v1.x only if a concrete use case appears.

2. **Icon strategy:** With built-in Icon removed, should Chunks re-export a `type IconProps` to standardize how icon components are passed to Button/Input adornments? Or just accept `ReactNode`?

3. **Storybook:** Creation UI doesn't use it. Nextra docs with live examples might be enough. Worth adding Storybook for isolated component development?

4. **CSS-only vs Motion for Tabs indicator:** Base UI's `Tabs.Indicator` CSS variables are elegant and zero-JS. Is the Motion spring physics upgrade worth the complexity? (Recommendation: ship CSS by default, export a `MotionTabsIndicator` variant.)

5. **Sidebar tokens:** Carried forward from Creation UI. Are these actually used, or were they copied from shadcn boilerplate?

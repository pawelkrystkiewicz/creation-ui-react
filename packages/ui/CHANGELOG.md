# @creation-ui/react

## 15.2.3

### Patch Changes

- 🚀 Release v15.2.3

  ### Changes in this release:

  fix: Pass value prop to ToggleGroup (#132)

## 15.2.2

### Patch Changes

- Automated release based on commits:

  Merge branch 'master' of https://github.com/pawelkrystkiewicz/creation-ui-react

## 15.2.1

### Patch Changes

- Automated release based on commits:

  chore: Enhance GitHub Actions workflows with Slack notifications

## 15.2.0

### Minor Changes

- Fix: text color in Label component, add Card tests

## 15.1.2

### Patch Changes

- 8397e26: fix: Autocomplete was not respecting passed start adornemnt, change option selected styles to less jarring, fix docs 'multiple' example

## 15.1.1

### Patch Changes

- c5fca06: Fix module resolution by correcting package.json exports field to match actual build output files

## 15.1.0

### Minor Changes

- 74af897: Refactor Autocomplete and add it's docs. Remove InputBase in favor of InputContainer. Move styles from Headless.Input level to InputContainer.

## 15.0.1

### Patch Changes

- c77e25e: Fix npm content issue

## 0.0.0-dev-20250325121741

### Patch Changes

- 030e925: Fix which files are pushed to npm

## 0.0.0-dev-20250325114355

### Patch Changes

- 48a0cf6: Fix which files are pushed to npm

## 15.0.0

### Major Changes

- d26fbbb: ### 🚀 Major Updates
  - **Documentation engine upgraded to Nextra 4**
    The documentation site has been migrated to Nextra 4 for overall better developer experience.
  - **Tailwind CSS upgraded from v3 to v4**
    All components and styles are now built on Tailwind CSS v4, bringing improved performance, new design tokens, and future-proof foundations.

  ***

  ### 🔄 Component Changes
  - **Removed deprecated/legacy components:**
    - `box`,
    - `breadcrumbs`,
    - `buggy`,
    - `callout`,
    - `interactive-container`,
    - `progress-bar`,
    - `table`,
    - `time-picker`,
    - `time-selector`,
    - `transfer-list`,
    - `tree`,
    - `typography`,
    - `version`,
    - `menu`.

  - **Added new building blocks:**
    - `description`,
    - `error`,
    - `field`,
    - `highlighter`,
    - `hooks`,
    - `icon`,
    - `input-base`,
    - `label`,
    - `link`,
    - `touch-target`.

  > These changes reflect a move toward a more composable, flexible API for building UI with smaller, focused pieces.

  ***

  ### 📦 Dependency Updates
  - Support for **React 19** and updated peer dependencies.
  - Key upgrades:
    - `@floating-ui/react` → `0.27.4`
    - `@headlessui/react` → `2.2.0`
    - `clsx` → `2.1.1`
    - `react-spring` → `9.7.5`
    - `tailwind-merge` → `2.6.0`
  - Swapped `react-input-mask` for `@mona-health/react-input-mask` for better TypeScript support and maintenance.

  ***

  ### 🛠️ Tooling Improvements
  - Build system migrated from Rollup/SWC to **tsup** for faster, more reliable builds.
  - Cleaned up and modernized scripts and dev tooling.

  ***

  ### 🧹 Cleanup & Maintenance
  - Removed legacy utilities and large monolithic components.
  - Simplified and flattened export structure for consistency and ease of use.

  ***

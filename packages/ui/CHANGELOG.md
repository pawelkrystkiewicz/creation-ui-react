# @creation-ui/react

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

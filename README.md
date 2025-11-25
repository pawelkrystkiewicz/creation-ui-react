# Creation UI React

A modern, accessible, and customizable React component library built with Tailwind CSS v4. Creation UI provides a comprehensive set of components designed for building beautiful user interfaces with ease.

**Current Version:** `15.2.10`
**Package:** `@creation-ui/react`
**License:** MIT

## Features

- Tailwind CSS v4 Integration - Seamlessly works with your existing Tailwind setup
- Accessibility First - Built with WCAG guidelines in mind
- Customizable Theming - Easy to customize and extend
- Responsive Design - Mobile-first approach
- TypeScript Support - Full type safety out of the box
- React 16-19 Support - Compatible with all modern React versions

## Available Components

Autocomplete, Avatar, Button, Calendar, Card, Checkbox, Chip, ClearButton, DarkModeToggle, DatePicker, Description, Drawer, DropdownChevron, Error, Field, Flex, For, Highlighter, Icon, Input, InputContainer, Label, Link, Loader, LoadingOverlay, Modal, Overlay, Popover, Radio, Select, Show, Switch, Textarea, ToggleGroup, Tooltip, TouchTarget

## Prerequisites

Creation UI requires Tailwind CSS v4 to be installed in your project. Ensure you have the following peer dependencies:

```json
{
  "peerDependencies": {
    "@floating-ui/react": "^0.27.16",
    "@floating-ui/react-dom": "^2.1.6",
    "@headlessui/react": "^2.2.9",
    "@mona-health/react-input-mask": "^3.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "react": "^16 | ^17 | ^18 | ^19",
    "react-dom": "^16 | ^17 | ^18 | ^19",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1"
  }
}
```

## Installation

Install Creation UI using your preferred package manager:

```bash
# npm
npm install @creation-ui/react

# yarn
yarn add @creation-ui/react

# pnpm
pnpm add @creation-ui/react

# bun
bun add @creation-ui/react
```

## Quick Start

### 1. CSS Configuration

Add Creation UI styles to your main CSS file where you import Tailwind CSS v4:

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
@import 'tailwindcss';
@import '@creation-ui/react/index.css';
@import '@creation-ui/react/theme.css';

@source "../node_modules/@creation-ui/react/dist";

/* Customize theme variables as needed */
@theme {
  --font-sans: 'Manrope', 'sans-serif';
  --font-mono: 'Fira Code', 'monospace';
}

/* Dark theme support */
@variant dark (&:where(.dark, .dark *));
```

> **Note**: The `@source` directive tells Tailwind CSS to scan the Creation UI package for additional CSS classes.

### 2. Start Using Components

Import and use Creation UI components in your React application:

```jsx
import { Button } from '@creation-ui/react'

export default function App() {
  return (
    <div className="p-8">
      <Button variant="contained" size="lg">
        Get Started
      </Button>
    </div>
  )
}
```

## Customization

Creation UI is built to be highly customizable. You can extend the theme configuration using standard Tailwind CSS practices. For more detailed customization options, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration).

## Project Structure

This is a monorepo managed with Turborepo and Bun:

- `packages/ui` - Main `@creation-ui/react` package (published to npm)
- `apps/*` - Example applications and documentation
- `packages/*` - Internal packages (eslint-config, typescript-config)

## Development

```bash
bun install    # Install dependencies
bun dev        # Start development
bun run build  # Build all packages
```

### Testing

```bash
bun run test:unit           # Run unit tests
bun run test:unit:coverage  # Run with coverage
bun run test:visual         # Run visual regression tests
bun run test:visual:update  # Update visual snapshots
```

## Release Management

Uses [Changesets](https://github.com/changesets/changesets) for version management:

```bash
bun run changeset         # Create a changeset
bun run version-packages  # Update versions
bun run release           # Build and publish to npm
```

### Pre-release

```bash
bun run pre:enter    # Enter pre-release mode (next)
bun run version:dev  # Create dev snapshot
bun run release:dev  # Publish with dev tag
bun run pre:exit     # Exit pre-release mode
```

## CI/CD

- **Unit Tests**: Run on every push and PR
- **Visual Regression**: Validates UI components
- **Automated Releases**: Changesets creates release PRs, auto-publishes to npm on merge
- **Slack Notifications**: Test failures and release notifications

## Contributing

1. Create feature branch from `master`
2. Make changes, follow conventional commits
3. Create PR, ensure tests pass
4. Merge after approval

## License

MIT

# Creation UI React

A modern, accessible, and customizable React component library built with Tailwind CSS v4. Creation UI provides a comprehensive set of 20+ components designed for building beautiful user interfaces with ease.

[![npm version](https://img.shields.io/npm/v/@creation-ui/react.svg)](https://www.npmjs.com/package/@creation-ui/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2+-61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC)](https://tailwindcss.com/)

**Current Version:** `16.0.0`
**Package:** `@creation-ui/react`
**License:** MIT

## Features

- **Tailwind CSS v4 Integration** - Seamlessly works with your existing Tailwind setup
- **Accessibility First** - Built with WCAG guidelines in mind
- **Customizable Theming** - Easy to customize with CSS variables and Tailwind
- **Responsive Design** - Mobile-first approach
- **TypeScript Support** - Full type safety out of the box
- **React 19.2+ Support** - Built for the latest React features
- **Dark Mode** - Native dark mode support
- **Tree Shakeable** - Only import what you need
- **Micro-interactions** - Built-in transitions and animations

## Available Components

| Category | Components |
|----------|------------|
| **Inputs** | Autocomplete, Checkbox, DatePicker, Input, Radio, Select, Switch, Textarea, ToggleGroup |
| **Buttons** | Button, ClearButton, DarkModeToggle, TouchTarget |
| **Display** | Avatar, Calendar, Card, Chip, Icon, Loader, LoadingOverlay |
| **Feedback** | Description, Error, Label, Tooltip |
| **Overlays** | Drawer, Modal, Overlay, Popover |
| **Layout** | Field, Flex, InputContainer |
| **Navigation** | Link, DropdownChevron |
| **Utilities** | For, Show, Highlighter |

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2+ |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Build | tsup (ESM + CJS) |
| Testing | Vitest + Playwright CT |
| Animations | react-spring |
| Positioning | @floating-ui/react |
| Accessibility | @headlessui/react |

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

### Peer Dependencies

Creation UI requires the following peer dependencies:

```json
{
  "@floating-ui/react": "^0.27.16",
  "@floating-ui/react-dom": "^2.1.6",
  "@headlessui/react": "^2.2.9",
  "@mona-health/react-input-mask": "^3.0.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "react": "^19.2",
  "react-dom": "^19.2",
  "tailwind-merge": "^3.4.0",
  "tailwindcss": "^4.1.17"
}
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

```tsx
import { Button, Input, Card } from '@creation-ui/react'

export default function App() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <div className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button variant="contained" size="lg" className="w-full">
          Get Started
        </Button>
      </div>
    </Card>
  )
}
```

## Customization

Creation UI is built to be highly customizable. You can extend the theme configuration using standard Tailwind CSS practices:

```css
@theme {
  /* Override default colors */
  --color-primary-500: #your-color;

  /* Custom spacing */
  --spacing-custom: 1.5rem;

  /* Custom fonts */
  --font-sans: 'Your Font', sans-serif;
}
```

For more detailed customization options, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration).

## Project Structure

This is a monorepo managed with Turborepo and Bun:

```text
creation-ui-react/
├── packages/
│   ├── ui/                    # Main @creation-ui/react package
│   ├── eslint-config/         # Shared ESLint configuration
│   └── typescript-config/     # Shared TypeScript configuration
├── apps/
│   └── docs/                  # Documentation site (Next.js + Nextra)
└── scripts/                   # Utility scripts
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/pawelkrystkiewicz/creation-ui-react.git
cd creation-ui-react

# Install dependencies
bun install

# Start development
bun dev
```

### Available Scripts

```bash
bun install              # Install all dependencies
bun dev                  # Start development servers
bun run build            # Build all packages
bun run lint             # Lint all packages
bun run format           # Format code with Prettier
bun run clean            # Clean build artifacts
bun run nuke             # Deep clean (removes node_modules, dist)
```

### Testing

```bash
bun run test             # Run all tests
bun run test:unit        # Unit tests only
bun run test:unit:coverage  # Unit tests with coverage
bun run test:visual      # Visual regression tests
bun run test:visual:update  # Update visual snapshots
```

### Component Development

Generate a new component scaffold:

```bash
cd packages/ui
bun run init:component
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
bun run pre:enter    # Enter pre-release mode (next tag)
bun run version:dev  # Create dev snapshot
bun run release:dev  # Publish with dev tag
bun run pre:exit     # Exit pre-release mode
```

## CI/CD

| Workflow | Purpose |
|----------|---------|
| Unit Tests | Run on every push and PR |
| Visual Regression | Validates UI components visually |
| Automated Releases | Creates release PRs, auto-publishes to npm |
| Slack Notifications | Test failures and release notifications |

## Contributing

1. Fork the repository
2. Create a feature branch from `master`
3. Make changes following conventional commits
4. Run tests: `bun run test`
5. Create a PR and ensure all checks pass
6. Merge after approval

### Code Style

- Prettier for formatting (no semicolons, single quotes)
- ESLint with shared config
- TypeScript strict mode

## Browser Support

Creation UI supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Links

- [Documentation](https://creation-ui.com)
- [npm Package](https://www.npmjs.com/package/@creation-ui/react)
- [GitHub Repository](https://github.com/pawelkrystkiewicz/creation-ui-react)
- [Changelog](./CHANGELOG.md)

## License

MIT License © 2022-present [Pawel Krystkiewicz](https://github.com/pawelkrystkiewicz)

---

Made with love in Poland

# Creation UI

Creation UI is working with your app's Tailwind CSS and you need to have it installed in your project

```json
  "peerDependencies": {
    "@floating-ui/react": "^0.27.12",
    "@floating-ui/react-dom": "^2.1.3",
    "@headlessui/react": "^2.2",
    "@mona-health/react-input-mask": "^3.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2",
    "react": "^16 | ^17 | ^18 | ^19",
    "react-dom": "^16 | ^17 | ^18 | ^19",
    "tailwind-merge": "^2.6",
    "tailwindcss": "^4.1"
  },
```

## Installation

To install Creation UI, run command below:

> yarn add @creation-ui/react

> npm i @creation-ui/react

> pnpm i @creation-ui/react

> bun add @creation-ui/react

## Configuration

1. In your main .css file where you import tailwindcss v4, also import the creation ui css file.
   Don't forget to add `@source` to the path of the Creation UI package to let tailwindcss know where to also look for it's classes there.

```css copy
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
@import 'tailwindcss';
@import '@creation-ui/react/index.css';
@import '@creation-ui/react/theme.css';

@source "../node_modules/@creation-ui/react/dist";

/* you can extend tour theme config as needed */
@theme {
  --font-sans: 'Manrope', 'sans-serif';
  --font-mono: 'Fira Code', 'monospace';
}

/* use dark theme detection */
@variant dark (&:where(.dark, .dark *));

/* rest of your css */
/* ... */
```

You can extend all properties [as usual](https://tailwindcss.com/docs/configuration).

3. Start using it!

```jsx copy
import { Button } from '@creation-ui/react'

export default function App() {
  return <Button variant='contained'>Click me</Button>
}
```

## Development

To run it locally in dev mode:

> bun install && bun dev

Building:

> bun run build

## Package Versioning and Release Process

This project uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases.

### Creating a New Version

1. **Add a changeset** for your changes:
   ```bash
   bun run changeset
   ```
   This will prompt you to describe your changes and select the appropriate version bump (patch, minor, or major).

2. **Version packages** (updates package.json versions and generates CHANGELOG.md):
   ```bash
   bun run version-packages
   ```

3. **Publish to npm** (builds and publishes the package):
   ```bash
   bun run release
   ```

### Pre-release Versions

For beta/alpha releases:

1. **Enter pre-release mode**:
   ```bash
   bun run pre:enter
   ```

2. **Create development snapshots**:
   ```bash
   bun run version:dev
   bun run release:dev
   ```

3. **Exit pre-release mode** when ready:
   ```bash
   bun run pre:exit
   ```

### Automated Releases

The project uses GitHub Actions for automated releases:
- **Automatic releases**: When changes are pushed to `master`, the release workflow automatically creates a PR with version updates or publishes the package if changesets are ready.
- **Manual releases**: You can manually trigger releases using the available npm scripts.

### Available Scripts

- `bun run changeset` - Create a new changeset
- `bun run version-packages` - Update package versions based on changesets
- `bun run release` - Build and publish to npm
- `bun run pre:enter` - Enter pre-release mode
- `bun run pre:exit` - Exit pre-release mode
- `bun run version:dev` - Create development snapshot version
- `bun run release:dev` - Publish development snapshot

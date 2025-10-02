# Creation UI React

A modern, accessible, and customizable React component library built with Tailwind CSS v4. Creation UI provides a comprehensive set of components designed for building beautiful user interfaces with ease.

## Features

- 🎨 **Tailwind CSS v4 Integration** - Seamlessly works with your existing Tailwind setup
- ♿ **Accessibility First** - Built with WCAG guidelines in mind
- 🎭 **Customizable Theming** - Easy to customize and extend
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **TypeScript Support** - Full type safety out of the box
- 🔧 **Developer Experience** - Intuitive API and excellent documentation

## Prerequisites

Creation UI requires Tailwind CSS v4 to be installed in your project. Ensure you have the following peer dependencies:

```json
{
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

## Development

### Local Development

Start the development environment:

```bash
bun install && bun dev
```

Build the project:

```bash
bun run build
```

### Testing

Run unit tests:

```bash
bun run test:unit
```

Run unit tests with coverage:

```bash
bun run test:unit:coverage
```

Run visual regression tests:

```bash
bun run test:visual
```

Update visual regression test snapshots:

```bash
bun run test:visual:update
```

## Development Workflow

This project follows **trunk-based development** practices with automated CI/CD workflows.

### Contributing Guidelines

1. **Create a feature branch**:
   ```bash
   git checkout master
   git pull origin master
   git checkout -b feature/your-feature-name
   ```

2. **Make focused changes**:
   ```bash
   git add .
   git commit -m "feat: add new component feature"
   ```

3. **Create a Pull Request**:
   - Push your branch and create a PR to `master`
   - Keep PRs small and focused
   - All tests must pass before merging

4. **After approval**:
   ```bash
   git checkout master
   git pull origin master
   git branch -d feature/your-feature-name
   ```

### Best Practices

- **Short-lived branches** (1-2 days maximum)
- **Small, focused PRs** for easier review
- **Run tests locally** before pushing
- **Follow conventional commits** for automated versioning
- **Automated visual regression** test updates available via `bun run update-screenshots`

### Automated Workflows

The project includes several automated GitHub Actions workflows:

#### Continuous Integration

- **Unit Tests**: Automatically run on every push and PR
- **Visual Regression Tests**: Validate UI components haven't changed unexpectedly
- **Coverage Reports**: Generate and upload test coverage reports

#### Automated Releases

- **Changesets Integration**: Automatic version management and changelog generation
- **Semantic Versioning**: Based on conventional commit messages:
  - `feat!` or breaking changes → **major** version bump
  - `feat:` → **minor** version bump  
  - `fix:`, `docs:`, etc. → **patch** version bump
- **Release PRs**: Automatically created when changes are ready for release
- **NPM Publishing**: Automatic package publishing when release PRs are merged

#### Notifications

- **Slack Integration**: Real-time notifications for:
  - Test failures on master branch
  - Successful releases
  - Release PR creation

### Slack Notifications Setup

To enable Slack notifications for your development team:

1. **Create a Slack App** in your workspace
2. **Add Bot Token Scopes**: `chat:write`, `chat:write.public`
3. **Install the app** in your workspace
4. **Copy the Bot User OAuth Token** (starts with `xoxb-`)
5. **Add GitHub Secrets**:
   - `SLACK_BOT_TOKEN`: Your bot token
   - `SLACK_CHANNEL_ID`: The ID of your notification channel
6. **Find Channel ID**: Open channel → View details → Copy Channel ID

## Release Management

This project uses [Changesets](https://github.com/changesets/changesets) for automated version management and releases.

### Manual Release Process

1. **Add a changeset** for your changes:

   ```bash
   bun run changeset
   ```

   This will prompt you to describe your changes and select the appropriate version bump.

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

### Automated Release Workflow

The project uses GitHub Actions for fully automated releases:

- **Automatic changeset generation**: When no changeset exists, the system automatically generates one based on conventional commit messages
- **Release PR creation**: Automatically creates PRs with version updates and changelog
- **NPM publishing**: Automatic package publishing when release PRs are merged
- **Slack notifications**: Real-time updates about release status

All releases are triggered from the `master` branch following trunk-based development practices.

### Available Scripts

- `bun run changeset` - Create a new changeset
- `bun run version-packages` - Update package versions based on changesets
- `bun run release` - Build and publish to npm
- `bun run pre:enter` - Enter pre-release mode
- `bun run pre:exit` - Exit pre-release mode
- `bun run version:dev` - Create development snapshot version
- `bun run release:dev` - Publish development snapshot

## Contributing

We welcome contributions! Please read our development workflow section above and ensure all tests pass before submitting a PR.

## License

This project is licensed under the MIT License.

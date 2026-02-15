# Scripts

This directory contains utility scripts for the project.

## calculate-next-version.ts

Calculates the next semantic version based on changeset files. This script eliminates duplication in the GitHub Actions workflow by providing a single source of truth for version calculation logic.

### Usage

**JSON output (default):**

```bash
bun run version:next
# or directly:
bun run ./scripts/calculate-next-version.ts
```

Output:

```json
{
  "currentVersion": "16.0.0",
  "nextVersion": "16.1.0",
  "bumpType": "minor",
  "hasChangesets": true
}
```

**GitHub Actions output format:**

```bash
bun run ./scripts/calculate-next-version.ts github
```

Output:

```
current_version=16.0.0
next_version=16.1.0
bump_type=minor
has_changesets=true
```

### How it works

1. Reads the current version from `packages/ui/package.json`
2. Scans `.changeset/*.md` files (excluding README.md)
3. Determines the highest bump type:
   - `major` takes precedence over everything
   - `minor` takes precedence over `patch`
   - `patch` is the default
4. Calculates the next semantic version based on the bump type

### Testing

Run the test suite:

```bash
# From the monorepo root:
bun run test
# or directly:
bun test scripts/calculate-next-version.test.ts
```

### Local testing

To test the script with different scenarios:

1. **No changesets:**

   ```bash
   bun run version:next
   # Returns current version
   ```

2. **With patch changeset:**

   ```bash
   echo '---
   "@creation-ui/react": patch
   ---

   Fix something' > .changeset/test.md
   bun run version:next
   rm .changeset/test.md
   ```

3. **With minor changeset:**

   ```bash
   echo '---
   "@creation-ui/react": minor
   ---

   Add new feature' > .changeset/test.md
   bun run version:next
   rm .changeset/test.md
   ```

4. **With major changeset:**

   ```bash
   echo '---
   "@creation-ui/react": major
   ---

   Breaking change' > .changeset/test.md
   bun run version:next
   rm .changeset/test.md
   ```

### Integration with GitHub Actions

The script is used in [.github/workflows/release-changeset.yml](../.github/workflows/release-changeset.yml) to:

1. Calculate version information once
2. Use the calculated version for PR titles
3. Use the calculated version when generating automatic changesets

This approach:

- Eliminates code duplication
- Makes testing easier (can be tested locally)
- Provides consistent version calculation across the workflow
- Improves maintainability

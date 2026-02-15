---
description: Generate changelog from commits between two refs
---

Generate a human-readable changelog from git commits.

## Process

1. **Determine the range**
   - Ask user for: tag, branch, or commit range
   - Default: last tag to HEAD
   - Example: `v1.2.0..HEAD` or `main..HEAD`

2. **Get commits**

   ```bash
   git log <range> --pretty=format:"%h %s" --no-merges
   ```

3. **Categorize by type**
   - Parse conventional commit prefixes if used (feat, fix, chore, etc.)
   - Otherwise, categorize by analyzing the commit message

4. **Generate changelog**

## Output Format

```markdown
# Changelog

## [version] - YYYY-MM-DD

### Added

- New feature description (#PR)

### Changed

- Change description (#PR)

### Fixed

- Bug fix description (#PR)

### Removed

- Removed feature description (#PR)
```

## Categories

| Prefix   | Category         |
| -------- | ---------------- |
| feat     | Added            |
| fix      | Fixed            |
| docs     | Documentation    |
| refactor | Changed          |
| perf     | Performance      |
| test     | Testing          |
| chore    | Maintenance      |
| breaking | Breaking Changes |

## Guidelines

- Write for end users, not developers
- Group related changes
- Include PR/issue numbers when available
- Highlight breaking changes prominently
- Keep descriptions concise but meaningful

## Output

Save to `.claude/output/changelog-{date}.md`

---
description: Check for outdated or vulnerable dependencies
---

Audit project dependencies for updates and security issues.

## Process

1. **Detect package manager**
   - Check for `package-lock.json` (npm)
   - Check for `yarn.lock` (yarn)
   - Check for `pnpm-lock.yaml` (pnpm)
   - Check for `bun.lockb` (bun)

2. **Check for outdated packages**

   ```bash
   # npm
   npm outdated --json

   # yarn
   yarn outdated --json

   # pnpm
   pnpm outdated --format json
   ```

3. **Check for vulnerabilities**

   ```bash
   # npm
   npm audit --json

   # yarn
   yarn audit --json

   # pnpm
   pnpm audit --json
   ```

4. **Analyze and prioritize**

## Output Format

```markdown
## Dependency Report

### Security Issues

| Package | Severity | Vulnerability       | Fix                |
| ------- | -------- | ------------------- | ------------------ |
| lodash  | High     | Prototype pollution | Upgrade to 4.17.21 |

### Outdated Packages

#### Major Updates (Breaking)

| Package | Current | Latest | Changelog |
| ------- | ------- | ------ | --------- |

#### Minor/Patch Updates (Safe)

| Package | Current | Latest |
| ------- | ------- | ------ |

### Recommendations

1. [Priority fixes]
2. [Safe updates to batch]
3. [Major updates requiring migration]
```

## Guidelines

- Prioritize security vulnerabilities
- Distinguish between major (breaking) and minor/patch updates
- Note if packages are deprecated
- Check if major updates have migration guides
- Group related package updates (e.g., all React packages together)

## Output

Save to `.claude/output/deps-report-{date}.md`

---
description: Fix all type/lint errors in current file or staged changes
---

Quickly fix type errors, lint errors, and other static analysis issues.

## Process

1. **Identify scope**
   - Current file open in IDE, OR
   - All staged files (`git diff --cached --name-only`), OR
   - Ask user if unclear

2. **Run checks**

   ```bash
   # TypeScript
   npx tsc --noEmit 2>&1 | head -100

   # ESLint (if available)
   npx eslint . --format stylish 2>&1 | head -100
   ```

3. **Categorize issues**
   - Type errors
   - Lint errors (auto-fixable vs manual)
   - Formatting issues

4. **Fix in order**
   - Run auto-fixers first: `npx eslint --fix` / `npx prettier --write`
   - Then fix remaining issues manually
   - Re-run checks to verify

## Guidelines

- Fix the actual issue, don't just suppress with `// @ts-ignore`
- If a fix requires significant refactoring, ask first
- Group related fixes together
- Explain any non-obvious fixes

## Output

Report what was fixed:

```
Fixed 5 issues:
- src/utils.ts:12 - Added missing return type
- src/utils.ts:24 - Fixed unused variable (removed)
- src/api.ts:8 - Added null check
- src/api.ts:15-17 - Fixed Promise<void> return type
- src/api.ts:30 - Replaced 'any' with proper type
```

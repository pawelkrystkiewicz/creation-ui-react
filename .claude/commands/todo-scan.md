---
description: Find all TODOs, FIXMEs, and HACKs with context
---

Scan the codebase for TODO comments and technical debt markers.

## Process

1. **Search for markers**

   ```bash
   # Common patterns
   grep -rn "TODO\|FIXME\|HACK\|XXX\|BUG\|OPTIMIZE" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.py" --include="*.go" --include="*.rs" .
   ```

2. **Parse and categorize**
   - Extract file, line number, and context
   - Categorize by type (TODO, FIXME, HACK, etc.)
   - Check git blame for age and author

3. **Prioritize**
   - FIXMEs and BUGs are higher priority than TODOs
   - Older items may be stale or forgotten
   - Items in critical paths need attention

## Output Format

```markdown
## Technical Debt Report

**Total:** X items found

### Critical (FIXME, BUG)

| File       | Line | Age | Author | Note                          |
| ---------- | ---- | --- | ------ | ----------------------------- |
| src/api.ts | 45   | 3mo | @dev   | FIXME: Race condition in auth |

### Action Items (TODO)

| File         | Line | Age | Note                       |
| ------------ | ---- | --- | -------------------------- |
| src/utils.ts | 12   | 1mo | TODO: Add input validation |

### Tech Debt (HACK, XXX)

| File          | Line | Age | Note                         |
| ------------- | ---- | --- | ---------------------------- |
| src/legacy.ts | 89   | 6mo | HACK: Workaround for API bug |

### Summary by Area

- `src/api/` - 5 items
- `src/components/` - 3 items
- `src/utils/` - 2 items
```

## Marker Meanings

| Marker   | Meaning                         |
| -------- | ------------------------------- |
| TODO     | Task to be done                 |
| FIXME    | Known bug or issue              |
| HACK     | Temporary workaround            |
| XXX      | Dangerous or requires attention |
| BUG      | Known bug                       |
| OPTIMIZE | Performance improvement needed  |

## Guidelines

- Show enough context to understand the issue
- Include age to identify stale items
- Group by severity and area
- Suggest which items to tackle first

## Output

Save to `.claude/output/todo-scan-{date}.md`

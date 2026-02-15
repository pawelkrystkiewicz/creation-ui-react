---
description: TL;DR summary of what a branch does
---

Provide a quick summary of what a branch contains - useful for reviewing others' work or catching up.

## Process

1. **Get branch info**
   - Use current branch, or ask for branch name

   ```bash
   git log main..<branch> --oneline
   git diff main..<branch> --stat
   ```

2. **Analyze the changes**

   ```bash
   git diff main..<branch>
   ```

3. **Generate summary**

## Output Format

```markdown
## Branch: <branch-name>

**Purpose:** [One sentence describing the goal]

**Commits:** X commits ahead of main

### What changed

- [Key change 1]
- [Key change 2]
- [Key change 3]

### Files affected

- X files changed
- Key areas: [list main directories/modules touched]

### Notable

- [Any breaking changes]
- [New dependencies added]
- [Migrations or schema changes]
- [Environment variables added]

### Status

- [ ] Tests passing
- [ ] Ready for review
- [ ] Has conflicts with main
```

## Guidelines

- Focus on the "what" and "why", not line-by-line details
- Highlight anything that needs attention (breaking changes, migrations)
- Note if tests are included
- Keep it scannable - bullet points over paragraphs

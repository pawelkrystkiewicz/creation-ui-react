---
description: Analyze and address unresolved PR feedback comments
---

Analyze unresolved PR review comments and create an action plan to address them.

## Steps

### 1. Check if PR exists for current branch

```bash
gh pr view --json number,title,state --jq '"\(.number): \(.title) [\(.state)]"'
```

If no PR exists, inform the user and stop.

### 2. Get all unresolved review comments

First get the repo info:

```bash
REPO=$(gh repo view --json nameWithOwner --jq '.nameWithOwner')
PR_NUMBER=$(gh pr view --json number --jq '.number')
```

Fetch inline review comments:

```bash
gh api repos/$REPO/pulls/$PR_NUMBER/comments --jq '.[] | "### \(.path):\(.line // .original_line // .position)\n**Author:** \(.user.login)\n**Status:** \(if .in_reply_to_id then "reply" else "comment" end)\n**Comment ID:** \(.id)\n\n\(.body)\n\n---"'
```

Also check for general PR comments:

```bash
gh pr view --comments
```

### 3. Analyze validity of each comment

For each comment found:

1. Read the referenced file and line to understand the context
2. Evaluate if the feedback is:
   - **Valid**: The issue exists and should be fixed
   - **Partially valid**: Has merit but implementation suggestion may differ
   - **Not applicable**: Based on misunderstanding or outdated code
3. Consider the severity (bug, type safety, best practice, style)

### 4. Create action plan

Organize findings into a structured plan:

```markdown
## PR Feedback Analysis - PR #[number]

### Summary

- Total comments: X
- Valid issues to address: Y
- Clarifications needed: Z

### Action Items

#### High Priority (bugs, type safety)

1. [File:Line] - Issue description - Proposed fix

#### Medium Priority (best practices, improvements)

1. [File:Line] - Issue description - Proposed fix

#### Low Priority / Discussion Needed

1. [File:Line] - Issue description - Why it needs discussion

### Comments to Respond To

- [Comment] - Suggested response
```

### 5. Present plan to user

Display the analysis and wait for user approval before making any changes.

Ask: "Would you like me to address these items? You can say:

- 'all' to fix everything
- 'high' for high priority only
- specific numbers like '1, 3, 5'
- 'none' to just respond to comments"

## Output

Save the analysis to `.claude/output/pr-feedback-{branch-name}.md`

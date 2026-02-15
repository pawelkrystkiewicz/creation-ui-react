---
description: Generate a PR description for current branch changes
---

Analyze the changes on the current branch and create a short, concise PR description for GitHub.

Follow this format:

## [Brief title describing the main change]

[1-2 sentences summary of what this PR does]

### Changes

- Focus on user-facing changes and key technical improvements
- Keep it concise and scannable

Requirements:

1. Run `git diff master...HEAD --stat` and `git log master..HEAD` to understand changes
2. Run `git diff master...HEAD` to see detailed changes
3. Analyze the actual code changes, not just commit messages
4. Keep the description short and focused
5. Provide the output in a github markdown

## Output

The output should be professional, concise, and ready to paste into GitHub PR description.
Save it to .claude/output/pr-description-{branch-name}.md

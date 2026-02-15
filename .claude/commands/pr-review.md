Review the changes on the current branch compared to the main branch.

1. First, get the diff of all changes: `git diff master...HEAD`
2. Also check the commit history: `git log master..HEAD --oneline`

Code Reviews rules are stored in `.claude/utils/code-review-guidelines.md`

Save the analysis to `.claude/output/pr-review-{branch-name}.md`

If there are any inline comments publish them in appropriate places on PR at Github/Gitlab.

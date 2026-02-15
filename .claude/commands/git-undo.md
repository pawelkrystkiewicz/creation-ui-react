---
description: Safely undo last git operation with explanation
---

Help safely undo the last git operation.

## Process

1. **Understand current state**

   ```bash
   git status
   git log --oneline -5
   git reflog -10
   ```

2. **Identify what to undo**
   - Last commit?
   - Staged changes?
   - A merge?
   - A rebase?
   - Accidentally deleted branch?

3. **Explain what happened**
   - Show the user what the last operation did
   - Explain the consequences of undoing it

4. **Propose the safest undo**

## Common Undo Operations

| Situation                               | Command                          |
| --------------------------------------- | -------------------------------- |
| Undo last commit, keep changes staged   | `git reset --soft HEAD~1`        |
| Undo last commit, keep changes unstaged | `git reset HEAD~1`               |
| Undo last commit completely             | `git reset --hard HEAD~1`        |
| Unstage files                           | `git reset HEAD <file>`          |
| Discard changes in file                 | `git checkout -- <file>`         |
| Undo a merge (not pushed)               | `git reset --hard ORIG_HEAD`     |
| Recover deleted branch                  | `git checkout -b <branch> <sha>` |
| Undo rebase                             | `git reset --hard ORIG_HEAD`     |

## Safety Rules

- **Never** use `--hard` without confirming with user
- **Never** force push without explicit permission
- Always show what will be affected before executing
- For pushed commits, prefer `git revert` over `reset`

## Output

1. Explain what happened
2. Show what the undo will do
3. Ask for confirmation
4. Execute and verify

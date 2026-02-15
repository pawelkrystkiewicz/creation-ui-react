# Fetch Clean Branch from Origin

Removes local branch if it exists and fetches a fresh copy from origin.

## Usage

When you need to:

- Get a clean version of a colleague's branch for review
- Reset a branch that has too many conflicts
- Start fresh with the latest version from GitHub

## Process

1. **Ask for branch name** - Get the branch name from the user (or use current branch if user says "current" or "this one")

2. **Switch to master** (if currently on the target branch)

   ```bash
   git checkout master
   ```

3. **Delete local branch** (force delete to ignore unmerged changes)

   ```bash
   git branch -D <branch-name>
   ```

4. **Fetch fresh branch from origin**

   ```bash
   git fetch origin <branch-name>:<branch-name>
   ```

5. **Checkout the fresh branch**

   ```bash
   git checkout <branch-name>
   ```

6. **Confirm success** - Show git status and let user know the branch is clean

## Example

```
User: "Get me a clean version of feat/new-plums"
```

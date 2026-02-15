#!/bin/bash

# Fetch Clean Branch from Origin
# Usage: ./fetch-clean-branch.sh <branch-name>
# Example: ./fetch-clean-branch.sh feat/new-plums

set -e  # Exit on error

BRANCH_NAME=$1

if [ -z "$BRANCH_NAME" ]; then
    echo "Error: Branch name is required"
    echo "Usage: ./fetch-clean-branch.sh <branch-name>"
    echo "Example: ./fetch-clean-branch.sh feat/new-plums"
    exit 1
fi

echo "đ Fetching clean branch: $BRANCH_NAME"
echo ""

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

# If we're on the target branch, switch to master first
if [ "$CURRENT_BRANCH" = "$BRANCH_NAME" ]; then
    echo "Switching from $BRANCH_NAME to master..."
    git checkout master
    echo ""
fi

# Check if branch exists locally
if git show-ref --verify --quiet refs/heads/$BRANCH_NAME; then
    echo "Deleting local branch: $BRANCH_NAME"
    git branch -D $BRANCH_NAME
    echo ""
fi

# Fetch fresh branch from origin
echo "Fetching fresh branch from origin..."
git fetch origin $BRANCH_NAME:$BRANCH_NAME
echo ""

# Checkout the fresh branch
echo "Checking out clean branch: $BRANCH_NAME"
git checkout $BRANCH_NAME
echo ""

# Show status
echo "Branch status:"
git status

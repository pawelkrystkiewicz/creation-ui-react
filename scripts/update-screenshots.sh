#!/bin/bash

# Script to trigger the "Update Visual Regression Screenshots" workflow
# Usage: ./scripts/update-screenshots.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Update Visual Regression Screenshots${NC}"
echo "==============================================="

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) is not installed${NC}"
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    echo -e "${RED}❌ This is not a git repository${NC}"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

if [ -z "$CURRENT_BRANCH" ]; then
    echo -e "${RED}❌ Could not determine current branch${NC}"
    exit 1
fi

echo -e "${YELLOW}Current branch: ${CURRENT_BRANCH}${NC}"
echo ""

# Ask for branch to run on
read -p "Enter branch name (default: ${CURRENT_BRANCH}): " TARGET_BRANCH

# Use current branch if no input provided
if [ -z "$TARGET_BRANCH" ]; then
    TARGET_BRANCH="$CURRENT_BRANCH"
fi

echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo "  Workflow: Update Visual Regression Screenshots"
echo "  Branch: ${TARGET_BRANCH}"
echo ""

# Confirm before running
read -p "Do you want to proceed? (y/N): " CONFIRM

if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}❌ Cancelled${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}🔄 Triggering workflow...${NC}"

# Trigger the workflow
if gh workflow run "Update Visual Regression Screenshots" --ref "$TARGET_BRANCH"; then
    echo -e "${GREEN}✅ Workflow triggered successfully!${NC}"
    echo ""
    echo -e "${BLUE}📊 You can monitor the progress at:${NC}"
    echo "https://github.com/$(gh repo view --json owner,name -q '.owner.login + "/" + .name')/actions"
    echo ""
    echo -e "${BLUE}💡 Or use: ${YELLOW}gh run list --workflow=\"Update Visual Regression Screenshots\"${NC}"
else
    echo -e "${RED}❌ Failed to trigger workflow${NC}"
    exit 1
fi

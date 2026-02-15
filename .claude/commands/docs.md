# Documentation Update

Update project documentation to reflect the current state of the codebase.

## Scope

Analyze and update the following documentation files:

1. **README.md** - Project overview, getting started, API reference
2. **DOCS.md** - Detailed API documentation
3. **docs/**/\*.md\*\* - All markdown files in the docs directory
4. **CLAUDE.md** - Development instructions (structure, commands, key files)

## Process

### 1. Analyze Current State

- Review recent git changes: `git diff --name-only HEAD~10` to identify modified files
- Check `git status` for uncommitted changes
- Scan the codebase for new features, modules, or API endpoints
- Identify any removed or deprecated functionality

### 2. Cross-Reference Documentation

For each documentation file, verify:

- **Accuracy**: Do code examples match actual implementation?
- **Completeness**: Are all public APIs, types, and features documented?
- **Consistency**: Do different docs describe the same features consistently?
- **Structure**: Does the monorepo structure in docs match actual `apps/` and `packages/`?

### 3. Update Priority Areas

Focus on these high-impact sections:

- **API endpoints and GraphQL operations** - New queries, mutations, types
- **Database schema changes** - New tables, columns, relationships
- **Environment variables** - New or changed configuration
- **Commands** - New scripts in package.json
- **Dependencies** - Major version changes or new packages
- **Project structure** - New apps, packages, or significant reorganization

### 4. Quality Standards

- Keep language concise and technical
- Use consistent formatting (tables, code blocks, headers)
- Include practical examples where helpful
- Maintain existing document structure unless reorganization is needed
- Remove outdated information rather than leaving it marked as deprecated

## Output

For each file that needs updates:

1. List the specific changes made
2. Highlight any sections that need human review (e.g., business logic decisions)
3. Flag any inconsistencies found between documentation files

## Notes

- Do not add documentation for internal/private APIs unless explicitly requested
- Preserve existing writing style and tone of each document
- When in doubt about a feature's behavior, check the source code first

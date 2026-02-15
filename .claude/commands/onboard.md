---
description: Quick codebase overview for starting fresh context
---

Provide a quick orientation to the codebase - useful when starting a new session or joining a project.

## Process

1. **Gather project info**

   ```bash
   # Project structure
   ls -la

   # Check for common config files
   ls package.json tsconfig.json .env.example CLAUDE.md README.md 2>/dev/null

   # Git info
   git remote -v
   git branch -a
   ```

2. **Read key files**
   - `README.md` - Project overview
   - `CLAUDE.md` - Development instructions (if exists)
   - `package.json` - Dependencies and scripts
   - `.env.example` - Required environment variables

3. **Analyze structure**
   - Identify the framework/stack
   - Map out the directory structure
   - Note key entry points

## Output Format

```markdown
## Project: <name>

**Stack:** [e.g., Next.js 14 + TypeScript + Prisma + PostgreSQL]

### Structure
```

src/
├── app/ # Next.js app router pages
├── components/ # React components
├── lib/ # Utilities and helpers
└── server/ # API and database logic

```

### Key Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm test` | Run tests |

### Entry Points
- **App:** `src/app/page.tsx`
- **API:** `src/app/api/`
- **Database:** `prisma/schema.prisma`

### Environment
Required variables: `DATABASE_URL`, `API_KEY`, ...

### Notes
- [Any gotchas or important conventions]
- [Links to relevant docs]
```

## Guidelines

- Keep it scannable - this is a quick reference
- Focus on what's needed to start working
- Note anything unusual or non-standard
- Include the most common commands

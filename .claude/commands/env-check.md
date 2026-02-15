---
description: Compare .env.example with actual .env for missing variables
---

Check for missing or extra environment variables by comparing `.env.example` with `.env`.

## Process

1. **Find env files**

   ```bash
   ls -la .env* 2>/dev/null
   ```

2. **Compare files**
   - Read `.env.example` (the template)
   - Read `.env` (actual values)
   - Compare variable names (not values)

3. **Check for issues**
   - Missing in `.env` but in `.env.example`
   - Extra in `.env` but not in `.env.example`
   - Empty values that shouldn't be empty

## Output Format

```markdown
## Environment Check

### Missing Variables

These are in `.env.example` but missing from `.env`:

- `DATABASE_URL` - Required for database connection
- `API_SECRET` - Required for authentication

### Extra Variables

These are in `.env` but not documented in `.env.example`:

- `DEBUG_MODE` - Consider adding to .env.example
- `LEGACY_API_KEY` - May be obsolete?

### Empty Values

These variables are defined but empty:

- `SMTP_PASSWORD` - Might cause email failures

### Status: ⚠️ Issues Found / ✅ All Good
```

## Multiple Environments

If multiple env files exist, check all:

- `.env.local`
- `.env.development`
- `.env.production`
- `.env.test`

## Guidelines

- Never display actual secret values
- Suggest which variables are critical vs optional
- Note if `.env.example` itself is missing
- Check for common typos in variable names

## Security Note

This command reads env files but **never logs or displays actual values** - only variable names.

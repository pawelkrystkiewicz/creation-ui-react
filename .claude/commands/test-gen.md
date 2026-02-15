---
description: Generate unit tests for a file or function
---

Generate comprehensive unit tests for the specified code.

## Process

1. **Identify the target**
   - Selected code/function in IDE
   - Entire file if no selection
   - Ask user if unclear

2. **Analyze the code**
   - Understand inputs, outputs, and side effects
   - Identify edge cases and error conditions
   - Check existing test patterns in the codebase

3. **Find existing test conventions**
   - Look for existing test files: `*.test.ts`, `*.spec.ts`, `__tests__/`
   - Match the testing framework (Jest, Vitest, Mocha, etc.)
   - Follow existing naming and structure conventions

4. **Generate tests**

## Test Coverage

Include tests for:

- **Happy path** - Normal expected usage
- **Edge cases** - Empty inputs, boundary values, null/undefined
- **Error cases** - Invalid inputs, thrown errors
- **Async behavior** - If applicable (promises, callbacks)

## Output

Write tests to the appropriate location based on project conventions:

- `src/foo.ts` → `src/foo.test.ts` or `src/__tests__/foo.test.ts`

## Guidelines

- Use descriptive test names: `it('should return empty array when input is null')`
- One assertion per test when practical
- Mock external dependencies
- Don't test implementation details, test behavior
- Keep tests independent - no shared mutable state

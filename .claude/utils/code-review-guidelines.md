# Code Review Guidelines

For each changed file, analyze:

- Purpose: What is this change trying to accomplish?
- Quality: Is the code well-written, readable, and maintainable?
- Potential issues: Are there any bugs, edge cases, or security concerns?
- Best practices: Does it follow the project's coding standards and patterns?
- Tests: Are changes adequately tested?

Provide a summary with:

- Overview of all changes
- List of any concerns or suggestions
- Overall assessment (ready to merge / needs changes)

## Actionable Comments

After the summary, generate a list of copy-paste ready GitHub comments for each issue found. Format each comment as:

- filename.tsx
- Line X-Y:
  ⚠️ readability, naming
- The actual comment text that can be copied directly to GitHub PR review.

Each comment should be:

- Start with relevant category tags (e.g., ⚠️ readability, naming)
- Specific about the file and line number(s)
- Actionable (explain what should be changed)
- Professional and constructive
- Ready to copy-paste into GitHub's PR review interface

## Review Categories

Tag each issue with one or more relevant categories:

Core Quality:

- ⚠️ readability: code clarity and understandability
- ⚠️ maintainability: ease of maintenance and modification
- ⚠️ testability: ease of testing

Security & Stability:

- 🔒 security - security vulnerabilities (XSS, injection, etc.)
- 🐛 bug - potential bugs or incorrect behavior
- 💥 breaking-change - backward compatibility issues
- ⚡ error-handling - missing or improper error handling

Performance:

- 🚀 performance - performance concerns
- 💾 memory-leak - potential memory leaks
- 🔄 unnecessary-rerender - unnecessary re-renders (React)

Architecture & Design:

- 🏗️ architecture - architectural concerns
- 🔧 refactoring-needed - code needs refactoring
- 📦 coupling - tight coupling between modules
- 🎯 separation-of-concerns - poor separation of responsibilities
- 🔁 duplication - code duplication (DRY principle)

Documentation & Conventions:

- 📝 documentation - missing or inadequate documentation
- 🎨 code-style - inconsistent code style
- 🏷️ naming - poor naming conventions
- ✅ types - TypeScript typing issues

Testing:

- 🧪 missing-tests - lack of tests
- 🔍 test-coverage - insufficient test coverage
- 🎭 test-quality - poor test quality

Other:

- ❓ question - needs clarification
- 💡 suggestion - non-critical improvement suggestion
- 🚨 critical - requires immediate attention
- ⏰ tech-debt - technical debt to address later
- ♿ accessibility - accessibility issues (a11y)
- 📱 responsive - responsiveness issues
- 🌍 i18n - internationalization issues

Frontend-Specific:

- ⚛️ react-patterns - incorrect React patterns
- 🎣 hooks - improper hook usage
- 🎨 styling - styling concerns
- 🔌 dependency - dependency management issues

# To-Do List

- [ ] Extract core logic to `use-autocomplete-core.ts` and write unit tests for it
- [ ] Refactor view components to be pure and context-free where possible
- [ ] Minimize and document context usage
- [ ] Move all utility logic to `/utils` and add tests
- [ ] Update types and documentation
- [ ] Add/expand tests for all new abstractions

---

# Autocomplete Refactor Proposal

## Goals
- Improve maintainability and readability
- Increase testability (logic vs. UI separation)
- Enable easier future feature additions and bug fixes
- Reduce coupling between logic, context, and view

---

## Current Structure
- **controller/autocomplete.tsx**: Contains all state, logic, and context provider for the feature.
- **view/autocomplete.view.tsx**: Handles rendering, but tightly coupled to context.
- **utils/**: Contains some helpers (filtering, equality, rendering), but some logic is still in the controller.
- **context.ts**: Provides context for the view, but context value is large and complex.
- **types.ts**: Well-typed, but some types could be more granular.

---

## Problems Identified
- **Monolithic controller**: All state, filtering, selection, and event logic is in one large component.
- **Context bloat**: Context provides a huge object, making it hard to reason about what is needed where.
- **Logic/UI coupling**: Filtering, selection, and input logic are mixed with rendering and context wiring.
- **Difficult to test**: Most logic is only testable via integration tests, not unit tests.
- **Custom rendering is context-dependent**: Custom renderers (option, selection) require context, making them hard to test in isolation.

---

## Refactor Plan

### 1. **Extract Core Logic to Pure Hooks**
- Create `useAutocompleteCore` (or similar) hook:
  - Handles all state, filtering, selection, and input logic.
  - Returns only data and callbacks, no JSX or context.
  - Easy to unit test.
- Example:
  ```ts
  const {
    inputValue, setInputValue,
    filteredOptions,
    isOpen, setOpen,
    selectOption, removeOption,
    ...
  } = useAutocompleteCore(props)
  ```

### 2. **Minimize Context**
- Only expose what is truly needed for deeply nested children (e.g., option selection, tags removal).
- Consider splitting context: one for state, one for actions, or use a reducer pattern.
- Document context shape clearly.

### 3. **Separate View Components**
- Make `AutocompleteView`, `MultipleSelections`, etc. pure presentational components.
- Pass all data and callbacks as props, not via context.
- Only the top-level `Autocomplete` wires up context if needed.

### 4. **Abstract Option/Selection Rendering**
- Move default renderers (`_renderOption`, `_renderSelection`) to a separate file.
- Allow custom renderers to be passed as props, with minimal context dependency.
- Provide utility hooks for custom renderers if needed (e.g., `useAutocompleteOptionProps`).

### 5. **Move Filtering/Equality to Standalone Utilities**
- Ensure all filtering, equality, and normalization logic is in `/utils` and fully unit tested.
- Make these utilities pure and context-free.

### 6. **Improve Types**
- Split large types into smaller, more focused interfaces.
- Document all public types and props.

### 7. **Testing**
- Add unit tests for all hooks and utilities.
- Keep integration tests for the full component, but rely on unit tests for logic.

---

## Suggested New Structure

```
/autocomplete
  /controller
    autocomplete.tsx         # Top-level component, wires up everything
    use-autocomplete-core.ts # Pure logic hook (new)
  /view
    autocomplete.view.tsx    # Pure presentational
    multiple-selections.view.tsx
  /utils
    filter-options.ts        # Filtering logic
    is-equal-to-value.ts     # Equality logic
    render-option.tsx        # Default option renderer
    render-selection.tsx     # Default selection renderer
    ...
  context.ts                # (Minimized) context
  types.ts                  # Improved types
  REFACTOR.md               # This file
```

---

## Migration Steps
1. Extract core logic to `use-autocomplete-core.ts` and write unit tests for it.
2. Refactor view components to be pure and context-free where possible.
3. Minimize and document context usage.
4. Move all utility logic to `/utils` and add tests.
5. Update types and documentation.
6. Add/expand tests for all new abstractions.

---

## Benefits
- **Easier to test**: Logic is decoupled from UI and context.
- **Easier to maintain**: Smaller, focused files and components.
- **Easier to extend**: New features (async, virtualization, etc.) can be added to the core logic without touching UI.
- **Cleaner API**: Consumers can use custom renderers and logic more easily.

---

## Open Questions
- Should async options (remote search) be supported in core logic?
- Should context be split further (state vs. actions)?
- Should we provide a headless version for advanced consumers?

---

*Prepared by AI code review, 2024-06-10*
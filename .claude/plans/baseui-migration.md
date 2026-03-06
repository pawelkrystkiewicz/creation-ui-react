# Base UI Migration Plan

> **Branch:** `refactor/baseui-migration`
> **PR:** [#240](https://github.com/pawelkrystkiewicz/creation-ui-react/pull/240)
> **Goal:** Migrate `@creation-ui/react` from `@headlessui/react` + `@floating-ui/react` to `@base-ui/react` and native HTML elements
> **Release target:** Minor version (zero breaking changes to public component interfaces)

---

## Motivation

- **Consolidate dependencies**: Replace two peer deps (`@headlessui/react` ~10 components, `@floating-ui/react`) with one (`@base-ui/react` 35+ components, uses Floating UI internally)
- **Better maintained base**: Base UI built by ex-Radix team at MUI, actively developed, stable v1.2.0
- **Simplify where possible**: Use native HTML elements for trivial wrappers (Label, Description, Error)
- **Radix UI explicitly excluded**: Not considered for this migration

---

## Phase Plan

### Phase 1 -- Core primitives (COMMITTED)

| Component | Migration |
|-----------|-----------|
| **Link** | HeadlessUI removed, native `<a>` |
| **Radio** | `RadioGroup.Radio` -> `Radio.Root` + `Radio.Indicator` |
| **RadioGroup** | `RadioGroup` -> `RadioGroup.Root` |
| **Overlay** | `Transition` -> CSS transitions with `data-open:` |
| **Button** | Minor cleanup (was mostly native already) |
| **Input** | Removed HeadlessUI `Input`, native `<input>` |
| **ToggleGroup** | Custom implementation (no HeadlessUI equivalent used) |
| **ToggleOption** | Custom implementation |

**Commit:** `8a660342` -- "refactor: migrate core components from Headless UI to Base UI + native elements"

### Phase 2 -- Form components (COMMITTED)

| Component | Migration |
|-----------|-----------|
| **Field** | `Field` -> `Field.Root` from Base UI |
| **Label** | HeadlessUI `Label` -> native `<label>` |
| **Description** | HeadlessUI `Description` -> native `<p>` |
| **Error** | HeadlessUI `Description` -> native `<p>` |
| **Textarea** | HeadlessUI `Textarea` -> native `<textarea>` |
| **Checkbox** | `Checkbox` -> `Checkbox.Root` + `Checkbox.Indicator` |
| **Switch** | `Switch` -> `Switch.Root` + `Switch.Thumb` |

**Commit:** `2f105bdd` -- "refactor: migrate Phase 2 components from Headless UI"

### Phase 3 -- Complex components (COMMITTED)

| Component | Migration |
|-----------|-----------|
| **Modal** | `Dialog`/`DialogBackdrop`/`DialogPanel`/`DialogTitle` -> `Dialog.Root`/`Dialog.Portal`/`Dialog.Backdrop`/`Dialog.Popup`/`Dialog.Title` |
| **Drawer** | `Dialog` + `Transition` -> `Dialog.Root`/`Dialog.Portal`/`Dialog.Backdrop`/`Dialog.Popup` with CSS slide animations |
| **Select** (5 files) | `Listbox`/`ListboxButton`/`ListboxOptions`/`ListboxOption` -> `Select.Root`/`Select.Trigger`/`Select.Portal`/`Select.Positioner`/`Select.Popup`/`Select.Item` |

Also in this commit:
- **Removed `@headlessui/react`** from both `dependencies` and `peerDependencies`
- **Added `@base-ui/react`** to `peerDependencies`
- Fixed docs examples (`radio.tsx`, `select.tsx`)
- Removed deprecated `static` prop from modal visual specs

**Commit:** `0110fc3b` -- "refactor: migrate Phase 3 -- Modal, Drawer, Select to Base UI; remove @headlessui/react"

### Remaining work (future PR)

| Item | Notes |
|------|-------|
| **`@floating-ui/react` removal** | Still used by **Popover** and **Autocomplete** -- these use `@floating-ui/react` directly, not via HeadlessUI. Can be migrated to Base UI `Popover`/`Menu` in a separate PR |
| **ESLint config** | Missing `eslint.config.js` (pre-existing, not migration-related) |
| **Pre-existing test type errors** | Various visual spec and unit test type errors in autocomplete, calendar, card, date-picker, input-container, input, textarea -- all pre-existing |

---

## Key Technical Decisions

### 1. Drawer uses Dialog, not DrawerPreview

Base UI exports `DrawerPreview` (unstable API, import path `@base-ui/react/drawer`). We chose to use `Dialog.Root` from `@base-ui/react/dialog` instead:
- Stable API
- Drawer is fundamentally a dialog with slide-in animation
- CSS `data-open:` transitions on the `Dialog.Popup` handle the slide effect

### 2. CSS transition strategy

HeadlessUI used `transition` prop + `data-enter`/`data-leave`/`data-closed` attributes. Base UI uses `data-open` attribute on open state.

**Pattern:**
```
-- HeadlessUI --
data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200

-- Base UI --
opacity-0 data-open:opacity-100 transition duration-300
```

For Drawer slide animations, the default state has an off-screen transform (e.g., `translate-x-full`) and `data-open:translate-x-0` brings it on-screen, with `transition-transform micro-interactions` for the animation.

### 3. Data attribute mapping

| HeadlessUI | Base UI / CSS |
|------------|---------------|
| `data-focus` | `data-[focused]` |
| `data-hover` | CSS `hover:` pseudo-class |
| `data-active` | CSS `active:` pseudo-class |
| `data-checked` | `data-checked` (same) |
| `data-disabled` | `data-disabled` (same) |
| `data-indeterminate` | `data-indeterminate` (same) |
| `data-closed` | N/A (use default + `data-open`) |
| `data-enter` / `data-leave` | CSS `transition` property |

### 4. Callback adapters

Base UI uses different callback names. Our components preserve existing public APIs:

| Public API | Internal Base UI |
|------------|------------------|
| `onChange` (Checkbox) | `onCheckedChange` |
| `onChange` (Switch) | `onCheckedChange` |
| `onChange` (Select) | `onValueChange` |
| `onChange` (RadioGroup) | `onValueChange` |
| `onClose` (Modal/Drawer) | `onOpenChange((open) => { if (!open) onClose() })` |

### 5. Modal `static` prop removed

HeadlessUI Dialog had a `static` prop to force rendering regardless of open state. Base UI Dialog doesn't have an equivalent -- it uses `open` prop on `Dialog.Root` for controlled rendering. The `static` prop was removed from `ModalProps` and all visual spec usages.

### 6. Select open state management

HeadlessUI Listbox exposed `open` via render props. Base UI Select manages state internally. We added `useState(false)` for `isOpen` and pass `open`/`onOpenChange` to `Select.Root`, then provide it through `SelectContext` so child components (`SelectButton`, `SelectOptions`) can access it.

### 7. Select positioning

Replaced manual absolute positioning (`absolute left-0 right-0 top-full`) with Base UI's `Select.Positioner` which uses Floating UI internally. This handles viewport boundary detection automatically.

### 8. Modal pointer events

Added `pointer-events-none` to the full-screen wrapper div and `pointer-events-auto` to `Dialog.Popup` so clicks outside the popup pass through to `Dialog.Backdrop` for proper outside-click detection.

### 9. Drawer onOverlayClick

Used Base UI's `onOpenChange` event details: `details.reason === 'outside-press'` maps to the old `onOverlayClick` callback behavior:

```tsx
onOpenChange={(newOpen, details) => {
  if (!newOpen) {
    if (details.reason === 'outside-press') onOverlayClick?.()
    onClose()
  }
}}
```

---

## Files Changed (all phases)

### packages/ui/src/ (component library)

**Phase 1:** link/, radio/, overlay/, button/, input/, toggle-group/
**Phase 2:** field/, label/, description/, error/, textarea/, checkbox/, switch/
**Phase 3:** modal/ (Modal.tsx, types.ts, __specs__/modal.visual.spec.tsx), drawer/ (Drawer.tsx, classes.ts), select/ (Select.tsx, SelectButton.tsx, SelectOption.tsx, SelectOptions.tsx, types.ts)

### packages/ui/package.json

- Removed `@headlessui/react` from `dependencies`
- Removed `@headlessui/react` from `peerDependencies`
- Added `@base-ui/react` to `peerDependencies`

### apps/docs/src/examples/

- `radio.tsx` -- Fixed onClick -> onChange pattern
- `select.tsx` -- Fixed generic type mismatch with `SelectProps<string>`

---

## Verification Checklist

- [x] Zero `@headlessui/react` imports remain in source (`grep` confirms)
- [x] `bun run typecheck` in `packages/ui` -- only pre-existing errors
- [x] `bun run build` -- both `@creation-ui/react` and `@creation-ui/docs` build successfully
- [ ] `bun run lint` -- blocked by pre-existing missing ESLint config (not migration-related)
- [ ] `bun run test:unit` -- not run yet (tests may need environment setup)
- [ ] Manual smoke testing of Modal, Drawer, Select in docs site

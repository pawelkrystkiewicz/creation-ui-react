# Component Testing Strategy - Batch Instructions

## Test Structure (Pattern: Button)

### 1. Test File Location

```text
src/[component-name]/__specs__/
├── [component-name].spec.tsx        # Unit tests (jsdom)
└── [component-name].visual.spec.tsx # Visual tests (browser)
```

### 2. Basic Test Configuration

#### Standard Tool Imports

```typescript
// For unit tests (.spec.tsx)
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { verifyComputedStyles } from '../../../test/utils/helpers'

// For visual tests (.visual.spec.tsx)
import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { verifyComputedStyles } from '../../../test/utils/helpers'
import { parseColorString } from '../../../test/utils/parsers'
```

## 3. Test Categories to Implement

### A. Basic Tests (REQUIRED)

#### 1. Basic Rendering Test

```typescript
it('renders correctly with default props', () => {
  const { getByRole } = await render(<Component>Test content</Component>)
  const element = getByRole('[appropriate-role]')
  expect(element).toBeDefined()
  expect(element).toHaveTextContent('Test content')
})
```

#### 2. Custom className Test

```typescript
it('applies custom className', () => {
  const { getByRole } = await render(
    <Component className='custom-class'>Test</Component>
  )
  const element = getByRole('[role]')
  expect(element.classList).toContain('custom-class')
})
```

#### 3. Accessibility Test (a11y)

```typescript
it('has no accessibility violations', async () => {
  const { container } = await render(<Component>Accessible content</Component>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### B. Variant Tests (CONDITIONAL - if component has variants)

#### 1. All Colors Test (ELEMENT_COLOR)

```typescript
ELEMENT_COLOR.forEach(color => {
  it(`applies correct --trigger-color var for [${color}] color`, () => {
    const { getByRole } = await render(<Component color={color}>{color}</Component>)
    const element = getByRole('[role]')
    const classes = element.className

    if (color === 'mono') {
      expect(classes).toContain('--trigger-color:theme(colors.black)')
      expect(classes).toContain('--trigger-color-contrast:theme(colors.white)')
      return
    }

    expect(classes).toContain(`--trigger-color:theme(colors.${color})`)
  })
})
```

#### 2. All Variants Test (ELEMENT_VARIANTS)

```typescript
ELEMENT_VARIANTS.forEach(variant => {
  it(`applies correct styles for [${variant}] variant`, () => {
    const { getByRole } = await render(<Component variant={variant}>Test</Component>)
    const element = getByRole('[role]')
    expect(element.className).toContain('[expected-css-class]')
  })
})
```

### C. Boolean Property Tests

#### Pattern for Each Boolean Property

```typescript
it('applies [property-name] styles when [propertyName] prop is true', () => {
  const { getByRole } = await render(<Component [propertyName]>Test</Component>)
  const element = getByRole('[role]')
  expect(element.className).toContain('[expected-class]')
})
```

### D. Visual Tests (REQUIRED for all components)

#### 1. Default Snapshot Test

```typescript
it('default component renders correctly', async () => {
  const screen = await render(<Component>Test content</Component>)
  const element = screen.getByRole('[role]').element()
  await expect(element).toMatchScreenshot()
})
```

#### 2. Variant Combinations (if applicable)

```typescript
for (const color of ELEMENT_COLOR) {
  for (const variant of ELEMENT_VARIANTS) {
    it(`matches snapshot for [${color}] color and [${variant}] variant`, async () => {
      const text = `${color} ${variant}`
      const screen = await render(
        <Component color={color} variant={variant}>
          {text}
        </Component>
      )
      await expect(screen.getByText(text).element()).toMatchScreenshot()
    })
  }
}
```

### E. Interactive State Tests (CONDITIONAL)

#### 1. Disabled State

```typescript
it('should correctly render [disabled] state', async () => {
  const screen = await render(<Component disabled>Test</Component>)
  const element = screen.getByRole('[role]').element()
  await expect(element).toBeDisabled()
  await expect(element).toMatchScreenshot()
})
```

#### 2. Loading State (if applicable)

```typescript
it('should correctly render [loading] state', async () => {
  const screen = await render(<Component loading>Test</Component>)
  const element = screen.getByRole('[role]').element()
  await expect(element).toBeDisabled()
  await expect(element).toMatchScreenshot()
})
```

### F. Adornments Tests (CONDITIONAL - for components with startAdornment/endAdornment)

```typescript
describe('Adornments', () => {
  const startAdornment = <Icon icon='plus' data-testid='icon-plus' />
  const endAdornment = <Icon icon='minus' data-testid='icon-minus' />

  const scenarios = [
    {
      description: 'renders with startAdornment',
      props: { startAdornment },
      expected: { dataTestId: ['icon-plus'] },
    },
    // ... more scenarios
  ]

  for (const { description, expected, props } of scenarios) {
    it(description, async () => {
      const screen = await render(<Component {...props}>Test</Component>)
      const element = screen.getByRole('[role]').element()

      for (const dataTestId of expected.dataTestId) {
        await expect(screen.getByTestId(dataTestId).element()).toBeVisible()
      }
      await expect(element).toMatchScreenshot()
    })
  }
})
```

## 4. Test Configuration

### Test Commands

```bash
# Unit tests
bun run test:unit

# Visual tests
bun run test:visual

# Update snapshots
bun run test:visual:update

# Coverage
bun run test:unit:coverage
```

### Vitest Configuration

- **Provider:** Playwright (chromium)
- **Viewport:** 1280x720
- **Threshold:** 0.01 pixel difference
- **Environment:** jsdom for unit tests, browser for visual tests

## 5. Helper Utilities

### verifyComputedStyles - CSS Style Verification

```typescript
await verifyComputedStyles(
  element,
  {
    cursor: 'pointer',
    display: 'flex',
  },
  'debug-message',
)
```

### parseColorString - Color Parsing

```typescript
const parsedColor = parseColorString(cssColor)
expect(parsedColor.type).toBe('oklch')
expect(parsedColor.values).toEqual([0.6048, 0.2165, 257.21])
```

## 6. New Component Checklist

### Basic Tests (ALWAYS)

- [ ] Rendering test with default props
- [ ] Custom className test
- [ ] Accessibility test (axe)
- [ ] Default snapshot test

### Variant Tests (IF APPLICABLE)

- [ ] All colors test (ELEMENT_COLOR)
- [ ] All variants test (ELEMENT_VARIANTS)
- [ ] Color and variant combinations (snapshot)

### Property Tests (IF APPLICABLE)

- [ ] Each boolean property (fullWidth, uppercase, disabled, etc.)
- [ ] Special properties (href -> as link, etc.)

### State Tests (IF APPLICABLE)

- [ ] Disabled state
- [ ] Loading state
- [ ] Interactive states (hover, focus, active) - optional

### Adornments Tests (IF APPLICABLE)

- [ ] startAdornment
- [ ] endAdornment
- [ ] Combinations with loading

## 7. Naming Conventions

### Test Files

- `[component-name].spec.tsx` - unit tests
- `[component-name].visual.spec.tsx` - visual tests

### Test Descriptions

- Use English descriptions
- Format: `applies correct styles when [prop] is [value]`
- Format: `matches snapshot for [variant] and [color]`
- Format: `has no accessibility violations`

## 8. Common Mistakes to Avoid

1. **Don't test implementation, test behavior**
2. **Always use appropriate ARIA role in getByRole()**
3. **Check if element is visible before taking snapshots**
4. **Use await for asynchronous assertions**
5. **Don't hardcode CSS values - use theme variables**

## 9. Testing Priorities

### Priority 1 (REQUIRED)

- Basic rendering
- Custom className
- Accessibility
- Default snapshot

### Priority 2 (HIGH)

- All color/style variants
- Boolean properties
- Variant combinations (snapshots)

### Priority 3 (MEDIUM)

- Interactive states
- Adornments
- Special properties

### Priority 4 (LOW)

- Hover/focus/active states
- Edge cases
- Performance tests

## 10. Components to Test

### Components Ready for Testing

The following components are available in the `src/` directory and need comprehensive test coverage:

- [x] **autocomplete** - Autocomplete input component
- [ ] **avatar** - User avatar display component
- [x] **button** - Button component (reference implementation)
- [ ] **calendar** - Calendar picker component
- [x] **card** - Card container component
- [ ] **checkbox** - Checkbox input component
- [ ] **chip** - Chip/tag component
- [ ] **clear-button** - Clear button utility component
- [ ] **dark-mode-toggle** - Dark/light mode toggle
- [ ] **date-picker** - Date selection component
- [ ] **description** - Description text component
- [ ] **drawer** - Slide-out drawer component
- [ ] **dropdown-chevron** - Dropdown indicator component
- [ ] **error** - Error message component
- [ ] **field** - Form field wrapper component
- [ ] **flex** - Flexbox layout component
- [x] **for** - Conditional rendering utility
- [ ] **highlighter** - Text highlighting component
- [ ] **icon** - Icon display component
- [x] **input** - Text input component
- [ ] **input-container** - Input wrapper component
- [ ] **label** - Form label component
- [ ] **link** - Link component
- [ ] **loader** - Loading spinner component
- [ ] **loading-overlay** - Loading overlay component
- [ ] **modal** - Modal dialog component
- [ ] **overlay** - Overlay backdrop component
- [ ] **popover** - Popover component
- [ ] **radio** - Radio button component
- [ ] **select** - Select dropdown component
- [x] **show** - Conditional display utility
- [ ] **switch** - Toggle switch component
- [ ] **textarea** - Textarea input component
- [ ] **toggle-group** - Toggle button group component
- [ ] **tooltip** - Tooltip component
- [ ] **touch-target** - Touch interaction component

### Priority Order for Testing

1. **High Priority (Core Form Components):**
   - input, textarea, select, checkbox, radio, switch
   - button (already done ✅)

2. **Medium Priority (Layout & Navigation):**
   - card, modal, drawer, popover, tooltip
   - flex, field, input-container

3. **Low Priority (Utility & Enhancement):**
   - icon, loader, avatar, chip
   - error, description, label
   - clear-button, dropdown-chevron, touch-target

4. **Specialty Components:**
   - autocomplete, calendar, date-picker
   - dark-mode-toggle, highlighter
   - loading-overlay, overlay, toggle-group
   - for, show (conditional utilities)

### Notes

- ✅ **button** component already has complete test coverage and serves as the reference implementation
- Components marked with [ ] need test implementation
- Use button tests as a template for similar interactive components
- Utility components (for, show) may need simpler test strategies

### Running tests

To run non-components tests use:

> bun test:unit

To run component tests locally (do not commit images):
> bun test:visual (they will most likely fail)
To avoid failing locally:
> bun test:visual:update

To generate commitable and valid test renderings (images) you need to trigger a Github action on your commnad. You can do this by calling this command and following the steps in CLI prompts:

> bun update-screenshots

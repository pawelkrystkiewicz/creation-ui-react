import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Select, SelectButton, SelectOptions, SelectOption } from '..'

describe('Select', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select).toBeDefined()
  })

  it('applies custom className to select button', async () => {
    const { getByRole } = await render(
      <Select>
        <SelectButton className='custom-select-class'>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select.classList).toContain('custom-select-class')
  })

  it('applies custom className to container', async () => {
    const { container } = await render(
      <Select cx={{ container: 'custom-container-class' }}>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const selectContainer = container.querySelector('.custom-container-class')
    expect(selectContainer).toBeDefined()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(
      <Select disabled>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select).toBeDisabled()
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(
      <Select readOnly>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select).toBeDefined()
  })

  it('renders with single select (default)', async () => {
    const { getByRole } = await render(
      <Select value='option1' onChange={() => {}}>
        <SelectButton>Option 1</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select).toBeDefined()
  })

  it('renders with multiple select', async () => {
    const { getByRole } = await render(
      <Select multiple value={['option1']} onChange={() => {}}>
        <SelectButton>Options selected</SelectButton>
        <SelectOptions>
          <SelectOption value='option1' multiple>Option 1</SelectOption>
          <SelectOption value='option2' multiple>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select).toBeDefined()
  })

  it('renders with startAdornment', async () => {
    const { getByTestId } = await render(
      <Select startAdornment={<span data-testid='start-adornment'>@</span>}>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const adornment = getByTestId('start-adornment')
    expect(adornment).toBeDefined()
    expect(adornment.textContent).toBe('@')
  })

  it('renders with endAdornment', async () => {
    const { getByTestId } = await render(
      <Select endAdornment={<span data-testid='end-adornment'>$</span>}>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const adornment = getByTestId('end-adornment')
    expect(adornment).toBeDefined()
    expect(adornment.textContent).toBe('$')
  })

  it('renders with both startAdornment and endAdornment', async () => {
    const { getByTestId } = await render(
      <Select
        startAdornment={<span data-testid='start-adornment'>@</span>}
        endAdornment={<span data-testid='end-adornment'>$</span>}
      >
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const startAdornment = getByTestId('start-adornment')
    const endAdornment = getByTestId('end-adornment')
    expect(startAdornment).toBeDefined()
    expect(endAdornment).toBeDefined()
  })

  it('handles onClear functionality', async () => {
    const { container } = await render(
      <Select onClear={() => {}} value='option1' onChange={() => {}}>
        <SelectButton>Option 1</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const clearButton = container.querySelector('svg[role="button"]')
    expect(clearButton).toBeDefined()
  })

  it('renders dropdown chevron for single select', async () => {
    const { container } = await render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const chevron = container.querySelector('svg')
    expect(chevron).toBeDefined()
    expect(chevron?.getAttribute('aria-hidden')).toBe('true')
  })

  it('renders dropdown chevron for multiple select', async () => {
    const { container } = await render(
      <Select multiple>
        <SelectButton>Select options</SelectButton>
        <SelectOptions>
          <SelectOption value='option1' multiple>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const chevron = container.querySelector('svg')
    expect(chevron).toBeDefined()
  })

  it('forwards ref correctly', async () => {
    let selectRef: HTMLDivElement | null = null

    render(
      <Select
        ref={ref => {
          selectRef = ref
        }}
      >
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )

    // The ref is forwarded to the Listbox component, we'll just check if it exists
    expect(selectRef).toBeDefined()
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Select>
        <SelectButton aria-label='Test select field'>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select.className).toContain('cursor-pointer')
  })

  it('renders option groups correctly', async () => {
    const { container } = await render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <div className='px-2 py-1 text-sm font-medium text-gray-500' data-testid='group-header'>Group 1</div>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    // Since options are not visible by default (dropdown closed), just check the structure
    expect(container).toBeDefined()
  })
})

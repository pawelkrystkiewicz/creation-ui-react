import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Select } from '..'

describe('Select', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(
      <Select>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select).toBeDefined()
  })

  it('applies custom className to select element', async () => {
    const { getByRole } = await render(
      <Select cx={{ input: 'custom-select-class' }}>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select.classList).toContain('custom-select-class')
  })

  it('applies custom className to container', async () => {
    const { container } = await render(
      <Select cx={{ container: 'custom-container-class' }}>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const selectContainer = container.querySelector('.custom-container-class')
    expect(selectContainer).toBeDefined()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(
      <Select disabled>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(
      <Select readOnly>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select).toHaveAttribute('readonly')
  })

  it('renders with single select (default)', async () => {
    const { getByRole } = await render(
      <Select value='option1' onChange={() => {}}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select).not.toHaveAttribute('multiple')
    expect(select).toHaveValue('option1')
  })

  it('renders with multiple select', async () => {
    const { getByRole } = await render(
      <Select multiple value={['option1']} onChange={() => {}}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    )
    const select = getByRole('listbox')
    expect(select).toHaveAttribute('multiple')
  })

  it('renders with startAdornment', async () => {
    const { getByTestId } = await render(
      <Select startAdornment={<span data-testid='start-adornment'>@</span>}>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const adornment = getByTestId('start-adornment')
    expect(adornment).toBeDefined()
    expect(adornment).toHaveTextContent('@')
  })

  it('renders with endAdornment', async () => {
    const { getByTestId } = await render(
      <Select endAdornment={<span data-testid='end-adornment'>$</span>}>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const adornment = getByTestId('end-adornment')
    expect(adornment).toBeDefined()
    expect(adornment).toHaveTextContent('$')
  })

  it('renders with both startAdornment and endAdornment', async () => {
    const { getByTestId } = await render(
      <Select
        startAdornment={<span data-testid='start-adornment'>@</span>}
        endAdornment={<span data-testid='end-adornment'>$</span>}
      >
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const startAdornment = getByTestId('start-adornment')
    const endAdornment = getByTestId('end-adornment')
    expect(startAdornment).toBeDefined()
    expect(endAdornment).toBeDefined()
  })

  it('handles onClear functionality', async () => {
    const { getByTestId } = await render(
      <Select onClear={() => {}} value='option1' onChange={() => {}}>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const clearButton = getByTestId('input-clear-button')
    expect(clearButton).toBeDefined()
  })

  it('renders dropdown chevron for single select', async () => {
    const { container } = await render(
      <Select>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const chevron = container.querySelector('svg')
    expect(chevron).toBeDefined()
    expect(chevron).toHaveAttribute('aria-hidden', 'true')
  })

  it('does not render dropdown chevron for multiple select', async () => {
    const { container } = await render(
      <Select multiple>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const chevron = container.querySelector('svg')
    expect(chevron).toBeNull()
  })

  it('forwards ref correctly', async () => {
    let selectRef: HTMLSelectElement | null = null

    render(
      <Select
        ref={ref => {
          selectRef = ref
        }}
      >
        <option value='option1'>Option 1</option>
      </Select>,
    )

    expect(selectRef).not.toBeNull()
    expect(selectRef?.tagName).toBe('SELECT')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Select aria-label='Test select field'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(
      <Select>
        <option value='option1'>Option 1</option>
      </Select>,
    )
    const select = getByRole('combobox')
    expect(select.className).toContain('focus:outline-none')
  })

  it('renders optgroup correctly', async () => {
    const { container } = await render(
      <Select>
        <optgroup label='Group 1'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </optgroup>
      </Select>,
    )
    const optgroup = container.querySelector('optgroup')
    expect(optgroup).toBeDefined()
    expect(optgroup).toHaveAttribute('label', 'Group 1')
  })
})

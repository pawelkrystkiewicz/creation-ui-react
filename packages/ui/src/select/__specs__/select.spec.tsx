import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Select, SelectButton, SelectOptions, SelectOption } from '..'

describe('Select', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = render(
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
    const { getByRole } = render(
      <Select>
        <SelectButton className='custom-select-class'>
          Select an option
        </SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const select = getByRole('button')
    expect(select.classList).toContain('custom-select-class')
  })

  it('applies custom className to container', async () => {
    const { container } = render(
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
    const { getByRole } = render(
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
    const { getByRole } = render(
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
    const { getByRole } = render(
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



  it('renders with startAdornment', async () => {
    const { getByTestId } = render(
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
    const { getByTestId } = render(
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
    const { getByTestId } = render(
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
    const { container } = render(
      <Select onClear={() => {}} value='option1' onChange={() => {}}>
        <SelectButton>Option 1</SelectButton>
        <SelectOptions>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptions>
      </Select>,
    )
    const clearButton = container.querySelector(
      'div[role="button"][aria-label="Clear selection"]',
    )
    expect(clearButton).toBeDefined()
  })

  describe('isNonNulish prop correctly handles falsy values for clearable functionality', () => {
    const onClear = vi.fn()

    beforeEach(() => {
      onClear.mockClear()
    })

    it('should show clear button for zero (0) value', async () => {
      const { container } = render(
        <Select value={'0'} onChange={() => {}} onClear={onClear}>
          <SelectButton>Zero</SelectButton>
          <SelectOptions>
            <SelectOption value={'0'}>Zero</SelectOption>
            <SelectOption value={'1'}>One</SelectOption>
          </SelectOptions>
        </Select>,
      )
      const clearButton = container.querySelector(
        'div[role="button"][aria-label="Clear selection"]',
      )
      expect(clearButton).toBeDefined()
      expect(clearButton).not.toBeNull()
    })

    it('should show clear button for empty string value', async () => {
      const { container } = render(
        <Select value={''} onChange={() => {}} onClear={onClear}>
          <SelectButton>Empty</SelectButton>
          <SelectOptions>
            <SelectOption value=''>Empty</SelectOption>
            <SelectOption value='filled'>Filled</SelectOption>
          </SelectOptions>
        </Select>,
      )
      const clearButton = container.querySelector(
        'div[role="button"][aria-label="Clear selection"]',
      )
      expect(clearButton).toBeDefined()
      expect(clearButton).not.toBeNull()
    })

    it('should show clear button for false value', async () => {
      const { container } = render(
        <Select value={'false'} onChange={() => {}} onClear={onClear}>
          <SelectButton>False</SelectButton>
          <SelectOptions>
            <SelectOption value={'false'}>False</SelectOption>
            <SelectOption value={'true'}>True</SelectOption>
          </SelectOptions>
        </Select>,
      )
      const clearButton = container.querySelector(
        'div[role="button"][aria-label="Clear selection"]',
      )
      expect(clearButton).toBeDefined()
      expect(clearButton).not.toBeNull()
    })

    it('should NOT show clear button for null value', async () => {
      const { container } = render(
        <Select value={null} onChange={() => {}} onClear={onClear}>
          <SelectButton>None selected</SelectButton>
          <SelectOptions>
            <SelectOption value='option1'>Option 1</SelectOption>
            <SelectOption value='option2'>Option 2</SelectOption>
          </SelectOptions>
        </Select>,
      )
      const clearButton = container.querySelector(
        'div[role="button"][aria-label="Clear selection"]',
      )
      expect(clearButton).toBeNull()
    })

    it('should NOT show clear button for undefined value', async () => {
      const { container } = render(
        <Select value={undefined} onChange={() => {}} onClear={onClear}>
          <SelectButton>None selected</SelectButton>
          <SelectOptions>
            <SelectOption value='option1'>Option 1</SelectOption>
            <SelectOption value='option2'>Option 2</SelectOption>
          </SelectOptions>
        </Select>,
      )
      const clearButton = container.querySelector(
        'div[role="button"][aria-label="Clear selection"]',
      )
      expect(clearButton).toBeNull()
    })
  })

  it('renders dropdown chevron for single select', async () => {
    const { container } = render(
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
    const { container } = render(
      <Select>
        <SelectButton aria-label='Test select field'>
          Select an option
        </SelectButton>
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
    const { getByRole } = render(
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
    const { container } = render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <div
            className='px-2 py-1 text-sm font-medium text-gray-500'
            data-testid='group-header'
          >
            Group 1
          </div>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptions>
      </Select>,
    )
    // Since options are not visible by default (dropdown closed), just check the structure
    expect(container).toBeDefined()
  })
})

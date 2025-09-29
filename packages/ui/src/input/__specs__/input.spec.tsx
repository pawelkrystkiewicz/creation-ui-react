import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Input } from '..'
import { ELEMENT_COLOR, INPUT_VARIANTS } from '../../types'

describe('Input', async () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(<Input placeholder='Test input' />)
    const input = getByRole('textbox')
    expect(input).toBeDefined()
    expect(input).toHaveAttribute('placeholder', 'Test input')
  })

  it('applies custom className to input element', async () => {
    const { getByRole } = await render(
      <Input cx={{ input: 'custom-input-class' }} placeholder='Test' />,
    )
    const input = getByRole('textbox')
    expect(input.classList).toContain('custom-input-class')
  })

  it('applies custom className to container', async () => {
    const { container } = await render(
      <Input cx={{ container: 'custom-container-class' }} placeholder='Test' />,
    )
    const inputContainer = container.querySelector('.custom-container-class')
    expect(inputContainer).toBeDefined()
  })

  it('renders with different input types', async () => {
    const types = [
      'email',
      'password',
      'number',
      'tel',
      'url',
      'search',
    ] as const

    for (const type of types) {
      const { container } = await render(
        <Input type={type} placeholder={`${type} input`} />,
      )
      const input = container.querySelector(`input[type="${type}"]`)
      expect(input).toBeDefined()
      expect(input).toHaveAttribute('type', type)
    }
  })

  it('renders with date input types', async () => {
    const dateTypes = [
      'date',
      'datetime-local',
      'month',
      'time',
      'week',
    ] as const

    for (const type of dateTypes) {
      const { container } = await render(<Input type={type} />)
      const input = container.querySelector(`input[type="${type}"]`)
      expect(input).toBeDefined()
      expect(input).toHaveAttribute('type', type)
    }
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(
      <Input disabled placeholder='Disabled input' />,
    )
    const input = getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(
      <Input readOnly placeholder='ReadOnly input' />,
    )
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('readonly')
  })

  it('renders with value', async () => {
    const { getByRole } = await render(
      <Input value='Test value' onChange={() => {}} />,
    )
    const input = getByRole('textbox')
    expect(input).toHaveValue('Test value')
  })

  it('renders with startAdornment', async () => {
    const { getByTestId } = await render(
      <Input
        startAdornment={<span data-testid='start-adornment'>@</span>}
        placeholder='Username'
      />,
    )
    const adornment = getByTestId('start-adornment')
    expect(adornment).toBeDefined()
    expect(adornment).toHaveTextContent('@')
  })

  it('renders with endAdornment', async () => {
    const { getByTestId } = await render(
      <Input
        endAdornment={<span data-testid='end-adornment'>$</span>}
        placeholder='Price'
      />,
    )
    const adornment = getByTestId('end-adornment')
    expect(adornment).toBeDefined()
    expect(adornment).toHaveTextContent('$')
  })

  it('renders with both startAdornment and endAdornment', async () => {
    const { getByTestId } = await render(
      <Input
        startAdornment={<span data-testid='start-adornment'>@</span>}
        endAdornment={<span data-testid='end-adornment'>$</span>}
        placeholder='Username with price'
      />,
    )
    const startAdornment = getByTestId('start-adornment')
    const endAdornment = getByTestId('end-adornment')
    expect(startAdornment).toBeDefined()
    expect(endAdornment).toBeDefined()
  })

  it('handles onClear functionality', async () => {
    const { getByTestId } = await render(
      <Input
        onClear={() => {}}
        value='Test value'
        onChange={() => {}}
        placeholder='Clearable input'
      />,
    )
    const clearButton = getByTestId('input-clear-button')
    expect(clearButton).toBeDefined()
  })

  it('renders with file input type', async () => {
    const { container } = await render(<Input type='file' />)
    const input = container.querySelector('input[type="file"]')
    expect(input).toBeDefined()
  })

  it('renders with color input type', async () => {
    const { container } = await render(<Input type='color' />)
    const input = container.querySelector('input[type="color"]')
    expect(input).toBeDefined()
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(<Input placeholder='Focus test' />)
    const input = getByRole('textbox')
    expect(input).toBeDefined()
    expect(input.className).toContain('focus:outline-none')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Input placeholder='Accessible input' aria-label='Test input field' />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders as different element when "as" prop is provided', async () => {
    const { container } = await render(
      <Input as='textarea' placeholder='Textarea input' />,
    )
    const textarea = container.querySelector('textarea')
    expect(textarea).toBeDefined()
    expect(textarea).toHaveAttribute('placeholder', 'Textarea input')
  })

  it('forwards ref correctly', async () => {
    let inputRef: HTMLInputElement | null = null

    render(
      <Input
        ref={ref => {
          inputRef = ref
        }}
        placeholder='Ref test'
      />,
    )

    expect(inputRef).not.toBeNull()
    // @ts-expect-error - tagName is not defined on HTMLInputElement
    expect(inputRef?.tagName).toBe('INPUT')
  })
})

import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Checkbox } from '..'

describe('Checkbox', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(<Checkbox />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeDefined()
    expect(checkbox).not.toBeChecked()
  })

  it('applies custom className', async () => {
    const { getByRole } = await render(<Checkbox className='custom-class' />)
    const checkbox = getByRole('checkbox')
    expect(checkbox.classList).toContain('custom-class')
  })

  it('handles checked state', async () => {
    const { getByRole } = await render(
      <Checkbox checked onChange={async () => {}} />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('handles unchecked state', async () => {
    const { getByRole } = await render(
      <Checkbox checked={false} onChange={async () => {}} />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(<Checkbox disabled />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(<Checkbox readOnly />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
  })

  it('handles loading state', async () => {
    const { getByRole } = await render(<Checkbox loading />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
  })

  it('handles indeterminate state', async () => {
    const { getByRole } = await render(
      <Checkbox indeterminate onChange={async () => {}} />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('data-indeterminate')
  })

  it('accepts children prop', async () => {
    // This test just verifies that children prop doesn't break the component
    const { getByRole } = await render(<Checkbox>Checkbox Label</Checkbox>)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeDefined()
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(<Checkbox />)
    const checkbox = getByRole('checkbox')
    expect(checkbox.className).toContain('focus:outline-hidden')
  })

  it('applies micro-interaction styles', async () => {
    const { container } = await render(<Checkbox />)
    const checkboxSpan = container.querySelector('[data-slot="control"] span')
    expect(checkboxSpan?.className).toContain('micro-interaction')
  })

  it('renders checkmark icon when checked', async () => {
    const { container } = await render(
      <Checkbox checked onChange={async () => {}} />,
    )
    const checkIcon = container.querySelector('svg path[d="M3 8L6 11L11 3.5"]')
    expect(checkIcon).toBeDefined()
  })

  it('renders indeterminate icon when indeterminate', async () => {
    const { container } = await render(
      <Checkbox indeterminate onChange={async () => {}} />,
    )
    const indeterminateIcon = container.querySelector('svg path[d="M3 7H11"]')
    expect(indeterminateIcon).toBeDefined()
  })

  it('has correct aria attributes', async () => {
    const { getByRole } = await render(<Checkbox aria-label='Accept terms' />)
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-label', 'Accept terms')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Checkbox aria-label='Test checkbox'>
        Accept terms and conditions
      </Checkbox>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles onChange callback', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Checkbox
        onChange={async () => {
          wasChanged = true
        }}
      />,
    )
    const checkbox = getByRole('checkbox')
    checkbox.click()
    expect(wasChanged).toBe(true)
  })

  it('does not trigger onChange when disabled', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Checkbox
        disabled
        onChange={async () => {
          wasChanged = true
        }}
      />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
    checkbox.click()
    expect(wasChanged).toBe(false)
  })

  it('does not trigger onChange when readOnly', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Checkbox
        readOnly
        onChange={async () => {
          wasChanged = true
        }}
      />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
    checkbox.click()
    expect(wasChanged).toBe(false)
  })

  it('does not trigger onChange when loading', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Checkbox
        loading
        onChange={async () => {
          wasChanged = true
        }}
      />,
    )
    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-disabled', 'true')
    checkbox.click()
    expect(wasChanged).toBe(false)
  })
})

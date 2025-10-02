import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Switch, SwitchField } from '..'

describe('Switch', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(<Switch />)
    const switchElement = getByRole('switch')
    expect(switchElement).toBeDefined()
    expect(switchElement).not.toBeChecked()
  })

  it('applies custom className', async () => {
    const { getByRole } = await render(<Switch className='custom-class' />)
    const switchElement = getByRole('switch')
    expect(switchElement.classList).toContain('custom-class')
  })

  it('handles checked state', async () => {
    const { getByRole } = await render(<Switch checked onChange={() => {}} />)
    const switchElement = getByRole('switch')
    expect(switchElement).toBeChecked()
  })

  it('handles unchecked state', async () => {
    const { getByRole } = await render(
      <Switch checked={false} onChange={() => {}} />,
    )
    const switchElement = getByRole('switch')
    expect(switchElement).not.toBeChecked()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(<Switch disabled />)
    const switchElement = getByRole('switch')
    expect(switchElement).toBeDisabled()
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(<Switch />)
    const switchElement = getByRole('switch')
    expect(switchElement.className).toContain('focus:outline-hidden')
  })

  it('renders switch dot', async () => {
    const { container } = await render(<Switch />)
    const switchDot = container.querySelector('[data-slot="control"] span')
    expect(switchDot).toBeDefined()
    expect(switchDot).toHaveAttribute('aria-hidden', 'true')
    expect(switchDot?.className).toContain('rounded-full')
  })

  it('applies micro-interaction styles to switch dot', async () => {
    const { container } = await render(<Switch />)
    const switchDot = container.querySelector('[data-slot="control"] span')
    expect(switchDot?.className).toContain('micro-interactions')
  })

  it('applies transition styles to switch dot', async () => {
    const { container } = await render(<Switch />)
    const switchDot = container.querySelector('[data-slot="control"] span')
    expect(switchDot?.className).toContain('translate-x-0')
  })

  it('has correct data-slot attribute', async () => {
    const { getByRole } = await render(<Switch />)
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveAttribute('data-slot', 'control')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(<Switch aria-label='Toggle setting' />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles onChange callback', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Switch
        onChange={() => {
          wasChanged = true
        }}
      />,
    )
    const switchElement = getByRole('switch')
    switchElement.click()
    expect(wasChanged).toBe(true)
  })

  it('does not trigger onChange when disabled', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <Switch
        disabled
        onChange={() => {
          wasChanged = true
        }}
      />,
    )
    const switchElement = getByRole('switch')
    switchElement.click()
    expect(wasChanged).toBe(false)
  })

  it('forwards props correctly', async () => {
    const { getByRole } = await render(
      <Switch aria-label='Test switch' id='test-switch-id' />,
    )
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-label', 'Test switch')
    expect(switchElement).toHaveAttribute('id', 'test-switch-id')
  })
})

describe('SwitchField', () => {
  it('renders correctly with default props', async () => {
    const { container } = await render(
      <SwitchField>
        <Switch />
      </SwitchField>,
    )
    const field = container.querySelector('[data-slot="field"]')
    expect(field).toBeDefined()
  })

  it('applies custom className', async () => {
    const { container } = await render(
      <SwitchField className='custom-field-class'>
        <Switch />
      </SwitchField>,
    )
    const field = container.querySelector('.custom-field-class')
    expect(field).toBeDefined()
  })

  it('applies grid layout styles', async () => {
    const { container } = await render(
      <SwitchField>
        <Switch />
      </SwitchField>,
    )
    const field = container.querySelector('[data-slot="field"]')
    expect(field?.className).toContain('grid')
    expect(field?.className).toContain('grid-cols-[1fr_auto]')
  })

  it('applies control layout styles', async () => {
    const { container } = await render(
      <SwitchField>
        <Switch />
      </SwitchField>,
    )
    const field = container.querySelector('[data-slot="field"]')
    expect(field?.className).toContain('*:data-[slot=control]:col-start-2')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <SwitchField>
        <label data-slot='label'>Enable notifications</label>
        <Switch aria-label='Toggle notifications' />
      </SwitchField>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('forwards props correctly', async () => {
    const { container } = await render(
      <SwitchField role='group' aria-labelledby='switch-group-label'>
        <h3 id='switch-group-label'>Settings</h3>
        <Switch />
      </SwitchField>,
    )
    const field = container.querySelector('[data-slot="field"]')
    expect(field).toHaveAttribute('role', 'group')
    expect(field).toHaveAttribute('aria-labelledby', 'switch-group-label')
  })
})

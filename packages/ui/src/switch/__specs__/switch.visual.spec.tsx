import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Switch, SwitchField } from '../'

describe('Switch Visual Tests', () => {
  it('default component renders correctly', async () => {
    const { getByRole } = render(<Switch />)
    const element = getByRole('switch')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked state', async () => {
    const { getByRole } = render(<Switch checked onChange={() => {}} />)
    const element = getByRole('switch')
    expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render unchecked state', async () => {
    const { getByRole } = render(<Switch checked={false} onChange={() => {}} />)
    const element = getByRole('switch')
    expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const { getByRole } = render(<Switch disabled />)
    const element = getByRole('switch')
    expect(element).toHaveAttribute('data-disabled')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled checked state', async () => {
    const { getByRole } = render(
      <Switch disabled checked onChange={() => {}} />,
    )
    const element = getByRole('switch')
    expect(element).toHaveAttribute('data-disabled')
    expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled unchecked state', async () => {
    const { getByRole } = render(
      <Switch disabled checked={false} onChange={() => {}} />,
    )
    const element = getByRole('switch')
    expect(element).toHaveAttribute('data-disabled')
    expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render switch field with label', async () => {
    const { getByRole } = render(
      <SwitchField>
        <label
          data-slot='label'
          style={{ fontSize: '14px', fontWeight: 'medium' }}
        >
          Enable notifications
        </label>
        <Switch />
      </SwitchField>,
    )
    const element = getByRole('switch')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render switch field with label and description', async () => {
    const { getByRole } = render(
      <SwitchField>
        <label
          data-slot='label'
          style={{ fontSize: '14px', fontWeight: 'medium' }}
        >
          Enable notifications
        </label>
        <div
          data-slot='description'
          style={{ fontSize: '12px', color: '#666' }}
        >
          Receive email notifications about important updates
        </div>
        <Switch checked onChange={() => {}} />
      </SwitchField>,
    )
    const element = getByRole('switch')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render multiple switch fields', async () => {
    const { container } = render(
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '300px',
        }}
      >
        <SwitchField>
          <label
            data-slot='label'
            style={{ fontSize: '14px', fontWeight: 'medium' }}
          >
            Email notifications
          </label>
          <Switch checked onChange={() => {}} />
        </SwitchField>
        <SwitchField>
          <label
            data-slot='label'
            style={{ fontSize: '14px', fontWeight: 'medium' }}
          >
            Push notifications
          </label>
          <Switch checked={false} onChange={() => {}} />
        </SwitchField>
        <SwitchField>
          <label
            data-slot='label'
            style={{ fontSize: '14px', fontWeight: 'medium', opacity: 0.5 }}
          >
            SMS notifications
          </label>
          <Switch disabled />
        </SwitchField>
      </div>,
    )

    await expect(container).toMatchScreenshot()
  })
})

import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Switch, SwitchField } from '..'

describe('Switch Visual Tests', () => {
  it('default component renders correctly', async () => {
    const screen = await render(<Switch />)
    const element = screen.getByRole('switch').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked state', async () => {
    const screen = await render(<Switch checked onChange={() => {}} />)
    const element = screen.getByRole('switch').element()
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render unchecked state', async () => {
    const screen = await render(<Switch checked={false} onChange={() => {}} />)
    const element = screen.getByRole('switch').element()
    await expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const screen = await render(<Switch disabled />)
    const element = screen.getByRole('switch').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled checked state', async () => {
    const screen = await render(<Switch disabled checked onChange={() => {}} />)
    const element = screen.getByRole('switch').element()
    await expect(element).toBeDisabled()
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled unchecked state', async () => {
    const screen = await render(
      <Switch disabled checked={false} onChange={() => {}} />,
    )
    const element = screen.getByRole('switch').element()
    await expect(element).toBeDisabled()
    await expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render switch field with label', async () => {
    const screen = await render(
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
    const element = screen.getByRole('switch').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render switch field with label and description', async () => {
    const screen = await render(
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
    const element = screen.getByRole('switch').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render multiple switch fields', async () => {
    const screen = await render(
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

    await expect(screen).toMatchScreenshot()
  })
})

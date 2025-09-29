import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Radio, RadioGroup } from '..'

describe('Radio Visual Tests', () => {
  it('default radio component renders correctly', async () => {
    const screen = await render(
      <RadioGroup value="option1" onChange={() => {}}>
        <Radio value="option1" />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked state', async () => {
    const screen = await render(
      <RadioGroup value="option1" onChange={() => {}}>
        <Radio value="option1" />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render unchecked state', async () => {
    const screen = await render(
      <RadioGroup value="option2" onChange={() => {}}>
        <Radio value="option1" />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const screen = await render(
      <RadioGroup value="option1" onChange={() => {}}>
        <Radio value="option1" disabled />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled checked state', async () => {
    const screen = await render(
      <RadioGroup value="option1" onChange={() => {}}>
        <Radio value="option1" disabled />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled unchecked state', async () => {
    const screen = await render(
      <RadioGroup value="option2" onChange={() => {}}>
        <Radio value="option1" disabled />
      </RadioGroup>
    )
    const element = screen.getByRole('radio').element()
    await expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render radio group with multiple options', async () => {
    const screen = await render(
      <RadioGroup value="option2" onChange={() => {}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio value="option1" />
            Option 1
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio value="option2" />
            Option 2
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio value="option3" />
            Option 3
          </label>
        </div>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render radio group with mixed states', async () => {
    const screen = await render(
      <RadioGroup value="option2" onChange={() => {}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio value="option1" />
            Available option
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio value="option2" />
            Selected option
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
            <Radio value="option3" disabled />
            Disabled option
          </label>
        </div>
      </RadioGroup>
    )
    const element = screen.getByRole('radiogroup').element()
    await expect(element).toMatchScreenshot()
  })
})
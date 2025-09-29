import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Checkbox } from '..'

describe('Checkbox Visual Tests', () => {
  it('default component renders correctly', async () => {
    const screen = await render(<Checkbox />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked state', async () => {
    const screen = await render(<Checkbox checked onChange={() => {}} />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render unchecked state', async () => {
    const screen = await render(<Checkbox checked={false} onChange={() => {}} />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const screen = await render(<Checkbox disabled />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled checked state', async () => {
    const screen = await render(<Checkbox disabled checked onChange={() => {}} />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toBeDisabled()
    await expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const screen = await render(<Checkbox readOnly />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render loading state', async () => {
    const screen = await render(<Checkbox loading />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render indeterminate state', async () => {
    const screen = await render(<Checkbox indeterminate onChange={() => {}} />)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with children', async () => {
    const screen = await render(<Checkbox>Accept terms and conditions</Checkbox>)
    const element = screen.getByRole('checkbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked with children', async () => {
    const screen = await render(
      <Checkbox checked onChange={() => {}}>
        Accept terms and conditions
      </Checkbox>
    )
    const element = screen.getByRole('checkbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render indeterminate with children', async () => {
    const screen = await render(
      <Checkbox indeterminate onChange={() => {}}>
        Select all items
      </Checkbox>
    )
    const element = screen.getByRole('checkbox').element()
    await expect(element).toMatchScreenshot()
  })
})
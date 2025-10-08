import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Checkbox } from '..'

describe('Checkbox Visual Tests', () => {
  it('default component renders correctly', async () => {
    const { getByRole } = render(<Checkbox />)
    const element = getByRole('checkbox')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked state', async () => {
    const { getByRole } = render(<Checkbox checked onChange={() => {}} />)
    const element = getByRole('checkbox')
    expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render unchecked state', async () => {
    const { getByRole } = render(<Checkbox checked={false} onChange={() => {}} />)
    const element = getByRole('checkbox')
    expect(element).not.toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const { getByRole } = render(<Checkbox disabled />)
    const element = getByRole('checkbox')
    expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled checked state', async () => {
    const { getByRole } = render(<Checkbox disabled checked onChange={() => {}} />)
    const element = getByRole('checkbox')
    expect(element).toHaveAttribute('aria-disabled', 'true')
    expect(element).toBeChecked()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const { getByRole } = render(<Checkbox readOnly />)
    const element = getByRole('checkbox')
    expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render loading state', async () => {
    const { getByRole } = render(<Checkbox loading />)
    const element = getByRole('checkbox')
    expect(element).toHaveAttribute('aria-disabled', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render indeterminate state', async () => {
    const { getByRole } = render(<Checkbox indeterminate onChange={() => {}} />)
    const element = getByRole('checkbox')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with children', async () => {
    const { getByRole } = render(<Checkbox>Accept terms and conditions</Checkbox>)
    const element = getByRole('checkbox')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render checked with children', async () => {
    const { getByRole } = render(
      <Checkbox checked onChange={() => {}}>
        Accept terms and conditions
      </Checkbox>
    )
    const element = getByRole('checkbox')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render indeterminate with children', async () => {
    const { getByRole } = render(
      <Checkbox indeterminate onChange={() => {}}>
        Select all items
      </Checkbox>
    )
    const element = getByRole('checkbox')
    await expect(element).toMatchScreenshot()
  })
})
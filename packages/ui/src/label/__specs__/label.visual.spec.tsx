import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Label } from '..'

describe('Label Visual Tests', () => {
  it('default label renders correctly', async () => {
    const { getByText } = render(<Label>Default Label</Label>)
    const element = getByText('Default Label')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders label with required indicator', async () => {
    const { getByText } = render(<Label required>Required Label</Label>)
    const element = getByText('Required Label')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders label with custom className', async () => {
    const { getByText } = render(
      <Label className="text-lg font-bold">Custom Styled Label</Label>
    )
    const element = getByText('Custom Styled Label')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders label with data-disabled attribute', async () => {
    const { getByText } = render(<Label data-disabled>Disabled Label</Label>)
    const element = getByText('Disabled Label')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('data-disabled')
    await expect(element).toMatchScreenshot()
  })

  it('renders long label text', async () => {
    const { getByText } = render(
      <Label>
        This is a very long label text that might wrap to multiple lines
        depending on the container width
      </Label>
    )
    const element = getByText(/This is a very long label/)
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })
})

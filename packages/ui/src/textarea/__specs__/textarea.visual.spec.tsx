import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Textarea } from '../'

describe('Textarea Visual Tests', () => {
  it('default component renders correctly', async () => {
    const { getByRole } = render(<Textarea placeholder="Default textarea" />)
    const element = getByRole('textbox')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const { getByRole } = render(<Textarea disabled placeholder="Disabled textarea" />)
    const element = getByRole('textbox')
    expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const { getByRole } = render(<Textarea readOnly placeholder="ReadOnly textarea" />)
    const element = getByRole('textbox')
    expect(element).toHaveAttribute('readonly')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render resizable state', async () => {
    const { getByRole } = render(<Textarea resizable={true} placeholder="Resizable textarea" />)
    const element = getByRole('textbox')
    expect(element.className).toContain('resize-y')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render non-resizable state', async () => {
    const { getByRole } = render(<Textarea resizable={false} placeholder="Non-resizable textarea" />)
    const element = getByRole('textbox')
    expect(element.className).toContain('resize-none')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with value', async () => {
    const { getByRole } = render(
      <Textarea
        value="This is a sample text content in the textarea"
        onChange={() => {}}
        placeholder="Textarea with value"
      />
    )
    const element = getByRole('textbox')
    expect(element).toHaveValue('This is a sample text content in the textarea')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render invalid state', async () => {
    const { getByRole } = render(<Textarea invalid placeholder="Invalid textarea" />)
    const element = getByRole('textbox')
    expect(element).toHaveAttribute('data-invalid')
    await expect(element).toMatchScreenshot()
  })
})
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Textarea } from '..'

describe('Textarea Visual Tests', () => {
  it('default component renders correctly', async () => {
    const screen = await render(<Textarea placeholder="Default textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const screen = await render(<Textarea disabled placeholder="Disabled textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const screen = await render(<Textarea readOnly placeholder="ReadOnly textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render resizable state', async () => {
    const screen = await render(<Textarea resizable={true} placeholder="Resizable textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render non-resizable state', async () => {
    const screen = await render(<Textarea resizable={false} placeholder="Non-resizable textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with value', async () => {
    const screen = await render(
      <Textarea
        value="This is a sample text content in the textarea"
        onChange={() => {}}
        placeholder="Textarea with value"
      />
    )
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render invalid state', async () => {
    const screen = await render(<Textarea invalid placeholder="Invalid textarea" />)
    const element = screen.getByRole('textbox').element()
    await expect(element).toMatchScreenshot()
  })
})
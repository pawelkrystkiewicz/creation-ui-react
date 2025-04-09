import { test, expect } from '@playwright/experimental-ct-react'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'

test.describe('Button CT', () => {
  test('default button renders correctly with children', async ({
    mount,
    page,
  }) => {
    // check if tailwindcss is setup in test correctly
    let clickCount = 0
    const handleClick = () => {
      clickCount++
    }
    const label = 'Button'
    await mount(<Button onClick={handleClick}>{label}</Button>)
    const button = page.getByText(label)

    const cssColor = await button.evaluate(el => getComputedStyle(el).color)

    await expect(button).toBeVisible()
    await expect(button).toBeEnabled()
    /**
     * full color is oklch(0.6048 0.2165 257.21)
     * but in Safari it we get rounding error:
     * oklch(0.6048 0.2165 257.209991);
     * - so top checking after last '2'
     */
    await expect(cssColor).toContain('oklch(0.6048 0.2165 257.2')

    await button.click()
    expect(clickCount).toBe(1)
  })

  for (const color of ELEMENT_COLOR) {
    for (const variant of ELEMENT_VARIANTS) {
      test(`matches snapshot for [${color}] color and [${variant}] variant`, async ({
        mount,
        page,
      }) => {
        const buttonText = `${color} ${variant}`

        await mount(
          <Button color={color} variant={variant}>
            {buttonText}
          </Button>,
        )

        await expect(page.getByText(buttonText)).toHaveScreenshot()
      })
    }
  }

  //   // it('renders as a link when href is provided', () => {
  //   //   const { getByRole } = render(<Button href='/test'>Link</Button>)
  //   //   const link = getByRole('link')
  //   //   expect(link).toBeInTheDocument()
  //   //   expect(link).toHaveAttribute('href', '/test')
  //   // })

  //--- scenarios ---
  // startAdornment
  // endAdornment
  // href
  // --states--
  // disabled
  // loading
  // hover
  // active
  // focus
  // focus visible
  // focus within
})

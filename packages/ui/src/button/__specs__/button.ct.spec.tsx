import { test, expect } from '@playwright/experimental-ct-react'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'

test('default button renders correctly', async ({ mount, page }) => {
  // check if tailwindcss is setup in test correctly
  const label = 'Button'
  await mount(<Button>{label}</Button>)
  const button = page.getByText(label)

  await expect(button).toBeVisible()
  await expect(button).toHaveCSS('color', 'oklch(0.6048 0.2165 257.21)')
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

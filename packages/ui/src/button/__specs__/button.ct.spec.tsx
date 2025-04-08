import { test, expect } from '@playwright/experimental-ct-react'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'

test('div', async ({ mount, page }) => {
  await mount(<div>Hello world</div>)
  await expect(page.getByText('Hello world')).toBeVisible()
})

test('button', async ({ mount, page }) => {
  await mount(<Button>Click me</Button>)
  await expect(page.getByText('Click me')).toBeVisible()
})

for (const color of ELEMENT_COLOR) {
  for (const variant of ELEMENT_VARIANTS) {
    test(`matches snapshot for [${color}] color and [${variant}] variant`, async ({
      mount,
      page,
    }) => {
      const buttonText = `${color} ${variant}`
      const fileName = `button-${color}-${variant}`

      await mount(
        <Button color={color} variant={variant}>
          {buttonText}
        </Button>,
      )

      await expect(page.getByText(buttonText)).toHaveScreenshot()
    })
  }
}

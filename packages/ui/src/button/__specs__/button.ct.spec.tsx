import { test, expect } from '@playwright/experimental-ct-react'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'
import { Icon } from '../../icon'

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

  test('renders as a link when href is provided', async ({ mount, page }) => {
    await mount(<Button href='/test'>Link</Button>)
    const link = page.getByRole('link')
    await expect(link).toBeVisible()
    await expect(link).toBeEnabled()
    await expect(link).toHaveAttribute('href', '/test')
  })

  test.describe('Adornments', () => {
    const startAdornment = <Icon icon='plus' data-testid='icon-plus' />
    const endAdornment = <Icon icon='minus' data-testid='icon-minus' />
    const scenarios = [
      {
        description: 'renders button with startAdornment',
        props: { startAdornment },
        expected: { dataTestId: ['icon-plus'], disabled: false },
      },
      {
        description: 'renders button with endAdornment',
        props: { endAdornment },
        expected: { dataTestId: ['icon-minus'], disabled: false },
      },
      {
        description: 'renders button with both adornments',
        props: { startAdornment, endAdornment },
        expected: { dataTestId: ['icon-plus', 'icon-minus'], disabled: false },
      },
      {
        description: 'renders button with both adornments and loading',
        props: { startAdornment, endAdornment, loading: true },
        expected: {
          dataTestId: ['icon-plus', 'icon-minus', 'cui-loader'],
          disabled: true,
        },
      },
      {
        description: 'renders button with endAdornment and loading',
        props: { endAdornment, loading: true },
        expected: {
          dataTestId: ['icon-minus', 'cui-loader'],
          disabled: true,
        },
      },
    ]

    for (const { description, expected, props } of scenarios) {
      test(description, async ({ mount, page }) => {
        await mount(<Button {...props}>Button text</Button>)
        const button = page.getByRole('button')
        await expect(button).toBeVisible()
        await expect(button)[
          expected.disabled ? 'toBeDisabled' : 'toBeEnabled'
        ]()

        for (const dataTestId of expected.dataTestId) {
          await expect(page.getByTestId(dataTestId)).toBeVisible()
        }
        await expect(button).toHaveScreenshot()
      })
    }
  })

  test.describe('States', () => {
    const scenarios = {
      disabled: {
        props: { disabled: true },
        expected: {
          disabled: true,
          css: [
            ['opacity', '0.5'],
            ['cursor', 'default'],
          ],
        },
      },
      loading: {
        props: { loading: true },
        expected: {
          disabled: true,
          css: [
            ['opacity', '0.5'],
            ['cursor', 'default'],
          ],
        },
      },
      normal: {
        props: {},
        expected: {
          css: [],
        },
      },
      active: {
        props: {},
        expected: {
          css: [],
        },
      },
      hover: {
        props: {},
        expected: {
          css: [],
        },
      },
      focus: {
        props: {},
        expected: {
          css: [],
        },
      },
    }

    test('should correctly render [disabled] button', async ({
      mount,
      page,
    }) => {
      await mount(<Button disabled>Button text</Button>)
      const button = page.getByRole('button')
      await expect(button).toBeVisible()
      await expect(button).toBeDisabled()

      for (const [property, value] of scenarios.disabled.expected.css) {
        await expect(button).toHaveCSS(property, value)
      }

      await expect(button).toHaveScreenshot()
    })

    test('should correctly render [loading] button', async ({
      mount,
      page,
    }) => {
      await mount(<Button loading>Button text</Button>)
      const button = page.getByRole('button')
      await expect(button).toBeVisible()
      await expect(button).toBeDisabled()

      for (const [property, value] of scenarios.loading.expected.css) {
        await expect(button).toHaveCSS(property, value)
      }
      await expect(button).toHaveScreenshot()
    })

    test('should render button with :hover, :focus, and :active states', async ({
      mount,
      page,
    }) => {
      await mount(<Button>Button text</Button>)
      const button = page.getByRole('button')
      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()

      const box = await button.boundingBox()
      if (box) {
        const centerX = box.x + box.width / 2
        const centerY = box.y + box.height / 2

        // Simulate hover
        await page.mouse.move(centerX, centerY)
        for (const [property, value] of scenarios.hover.expected.css) {
          await expect(button).toHaveCSS(property, value)
        }
        await expect(button).toHaveScreenshot()

        // Simulate focus
        await button.focus()
        for (const [property, value] of scenarios.focus.expected.css) {
          await expect(button).toHaveCSS(property, value)
        }
        await expect(button).toHaveScreenshot()

        // Simulate active (mousedown)
        await page.mouse.down()
        for (const [property, value] of scenarios.active.expected.css) {
          await expect(button).toHaveCSS(property, value)
        }
        await expect(button).toHaveScreenshot()

        // Cleanup
        await page.mouse.up()

        for (const [property, value] of scenarios.normal.expected.css) {
          await expect(button).toHaveCSS(property, value)
        }
        await expect(button).toHaveScreenshot()
      }
    })
  })
})

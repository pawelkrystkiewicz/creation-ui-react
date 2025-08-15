import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'
import { Icon } from '../../icon'
import { page } from '@vitest/browser/context'
import { render } from 'vitest-browser-react'

describe('Button CT', () => {
  it('default button renders correctly with children', async () => {
    // check if tailwindcss is setup in test correctly
    let clickCount = 0
    const handleClick = () => {
      clickCount++
    }
    const label = 'Button'

    const screen = render(<Button onClick={handleClick}>{label}</Button>)

    const button = page.getByText(label)

    await expect(button).toBeEnabled()

    await button.click()
    expect(clickCount).toBe(1)

    // const cssColor = await button.evaluate(el => getComputedStyle(el).color)
    /**
     * full color is oklch(0.6048 0.2165 257.21)
     * but in Safari it we get rounding error:
     * oklch(0.6048 0.2165 257.209991);
     * - so stop checking after last '2'
     */
    // expect(cssColor).toContain('oklch(0.6048 0.2165 257.2')
  })

  for (const color of ELEMENT_COLOR) {
    for (const variant of ELEMENT_VARIANTS) {
      it(`matches snapshot for [${color}] color and [${variant}] variant`, async () => {
        const buttonText = `${color} ${variant}`

        render(
          <Button color={color} variant={variant}>
            {buttonText}
          </Button>,
        )
        await expect(page.getByText(buttonText)).toMatchScreenshot()
      })
    }
  }

  it('renders as a link when href is provided', async () => {
    const screen = render(<Button href='/test'>Link</Button>)
    const link = screen.getByRole('link')
    await expect.element(link).toBeVisible()
    await expect.element(link).toBeEnabled()
    await expect.element(link).toHaveAttribute('href', '/test')
  })

  describe('Adornments', () => {
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
        expected: { dataTestId: ['icon-minus', 'cui-loader'], disabled: true },
      },
    ]

    for (const { description, expected, props } of scenarios) {
      it(description, async () => {
        const screen = render(<Button {...props}>Button text</Button>)
        const button = screen.getByRole('button')
        await expect.element(button).toBeVisible()
        await expect
          .element(button)
          [expected.disabled ? 'toBeDisabled' : 'toBeEnabled']()

        for (const dataTestId of expected.dataTestId) {
          await expect.element(screen.getByTestId(dataTestId)).toBeVisible()
        }
        await expect(button).toMatchScreenshot()
      })
    }
  })

  describe('States', () => {
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
          css: [
            ['color', 'oklch(0.6048 0.2165 257.21)'],
            ['background-color', 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)'],
            ['transform', 'none'],
            ['opacity', '1'],
          ],
        },
      },
      active: {
        props: {},
        expected: {
          css: [
            ['color', 'oklch(0.6048 0.2165 257.21)'],
            ['background-color', 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)'],
            ['transform', 'none'],
            ['opacity', '1'],
          ],
        },
      },
      hover: {
        props: {},
        expected: {
          css: [
            ['color', 'oklch(0.6048 0.2165 257.21)'],
            ['background-color', 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)'],
            ['transform', 'none'],
            ['opacity', '1'],
          ],
        },
      },
      focus: {
        props: {},
        expected: {
          css: [
            ['color', 'oklch(0.6048 0.2165 257.21)'],
            ['background-color', 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)'],
            ['transform', 'none'],
            ['opacity', '1'],
          ],
        },
      },
    }

    it('should correctly render [disabled] button', async () => {
      const screen = render(<Button disabled>Button text</Button>)
      const button = screen.getByRole('button')
      await expect.element(button).toBeVisible()
      await expect.element(button).toBeDisabled()

      for (const [property, value] of scenarios.disabled.expected.css) {
        await expect.element(button).toHaveCSS(property, value)
      }

      await expect(button).toMatchScreenshot()
    })

    it('should correctly render [loading] button', async () => {
      const screen = render(<Button loading>Button text</Button>)
      const button = screen.getByRole('button')
      await expect.element(button).toBeVisible()
      await expect.element(button).toBeDisabled()

      for (const [property, value] of scenarios.loading.expected.css) {
        await expect.element(button).toHaveCSS(property, value)
      }
      await expect(button).toMatchScreenshot()
    })

    it('should render button with :hover, :focus, and :active states', async () => {
      const screen = render(<Button>Button text</Button>)
      const button = screen.getByRole('button')
      await expect.element(button).toBeVisible()
      await expect.element(button).toBeEnabled()

      const box = await button.boundingBox()
      if (box) {
        const centerX = box.x + box.width / 2
        const centerY = box.y + box.height / 2

        // Simulate hover
        await page.mouse.move(centerX, centerY)
        for (const [property, value] of scenarios.hover.expected.css) {
          await expect.element(button).toHaveCSS(property, value)
        }
        await expect(button).toMatchScreenshot()

        // Simulate focus
        await button.focus()
        for (const [property, value] of scenarios.focus.expected.css) {
          await expect.element(button).toHaveCSS(property, value)
        }
        await expect(button).toMatchScreenshot()

        // Simulate active (mousedown)
        await page.mouse.down()
        for (const [property, value] of scenarios.active.expected.css) {
          await expect.element(button).toHaveCSS(property, value)
        }
        await expect(button).toMatchScreenshot()

        // Cleanup
        await page.mouse.up()
        // loose focus
        await button.blur()

        for (const [property, value] of scenarios.normal.expected.css) {
          await expect.element(button).toHaveCSS(property, value)
        }
        await expect(button).toMatchScreenshot()
      }
    })
  })
})

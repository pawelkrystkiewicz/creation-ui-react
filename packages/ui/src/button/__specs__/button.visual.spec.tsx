import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Button } from '..'
import { verifyComputedStyles } from '../../../test/utils/helpers'
import { parseColorString } from '../../../test/utils/parsers'
import { Icon } from '../../icon'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'
import { scenarios } from './test-data'

describe('Button CT', () => {
  it('default button renders correctly with children', async () => {
    // check if tailwindcss is setup in test correctly
    const clickHandler = vi.fn()
    const label = 'Button'

    const screen = render(<Button onClick={clickHandler}>{label}</Button>)

    const buttonSelector = screen.getByRole('button')
    const button = buttonSelector.element()

    expect(button).toBeEnabled()
    expect(button).toHaveTextContent(label)
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toHaveAttribute('disabled')

    await expect(button).toMatchScreenshot()

    const cssColor = button.computedStyleMap().get('color')?.toString()
    console.log(cssColor)
    const parsedColor = parseColorString(cssColor)
    /**
     * full color is oklch(0.6048 0.2165 257.21)
     * but in Safari it we get rounding error:
     * oklch(0.6048 0.2165 257.209991);
     * - so stop checking after last '2'
     */
    expect(parsedColor.type).toBe('oklch')
    expect(parsedColor.values).toEqual([0.6048, 0.2165, 257.21])
    expect(parsedColor.opacity).toBe(1)

    // check if click handler is not called
    expect(clickHandler).toHaveBeenCalledTimes(0)
    // await fireEvent.click(button)
    // expect(clickHandler).toHaveBeenCalledTimes(1)
  })

  for (const color of ELEMENT_COLOR) {
    for (const variant of ELEMENT_VARIANTS) {
      it(`matches snapshot for [${color}] color and [${variant}] variant`, async () => {
        const buttonText = `${color} ${variant}`

        const screen = render(
          <Button color={color} variant={variant}>
            {buttonText}
          </Button>,
        )
        await expect(screen.getByText(buttonText).element()).toMatchScreenshot()
      })
    }
  }

  it('renders as a link when href is provided', async () => {
    const screen = render(<Button href='/test'>Link</Button>)
    const link = screen.getByRole('link').element()
    await expect(link).toBeVisible()
    await expect(link).toBeEnabled()
    await expect(link).toHaveAttribute('href', '/test')
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
        const button = screen.getByRole('button').element()
        await expect(button).toBeVisible()
        await expect(button)[
          expected.disabled ? 'toBeDisabled' : 'toBeEnabled'
        ]()

        for (const dataTestId of expected.dataTestId) {
          await expect(screen.getByTestId(dataTestId).element()).toBeVisible()
        }
        await expect(button).toMatchScreenshot()
      })
    }
  })

  describe('Button States', () => {
    /**
     * TODO: fix tests after official Vitest 4 release
     * currently can't trigger real user events in tests
     */
    it('should correctly render [disabled] button', async () => {
      const screen = render(<Button disabled>Button text</Button>)
      const button = screen.getByRole('button').element()
      await expect(button).toBeVisible()
      await expect(button).toBeDisabled()

      await expect(button).toMatchScreenshot()

      await verifyComputedStyles(
        button,
        scenarios.disabled.expected.css,
        'button:disabled',
      )
    })

    it('should correctly render [loading] button', async () => {
      const screen = render(<Button loading>Button text</Button>)
      const button = screen.getByRole('button').element()
      await expect(button).toBeVisible()
      await expect(button).toBeDisabled()
      await expect(button).toMatchScreenshot()
      await verifyComputedStyles(button, scenarios.loading.expected.css, 'button:loading')
    })

    it.skip('should correctly render [default] button state', async () => {
      const screen = render(<Button>Button text</Button>)
      const button = screen.getByRole('button').element()

      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()
      ;['data-active', 'data-focus', 'data-hover'].forEach(element => {
        expect(button).not.toHaveAttribute(element)
      })

      await expect(button).toMatchScreenshot()
      await verifyComputedStyles(button, scenarios.default.expected.css, 'button:default')
    })

    it.skip('should correctly render [active] button state', async () => {
      const screen = render(<Button data-active='true'>Button text</Button>)
      const button = screen.getByRole('button').element()

      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()

      // Simulate active state
      await button.dispatchEvent(new MouseEvent('mousedown'))
      expect(button).toHaveAttribute('data-active', 'true')

      await expect(button).toMatchScreenshot()
      await verifyComputedStyles(button, scenarios.active.expected.css, 'button:active')
    })

    it.skip('should correctly render [focus] button state', async () => {
      const screen = render(<Button data-focus='true'>Button text</Button>)
      const button = screen.getByRole('button').element()

      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()
      expect(button).toHaveAttribute('data-focus', 'true')

      await expect(button).toMatchScreenshot()
      await verifyComputedStyles(button, scenarios.focus.expected.css, 'button:focus')
    })

    it.skip('should correctly render [hover] button state', async () => {
      const screen = render(<Button data-hover='true'>Button text</Button>)
      const button = screen.getByRole('button').element()

      await expect(button).toBeVisible()
      await expect(button).toBeEnabled()
      expect(button).toHaveAttribute('data-hover', 'true')

      await expect(button).toMatchScreenshot()
      await verifyComputedStyles(button, scenarios.hover.expected.css, 'button:hover')
    })
  })
})

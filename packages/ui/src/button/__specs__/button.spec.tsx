import { page, userEvent } from '@vitest/browser/context'
import { describe, it, expect, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'
import { axe } from 'jest-axe'

describe('Button', () => {
  it('renders with children', async () => {
    const buttonText = 'Click me'
    const { getByRole } = render(<Button>{buttonText}</Button>)
    const button = getByRole('button', { name: buttonText })
    await expect.element(button).toBeInTheDocument()
  })

  it('clicks button', async () => {
    const buttonText = 'Click me'
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>{buttonText}</Button>)

    // Locate and click using Playwright's page object
    const buttonLocator = page.getByRole('button', { name: buttonText })

    // Optional: Assert element exists using Playwright's expect
    await expect(buttonLocator).toBeVisible()

    // Perform the click via Playwright
    await buttonLocator.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button when disabled prop is true', async () => {
    const buttonText = 'Click me'
    const handleClick = vi.fn()
    const { getByRole } = render(
      <Button disabled={true} onClick={handleClick}>
        {buttonText}
      </Button>,
    )
    const button = getByRole('button', { name: buttonText })
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
    try {
      await userEvent.click(button)
    } catch (error) {
      expect(error).toBeDefined()
    }
    expect(handleClick).toHaveBeenCalledTimes(0)
  })

  it('shows loading state', async () => {
    const buttonText = 'Click me'
    const { getByRole, getByTestId } = render(
      <Button loading>{buttonText}</Button>,
    )
    const button = getByRole('button', { name: buttonText })
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
    expect(getByTestId('cui-loader')).toBeInTheDocument()
  })

  it('renders as a link when href is provided', () => {
    const { getByRole } = render(<Button href='/test'>Link</Button>)
    const link = getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className', () => {
    const { getByRole } = render(
      <Button className='custom-class'>Click me</Button>,
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('custom-class')
  })

  it('renders with start and end adornments', () => {
    const { getByRole } = render(
      <Button
        startAdornment={<span>Start</span>}
        endAdornment={<span>End</span>}
      >
        Click me
      </Button>,
    )
    const button = getByRole('button')
    expect(button).toHaveTextContent('StartClick meEnd')
  })

  // ELEMENT_COLOR.forEach(color => {
  //   it(`applies correct --triger-color var for [${color}] color`, () => {
  //     const { getByRole } = render(<Button color={color}>{color}</Button>)
  //     const button = getByRole('button')
  //     const classes = button.className

  //     if (color === 'mono') {
  //       expect(classes).toContain('--trigger-color:theme(colors.black)')
  //       expect(classes).toContain(
  //         '--trigger-color-contrast:theme(colors.white)',
  //       )
  //       return
  //     }

  //     expect(classes).toContain(`--trigger-color:theme(colors.${color})`)
  //   })
  // })

  for (const color of ELEMENT_COLOR) {
    for (const variant of ELEMENT_VARIANTS) {
      it(`matches snapshot for [${color}] color and [${variant}] variant`, async () => {
        const fileName = `button-${color}-${variant}`
        const pathName = ['__image_snapshots__', `${fileName}.png`].join('/')

        const { getByRole } = render(
          <Button color={color} variant={variant}>
            {color} {variant}
          </Button>,
        )

        const button = getByRole('button')
        expect(button).toBeInTheDocument()

        // await page.screenshot({
        //   path: pathName,
        // })

        // const snapshot = readFileSync(pathName)

        // await expect(button).toMatchImageSnapshot({
        //   failureThreshold: 0.01,
        //   failureThresholdType: 'percent',
        //   customSnapshotIdentifier: fileName,
        // })
      })
    }
  }

  it('applies full width styles when fullWidth prop is true', () => {
    const { getByRole } = render(<Button fullWidth>Full Width</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('w-full')
  })

  it('applies uppercase styles when uppercase prop is true', () => {
    const { getByRole } = render(<Button uppercase>Uppercase</Button>)
    const button = getByRole('button')
    expect(button).toHaveClass('uppercase')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // it('maintains focus styles on keyboard navigation', () => {
  //   const { getByRole } = render(<Button>Focus Test</Button>)
  //   const button = getByRole('button')
  //   button.focus()
  //   expect(button).toHaveClass('data-focus:outline')
  // })

  it('handles long content without breaking layout', () => {
    const { getByRole } = render(
      <Button>
        This is a very long button text that should not break the layout or
        cause any visual issues
      </Button>,
    )
    const button = getByRole('button')
    expect(button).toHaveClass('inline-flex')
  })
})

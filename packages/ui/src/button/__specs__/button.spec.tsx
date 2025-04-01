import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { readFileSync } from 'fs'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '..'
import { ELEMENT_COLOR, ELEMENT_VARIANTS } from '../../types'
import path from 'path'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled={true}>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('shows loading state', () => {
    render(<Button loading>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
    expect(screen.getByTestId('cui-loader')).toBeInTheDocument()
  })

  it('renders as a link when href is provided', () => {
    render(<Button href='/test'>Link</Button>)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className', () => {
    render(<Button className='custom-class'>Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('renders with start and end adornments', () => {
    render(
      <Button
        startAdornment={<span>Start</span>}
        endAdornment={<span>End</span>}
      >
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('StartClick meEnd')
  })

  ELEMENT_COLOR.forEach(async color => {
    ELEMENT_VARIANTS.forEach(async variant => {
      it(`matches snapshot for [${color}] color and [${variant}] variant`, async () => {
        const fileName = `button-${color}-${variant}`
        render(
          <Button color={color} variant={variant}>
            {color} {variant}
          </Button>,
        )

        const button = screen.getByRole('button')
        expect(button).toMatchSnapshot()

        const snapshot = readFileSync(
          path.resolve(__dirname, '__image_snapshots__', `${fileName}.png`),
        )

        expect(snapshot).toMatchImageSnapshot({
          failureThreshold: 0.01,
          failureThresholdType: 'percent',
          customSnapshotIdentifier: fileName,
        })
      })
    })
  })

  ELEMENT_COLOR.forEach(color => {
    it(`applies correct --triger-color var for [${color}] color`, () => {
      render(<Button color={color}>{color}</Button>)
      const button = screen.getByRole('button')
      const classes = button.className

      if (color === 'mono') {
        expect(classes).toContain('--trigger-color:theme(colors.black)')
        expect(classes).toContain(
          '--trigger-color-contrast:theme(colors.white)',
        )
        return
      }

      expect(classes).toContain(`--trigger-color:theme(colors.${color})`)
    })
  })

  it('applies full width styles when fullWidth prop is true', () => {
    render(<Button fullWidth>Full Width</Button>)
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })

  it('applies uppercase styles when uppercase prop is true', () => {
    render(<Button uppercase>Uppercase</Button>)
    expect(screen.getByRole('button')).toHaveClass('uppercase')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('maintains focus styles on keyboard navigation', () => {
    render(<Button>Focus Test</Button>)
    const button = screen.getByRole('button')
    button.focus()
    expect(button).toHaveClass('data-focus:outline')
  })

  it('handles long content without breaking layout', () => {
    render(
      <Button>
        This is a very long button text that should not break the layout or
        cause any visual issues
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('inline-flex')
  })
})

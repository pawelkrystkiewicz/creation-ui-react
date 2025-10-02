import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Button } from '..'
import { ELEMENT_COLOR } from '../../types'
import { verifyComputedStyles } from '../../../test/utils/helpers'

describe('Button', () => {
  it('applies custom className', async () => {
    const { getByRole } = await render(
      <Button className='custom-class'>Click me</Button>,
    )
    const button = getByRole('button')
    expect(button).toBeDefined()
    expect(button.classList).toContain('custom-class')
    await verifyComputedStyles(button, { cursor: 'pointer' })
  })

  ;[
    ...ELEMENT_COLOR.map(color => ({
      description: `applies correct --triger-color var for [${color}] color`,
      color,
      expected: color === 'mono'
        ? ['--trigger-color:theme(colors.black)', '--trigger-color-contrast:theme(colors.white)']
        : [`--trigger-color:theme(colors.${color})`],
    })),
  ].forEach(({ description, color, expected }) => {
    it(description, async () => {
      const { getByRole } = await render(<Button color={color}>{color}</Button>)
      const button = getByRole('button')
      const classes = button.className

      expected.forEach(expectedClass => {
        expect(classes).toContain(expectedClass)
      })
    })
  })

  it('applies full width styles when fullWidth prop is true', async () => {
    const { getByRole } = await render(<Button fullWidth>Full Width</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('w-full')
  })

  it('applies uppercase styles when uppercase prop is true', async () => {
    const { getByRole } = await render(<Button uppercase>Uppercase</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('uppercase')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(<Button>Accessible Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

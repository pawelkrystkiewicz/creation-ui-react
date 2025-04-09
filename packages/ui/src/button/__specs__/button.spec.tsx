import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Button } from '..'
import { ELEMENT_COLOR } from '../../types'

describe('Button', () => {
  it('applies custom className', () => {
    const { getByRole } = render(
      <Button className='custom-class'>Click me</Button>,
    )
    const button = getByRole('button')
    expect(button).toBeDefined()
    expect(button.classList).toContain('custom-class')
  })

  ELEMENT_COLOR.forEach(color => {
    it(`applies correct --triger-color var for [${color}] color`, () => {
      const { getByRole } = render(<Button color={color}>{color}</Button>)
      const button = getByRole('button')
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
    const { getByRole } = render(<Button fullWidth>Full Width</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('w-full')
  })

  it('applies uppercase styles when uppercase prop is true', () => {
    const { getByRole } = render(<Button uppercase>Uppercase</Button>)
    const button = getByRole('button')
    expect(button.className).toContain('uppercase')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

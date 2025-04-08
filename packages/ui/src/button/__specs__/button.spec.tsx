// import { axe } from 'jest-axe'
// import { describe, expect, it, vi } from 'vitest'
// import { Button } from '..'
// import { ELEMENT_COLOR } from '../../types'
// import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// describe('Button', () => {
//   it('renders with children', async () => {
//     const buttonText = 'Click me'
//     const { getByRole } = render(<Button>{buttonText}</Button>)
//     const button = getByRole('button', { name: buttonText })
//     await expect.element(button).toBeInTheDocument()
//   })

//   // it('clicks button', async () => {
//   //   const buttonText = 'Click me'
//   //   const handleClick = vi.fn()
//   //   const { getByRole } = render(<Button onClick={handleClick}>{buttonText}</Button>)

//   //   const buttonLocator = getByRole('button', { name: buttonText })

//   //   try {
//   //     await buttonLocator.click()
//   //     await expect(buttonLocator).toBeVisible()
//   //     expect(handleClick).toHaveBeenCalledTimes(1)
//   //   } catch (_error) {
//   //     // do nothing
//   //   }
//   // })

//   // it('disables button when disabled prop is true', async () => {
//   //   const buttonText = 'Click me'
//   //   const handleClick = vi.fn()
//   //   const { getByRole } = render(
//   //     <Button disabled={true} onClick={handleClick}>
//   //       {buttonText}
//   //     </Button>,
//   //   )
//   //   const button = getByRole('button', { name: buttonText })
//   //   expect(button).toBeInTheDocument()
//   //   expect(button).toBeDisabled()
//   //   try {
//   //     await userEvent.click(button)
//   //   } catch (error) {
//   //     expect(error).toBeDefined()
//   //   }
//   //   expect(handleClick).toHaveBeenCalledTimes(0)
//   // })

//   // it('shows loading state', async () => {
//   //   const buttonText = 'Click me'
//   //   const { getByRole, getByTestId } = render(
//   //     <Button loading>{buttonText}</Button>,
//   //   )
//   //   const button = getByRole('button', { name: buttonText })
//   //   expect(button).toBeInTheDocument()
//   //   expect(button).toBeDisabled()
//   //   expect(getByTestId('cui-loader')).toBeInTheDocument()
//   // })

//   // it('renders as a link when href is provided', () => {
//   //   const { getByRole } = render(<Button href='/test'>Link</Button>)
//   //   const link = getByRole('link')
//   //   expect(link).toBeInTheDocument()
//   //   expect(link).toHaveAttribute('href', '/test')
//   // })

//   // it('applies custom className', () => {
//   //   const { getByRole } = render(
//   //     <Button className='custom-class'>Click me</Button>,
//   //   )
//   //   const button = getByRole('button')
//   //   expect(button).toBeInTheDocument()
//   //   expect(button).toHaveClass('custom-class')
//   // })

//   // it('renders with start and end adornments', () => {
//   //   const { getByRole } = render(
//   //     <Button
//   //       startAdornment={<span>Start</span>}
//   //       endAdornment={<span>End</span>}
//   //     >
//   //       Click me
//   //     </Button>,
//   //   )
//   //   const button = getByRole('button')
//   //   expect(button).toHaveTextContent('StartClick meEnd')
//   // })

//   // ELEMENT_COLOR.forEach(color => {
//   //   it(`applies correct --triger-color var for [${color}] color`, () => {
//   //     const { getByRole } = render(<Button color={color}>{color}</Button>)
//   //     const button = getByRole('button')
//   //     const classes = button.element().className

//   //     if (color === 'mono') {
//   //       expect(classes).toContain('--trigger-color:theme(colors.black)')
//   //       expect(classes).toContain(
//   //         '--trigger-color-contrast:theme(colors.white)',
//   //       )
//   //       return
//   //     }

//   //     expect(classes).toContain(`--trigger-color:theme(colors.${color})`)
//   //   })
//   // })

//   // it('applies full width styles when fullWidth prop is true', () => {
//   //   const { getByRole } = render(<Button fullWidth>Full Width</Button>)
//   //   const button = getByRole('button')
//   //   expect(button).toHaveClass('w-full')
//   // })

//   // it('applies uppercase styles when uppercase prop is true', () => {
//   //   const { getByRole } = render(<Button uppercase>Uppercase</Button>)
//   //   const button = getByRole('button')
//   //   expect(button).toHaveClass('uppercase')
//   // })

//   // it('has no accessibility violations', async () => {
//   //   const { container } = render(<Button>Accessible Button</Button>)
//   //   const results = await axe(container)
//   //   expect(results).toHaveNoViolations()
//   // })

//   // // it('maintains focus styles on keyboard navigation', () => {
//   // //   const { getByRole } = render(<Button>Focus Test</Button>)
//   // //   const button = getByRole('button')
//   // //   button.focus()
//   // //   expect(button).toHaveClass('data-focus:outline')
//   // // })
// })

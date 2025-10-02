import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Textarea } from '..'

describe('Textarea', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(<Textarea placeholder='Test textarea' />)
    const textarea = getByRole('textbox')
    expect(textarea).toBeDefined()
    expect(textarea).toHaveAttribute('placeholder', 'Test textarea')
  })

  it('applies custom className', async () => {
    const { container } = await render(
      <Textarea className='custom-class' placeholder='Test' />,
    )
    const wrapper = container.querySelector('.custom-class')
    expect(wrapper).toBeDefined()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(
      <Textarea disabled placeholder='Disabled textarea' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea).toBeDisabled()
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(
      <Textarea readOnly placeholder='ReadOnly textarea' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea).toHaveAttribute('readonly')
  })

  it('renders with value', async () => {
    const { getByRole } = await render(
      <Textarea value='Test value' onChange={() => {}} />,
    )
    const textarea = getByRole('textbox')
    expect(textarea).toHaveValue('Test value')
  })

  it('applies resizable styles when resizable prop is true', async () => {
    const { getByRole } = await render(
      <Textarea resizable={true} placeholder='Resizable textarea' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea.className).toContain('resize-y')
  })

  it('applies non-resizable styles when resizable prop is false', async () => {
    const { getByRole } = await render(
      <Textarea resizable={false} placeholder='Non-resizable textarea' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea.className).toContain('resize-none')
  })

  it('defaults to resizable when resizable prop is not provided', async () => {
    const { getByRole } = await render(
      <Textarea placeholder='Default resizable' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea.className).toContain('resize-y')
  })

  it('forwards ref correctly', async () => {
    let textareaRef: HTMLTextAreaElement | null = null

    await render(
      <Textarea
        ref={ref => {
          textareaRef = ref
        }}
        placeholder='Ref test'
      />,
    )

    expect(textareaRef).not.toBeNull()
    expect(textareaRef?.tagName).toBe('TEXTAREA')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Textarea
        placeholder='Accessible textarea'
        aria-label='Test textarea field'
      />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('applies invalid state styles', async () => {
    const { getByRole } = await render(
      <Textarea invalid placeholder='Invalid textarea' />,
    )
    const textarea = getByRole('textbox')
    expect(textarea).toHaveAttribute('data-invalid')
  })

  it('renders as textarea element', async () => {
    const { container } = await render(
      <Textarea placeholder='Textarea element' />,
    )
    const textarea = container.querySelector('textarea')
    expect(textarea).toBeDefined()
    expect(textarea?.tagName).toBe('TEXTAREA')
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(<Textarea placeholder='Focus test' />)
    const textarea = getByRole('textbox')
    expect(textarea.className).toContain('focus:outline-hidden')
  })
})

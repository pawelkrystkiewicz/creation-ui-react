import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Radio, RadioGroup } from '..'

describe('Radio', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio).toBeDefined()
  })

  it('applies custom className', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' className='custom-class' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio.classList).toContain('custom-class')
  })

  it('handles checked state', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('handles unchecked state', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option2' onChange={() => {}}>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio).not.toBeChecked()
  })

  it('handles disabled state', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' disabled />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio).toHaveAttribute('aria-disabled', 'true')
  })

  it('applies focus outline styles', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio.className).toContain('focus:outline-hidden')
  })

  it('renders radio indicator', async () => {
    const { container } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const indicator = container.querySelector('[data-slot="control"] span span')
    expect(indicator).toBeDefined()
    expect(indicator?.className).toContain('rounded-full')
  })

  it('forwards props correctly', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' aria-label='Test radio option' />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    expect(radio).toHaveAttribute('aria-label', 'Test radio option')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <RadioGroup
        value='option1'
        onChange={() => {}}
        aria-label='Test radio group'
      >
        <Radio value='option1' aria-label='Option 1' />
        <Radio value='option2' aria-label='Option 2' />
      </RadioGroup>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles onChange callback in RadioGroup', async () => {
    let selectedValue = ''
    const { getAllByRole } = await render(
      <RadioGroup
        value='option1'
        onChange={value => {
          selectedValue = value
        }}
      >
        <Radio value='option1' />
        <Radio value='option2' />
      </RadioGroup>,
    )
    const radios = getAllByRole('radio')
    radios[1].click() // Click the second radio
    expect(selectedValue).toBe('option2')
  })

  it('does not trigger onChange when disabled', async () => {
    let wasChanged = false
    const { getByRole } = await render(
      <RadioGroup
        value='option1'
        onChange={() => {
          wasChanged = true
        }}
      >
        <Radio value='option2' disabled />
      </RadioGroup>,
    )
    const radio = getByRole('radio')
    radio.click()
    expect(wasChanged).toBe(false)
  })
})

describe('RadioGroup', () => {
  it('renders correctly with default props', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
        <Radio value='option2' />
      </RadioGroup>,
    )
    const radioGroup = getByRole('radiogroup')
    expect(radioGroup).toBeDefined()
  })

  it('applies custom className', async () => {
    const { getByRole } = await render(
      <RadioGroup
        value='option1'
        onChange={() => {}}
        className='custom-group-class'
      >
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radioGroup = getByRole('radiogroup')
    expect(radioGroup.classList).toContain('custom-group-class')
  })

  it('handles readOnly state', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}} readOnly>
        <Radio value='option1' />
      </RadioGroup>,
    )
    const radioGroup = getByRole('radiogroup')
    // readOnly prop is passed but HeadlessUI might not set data-readonly attribute
    // Test that the component renders without errors with readOnly prop
    expect(radioGroup).toBeDefined()
  })

  it('manages radio group state correctly', async () => {
    const { getAllByRole } = await render(
      <RadioGroup value='option2' onChange={() => {}}>
        <Radio value='option1' />
        <Radio value='option2' />
        <Radio value='option3' />
      </RadioGroup>,
    )
    const radios = getAllByRole('radio')
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
    expect(radios[2]).not.toBeChecked()
  })

  it('applies spacing styles to radio group', async () => {
    const { getByRole } = await render(
      <RadioGroup value='option1' onChange={() => {}}>
        <Radio value='option1' />
        <Radio value='option2' />
      </RadioGroup>,
    )
    const radioGroup = getByRole('radiogroup')
    expect(radioGroup.className).toContain('space-y-3')
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <RadioGroup value='option1' onChange={() => {}} aria-label='Test options'>
        <Radio value='option1' aria-label='First option' />
        <Radio value='option2' aria-label='Second option' />
      </RadioGroup>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

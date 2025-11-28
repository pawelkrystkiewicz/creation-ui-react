import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Description } from '..'
import { Field } from '../../field'

describe('Description Visual Tests', () => {
  it('default description renders correctly', async () => {
    const { getByText } = render(
      <Field>
        <Description>This is a description text</Description>
      </Field>
    )
    const element = getByText('This is a description text')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with custom className', async () => {
    const { getByText } = render(
      <Field>
        <Description className="text-xs italic">
          Custom styled description
        </Description>
      </Field>
    )
    const element = getByText('Custom styled description')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with data-disabled attribute', async () => {
    const { getByText } = render(
      <Field disabled>
        <Description>Disabled description</Description>
      </Field>
    )
    const element = getByText('Disabled description')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders long description text', async () => {
    const { getByText } = render(
      <Field>
        <Description>
          This is a very long description text that provides additional context
          and information to help users understand the purpose of the form field
          or component it is associated with.
        </Description>
      </Field>
    )
    const element = getByText(/This is a very long description/)
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with HTML content', async () => {
    const { container } = render(
      <Field>
        <Description>
          Description with <strong>bold</strong> and <em>italic</em> text
        </Description>
      </Field>
    )
    const element = container.querySelector('[data-slot="description"]')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })
})

import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Description } from '..'

describe('Description Visual Tests', () => {
  it('default description renders correctly', async () => {
    const { getByText } = render(
      <Description>This is a description text</Description>
    )
    const element = getByText('This is a description text')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with custom className', async () => {
    const { getByText } = render(
      <Description className="text-xs italic">
        Custom styled description
      </Description>
    )
    const element = getByText('Custom styled description')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with data-disabled attribute', async () => {
    const { getByText } = render(
      <Description data-disabled>Disabled description</Description>
    )
    const element = getByText('Disabled description')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('data-disabled')
    await expect(element).toMatchScreenshot()
  })

  it('renders long description text', async () => {
    const { getByText } = render(
      <Description>
        This is a very long description text that provides additional context
        and information to help users understand the purpose of the form field
        or component it is associated with.
      </Description>
    )
    const element = getByText(/This is a very long description/)
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders description with HTML content', async () => {
    const { container } = render(
      <Description>
        Description with <strong>bold</strong> and <em>italic</em> text
      </Description>
    )
    const element = container.querySelector('[data-slot="description"]')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })
})

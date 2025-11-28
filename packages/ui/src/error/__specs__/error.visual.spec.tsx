import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Error } from '..'
import { Field } from '../../field'

describe('Error Visual Tests', () => {
  it('default error renders correctly', async () => {
    const { getByText } = render(
      <Field>
        <Error>This field is required</Error>
      </Field>
    )
    const element = getByText('This field is required')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders error with custom className', async () => {
    const { getByText } = render(
      <Field>
        <Error className="text-xs font-bold">Custom styled error</Error>
      </Field>
    )
    const element = getByText('Custom styled error')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders error with data-disabled attribute', async () => {
    const { getByText } = render(
      <Field disabled>
        <Error>Disabled error</Error>
      </Field>
    )
    const element = getByText('Disabled error')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders long error message', async () => {
    const { getByText } = render(
      <Field>
        <Error>
          This is a very long error message that explains in detail what went
          wrong and how the user can fix the issue. Please check your input and
          try again.
        </Error>
      </Field>
    )
    const element = getByText(/This is a very long error message/)
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders multiple error messages', async () => {
    const { container } = render(
      <div>
        <Field>
          <Error>Email is required</Error>
        </Field>
        <Field>
          <Error>Password must be at least 8 characters</Error>
        </Field>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })
})

import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Show } from '../show'

describe('Show', async () => {
  it('renders children when when prop is true', async () => {
    const { getByText } = await render(
      <Show when={true}>
        <div>Test content</div>
      </Show>,
    )
    const element = getByText('Test content')
    expect(element).toBeDefined()
  })

  it('renders fallback when when prop is false', async () => {
    const { getByText } = await render(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('renders null fallback when when prop is false and no fallback provided', async () => {
    const { container } = await render(
      <Show when={false}>
        <div>Test content</div>
      </Show>,
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders children when when prop is truthy value', async () => {
    const { getByText } = await render(
      // @ts-expect-error - truthy string is not a boolean
      <Show when='truthy string'>
        <div>Test content</div>
      </Show>,
    )
    const element = getByText('Test content')
    expect(element).toBeDefined()
  })

  it('renders fallback when when prop is falsy value', async () => {
    const { getByText } = await render(
      // @ts-expect-error - 0 is not a boolean
      <Show when={0} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('renders children when when prop is undefined but defaults to falsy', async () => {
    const { getByText } = await render(
      <Show fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('handles complex children elements', async () => {
    const { getByTestId } = await render(
      <Show when={true}>
        <div data-testid='complex-child'>
          <span>Nested content</span>
          <button>Click me</button>
        </div>
      </Show>,
    )
    const element = getByTestId('complex-child')
    expect(element).toBeDefined()
    expect(element.querySelector('span')).toHaveTextContent('Nested content')
    expect(element.querySelector('button')).toHaveTextContent('Click me')
  })

  it('handles complex fallback elements', async () => {
    const { getByTestId } = await render(
      <Show
        when={false}
        fallback={
          <div data-testid='complex-fallback'>
            <span>Fallback nested content</span>
            <button>Fallback button</button>
          </div>
        }
      >
        <div>Test content</div>
      </Show>,
    )
    const element = getByTestId('complex-fallback')
    expect(element).toBeDefined()
    expect(element.querySelector('span')).toHaveTextContent(
      'Fallback nested content',
    )
    expect(element.querySelector('button')).toHaveTextContent('Fallback button')
  })

  it('has no accessibility violations when showing children', async () => {
    const { container } = await render(
      <Show when={true}>
        <div role='main'>Accessible content</div>
      </Show>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when showing fallback', async () => {
    const { container } = await render(
      <Show when={false} fallback={<div role='alert'>Accessible fallback</div>}>
        <div>Test content</div>
      </Show>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('re-renders when when prop changes from false to true', async () => {
    const { getByText, rerender, queryByText } = await render(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )

    expect(getByText('Fallback content')).toBeDefined()
    expect(queryByText('Test content')).toBeNull()

    rerender(
      <Show when={true} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )

    expect(getByText('Test content')).toBeDefined()
    expect(queryByText('Fallback content')).toBeNull()
  })

  it('re-renders when when prop changes from true to false', async () => {
    const { getByText, rerender, queryByText } = await render(
      <Show when={true} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )

    expect(getByText('Test content')).toBeDefined()
    expect(queryByText('Fallback content')).toBeNull()

    rerender(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>,
    )

    expect(getByText('Fallback content')).toBeDefined()
    expect(queryByText('Test content')).toBeNull()
  })
})

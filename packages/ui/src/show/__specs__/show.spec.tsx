import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Show } from '../show'

describe('Show', () => {
  it('renders children when when prop is true', () => {
    const { getByText } = render(
      <Show when={true}>
        <div>Test content</div>
      </Show>
    )
    const element = getByText('Test content')
    expect(element).toBeDefined()
  })

  it('renders fallback when when prop is false', () => {
    const { getByText } = render(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('renders null fallback when when prop is false and no fallback provided', () => {
    const { container } = render(
      <Show when={false}>
        <div>Test content</div>
      </Show>
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders children when when prop is truthy value', () => {
    const { getByText } = render(
      <Show when="truthy string">
        <div>Test content</div>
      </Show>
    )
    const element = getByText('Test content')
    expect(element).toBeDefined()
  })

  it('renders fallback when when prop is falsy value', () => {
    const { getByText } = render(
      <Show when={0} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('renders children when when prop is undefined but defaults to falsy', () => {
    const { getByText } = render(
      <Show fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )
    const element = getByText('Fallback content')
    expect(element).toBeDefined()
  })

  it('handles complex children elements', () => {
    const { getByTestId } = render(
      <Show when={true}>
        <div data-testid="complex-child">
          <span>Nested content</span>
          <button>Click me</button>
        </div>
      </Show>
    )
    const element = getByTestId('complex-child')
    expect(element).toBeDefined()
    expect(element.querySelector('span')).toHaveTextContent('Nested content')
    expect(element.querySelector('button')).toHaveTextContent('Click me')
  })

  it('handles complex fallback elements', () => {
    const { getByTestId } = render(
      <Show
        when={false}
        fallback={
          <div data-testid="complex-fallback">
            <span>Fallback nested content</span>
            <button>Fallback button</button>
          </div>
        }
      >
        <div>Test content</div>
      </Show>
    )
    const element = getByTestId('complex-fallback')
    expect(element).toBeDefined()
    expect(element.querySelector('span')).toHaveTextContent('Fallback nested content')
    expect(element.querySelector('button')).toHaveTextContent('Fallback button')
  })

  it('has no accessibility violations when showing children', async () => {
    const { container } = render(
      <Show when={true}>
        <div role="main">Accessible content</div>
      </Show>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has no accessibility violations when showing fallback', async () => {
    const { container } = render(
      <Show when={false} fallback={<div role="alert">Accessible fallback</div>}>
        <div>Test content</div>
      </Show>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('re-renders when when prop changes from false to true', () => {
    const { getByText, rerender, queryByText } = render(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )
    
    expect(getByText('Fallback content')).toBeDefined()
    expect(queryByText('Test content')).toBeNull()

    rerender(
      <Show when={true} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )

    expect(getByText('Test content')).toBeDefined()
    expect(queryByText('Fallback content')).toBeNull()
  })

  it('re-renders when when prop changes from true to false', () => {
    const { getByText, rerender, queryByText } = render(
      <Show when={true} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )
    
    expect(getByText('Test content')).toBeDefined()
    expect(queryByText('Fallback content')).toBeNull()

    rerender(
      <Show when={false} fallback={<div>Fallback content</div>}>
        <div>Test content</div>
      </Show>
    )

    expect(getByText('Fallback content')).toBeDefined()
    expect(queryByText('Test content')).toBeNull()
  })
})
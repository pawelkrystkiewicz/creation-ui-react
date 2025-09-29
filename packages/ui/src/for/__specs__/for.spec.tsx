import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { For } from '../for'

describe('For', async () => {
  it('renders correctly with array of items', async () => {
    const items = ['item1', 'item2', 'item3']
    const { getByText } = await render(
      <For each={items}>{(item, index) => <div key={index}>{item}</div>}</For>,
    )

    expect(getByText('item1')).toBeDefined()
    expect(getByText('item2')).toBeDefined()
    expect(getByText('item3')).toBeDefined()
  })

  it('renders with index parameter', async () => {
    const items = ['a', 'b', 'c']
    const { getByText } = await render(
      <For each={items}>
        {(item, index) => (
          <div key={index}>
            {item}-{index}
          </div>
        )}
      </For>,
    )

    expect(getByText('a-0')).toBeDefined()
    expect(getByText('b-1')).toBeDefined()
    expect(getByText('c-2')).toBeDefined()
  })

  it('renders empty when array is empty', async () => {
    const { container } = await render(
      <For each={[]}>{(item, index) => <div key={index}>{item}</div>}</For>,
    )

    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when each prop is undefined', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const { container } = await render(
      <For each={undefined}>
        {/* @ts-expect-error - item is undefined */}
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )

    expect(container.firstChild).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith(
      'CUI: The `each` prop of [For] is undefined',
    )

    consoleSpy.mockRestore()
  })

  it('logs error when children prop is undefined', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<For each={['item']}>{undefined}</For>)

    expect(consoleSpy).toHaveBeenCalledWith(
      'CUI: The `children` method of [For] is undefined',
    )

    consoleSpy.mockRestore()
  })

  it('handles complex objects in array', async () => {
    const items = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ]

    const { getByText } = await render(
      <For each={items}>
        {(item, index) => (
          <div key={item.id}>
            {item.name} is {item.age} years old (index: {index})
          </div>
        )}
      </For>,
    )

    expect(getByText('John is 25 years old (index: 0)')).toBeDefined()
    expect(getByText('Jane is 30 years old (index: 1)')).toBeDefined()
  })

  it('handles nested elements', async () => {
    const items = ['apple', 'banana', 'cherry']

    const { getByTestId } = await render(
      <For each={items}>
        {(item, index) => (
          <div key={index} data-testid={`item-${index}`}>
            <span>Fruit: {item}</span>
            <button>Select {item}</button>
          </div>
        )}
      </For>,
    )

    expect(getByTestId('item-0')).toBeDefined()
    expect(getByTestId('item-1')).toBeDefined()
    expect(getByTestId('item-2')).toBeDefined()

    expect(getByTestId('item-0').querySelector('span')).toHaveTextContent(
      'Fruit: apple',
    )
    expect(getByTestId('item-0').querySelector('button')).toHaveTextContent(
      'Select apple',
    )
  })

  it('re-renders when each prop changes', async () => {
    const { getByText, rerender, queryByText } = await render(
      <For each={['item1']}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )

    expect(getByText('item1')).toBeDefined()

    rerender(
      <For each={['item2', 'item3']}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )

    expect(queryByText('item1')).toBeNull()
    expect(getByText('item2')).toBeDefined()
    expect(getByText('item3')).toBeDefined()
  })

  it('handles single item array', async () => {
    const items = ['single-item']

    const { getByText } = await render(
      <For each={items}>
        {(item, index) => <div key={index}>Only: {item}</div>}
      </For>,
    )

    expect(getByText('Only: single-item')).toBeDefined()
  })

  it('preserves component identity with proper keys', async () => {
    const items = [
      { id: 'a', value: 'first' },
      { id: 'b', value: 'second' },
    ]

    const { container } = await render(
      <For each={items}>
        {(item, index) => (
          <div key={item.id} data-id={item.id}>
            {item.value}
          </div>
        )}
      </For>,
    )

    const firstDiv = container.querySelector('[data-id="a"]')
    const secondDiv = container.querySelector('[data-id="b"]')

    expect(firstDiv).toHaveTextContent('first')
    expect(secondDiv).toHaveTextContent('second')
  })

  it('has no accessibility violations', async () => {
    const items = ['accessible1', 'accessible2']

    const { container } = await render(
      <div role='list'>
        <For each={items}>
          {(item, index) => (
            <div key={index} role='listitem'>
              {item}
            </div>
          )}
        </For>
      </div>,
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles different data types in array', async () => {
    const items = [1, 'string', { prop: 'object' }, true, null]

    const { getByText } = await render(
      <For each={items}>
        {(item, index) => (
          <div key={index}>
            {typeof item === 'object' && item !== null
              ? JSON.stringify(item)
              : String(item)}
          </div>
        )}
      </For>,
    )

    expect(getByText('1')).toBeDefined()
    expect(getByText('string')).toBeDefined()
    expect(getByText('{"prop":"object"}')).toBeDefined()
    expect(getByText('true')).toBeDefined()
    expect(getByText('null')).toBeDefined()
  })

  it('handles large arrays efficiently', async () => {
    const items = Array.from({ length: 100 }, (_, i) => `item-${i}`)

    const { getByText } = await render(
      <For each={items}>{(item, index) => <div key={index}>{item}</div>}</For>,
    )

    expect(getByText('item-0')).toBeDefined()
    expect(getByText('item-50')).toBeDefined()
    expect(getByText('item-99')).toBeDefined()
  })

  it('maintains memoization with same props', async () => {
    const items = ['test']
    const children = vi.fn((item: string, index: number) => (
      <div key={index}>{item}</div>
    ))

    const { rerender } = await render(<For each={items}>{children}</For>)

    expect(children).toHaveBeenCalledTimes(1)

    // Re-render with same props - memo should prevent re-execution
    rerender(<For each={items}>{children}</For>)

    // For component is memoized, so children shouldn't be called again with same props
    expect(children).toHaveBeenCalledTimes(1)
  })
})

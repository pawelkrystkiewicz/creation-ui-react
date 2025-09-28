import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Show } from '../show'

describe('Show Visual Tests', () => {
  it('default component renders correctly when condition is true', async () => {
    const screen = await render(
      <Show when={true}>
        <div style={{ padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
          Content is visible
        </div>
      </Show>
    )
    const element = screen.getByText('Content is visible').element()
    await expect(element).toMatchScreenshot()
  })

  it('renders fallback correctly when condition is false', async () => {
    const screen = await render(
      <Show 
        when={false} 
        fallback={
          <div style={{ padding: '16px', backgroundColor: '#ffe6e6', borderRadius: '4px', color: '#d63384' }}>
            Fallback content displayed
          </div>
        }
      >
        <div>This content is hidden</div>
      </Show>
    )
    const element = screen.getByText('Fallback content displayed').element()
    await expect(element).toMatchScreenshot()
  })

  it('renders nothing when condition is false and no fallback', async () => {
    const screen = await render(
      <div data-testid="empty-container" style={{ padding: '16px', border: '1px solid #ccc', minHeight: '50px' }}>
        <Show when={false}>
          <div>Hidden content</div>
        </Show>
      </div>
    )
    const container = screen.getByTestId('empty-container').element()
    await expect(container).toMatchScreenshot()
  })

  it('renders complex children with styling', async () => {
    const screen = await render(
      <Show when={true}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e7f3ff', 
          borderRadius: '8px',
          border: '2px solid #0066cc'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Header Content</h3>
          <p style={{ margin: '0', color: '#333' }}>This is a complex child element with multiple elements.</p>
          <button style={{ 
            marginTop: '10px', 
            padding: '8px 16px', 
            backgroundColor: '#0066cc', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px' 
          }}>
            Action Button
          </button>
        </div>
      </Show>
    )
    const element = screen.getByText('Header Content').element().parentElement!
    await expect(element).toMatchScreenshot()
  })

  it('renders complex fallback with styling', async () => {
    const screen = await render(
      <Show 
        when={false}
        fallback={
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#fff3cd', 
            borderRadius: '8px',
            border: '2px solid #ffc107'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#856404' }}>Warning: No Content</h3>
            <p style={{ margin: '0', color: '#856404' }}>The requested content is not available at this time.</p>
            <button style={{ 
              marginTop: '10px', 
              padding: '8px 16px', 
              backgroundColor: '#ffc107', 
              color: '#212529', 
              border: 'none', 
              borderRadius: '4px' 
            }}>
              Retry
            </button>
          </div>
        }
      >
        <div>This content should not be visible</div>
      </Show>
    )
    const element = screen.getByText('Warning: No Content').element().parentElement!
    await expect(element).toMatchScreenshot()
  })

  it('renders list items conditionally', async () => {
    const items = [
      { id: 1, name: 'Visible Item 1', show: true },
      { id: 2, name: 'Hidden Item', show: false },
      { id: 3, name: 'Visible Item 2', show: true }
    ]

    const screen = await render(
      <div style={{ padding: '16px' }}>
        {items.map(item => (
          <Show key={item.id} when={item.show}>
            <div style={{ 
              padding: '8px 12px', 
              margin: '4px 0', 
              backgroundColor: '#f8f9fa', 
              border: '1px solid #dee2e6',
              borderRadius: '4px'
            }}>
              {item.name}
            </div>
          </Show>
        ))}
      </div>
    )
    const container = screen.getByText('Visible Item 1').element().parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders nested Show components', async () => {
    const screen = await render(
      <Show when={true}>
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Outer Content</h3>
          <Show when={false} fallback={<span style={{ color: '#6c757d' }}>Inner fallback</span>}>
            <span>Inner content</span>
          </Show>
        </div>
      </Show>
    )
    const element = screen.getByText('Outer Content').element().parentElement!
    await expect(element).toMatchScreenshot()
  })
})
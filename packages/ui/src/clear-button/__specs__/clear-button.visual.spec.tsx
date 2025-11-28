import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { ClearButton } from '..'

describe('ClearButton Visual Tests', () => {
  it('default clear button renders correctly', async () => {
    const { getByTestId } = render(<ClearButton />)
    const element = getByTestId('cui-clear-button')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('aria-label', 'Clear selection')
    expect(element).toHaveAttribute('type', 'button')
    await expect(element).toMatchScreenshot()
  })

  it('renders clear button with onClick handler', async () => {
    const onClick = vi.fn()
    const { getByTestId } = render(<ClearButton onClick={onClick} />)
    const element = getByTestId('cui-clear-button')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders clear button with custom className', async () => {
    const { getByTestId } = render(
      <ClearButton className="text-destructive size-8" />
    )
    const element = getByTestId('cui-clear-button')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders clear button with data-hover attribute', async () => {
    const { getByTestId } = render(<ClearButton data-hover="true" />)
    const element = getByTestId('cui-clear-button')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('data-hover', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('renders clear button in context', async () => {
    const { container } = render(
      <div className="flex items-center gap-2 p-2 border rounded">
        <span>Selected item</span>
        <ClearButton />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })
})

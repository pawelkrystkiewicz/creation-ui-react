import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { DropdownChevron } from '..'

describe('DropdownChevron Visual Tests', () => {
  it('default dropdown chevron renders correctly (closed state)', async () => {
    const { container } = render(<DropdownChevron />)
    const element = container.querySelector('svg')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders dropdown chevron in open state', async () => {
    const { container } = render(<DropdownChevron open />)
    const element = container.querySelector('svg')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders dropdown chevron in disabled state', async () => {
    const { container } = render(<DropdownChevron disabled />)
    const element = container.querySelector('svg')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders dropdown chevron open and disabled', async () => {
    const { container } = render(<DropdownChevron open disabled />)
    const element = container.querySelector('svg')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders dropdown chevron with custom className', async () => {
    const { container } = render(
      <DropdownChevron className="text-primary size-8" />
    )
    const element = container.querySelector('svg')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders dropdown chevron in context', async () => {
    const { container } = render(
      <button className="flex items-center gap-2 px-4 py-2 border rounded">
        <span>Select option</span>
        <DropdownChevron />
      </button>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders dropdown chevron open in context', async () => {
    const { container } = render(
      <button className="flex items-center gap-2 px-4 py-2 border rounded bg-primary-100">
        <span>Select option</span>
        <DropdownChevron open />
      </button>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })
})

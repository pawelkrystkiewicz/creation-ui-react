import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Link } from '..'

describe('Link Visual Tests', () => {
  it('default link renders correctly', async () => {
    const { getByRole } = render(<Link href="/home">Home</Link>)
    const element = getByRole('link')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('href', '/home')
    await expect(element).toMatchScreenshot()
  })

  it('renders link with external href', async () => {
    const { getByRole } = render(
      <Link href="https://example.com">External Link</Link>
    )
    const element = getByRole('link')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('href', 'https://example.com')
    await expect(element).toMatchScreenshot()
  })

  it('renders link with custom className', async () => {
    const { getByRole } = render(
      <Link href="/styled" className="text-primary underline font-bold">
        Styled Link
      </Link>
    )
    const element = getByRole('link')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders link with target blank', async () => {
    const { getByRole } = render(
      <Link href="/new-tab" target="_blank" rel="noopener noreferrer">
        Open in new tab
      </Link>
    )
    const element = getByRole('link')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('target', '_blank')
    await expect(element).toMatchScreenshot()
  })

  it('renders link with data-hover attribute', async () => {
    const { getByRole } = render(
      <Link href="/hover" data-hover="true">
        Hovered Link
      </Link>
    )
    const element = getByRole('link')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('data-hover', 'true')
    await expect(element).toMatchScreenshot()
  })

  it('renders link with data-focus attribute', async () => {
    const { getByRole } = render(
      <Link href="/focus" data-focus="true">
        Focused Link
      </Link>
    )
    const element = getByRole('link')
    expect(element).toBeVisible()
    expect(element).toHaveAttribute('data-focus', 'true')
    await expect(element).toMatchScreenshot()
  })
})

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { DarkModeToggle } from '..'

describe('DarkModeToggle Visual Tests', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('default dark mode toggle renders correctly (light theme)', async () => {
    const { container } = render(<DarkModeToggle defaultTheme="light" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeVisible()
    await expect(svg).toMatchScreenshot()
  })

  it('renders dark mode toggle with dark theme', async () => {
    localStorage.setItem('theme', 'dark')
    const { container } = render(<DarkModeToggle defaultTheme="dark" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeVisible()
    await expect(svg).toMatchScreenshot()
  })

  describe('Sizes', () => {
    const sizes = [16, 24, 32, 48] as const

    for (const size of sizes) {
      it(`renders with size ${size}px`, async () => {
        const { container } = render(
          <DarkModeToggle size={size} defaultTheme="light" />
        )
        const svg = container.querySelector('svg')
        expect(svg).toBeVisible()
        await expect(svg).toMatchScreenshot()
      })
    }
  })

  describe('Custom colors', () => {
    it('renders with custom sun color', async () => {
      const { container } = render(
        <DarkModeToggle sunColor="orange" defaultTheme="light" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeVisible()
      await expect(svg).toMatchScreenshot()
    })

    it('renders with custom moon color', async () => {
      localStorage.setItem('theme', 'dark')
      const { container } = render(
        <DarkModeToggle moonColor="yellow" defaultTheme="dark" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeVisible()
      await expect(svg).toMatchScreenshot()
    })

    it('renders with both custom colors', async () => {
      const { container } = render(
        <DarkModeToggle sunColor="red" moonColor="blue" defaultTheme="light" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeVisible()
      await expect(svg).toMatchScreenshot()
    })
  })

  describe('Callback', () => {
    it('renders with onModeChange callback', async () => {
      const onModeChange = vi.fn()
      const { container } = render(
        <DarkModeToggle onModeChange={onModeChange} defaultTheme="light" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeVisible()
      await expect(svg).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders with custom style', async () => {
      const { container } = render(
        <DarkModeToggle
          style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}
          defaultTheme="light"
        />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeVisible()
      await expect(svg).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders dark mode toggle in header context', async () => {
      const { container } = render(
        <header className="flex items-center justify-between p-4 border-b">
          <span className="font-bold">My App</span>
          <DarkModeToggle defaultTheme="light" />
        </header>
      )
      expect(container).toBeVisible()
      await expect(container).toMatchScreenshot()
    })
  })
})

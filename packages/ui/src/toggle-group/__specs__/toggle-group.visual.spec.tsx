import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { ToggleGroup } from '..'

const defaultOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
]

describe('ToggleGroup Visual Tests', () => {
  it('default toggle group renders correctly', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <ToggleGroup options={defaultOptions} onChange={onChange} />
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Selection states', () => {
    it('renders with first option selected', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={defaultOptions}
          value="opt1"
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with middle option selected', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={defaultOptions}
          value="opt2"
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with last option selected', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={defaultOptions}
          value="opt3"
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Disabled state', () => {
    it('renders disabled toggle group', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup options={defaultOptions} disabled onChange={onChange} />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders disabled toggle group with selection', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={defaultOptions}
          value="opt2"
          disabled
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Option count variations', () => {
    it('renders toggle group with 2 options', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ]}
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders toggle group with 4 options', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={[
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'XL', value: 'xl' },
          ]}
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders toggle group with many options', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={[
            { label: 'Mon', value: 'mon' },
            { label: 'Tue', value: 'tue' },
            { label: 'Wed', value: 'wed' },
            { label: 'Thu', value: 'thu' },
            { label: 'Fri', value: 'fri' },
            { label: 'Sat', value: 'sat' },
            { label: 'Sun', value: 'sun' },
          ]}
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Label variations', () => {
    it('renders toggle group with short labels', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' },
          ]}
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders toggle group with long labels', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={[
            { label: 'First Option', value: 'first' },
            { label: 'Second Option', value: 'second' },
            { label: 'Third Option', value: 'third' },
          ]}
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders toggle group with custom className', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <ToggleGroup
          options={defaultOptions}
          className="shadow-lg"
          onChange={onChange}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})

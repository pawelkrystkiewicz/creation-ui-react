import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { DatePicker } from '..'

describe('DatePicker Visual Tests', () => {
  it('renders date picker in closed state', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <div className="p-4">
        <DatePicker onChange={onChange} placeholder="Select a date" />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders date picker with selected date', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <div className="p-4">
        <DatePicker
          value={new Date(2024, 0, 15)}
          onChange={onChange}
          placeholder="Select a date"
        />
      </div>
    )
    await expect(container).toMatchScreenshot()
  })

  describe('Input props', () => {
    it('renders disabled date picker', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            disabled
            value={new Date(2024, 0, 15)}
            onChange={onChange}
            placeholder="Select a date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders readOnly date picker', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            readOnly
            value={new Date(2024, 0, 15)}
            onChange={onChange}
            placeholder="Select a date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders required date picker', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            required
            onChange={onChange}
            placeholder="Select a date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Clearable', () => {
    it('renders date picker with clear button when has value', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            value={new Date(2024, 0, 15)}
            onChange={onChange}
            placeholder="Select a date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders date picker in form context', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Event Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter event name"
            />
          </div>
          <DatePicker
            onChange={onChange}
            placeholder="Select event date"
          />
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Enter description"
              rows={3}
            />
          </div>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders multiple date pickers (date range)', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 flex gap-4">
          <DatePicker
            value={new Date(2024, 0, 10)}
            onChange={onChange}
            placeholder="From"
          />
          <DatePicker
            value={new Date(2024, 0, 20)}
            onChange={onChange}
            placeholder="To"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})

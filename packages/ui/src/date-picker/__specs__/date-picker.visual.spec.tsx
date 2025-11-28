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
    it('renders date picker with label', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            label="Birth Date"
            onChange={onChange}
            placeholder="Select birth date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders date picker with helper text', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            label="Start Date"
            helperText="Choose a date in the future"
            onChange={onChange}
            placeholder="Select start date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders date picker with error', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            label="Due Date"
            error="This field is required"
            onChange={onChange}
            placeholder="Select due date"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

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
            label="Required Date"
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

  describe('Sizes and variants', () => {
    it('renders date picker with contained variant', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            variant="contained"
            onChange={onChange}
            placeholder="Contained variant"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders date picker with outlined variant', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            variant="outlined"
            onChange={onChange}
            placeholder="Outlined variant"
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders date picker with underline variant', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4">
          <DatePicker
            variant="underline"
            onChange={onChange}
            placeholder="Underline variant"
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
            label="Event Date"
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
            label="Start Date"
            value={new Date(2024, 0, 10)}
            onChange={onChange}
            placeholder="From"
          />
          <DatePicker
            label="End Date"
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

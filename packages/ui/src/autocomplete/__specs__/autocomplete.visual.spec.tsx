import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Autocomplete } from '..'

type TestOption = {
  id: number
  label: string
  disabled?: boolean
}

const OPTIONS: TestOption[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Dragonfruit' },
  { id: 5, label: 'Elderberry' },
]

const OPTIONS_WITH_DISABLED: TestOption[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana', disabled: true },
  { id: 3, label: 'Cherry' },
]

describe('Autocomplete Visual Tests', () => {
  it('renders autocomplete in closed state', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <div className="p-4 w-80">
        <Autocomplete
          options={OPTIONS}
          value={undefined}
          onChange={onChange}
          getOptionLabel={o => o.label}
          placeholder="Select a fruit"
        />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders autocomplete with selected value', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <div className="p-4 w-80">
        <Autocomplete
          options={OPTIONS}
          value={OPTIONS[1]}
          onChange={onChange}
          getOptionLabel={o => o.label}
          placeholder="Select a fruit"
        />
      </div>
    )
    await expect(container).toMatchScreenshot()
  })

  describe('States', () => {
    it('renders disabled autocomplete', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={OPTIONS[0]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select a fruit"
            disabled
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders readOnly autocomplete', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={OPTIONS[0]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select a fruit"
            readOnly
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Multiple selection', () => {
    it('renders autocomplete with multiple selected values', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[2]]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select fruits"
            multiple
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders autocomplete with many selected values (tags overflow)', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select fruits"
            multiple
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders autocomplete with limit on displayed tags', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select fruits"
            multiple
            limit={2}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders autocomplete with custom limit text', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select fruits"
            multiple
            limit={1}
            getLimitTagsText={more => `and ${more} more`}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders autocomplete with custom input class', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Custom styled"
            cx={{ input: 'font-bold text-primary' }}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders autocomplete with custom container class', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Custom container"
            cx={{ container: 'shadow-lg' }}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Border and background variants', () => {
    it('renders autocomplete without border', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="No border"
            border={false}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders autocomplete without background', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80 bg-gray-100">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="No background"
            background={false}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('With adornments', () => {
    it('renders autocomplete with start adornment', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Search fruits"
            startAdornment={<span className="text-gray-400">🔍</span>}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom texts', () => {
    it('renders autocomplete with custom placeholder', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={undefined}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Type to search for fruits..."
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom tag props', () => {
    it('renders autocomplete with custom tag styling', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1]]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select fruits"
            multiple
            defaultTagProps={{
              variant: 'contained',
              color: 'primary',
            }}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders autocomplete in form context', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Recipe Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter recipe name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ingredients</label>
            <Autocomplete
              options={OPTIONS}
              value={[OPTIONS[0], OPTIONS[2]]}
              onChange={onChange}
              getOptionLabel={o => o.label}
              placeholder="Select ingredients"
              multiple
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Instructions</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Enter instructions"
              rows={3}
            />
          </div>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders multiple autocompletes (search filters)', async () => {
      const onChange = vi.fn()
      const categories = [
        { id: 1, label: 'Fruits' },
        { id: 2, label: 'Vegetables' },
        { id: 3, label: 'Dairy' },
      ]
      const { container } = render(
        <div className="p-4 flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Category</label>
            <Autocomplete
              options={categories}
              value={categories[0]}
              onChange={onChange}
              getOptionLabel={o => o.label}
              placeholder="Category"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Items</label>
            <Autocomplete
              options={OPTIONS}
              value={undefined}
              onChange={onChange}
              getOptionLabel={o => o.label}
              placeholder="Select items"
            />
          </div>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom render selection', () => {
    it('renders autocomplete with custom selection renderer', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <div className="p-4 w-80">
          <Autocomplete
            options={OPTIONS}
            value={OPTIONS[0]}
            onChange={onChange}
            getOptionLabel={o => o.label}
            placeholder="Select a fruit"
            renderSelection={option => (
              <div className="flex items-center gap-2">
                <span className="text-lg">🍎</span>
                <span className="font-medium">{option.label}</span>
              </div>
            )}
          />
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})

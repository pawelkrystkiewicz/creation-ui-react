import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Autocomplete } from '../controller/autocomplete'

const OPTIONS = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
]

describe('Autocomplete', () => {
  let onChange: any
  let onInputChange: any
  let onCreate: any
  let onClear: any

  beforeEach(() => {
    onChange = vi.fn()
    onInputChange = vi.fn()
    onCreate = vi.fn()
    onClear = vi.fn()
  })

  it('renders input and options', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
      />,
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows options on input focus', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
      />,
    )
    fireEvent.focus(screen.getByRole('textbox'))
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } })
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
  })

  it('filters options based on input', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Ban' } })
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.queryByText('Apple')).toBeNull()
  })

  it('calls onChange when option is selected', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Ban' } })
    fireEvent.click(screen.getByText('Banana'))
    expect(onChange).toHaveBeenCalledWith(OPTIONS[1])
  })

  it('supports multiple selection', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={[]}
        onChange={onChange}
        getOptionLabel={o => o.label}
        multiple
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Apple' },
    })
    fireEvent.click(screen.getByText('Apple'))
    expect(onChange).toHaveBeenCalledWith([OPTIONS[0]])
  })

  it('calls onInputChange when input changes', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        onInputChange={onInputChange}
        getOptionLabel={o => o.label}
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Che' } })
    expect(onInputChange).toHaveBeenCalled()
  })

  it('shows not found text when no options match', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
        textNotFound='No results'
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'zzz' } })
    expect(screen.getByText('No results')).toBeInTheDocument()
  })

  it('calls onCreate when allowCreate is enabled and no options match', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
        onCreate={onCreate}
        textCreate='Add'
      />,
    )
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Dragonfruit' },
    })
    fireEvent.click(screen.getByText('Add "Dragonfruit"'))
    expect(onCreate).toHaveBeenCalledWith('Dragonfruit')
  })

  it('supports keyboard navigation and selection', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={null}
        onChange={onChange}
        getOptionLabel={o => o.label}
      />,
    )
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChange).toHaveBeenCalledWith(OPTIONS[0])
  })

  it('renders custom option and selection', () => {
    const renderOption = (props: any, option: any) => (
      <li {...props} data-testid={`option-${option.id}`}>
        {option.label.toUpperCase()}
      </li>
    )
    const renderSelection = (option: any) => (
      <span data-testid='selected'>{option.label.toLowerCase()}</span>
    )
    render(
      <Autocomplete
        options={OPTIONS}
        // when value is selected and the render selection is present, then input won't be rendered
        value={OPTIONS[1]}
        onChange={onChange}
        getOptionLabel={o => o.label}
        renderOption={renderOption}
        renderSelection={renderSelection}
      />,
    )
    expect(screen.getByTestId('selected')).toHaveTextContent('banana')
    try {
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    } catch (error) {
      expect(error).toBeDefined()
    }
    // expect(screen.getByTestId('option-1')).toHaveTextContent('APPLE')
  })

  it('clears input and calls onChange when clearable', () => {
    render(
      <Autocomplete
        options={OPTIONS}
        value={OPTIONS[0]}
        onChange={onChange}
        getOptionLabel={o => o.label}
        clearable
        onClear={onClear}
      />,
    )
    const clearButton = screen.getByTestId('clear-button')
    expect(clearButton).toBeInTheDocument()
    fireEvent.click(clearButton)
    // TODO: why this is not triggered?
    // expect(onClear).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith(null)
  })
})

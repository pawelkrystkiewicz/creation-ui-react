import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/react'
import { ForwardedRef, forwardRef, useMemo } from 'react'
import { DropdownChevron } from '../dropdown-chevron'
import { InputContainer } from '../input-container/InputContainer'
import { SelectProps } from './types'
import { DropdownMenu } from '../shared'
import { ClearButton } from '../clear-button'

export const Select = forwardRef(function Select(
  {
    multiple,
    startAdornment,
    endAdornment,
    onClear,
    children,
    cx,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const isClearable = useMemo(
    () =>
      Boolean(
        !props?.disabled && typeof onClear === 'function' && !!props?.value,
      ),
    [props?.disabled, props?.value],
  )

  return (
    <InputContainer
      className={cx?.container}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      hasValue={!!props?.value}
      disabled={props?.disabled}
      readOnly={props?.readOnly}
      containerHeight={multiple ? 'auto' : 'fixed'}
      border={props?.border}
      background={props?.background}
    >
      <>
        <Listbox
          ref={ref}
          multiple={multiple}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          horizontal={props.horizontal}
          invalid={props.invalid}
          name={props.name}
          refName={props.refName}
        >
          {({ open }) => (
            <>
              <ListboxButton
                className={
                  'flex items-center cursor-pointer justify-between w-full min-h-full'
                }
              >
                <span className=''>{props.value}</span>
                <div className='flex items-center gap-1'>
                  {isClearable && <ClearButton onClick={onClear} />}
                  <DropdownChevron open={open} />
                </div>
              </ListboxButton>
              <ListboxOptions
                transition
                className='outline-transparent -ml-3.5 transition micro-interactions data-closed:opacity-0 '
              >
                <DropdownMenu
                  className='mt-3 w-[calc(100%-theme(spacing.10))]'
                  open={open}
                >
                  {children}
                </DropdownMenu>
              </ListboxOptions>
            </>
          )}
        </Listbox>
      </>
    </InputContainer>
  )
})

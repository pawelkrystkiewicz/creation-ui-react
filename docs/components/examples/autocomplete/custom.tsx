import { Autocomplete, Avatar } from '@creation-ui/react'
import { AutocompleteOptionProps } from '@creation-ui/react/components/autocomplete/types'
import clsx from 'clsx'
import { useState } from 'react'
import { Character } from './types'
import users from './users.json'

export const renderOption = (props: AutocompleteOptionProps, option: Character) => (
  // @ts-expect-error
  <div {...props} className={clsx(props.className, 'h-fit w-fit p-2')}>
    <div className='flex gap-2 items-center'>
      <Avatar size='sm' src={option.image} />
      <div className='flex flex-col'>
        <span className='font-medium'>{option.name}</span>
        <span className='text-info-500 text-xs'>{option.species}</span>
      </div>
    </div>
  </div>
)

const renderSelection = (option: Character) => (
  <div className='h-fit w-fit p-2 mr-2'>
    <div className='flex gap-2 items-center'>
      <Avatar size='sm' src={option.image} />
      <div className='flex flex-col'>
        <span className='font-medium'>{option.name}</span>
        <span className='text-info-500 text-xs'>{option.species}</span>
      </div>
    </div>
  </div>
)

export const AutocompleteExampleCustomOptions = () => {
  const [value, setValue] = useState<Character | undefined | null>(users[0])

  const onChange = (value: Character | Character[] | null) => {
    // @ts-expect-error
    setValue(value)
  }

  return (
    <Autocomplete<Character>
      renderOption={renderOption}
      renderSelection={renderSelection}
      label={'Autocomplete - custom'}
      clearable
      value={value}
      options={users}
      onChange={onChange}
      isOptionEqualToValue={(a, b) => a?.id === b?.id}
      getOptionLabel={({ name }: Character) => name}
    />
  )
}

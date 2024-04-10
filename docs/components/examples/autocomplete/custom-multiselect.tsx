import { Container } from '@components/container'
import { Autocomplete, Avatar, ClearButton, Flex } from '@creation-ui/react'
import { useState } from 'react'
import { renderOption } from './custom'
import { Character } from './types'
import users from './users.json'

const renderTags = (selected: Character[], handleRemoveSelected: (option: any) => void) => {
  return selected?.map(option => {
    return (
      <Flex
        key={option.id}
        items={'center'}
        gap={2}
        className='size-fit border rounded-full border-info-500 p-1 text-xs'
      >
        <Avatar size={16} src={option.image} className={'size-fit object-cover'} />
        <span className='font-medium'>{option.name}</span>
        <ClearButton onClick={() => handleRemoveSelected(option as any)} />
      </Flex>
    )
  })
}

export const AutocompleteExampleCustomMultiselect = () => {
  const [value, setValue] = useState<Character[] | undefined | null>([])

  const onChange = (value: Character[] | null) => {
    setValue(value)
  }

  return (
    <Container variant='column'>
      <Autocomplete<Character>
        renderOption={renderOption}
        renderTags={renderTags}
        label={'Autocomplete - custom'}
        clearable
        multiple
        filterSelectedOptions
        value={value as any}
        options={users}
        onChange={onChange as any}
        isOptionEqualToValue={(a, b) => a?.id === b?.id}
        getOptionLabel={({ name }: Character) => name}
      />
    </Container>
  )
}

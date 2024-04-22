import { Playground } from '@components/playground'
import { Autocomplete } from '@creation-ui/react'
import { useState } from 'react'
import options from '../people-short-list.json'
import { createInputControls } from '../shared-playground-controls'
import { PersonOnListType } from './types'

const autocompleteControls = createInputControls('Autocomplete')
const autocompleteControlsMultiple = createInputControls('Autocomplete - multiple')

export const AutocompletePlayground = () => {
  const [value, setValue] = useState<PersonOnListType>(options[0])

  return (
    <Playground
      name='Autocomplete'
      component={Autocomplete}
      componentProps={{
        label: 'Autocomplete',
        value,
        options,
        onChange: setValue,
        getOptionLabel: (option: PersonOnListType) => option?.label,
      }}
      controls={autocompleteControls}
    />
  )
}

export const AutocompleteMultiPlayground = () => {
  const [value, setValue] = useState<PersonOnListType[] | null>([options[0], options[3]])

  const handleChange = (value: PersonOnListType[] | null) => setValue(value)
  const onCreate = (value: string) => {
    setValue(prev => [...(prev ?? []), { label: value, id: value }])
  }

  return (
    <Playground
      name='Autocomplete'
      component={Autocomplete}
      componentProps={{
        multiple: true,
        label: 'Autocomplete - multiple',
        value,
        options,
        onCreate,
        onChange: handleChange,
      }}
      controls={autocompleteControlsMultiple}
    />
  )
}

import { DocumentedProperty } from 'models/system'

export const properties: DocumentedProperty[] = [
  {
    description: 'Option data object',
    name: 'option',
    type: 'SelectOptionsType | AutocompleteOptionsType',
  },
  {
    description: 'Is option selected?',
    name: 'selected',
    type: 'boolean',
  },
  {
    description: 'Is option being clicked on?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is multiple selection available in the parent list?',
    name: 'multiple',
    type: 'boolean',
  },
  {
    description: 'Is option disabled',
    name: 'disabled',
    type: 'boolean',
  },
]

import { DocumentedProperty } from '@models/system'
import { onChangeProp, valueProp } from '../shared-props'
import { createDocsLink } from '../utils'

const multipleWarning = `If multiple is set, the type of <code>value</code> will be <code>T[]</code>`

export const properties: DocumentedProperty[] = [
  {
    description: 'List available options',
    name: 'options',
    type: 'T[]',
    defaultValue: '{ label:string, disabled?: boolean }[]',
  },
  {
    ...valueProp,
    type: 'T',
    note: multipleWarning,
  },
  {
    ...onChangeProp,
    type: '(value: T | T[] | null) => void',
    note: multipleWarning,
  },
  {
    description: 'Callback for creating new option',
    name: 'onCreate',
    type: '(title: string) => void',
  },
  {
    description: 'Allow multiple values',
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'autoHighlight',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Highlight search text fragment in options. Works only with default getOptionLabel',
  },
  {
    name: 'renderOption',
    type: '(props: AutocompleteOptionProps, option: T) => ReactNode',
    defaultValue: '_renderOption',
    description: `Function rendering option in dropdown.
      ${createDocsLink({
        label: 'Docs',
        component: 'render-option',
        parent: 'autocomplete',
      })}
      `,
  },
  {
    name: 'renderSelection',
    type: '(option: T) => ReactNode',
    defaultValue: '_renderSelection',
    description: `Function rendering single selection. ${createDocsLink({
      label: 'Docs',
      component: 'render-selection',
      parent: 'autocomplete',
    })}
      `,
  },
  {
    name: 'renderTags',
    type: '(selected: T[]) => ReactNode',
    defaultValue: '_renderTags',
    description: `Function rendering option in dropdown. ${createDocsLink({
      label: 'Docs',
      component: 'render-tags',
      parent: 'autocomplete',
    })}`,
  },
  {
    name: 'getLimitTagsText',
    type: '(more: number) => string',
    defaultValue: 'more => `+${more}`',
    description: 'Text to display when the tags are truncated. Also see <code>limit</code> prop',
  },
  {
    name: 'limit',
    type: 'number',
    defaultValue: '3',
    description: 'Limit of multiple selected to be displayed in input',
  },
  {
    name: 'defaultTagProps: ChipProps',
    type: 'ChipProps',
    description: `Props of the default tags component (Chip).
      ${createDocsLink({
        label: 'Chip component docs.',
        component: 'chip',
      })}
      `,
  },
  {
    name: 'isOptionEqualToValue',
    type: '(option: T, value?: T | null) => boolean',
    defaultValue: '_isOptionEqualToValue',
    description: `Function to compare option and value.`,
  },
  {
    name: 'getOptionDisabled',
    type: ' (option: T) => boolean',
    defaultValue: 'option => option.disabled',
    description: 'Getter for option disabled state.',
  },
  {
    name: 'getOptionLabel',
    type: ' (option: T) => string',
    defaultValue: 'option => option.label ?? option',
    description: 'Getter for option label.',
  },
  {
    name: 'filterOptions',
    type: `(
      options: T[],
      filterOptions: AutocompleteFilterOptions
    ) => T[]`,
    defaultValue: '_filterOptions',
    description: `Filter options function. ${createDocsLink({
      label: 'Docs',
      component: 'filter-options',
      parent: 'autocomplete',
    })}`,
  },
  {
    name: 'textEmpty',
    type: 'string',
    defaultValue: 'No options',
    description: 'Text to display for empty list.',
  },
  {
    name: 'textNotFound',
    type: 'string',
    defaultValue: 'No results found',
    description: 'Text to display when no options match search.',
  },
  {
    name: 'textCreate',
    type: 'string',
    defaultValue: 'Create',
    description:
      'Text to display when no options matches search and <code>onCreate</code> is provided. Precedes quoted search query like so: <code>Create "${query}"</code>',
  },
  {
    name: 'textLoading',
    type: 'string',
    defaultValue: 'Loading...',
    description:
      'Text to display for loading state input. Replaces <code>placeholder</code> for the duration of loading.',
  },
  {
    name: 'textClear',
    type: 'string',
    defaultValue: 'Clear',
    description: 'Text to display as HTML "title" of clear button.',
  },
  {
    name: 'maxHeight',
    type: 'number | string | "available"',
    defaultValue: '500',
    description: `How heigh should dropdown list be? Either provide a number of pixels or a string like <code>1rem</code>, <code>20vh</code>, etc. The <code>available</code> option will set the max height of the dropdown to the available height of the screen.
    `,
  },
  {
    name: 'zIndex',
    type: '{ list?: number}',
    description:
      'Escape hatch for z-index of dropdown list. Helpful when using with modals and drawers that might have their own, higher z-index.',
  },
  {
    name: 'filterSelectedOptions',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Should filter out selected options from options list',
  },
]

export const filterOptionProps: DocumentedProperty[] = [
  {
    name: 'ignoreCase',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Should ignore case when filtering',
  },
  {
    name: 'ignoreAccents',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Should ignore accents when filtering',
  },
  {
    name: 'trim',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Should trim search text',
  },
  {
    name: 'limit',
    type: 'number',
    description: 'Limit of options to return',
  },
  {
    name: 'matchFrom',
    type: "'start' | 'any' | 'end'",
    defaultValue: 'any',
    description: 'Where to match search text',
  },
  {
    name: 'stringify',
    type: '(option: T) => string',
    defaultValue: 'getOptionLabel',
    description: `Function to convert option to string.${createDocsLink({
      label: '<code>getOptionLabel</code> docs.',
      component: 'autocomplete#getOptionLabel',
    })}`,
  },
]

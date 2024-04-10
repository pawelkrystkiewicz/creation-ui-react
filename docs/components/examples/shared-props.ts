import { ELEMENT_POSITION, ELEMENT_SIZES, ELEMENT_STATUS, ELEMENT_VARIANTS } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import { createDocsLink } from './utils'

export const positionProp: DocumentedProperty = {
  name: 'position',
  type: ListOrTypes([...ELEMENT_POSITION]),
  description: 'Position of the element',
}
export const idProp: DocumentedProperty = {
  name: 'id',
  type: 'string',
  description: 'ID of the element',
}
export const helperTextProp: DocumentedProperty = {
  name: 'helperText',
  type: 'string',
  description: 'Helper text of the element',
}
export const sizeProp: DocumentedProperty = {
  name: 'size',
  type: ListOrTypes([...ELEMENT_SIZES]),
  defaultValue: 'md',
  description: 'Size of the element',
}
export const variantProp: DocumentedProperty = {
  name: 'variant',
  type: ListOrTypes([...ELEMENT_VARIANTS]),
  defaultValue: 'contained',
  description: 'Variant of the element',
}

export const labelProp: DocumentedProperty = {
  description: 'Label',
  name: 'label',
  type: 'React.ReactNode',
}

export const iconProp: DocumentedProperty = {
  description: 'Icon provided to component as ReactNode',
  name: 'icon',
  type: 'React.ReactNode',
}
export const startAdornmentProp: DocumentedProperty = {
  description: 'Element provided to component on the left side',
  name: 'startAdornment',
  type: 'React.ReactNode',
}

export const endAdornmentProp: DocumentedProperty = {
  description: 'Element provided to component on the right side',
  name: 'endAdornment',
  type: 'React.ReactNode',
}

export const statusProp: DocumentedProperty = {
  description: 'Status',
  name: 'status',
  type: ListOrTypes([...ELEMENT_STATUS, 'undefined']),
}

export const openProp: DocumentedProperty = {
  description: 'Is component visible',
  name: 'open',
  type: 'boolean',
  defaultValue: 'false',
}
export const disabledProp: DocumentedProperty = {
  description: 'Is component disabled? This will disable all interactions with component and styling.',
  name: 'disabled',
  type: 'boolean',
}
export const readOnlyProp: DocumentedProperty = {
  description: 'Is component read only? This will disable all interactions with component.',
  name: 'readOnly',
  type: 'boolean',
}

export const elementTypeProp: DocumentedProperty = {
  description: 'ElementType of the component',
  name: 'as',
  type: 'React.ElementType',
  defaultValue: 'h3',
}

export const childrenProp: DocumentedProperty = {
  description: 'Children to be rendered inside the component',
  name: 'children',
  type: 'React.ReactNode',
}

export const classNameProps: DocumentedProperty = {
  description: 'Class names to add to wrapper component',
  name: 'className',
  type: 'string | string[]',
}

export const loaderWhiteProp: DocumentedProperty = {
  name: 'white',
  type: 'boolean',
  description: 'Use white loader? E.g. to contrast background color',
}

export const clearableProp: DocumentedProperty = {
  name: 'clearable',
  type: 'boolean',
  description:
    'Is input clearable? Shows clear button on input. The clear button will appear in place of <code>endAdornment</code> or on the left of it if exists.',
}

export const requiredProp: DocumentedProperty = {
  name: 'required',
  type: 'boolean',
  description: 'Is value required? Adds asterisk at the end of label.',
}
export const loadingProp: DocumentedProperty = {
  name: 'loading',
  type: 'boolean',
  description: 'Is component in loading state? Shows loader and disables interactions.',
}

export const interactionsDisabledProp: DocumentedProperty = {
  name: 'interactionsDisabled',
  type: 'boolean',
  description: 'Sets "pointer-events-none" class. Internal prop of <code>InputBase</code> component.',
}

export const onClickCallback: DocumentedProperty = {
  name: 'onClick',
  type: '() => void',
  description: 'Callback function called on element click',
}

export const errorProp: DocumentedProperty = {
  name: 'error',
  type: 'string',
  description:
    'Error message. If truthy, shows error message instead of <code>helperText</code> value and styles everything with color assigned to <code>error-500</code>.',
}

export const onClearCallback: DocumentedProperty = {
  name: 'onClear',
  type: '() => void',
  description: 'Callback function called on clear button click. Requires <code>clearable</code> to be set to true.',
}

const cx = { container: { inner: 'string', outer: 'string' }, input: 'string' }

export const cxProps = {
  description:
    'Class names to add to wrapping InputBase component. Separately modify inner and outer container or input',
  name: 'cx',
  type: JSON.stringify(cx, null, 4),
}

export const valueProp = {
  description: 'Current value of input',
  name: 'value',
  type: 'string',
}
export const onChangeProp = {
  name: 'onChange',
  type: '(value: string) => void',
  description: 'Change event callback',
}

export const inputBasePublicProps: DocumentedProperty[] = [
  idProp,
  labelProp,
  helperTextProp,
  sizeProp,
  variantProp,
  loadingProp,
  statusProp,
  cxProps,
  disabledProp,
  readOnlyProp,
  endAdornmentProp,
  startAdornmentProp,
  clearableProp,
  requiredProp,
  onClearCallback,
  errorProp,
]

export const defaultOptionType: DocumentedProperty[] = [
  {
    name: 'label',
    type: 'React.ReactNode',
    description: 'Label of option',
    defaultValue: 'option.label ?? option',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Option disabled state, used by <code>isOptionDisabled</code>',
  },
]

export const renderOptionProps: DocumentedProperty[] = [
  {
    description: 'Key of the option',
    name: 'key',
    type: 'string',
  },
  {
    description: 'Tab index of the option',
    name: 'tabIndex',
    type: 'number',
  },
  {
    description: 'Aria-selected attribute of the option',
    name: 'aria-selected',
    type: 'boolean',
  },
  {
    description: 'Aria-disabled attribute of the option',
    name: 'aria-disabled',
    type: 'boolean',
  },
  {
    description: 'Aria-label attribute of the option',
    name: 'aria-label',
    type: 'string',
  },
  {
    description: 'Role attribute of the option',
    name: 'role',
    type: 'string',
  },
  {
    description: 'Class name of the option',
    name: 'className',
    type: 'string',
  },
  {
    description: 'ref passed to the option <code>li</code> tag. Used by @floating-ui/react',
    name: 'ref',
    type: '(node: any) => void',
  },
  {
    description: 'Is option being hovered or tabbed on?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is option currently selected?',
    name: 'selected',
    type: 'boolean',
  },
  {
    description: 'Is option disabled?',
    name: 'disabled',
    type: 'boolean',
  },
  {
    name: 'label',
    type: 'string',
    // description: 'Label of the option. Result of <code>getOptionLabel</code',
    description: `Label of the option. Result of ${createDocsLink({
      label: '<code>getOptionLabel</code> docs.',
      component: 'select#getOptionLabel',
    })}`,
  },
]

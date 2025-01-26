import type { GenericColorDefinition } from '@/components/playground/components/colors-selector'
import { INPUT_TYPES } from '@/components/playground/constants'
import type { PlaygroundControl } from '@/components/playground/types'
import { BorderBottom, BorderLeft, BorderRight, BorderTop, Text, TextSquare, TextSquareSolid } from 'iconoir-react'

const SIZES = [
  { value: 'sm', label: 's' },
  {
    value: 'md',
    label: 'm',
  },
  { value: 'lg', label: 'l' },
]

const VARIANTS_BASE = [
  { value: 'contained', label: <TextSquareSolid /> },
  {
    value: 'outlined',
    label: <TextSquare />,
  },
]

export const VARIANTS = [...VARIANTS_BASE, { value: 'text', label: <Text /> }]

const COLORS: GenericColorDefinition[] = [
  { value: 'primary', label: 'Primary', className: 'bg-primary' },
  { value: 'success', label: 'Success', className: 'bg-success' },
  { value: 'warning', label: 'Warning', className: 'bg-warning' },
  { value: 'error', label: 'Error', className: 'bg-error' },
  { value: 'mono', label: 'Monochromatic', className: 'bg-black dark:bg-white' },
]

const POSITION_HORIZONTAL = [
  { value: 'left', label: <BorderLeft /> },
  { value: 'right', label: <BorderRight /> },
]
const POSITION_VERTICAL = [
  //
  { value: 'top', label: <BorderTop /> },
  { value: 'bottom', label: <BorderBottom /> },
]

const POSITION = [...POSITION_HORIZONTAL, ...POSITION_VERTICAL]

const INPUT_TYPES_DROPDOWN = INPUT_TYPES

export const childrenControl: PlaygroundControl = {
  name: 'children',
  type: 'string',
  defaultValue: 'Button',
}

export const sizeControl: PlaygroundControl = {
  name: 'size',
  type: 'array',
  defaultValue: 'md',
  values: SIZES,
}

export const positionControl: PlaygroundControl = {
  name: 'position',
  type: 'array',
  defaultValue: 'right',
  values: POSITION,
}
export const positionHorizontalControl: PlaygroundControl = {
  name: 'horizontal',
  label: 'Horizontal',
  type: 'array',
  defaultValue: 'right',
  values: POSITION_HORIZONTAL,
}
export const positionVerticalControl: PlaygroundControl = {
  name: 'vertical',
  label: 'Vertical',
  type: 'array',
  defaultValue: 'top',
  values: POSITION_VERTICAL,
}

export const loadingControl: PlaygroundControl = {
  name: 'loading',
  type: 'boolean',
}

export const variantControl: PlaygroundControl = {
  name: 'variant',
  type: 'array',
  defaultValue: 'contained',
  values: VARIANTS,
}

export const variantBaseControl: PlaygroundControl = {
  name: 'variant',
  type: 'array',
  defaultValue: 'contained',
  values: VARIANTS_BASE,
}

export const colorControl: PlaygroundControl = {
  name: 'color',
  type: 'array',
  defaultValue: 'primary',
  component: 'colors',
  values: COLORS,
}

export const colorsBlackAndWhite: PlaygroundControl = {
  name: 'color',
  type: 'array',
  defaultValue: 'primary',
  component: 'colors',
  values: [
    ...COLORS.filter(({ value }) => value !== 'mono'),
    { value: 'black', label: 'Black', className: 'bg-black border-white border' },
    { value: 'white', label: 'White', className: 'bg-white border-border border' },
  ],
}

export const disabledControl: PlaygroundControl = {
  name: 'disabled',
  type: 'boolean',
}
export const readOnlyControl: PlaygroundControl = {
  name: 'readOnly',
  type: 'boolean',
}

export const requiredControl: PlaygroundControl = {
  name: 'required',
  type: 'boolean',
}

export const fullWidthControl: PlaygroundControl = {
  name: 'fullWidth',
  label: 'Full Width',
  type: 'boolean',
}
export const clearableControl: PlaygroundControl = {
  name: 'clearable',
  type: 'boolean',
  defaultValue: true,
}
export const errorControl: PlaygroundControl = {
  name: 'error',
  type: 'string',
  helperText: 'Overrides helper text',
}

export const helperTextControl: PlaygroundControl = {
  name: 'helperText',
  type: 'string',
  label: 'Helper Text',
  defaultValue: 'This is helper text',
}

export const labelControl: PlaygroundControl = {
  name: 'label',
  type: 'string',
  defaultValue: 'Label',
}

export const createInputControls = (labelFieldDefaultValue = 'Input'): PlaygroundControl[] => {
  let base: PlaygroundControl[] = [
    sizeControl,
    requiredControl,
    loadingControl,
    readOnlyControl,
    disabledControl,
    errorControl,
    { ...clearableControl, defaultValue: true },
    { ...labelControl, defaultValue: labelFieldDefaultValue },
    { name: 'placeholder', type: 'string', defaultValue: 'Placeholder' },
    helperTextControl,
  ]

  if (labelFieldDefaultValue !== 'Switch') {
    base = [{ ...variantControl, defaultValue: 'outlined' }, ...base]
  }

  return base
}

export const createRadioControls = (labelFieldDefaultValue = 'Radio'): PlaygroundControl[] => {
  const isRadio = labelFieldDefaultValue === 'Radio'

  const customErrorControl: PlaygroundControl = isRadio
    ? {
        type: 'boolean',
        defaultValue: false,
        name: 'error',
      }
    : errorControl

  const base = [
    sizeControl,
    requiredControl,
    disabledControl,
    readOnlyControl,
    customErrorControl,
    { ...labelControl, defaultValue: labelFieldDefaultValue },
  ]

  if (!isRadio) {
    base.push(helperTextControl)
  }

  return base
}

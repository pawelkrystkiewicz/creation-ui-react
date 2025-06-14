import { InputContainerStyles } from './classess'

export type InputContainerProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'className' | 'style' | 'children' | 'onClick'
> &
  Omit<InputContainerStyles, 'adornments' | 'clearable'> & {
    endAdornment?: React.ReactNode
    startAdornment?: React.ReactNode
    onClear?: () => void
    disabled?: boolean
    readOnly?: boolean
    hasValue?: boolean
  }

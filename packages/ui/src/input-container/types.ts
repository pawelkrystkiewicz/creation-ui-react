import { InputVariant } from "../types"
import { InputContainerStyles } from "./classess"

export type InputContainerProps = React.HTMLAttributes<HTMLDivElement> &
  Omit<InputContainerStyles, 'adornments' | 'clearable'> & {
    endAdornment?: React.ReactNode
    startAdornment?: React.ReactNode
    onClear?: () => void
    disabled?: boolean
    readOnly?: boolean
    hasValue?: boolean
    variant?: InputVariant
  }
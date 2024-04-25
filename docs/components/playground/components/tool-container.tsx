import { ElementSize, Label, inputContainer, useTheme } from '@creation-ui/react'
import { ReactNode, useId } from 'react'

interface ToolContainerProps {
  children?: ReactNode
  label: ReactNode
  size?: ElementSize
}

export const ToolContainer = (props: ToolContainerProps) => {
  const componentId = useId()
  const { size: defaultSize, styles } = useTheme()
  const { size = defaultSize, label } = props
  return (
    // @ts-ignore
    <div className={inputContainer(styles)({ className: [size] })}>
      <Label htmlFor={componentId} size={size} aria-label={label?.toString()}>
        {label}
      </Label>
      <div className='flex gap-3 w-fit'>{props.children}</div>
    </div>
  )
}

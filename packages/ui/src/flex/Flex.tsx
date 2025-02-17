import type { FC } from 'react'
import { flexClasses } from './classes'
import type { FlexProps } from './types'

export const Flex: FC<FlexProps> = ({
  children,
  className,
  title,
  onClick,
  ...props
}) => (
  <div {...{ title, onClick }} className={flexClasses({ ...props, className })}>
    {children}
  </div>
)

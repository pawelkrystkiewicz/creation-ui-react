import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import { classes } from './classes'

interface PlaygroundViewProps {
  children?: ReactNode
}

export const PlaygroundView: FC<PlaygroundViewProps> = ({ children }) => (
  <div className={clsx(classes.container, 'z-0')}>{children}</div>
)

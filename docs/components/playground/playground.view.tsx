import { Theme } from '@creation-ui/react'
import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import { classes } from './classes'

interface PlaygroundViewProps {
  children?: ReactNode
}

export const PlaygroundView: FC<PlaygroundViewProps> = ({ children }) => (
  <Theme theme={{ size: 'sm' }}>
    <div className={clsx(classes.container, 'z-0')}>{children}</div>
  </Theme>
)

import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import { classes } from './classes'
import { usePlayground } from './context/context'

interface PlaygroundComponentProps {
  children?: ReactNode
}

export const PlaygroundComponent: FC<PlaygroundComponentProps> = () => {
  const {
    componentProps,
    component: Component,
    state,
    controls,
  } = usePlayground()

  if (!Component) {
    return null
  }

  const { children, ...restOfComponentProps } = componentProps ?? {}
  return (
    <div className={clsx(classes.view({ controls: !!controls }))}>
      {children ? (
        <Component {...restOfComponentProps} {...state}>
          {children}
        </Component>
      ) : (
        <Component {...restOfComponentProps} {...state} />
      )}
    </div>
  )
}

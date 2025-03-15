import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import { classes } from './classes'
import { usePlayground } from './context/context'

interface PlaygroundComponentProps {
  className?: string
}

export const PlaygroundComponent: FC<PlaygroundComponentProps> = ({
  className,
}) => {
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
    <div className={clsx(classes.view({ controls: !!controls }), className)}>
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

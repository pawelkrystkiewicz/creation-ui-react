import clsx from 'clsx'
import type { FC } from 'react'
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
      <Component {...restOfComponentProps} {...state}>
        {typeof children === 'string' ? children : null}
      </Component>
    </div>
  )
}

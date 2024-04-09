import { Children, isValidElement, useMemo } from 'react'
import type { ShowFirstMatchingProps } from './types'

export const ShowFirstMatching: React.FC<ShowFirstMatchingProps> = ({
  children,
  fallback = null,
}) => {
  let matchFound = false

  const renderChildren = useMemo(
    () =>
      Children.map(children, child => {
        if (isValidElement(child) && child.props.when && !matchFound) {
          matchFound = true
          return child
        }
        return null
      }),
    [children],
  )

  return <>{matchFound ? renderChildren : fallback}</>
}

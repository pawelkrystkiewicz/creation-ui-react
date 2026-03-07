import React from 'react'

type LinkProps = React.ComponentPropsWithRef<'a'>

export const Link = function Link({ ref, ...props }: LinkProps) {
  return <a {...props} ref={ref} />
}

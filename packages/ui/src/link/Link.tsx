import React, { forwardRef } from 'react'

export const Link = function Link(
  { ref, ...props },
) {
  return <a {...props} ref={ref} />
}

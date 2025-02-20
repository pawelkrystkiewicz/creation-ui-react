import { memo } from 'react'
import type { ForProps } from './types'

function _For<T>({ each, children }: ForProps<T>) {
  if (!each) {
    console.error('CUI: The `each` prop of [For] is undefined')
    return null
  }

  if (!children) {
    console.error('CUI: The `children` method of [For] is undefined')
  }

  return <>{each?.map((item, index) => children?.(item, index))}</>
}

export const For = memo(_For) as <T>(props: ForProps<T>) => JSX.Element

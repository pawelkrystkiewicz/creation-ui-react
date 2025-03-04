import clsx from 'clsx'

import { tooltipStyles } from './classes'
import type { TooltipProps } from './types'

export const Tooltip = (props: TooltipProps) => {
  const { className, position = 'top', children, content, ...rest } = props

  if (!content) return children

  return (
    <div className={clsx(['relative', 'max-w-fit', 'group'])}>
      <span {...rest} className={tooltipStyles({ className, position })}>
        {content}
      </span>
      {children}
    </div>
  )
}


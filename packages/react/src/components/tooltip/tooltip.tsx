import clsx from 'clsx'
import { tooltip } from './classes'
import type { TooltipProps } from './tooltip.types'

const Tooltip = (props: TooltipProps) => {
  const { className, position = 'top', children, content, ...rest } = props

  return (
    <div className={clsx(['relative', 'max-w-fit', 'group'])}>
      <div {...rest} className={tooltip({ className, position })}>
        {content}
      </div>
      {children}
    </div>
  )
}

export default Tooltip

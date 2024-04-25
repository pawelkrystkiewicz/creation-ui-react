import clsx from 'clsx'
import { tooltip } from './classes'
import type { TooltipProps } from './tooltip.types'
import { useTheme } from '@root/theme'
import { useMemo } from 'react'
import { Show, ShowFirstMatching } from '../show'

const Tooltip = (props: TooltipProps) => {
  const { styles, size: defaultSize } = useTheme()
  const {
    className,
    position = 'top',
    children,
    content,
    size = defaultSize,
    ...rest
  } = props

  const withThemeTooltip = useMemo(() => tooltip(styles), [styles])

  return (
    <ShowFirstMatching>
      <Show when={!content}>{children}</Show>
      <Show when={true}>
        <div className={clsx(['relative', 'max-w-fit', 'group'])}>
          <div
            {...rest}
            className={withThemeTooltip({ className, position, size })}
          >
            {content}
          </div>
          {children}
        </div>
      </Show>
    </ShowFirstMatching>
  )
}

export default Tooltip

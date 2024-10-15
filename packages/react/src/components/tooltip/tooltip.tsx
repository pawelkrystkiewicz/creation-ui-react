import { useTheme } from '@root/theme'
import clsx from 'clsx'
import { useMemo } from 'react'
import { Show } from '../show'
import { tooltip } from './classes'
import type { TooltipProps } from './tooltip.types'

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
    <>
      <Show when={!content}>{children}</Show>
      <Show when={!!content}>
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
    </>
  )
}

export default Tooltip

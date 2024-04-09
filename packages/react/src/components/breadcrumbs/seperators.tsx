import { Icon } from '../icon'

export const separatorsMap = {
  chevron: <Icon icon='chevron_right' />,
  dot: <Icon icon='dot' />,
  slash: <Icon icon='slash' />,
}


export const separators = ['chevron', 'dot', 'slash'] as const
export type Separator = typeof separators[number]
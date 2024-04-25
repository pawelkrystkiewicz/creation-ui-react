import { For } from '../for'
import { Menu, MenuItem } from '../menu'
import type { BranchProps } from './types'
import { _getItemOffset } from './utils'

export const Branch = ({
  branch,
  level = 0,
  onBranchClick,
  onLeafClick,
  getItemOffset = _getItemOffset,
  getItemLabel = (item: any) => item.name,
}: BranchProps) => {
  if (!branch?.children?.length) {
    return (
      <MenuItem
        onClick={onLeafClick?.bind(null, branch)}
        label={getItemLabel?.(branch)}
        cx={{
          container:
            'truncate max-w-[200px] w-full text-left hover:bg-primary/20 rounded-md px-2',
        }}
        style={{ paddingLeft: getItemOffset(level) }}
      />
    )
  }

  return (
    <Menu
      label={getItemLabel?.(branch)}
      level={level}
      style={{
        paddingLeft: getItemOffset(level),
      }}
      cx={{
        container: {
          outer: 'max-w-[200px] w-full text-left',
          inner: 'flex flex-col items-start text-left gap-1',
        },
        trigger: 'w-full hover:bg-primary/20 rounded-md px-2',
      }}
      onClick={onBranchClick?.bind(null, branch)}
    >
      <For each={branch.children}>
        {option => (
          <Branch
            branch={option}
            level={level + 1}
            key={option.id}
            onBranchClick={onBranchClick}
            onLeafClick={onLeafClick}
            getItemLabel={getItemLabel}
          />
        )}
      </For>
    </Menu>
  )
}

import { Tree, BranchType, buildTree } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { useMemo, useState } from 'react'
import data from './tree-data.json'

export const TreeExample = () => {
  const tree = useMemo(() => buildTree(data), [data])
  const [value, setValue] = useState<BranchType | null>(null)
  const handleClear = () => setValue(null)

  const handleLeafClick = (leaf: BranchType) => {
    setValue(leaf)
    console.log('Leaf clicked:', leaf.name)
  }
  const handleBranchClick = (branch: BranchType) => {
    console.log('Branch clicked:', branch.name)
  }

  return (
    <div>
      <Tree
        placeholder='Select category...'
        tree={tree}
        value={value}
        onClear={handleClear}
        onLeafClick={handleLeafClick}
        onBranchClick={handleBranchClick}
        cx={{
          container: {
            inner: 'w-48',
          },
        }}
        // zIndex={{ list: 51 }}
      />
      {/* <div
        className='h-fit w-fit rounded-lg mx-auto  bg-amber-300 shadow p-2 text-xs text-center flex flex-col items-center'
        style={{ zIndex: 50 }}
      >
        <b>Potentially higher z-index</b>
        <span>Block with z-50</span>
      </div> */}
    </div>
  )
}

/**
 *
 *
export type TreeProps = {
  tree?: TreeType
  value?: BranchType | null
  placeholder?: string
  cx?: {
    placeholder?: string
    value?: string
    container?: { inner?: string; outer?: string }
  }
  onClear?: () => void
} & Pick<
  BranchProps,
  'onBranchClick' | 'onLeafClick' | 'getItemOffset' | 'getItemLabel'
>

 */

export const properties: DocumentedProperty[] = [
  {
    name: 'cx',
    type: `{
        placeholder?: 'string',
        value?: 'string',
        container?: {
          inner?: 'string',
          outer?: 'string',
        }
      }`,

    description:
      'Class names manipulation API. Each property ("value", "placeholder", etc.) is assigned to corresponding part of the component.',
  },
  {
    name: 'onClear',
    type: '() => void',
    description: 'Callback to clear the selected value.',
  },
  {
    name: 'onBranchClick',
    type: '(branch: BranchType) => void',
    description: 'Callback to handle branch click.',
  },
  {
    name: 'onLeafClick',
    type: '(leaf: BranchType) => void',
    description: 'Callback to handle leaf click.',
  },
  {
    name: 'tree',
    type: 'TreeType = BranchType[]',
    description: 'Tree data structure.',
  },
  {
    name: 'value',
    type: 'BranchType | null',
    description: 'Selected value.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: 'Select...',
    description: 'Placeholder text.',
  },
  {
    name: 'getItemLabel',
    type: '(item: BranchType) => string',
    defaultValue: 'item => item.name',
    description: 'Custom label getter.',
  },
  {
    name: 'getItemOffset',
    type: '(level: number) => number',
    defaultValue: '(level: number) => level > 0 ? level * TREE_OFFSET_MULTIPLIER /*=16*/ : MIN_ITEM_PADDING /*=5*/',
    description: 'Custom offset getter. Used to apply `paddingLeft` to items. `level` starts from `0`.',
  },
  {
    name: 'zIndex',
    type: '{ list?: number}',
    description:
      'Escape hatch for z-index of dropdown list. Helpful when using with modals and drawers that might have their own, higher z-index.',
  },
]

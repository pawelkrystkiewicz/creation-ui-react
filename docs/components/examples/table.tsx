import { type ElementVariant } from '@creation-ui/core'
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  ChipProps,
  Flex,
  For,
  LoadingOverlay,
  Show,
  ShowFirstMatching,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Theme,
  ToggleGroup,
} from '@creation-ui/react'
import { mdiPencil } from '@mdi/js'
import { Icon } from '@mdi/react'
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { VARIANTS } from './shared-playground-controls'
import people from './table-data.json'

type Person = {
  avatar: string
  firstName: string
  lastName: string
  status: ChipProps['status']
  workTime: number
}

const formatMinutes = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes}m`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (remainingMinutes === 0) {
    return `${hours}h`
  }

  return `${hours}h ${remainingMinutes}m`
}

type TableExampleState = 'NO_DATA' | 'ERROR' | 'LOADING' | 'DATA'

export const TableExample = () => {
  const [state, setState] = useState<TableExampleState>('DATA')
  const [variant, setVariant] = useState<ElementVariant>('outlined')
  const [rowSelection, setRowSelection] = useState({})

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div className='px-4'>
            <Checkbox
              size='sm'
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className='px-4'>
            <Checkbox
              size='sm'
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
        ),
        meta: {
          className: 'w-fit',
        },
        maxSize: 50,
      },
      {
        maxSize: 75,
        size: 75,
        accessorKey: 'avatar',
        meta: {
          align: 'center',
        },
        id: 'avatar',
        header: () => 'Avatar',
        enableResizing: true,
        cell: info => <Avatar src={info.getValue() as Person['avatar']} size='sm' />,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        header: 'First Name',
        enableColumnFilter: false,
        maxSize: 100,
        meta: {
          size: '8%',
        },
      },
      {
        maxSize: 200,
        accessorKey: 'lastName',
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => 'Last Name',
        enableColumnFilter: false,
        meta: {
          size: '20%',
          className: 'overflow-hidden text-ellipsis whitespace-nowrap',
        },
      },
      {
        maxSize: 150,
        accessorKey: 'workTime',
        id: 'workTime',
        cell: info => formatMinutes(info.getValue() as number),
        header: () => 'Work Time',
        enableColumnFilter: false,
        footer: ({ table }) => {
          const value = table
            .getFilteredRowModel()
            .rows.reduce((total, row) => total + (row as any).getValue('workTime'), 0)
          return formatMinutes(value)
        },
      },
      {
        accessorKey: 'status',
        header: () => <div className='mx-auto'>Status</div>,
        id: 'status',
        cell: info => {
          const status = info.getValue() as string

          const label = status === 'primary' ? 'Active' : status

          return <Chip status={status as Person['status']} size='sm' uppercase label={label} />
        },
        enableColumnFilter: false,
        meta: {
          align: 'center',
        },
      },
      {
        accessorKey: 'firstName',
        header: () => '',
        id: 'edit',
        cell: info => (
          <a className={clsx('ml-auto align-center flex gap-2')}>
            <Icon path={mdiPencil} size={0.7} />
            <span title={`Edit ${info.getValue()}`}>Edit</span>
          </a>
        ),
        enableColumnFilter: false,
      },
    ],
    [],
  )

  const table = useReactTable({
    columns,
    data: people as Person[],
    state: { rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugAll: true,
  })

  const tableStateOpts = [
    { label: 'No data', value: 'NO_DATA' },
    { label: 'Error', value: 'ERROR' },
    { label: 'Loading', value: 'LOADING' },
    { label: 'Data', value: 'DATA' },
  ]

  const tableVariantsOpts = [{ ...VARIANTS[0], disabled: true }, VARIANTS[1], VARIANTS[2]]

  const currentPageIdx = table.getState().pagination.pageIndex
  const totalPages = table.getPageCount()
  const resultsCount = table.getPrePaginationRowModel().rows.length
  const enablePagination = state === 'DATA'
  const borderColors = 'border-info-300 dark:border-info-800'
  return (
    <div>
      <Flex gap={3} items='center' className='mb-3'>
        <ToggleGroup
          options={tableStateOpts}
          size='sm'
          label='Table state'
          value={state}
          onChange={value => setState(value as TableExampleState)}
        />
        <ToggleGroup
          options={tableVariantsOpts}
          size='sm'
          label='Table variant'
          value={variant}
          onChange={value => setVariant(value as ElementVariant)}
        />
      </Flex>
      <Theme theme={{ variant }}>
        <Table className={clsx('rounded-md', borderColors)}>
          <LoadingOverlay active={state === 'LOADING'} />
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow className={borderColors} key={headerGroup.id}>
                <For each={headerGroup.headers}>
                  {header => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )}
                </For>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            <ShowFirstMatching>
              <Show when={state === 'NO_DATA'}>
                <TableRow className={borderColors}>
                  <TableCell colSpan={columns.length} className='h-[50vh] text-center'>
                    No results
                  </TableCell>
                </TableRow>
              </Show>
              <Show when={state === 'ERROR'}>
                <TableRow className={borderColors}>
                  <TableCell colSpan={columns.length} className='h-[50vh] text-center text-error-500 font-medium '>
                    An error occurred
                  </TableCell>
                </TableRow>
              </Show>
              <Show when={['DATA', 'LOADING'].includes(state)}>
                <For each={table?.getRowModel().rows}>
                  {row => (
                    <TableRow className={borderColors} key={row.id} data-state={row.getIsSelected() && 'selected'}>
                      {row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  )}
                </For>
              </Show>
            </ShowFirstMatching>
          </TableBody>
          <TableFooter className={borderColors}>
            {table.getFooterGroups().map(group => (
              <TableRow className={borderColors} key={group.id}>
                <For each={group.headers}>
                  {header => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )}
                </For>
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </Theme>
      <Flex items='center' justify={'between'}>
        <Show when={enablePagination}>
          <p className='text-xs text-gray-700 dark:text-gray-400'>
            Showing page {currentPageIdx + 1} of {totalPages}
          </p>
        </Show>

        <p className='text-xs text-gray-700 dark:text-gray-400'>
          <ShowFirstMatching>
            <Show when={enablePagination}>{resultsCount} results</Show>
            <Show when={true}>No results</Show>
          </ShowFirstMatching>
        </p>

        <Flex items='center' justify={'end'} className='space-x-2 py-4'>
          <Button
            variant='outlined'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage() || !enablePagination}
          >
            Previous
          </Button>
          <Button
            variant='outlined'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage() || !enablePagination}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}

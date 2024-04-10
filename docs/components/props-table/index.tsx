import { Description, Header } from '@components/typography'
import clsx from 'clsx'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'

const TableHeader = () => (
  <tr className='w-1/4 dark:text-white'>
    <td className='w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0'>Prop</td>
    <td className='w-1/6 whitespace-nowrap py-2 text-sm font-medium'>Default</td>
    <td className='w-2/3 whitespace-nowrap py-2 text-sm font-medium'>Description</td>
  </tr>
)

interface TableRowProps {
  property: DocumentedProperty
  key?: string | number
  highlight?: boolean
}

const TableRow = ({
  property: { name, type, defaultValue, description, note, experimental },
  highlight,
}: TableRowProps) => {
  return (
    <tr
      id={name}
      className={clsx(
        'transition-colors duration-1000 ease-in-out',
        highlight ? ['bg-primary-50/50', 'dark:bg-primary-50/40'] : '',
      )}
    >
      <td className='prose dark:prose-invert prose-sm py-3 pl-4 align-baseline sm:pl-0 '>
        <code dangerouslySetInnerHTML={{ __html: name }} />
      </td>
      <td className='prose dark:prose-invert prose-sm py-3 align-baseline'>
        <span className=''>
          {defaultValue ? (
            <code dangerouslySetInnerHTML={{ __html: defaultValue?.toString() }} />
          ) : (
            <span className='text-gray-400'>—</span>
          )}
        </span>
      </td>
      <td className='py-3 align-baseline'>
        <div className='prose dark:prose-invert prose-sm my-0 space-x-5 whitespace-nowrap'>
          <span>
            <code dangerouslySetInnerHTML={{ __html: type }} />
          </span>
        </div>
        <div className='prose dark:prose-invert prose-sm prose-docs-table'>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          {note && (
            <p>
              <em dangerouslySetInnerHTML={{ __html: note.toString() }} />
            </p>
          )}
          {experimental && (
            <p className='text-red-500'>
              <em>This feature is experimental and might not work correctly.</em>
            </p>
          )}
        </div>
      </td>
    </tr>
  )
}

interface PropsTableProps {
  properties?: DocumentedProperty[]
  name: string
  description: string
}

const PropsTable = ({ properties, name, description }: PropsTableProps) => {
  const [highlightedName, setHighlightedName] = useState<string | null>(null)

  // Listen to URL changes
  function handleHashChange() {
    setHighlightedName(window.location.hash.slice(1)) // slice to remove the leading '#'
  }
  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange, false)

    // Initial highlight check
    handleHashChange()

    setTimeout(() => {
      setHighlightedName(null)
    }, 3000)

    // Cleanup after component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false)
    }
  }, [])

  return (
    <>
      <Description>
        <Header aria-label={name} as={'h3'} id={name}>
          {name}
        </Header>
        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
      </Description>

      <div className='mt-6 mb-12'>
        <div className='-mx-4 overflow-x-auto sm:mx-0'>
          <div className='inline-block min-w-full'>
            <table className='w- w-full min-w-[540px] border-b border-gray-700 text-left sm:min-w-full'>
              <tbody className='divide-y divide-gray-700'>
                <TableHeader />
                <>
                  {properties?.map?.(prop => (
                    <TableRow
                      property={prop}
                      key={prop.name?.toString()}
                      highlight={highlightedName === prop.name?.toString()}
                    />
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropsTable

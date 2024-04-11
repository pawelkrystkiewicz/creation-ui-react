import clsx from 'clsx'
import type { CommitInfo } from '@types'

interface VersionProps {
  classNameOverride?: string
  gitHash: CommitInfo
}

const zeroPad = (n: number) => n.toString().padStart(2, '0')

export const Version = ({ classNameOverride, gitHash }: VersionProps) => {
  const { shortHash, hash, version, timestamp } = gitHash
  const date = new Date(timestamp)

  // const datePL = date.toLocaleString('pl', {})

  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ]
  const [hour, minutes] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]

  // const formatted = [
  //   { value: day, formatter: zeroPad },
  //   { value: month, formatter: zeroPad },
  //   {
  //     value: year,
  //     formatter: (v: any) => String(v).split('').slice(2).join(''),
  //   },
  //   { value: hour, formatter: zeroPad },
  //   { value: minutes, formatter: zeroPad },
  // ]
  //   .map(({ value, formatter }) => formatter(value))
  //   .join('')

  // prettier-ignore
  const classNames = [
    'cursor-pointer',
    'rounded',
    'hover:ring-1',
  ]

  return (
    <div
      style={{ fontSize: 8 }}
      className={
        classNameOverride ? classNameOverride : 'absolute bottom-0 right-0 px-2'
      }
    >
      <span
        title={'Version'}
        className={clsx([classNames, 'hover:bg-sky-100', 'hover:ring-sky-200'])}
      >
        v{version}
      </span>
      -
      <span
        title={`Last commit hash: ${hash}`}
        className={clsx(
          classNames,
          'hover:bg-orange-100',
          'hover:ring-orange-200'
        )}
      >
        {shortHash}
      </span>
    </div>
  )
}

interface VersionBodyProps {
  date: string
  version: string
  hash: string
  branch: string
}

const VersionBody = ({ date, version, hash, branch }: VersionBodyProps) => (
  <div>
    <div>Version: {version}</div>
    <dl>
      <dt>Build details</dt>
      <dd>Build: {date}</dd>
      <dd>Branch: {branch}</dd>
      <dd>Commit Hash: {hash}</dd>
    </dl>
  </div>
)

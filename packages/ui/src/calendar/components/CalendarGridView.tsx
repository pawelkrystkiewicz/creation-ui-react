import { FC } from 'react'
import { PeriodButton } from './PeriodButton'
import { For } from '../../'

interface CalendarGridViewProps {
  currentValue: number
  onClick: (period: string | number) => void
  entries: (string | number)[]
}

export const CalendarGridView: FC<CalendarGridViewProps> = ({
  currentValue,
  onClick,
  entries,
}) => {
  return (
    <div className='grid grid-cols-4 grid-rows-3 place-items-center w-full h-full place-self-center'>
      <For each={entries}>
        {period => (
          <PeriodButton
            key={period}
            period={period}
            current={currentValue === period}
            onClick={() => onClick(period)}
          />
        )}
      </For>
    </div>
  )
}

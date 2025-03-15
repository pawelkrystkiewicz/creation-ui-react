import { Flex, For } from '../../'
import { FC } from 'react'
import { CalendarProps } from '../calendar.types'
import { CalendarDaysView } from './CalendarDaysView'

interface CalendarDaysViewMultipleProps
  extends Pick<CalendarProps, 'numberOfMonths'> {}

export const CalendarDaysViewMultiple: FC<CalendarDaysViewMultipleProps> = ({
  numberOfMonths = 1,
}) => {
  if (numberOfMonths === 1) {
    return (
      <Flex gapX={3} gapY={3}>
        <CalendarDaysView />
      </Flex>
    )
  }

  const array = Array.from({ length: numberOfMonths })

  return (
    <Flex gapX={5} gapY={5}>
      <For each={array}>
        {(_: any, i: number) => (
          <Flex gapX={3} gapY={3} key={i}>
            <CalendarDaysView offsetMonth={i as 0 | 1} multipleCalendars />
          </Flex>
        )}
      </For>
    </Flex>
  )
}

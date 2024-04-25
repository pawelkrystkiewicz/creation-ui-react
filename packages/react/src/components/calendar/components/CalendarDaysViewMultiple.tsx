import { Flex } from '@root/components/flex'
import { For } from '@root/components/for'
import { FC } from 'react'
import { CalendarProps } from '../calendar.types'
import { CalendarDaysView } from './CalendarDaysView'

interface CalendarDaysViewMultipleProps
  extends Pick<CalendarProps, 'numberOfMonths'> {}

export const CalendarDaysViewMultiple: FC<CalendarDaysViewMultipleProps> = ({
  numberOfMonths,
}) => {
  const array = Array.from({ length: numberOfMonths })

  if (numberOfMonths === 1) {
    return (
      <Flex gap={3}>
        <CalendarDaysView />
      </Flex>
    )
  }

  return (
    <Flex gap={5}>
      <For each={array}>
        {(_, i) => (
          <Flex gap={3} key={i}>
            <CalendarDaysView offsetMonth={i as 0 | 1} multipleCalendars />
          </Flex>
        )}
      </For>
    </Flex>
  )
}

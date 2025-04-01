'use client'

import { Flex } from '@creation-ui/react'
import {
  BlogCard,
  ButtonsState,
  CalendarPicker,
  CookieSettings,
  CreditCardForm,
  DashboardChartCard,
  DashboardStatsCard,
  RegisterForm,
  TeamMembers,
} from './showcase/index'

const cardWidth = 'w-[320px] sm:w-sm'

export const Showcase = () => {
  return (
    <div className='my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10'>
      <RegisterForm className={cardWidth} />
      <ButtonsState className={cardWidth} />
      <CreditCardForm className={cardWidth} />
      <TeamMembers className={cardWidth} />
      <CookieSettings className={cardWidth} />
      <BlogCard className={cardWidth} />
      <Flex column gapY={4}>
        <DashboardStatsCard className={cardWidth} />
        <DashboardChartCard className={cardWidth} />
      </Flex>
      <CalendarPicker />
      {/* <Pagination /> */}
      {/* <NativeInputs /> */}
    </div>
  )
}

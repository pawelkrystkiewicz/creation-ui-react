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
  NativeInputs,
  Pagination,
  RegisterForm,
  TeamMembers,
} from './showcase/index'

export const Showcase = () => {
  return (
    <div className='mt-10 flex flex-col sm:flex-row flex-wrap gap-4 p-4'>
      <RegisterForm />
      <ButtonsState />
      <CreditCardForm />
      <TeamMembers />
      <CookieSettings />
      <CalendarPicker />
      <BlogCard />
      <Flex column gapY={4}>
        <DashboardStatsCard />
        <DashboardChartCard />
      </Flex>
      {/* <Pagination /> */}
      {/* <NativeInputs /> */}
    </div>
  )
}

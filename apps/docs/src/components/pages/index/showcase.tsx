'use client'

import {
  ButtonsState,
  CalendarPicker,
  CookieSettings,
  CreditCardForm,
  DashboardChartCard,
  DashboardStatsCard,
  ModalForm,
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
      <TeamMembers />
      <CookieSettings />
      <CreditCardForm />
      <DashboardChartCard />
      <DashboardStatsCard />
      <ModalForm />
      <Pagination />
      <CalendarPicker />
      <NativeInputs />
    </div>
  )
}

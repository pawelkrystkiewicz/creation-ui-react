export const DATE_TYPES = [
  //
  'date',
  'datetime-local',
  'month',
  'time',
  'week',
] as const

export type DateType = (typeof DATE_TYPES)[number]

export const INPUT_TYPES = [
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'url',
  'color',
  'file',
] as const

export type InputType = (typeof INPUT_TYPES)[number]

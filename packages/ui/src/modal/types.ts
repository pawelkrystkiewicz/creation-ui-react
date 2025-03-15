import { DialogProps, DialogTitleProps } from '@headlessui/react'
import { ComponentPropsWithoutRef } from 'react'

export type ModalProps = {
  className?: string
  children: React.ReactNode
} & Omit<DialogProps, 'as' | 'className'>

export type ModalHeaderProps = { className?: string; border?: boolean } & Omit<
  DialogTitleProps,
  'as' | 'className'
>

export type ModalBodyProps = ComponentPropsWithoutRef<'div'>
export type ModalFooterProps = {
  border?: boolean
} & ComponentPropsWithoutRef<'div'>

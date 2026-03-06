import { ComponentPropsWithoutRef } from 'react'

export interface ModalProps {
  className?: string
  children: React.ReactNode
  open?: boolean
  onClose?: () => void
}

export type ModalHeaderProps = { className?: string; border?: boolean } & Omit<
  ComponentPropsWithoutRef<'h2'>,
  'className'
>

export type ModalBodyProps = ComponentPropsWithoutRef<'div'>
export type ModalFooterProps = {
  border?: boolean
} & ComponentPropsWithoutRef<'div'>

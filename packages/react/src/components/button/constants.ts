import { ElementStatus } from '@root/types'

export const CONTRASTING_VARIANT = ['contained']

export const loaderColorClasses: Record<ElementStatus, string> = {
  error: 'fill-error',
  info: 'fill-info',
  primary: 'fill-primary',
  success: 'fill-success',
  warning: 'fill-warning',
}

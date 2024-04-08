import { sharedSizeSquareCVA } from '../../classes'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import type { IconProps, IconType } from './icon.type'

// map of icon names to their svg path
// https://pictogrammers.com/library/mdi/
const iconPathMap: Record<IconType, string> = {
  chevron_right: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  chevron_left: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  chevron_down: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  close:
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  check: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  straight: 'M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z',
  readonly:
    'M10,10.2L14,6.2L17.8,10L13.8,14L12.4,12.6L15,9.9L14.1,9L11.5,11.6L10,10.2M20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L19,8.9L20.7,7C21.1,6.7 21.1,6 20.7,5.6M19,21.7L17.7,23L11.2,16.5L6.8,21H3V17.2L7.5,12.7L1,6.3L2.3,5L19,21.7M9.8,15.1L8.9,14.2L5,18.1V19H5.9L9.8,15.1Z',
  dot: 'M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z',
  slash: 'M7 21L14.9 3H17L9.1 21H7Z',
  home: 'M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z',
}

const iconClasses = cva(
  [
    //
    'fill-info',
    'dark:fill-info-100',
    'hover:fill-primary',
    'dark:hover:fill-primary',
    'size-4',
    'flex-shrink-0',
  ],
  {
    variants: {
      size: sharedSizeSquareCVA,
    },
  }
)

const Icon = ({ icon, title, className, ...props }: IconProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={twMerge(iconClasses({ size }), className)}
      {...props}
    >
      <title>{title}</title>
      <path d={iconPathMap[icon]} />
    </svg>
  )
}

export default Icon

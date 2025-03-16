import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import type { IconProps, IconType } from '.'

// map of icon names to their svg path
const iconPathMap: Record<IconType, string[]> = {
  chevron_right: ['M9 6L15 12L9 18'],
  chevron_left: ['M15 6L9 12L15 18'],
  chevron_down: ['M6 9L12 15L18 9'],
  close: [
    'M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426',
  ],
  check: ['M5 13L9 17L19 7'],
  // straight: [''],
  // readonly: [''],
  slash: ['M15 4L8 20'],
  home: [
    'M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18',
    'M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8',
    'M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11',
  ],
  plus: ['M6 12H12M18 12H12M12 12V6M12 12V18'],
  minus: ['M6 12H18'],
}

const styles = cva(
  [
    'micro-interactions',
    'size-[var(--ui-icon-height)]',
    'stroke-current',
    'hover:stroke-primary',
    'flex-shrink-0',
  ],
  {
    variants: {
      interactive: {
        true: ['cursor-pointer'],
      },
    },
  },
)

export const Icon = ({ icon, title, className, ...props }: IconProps) => {
  const interactive = !!props.onClick
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      className={twMerge(styles({ interactive }), className)}
      {...props}
    >
      <title>{title}</title>
      {iconPathMap[icon].map(path => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}

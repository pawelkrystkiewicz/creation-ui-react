import { cva } from 'class-variance-authority'

export const avatar = {
  img: cva(['inline-block', 'ring-2', 'ring-white', '!object-cover'], {
    variants: {
      variant: {
        circle: ['rounded-full'],
        rounded: ['rounded-md'],
        square: ['rounded-none'],
      },
      container: {
        true: [
          //
          'relative',
          'w-fit',
          '!inline-flex',
          'flex-col',
          'items-center',
          'justify-center',
          'text-white',
          'bg-info',
          'dark:bg-info',
        ],
      },
    },
    defaultVariants: {
      variant: 'circle',
    },
  }),
  container: ['relative', 'w-fit'],
}

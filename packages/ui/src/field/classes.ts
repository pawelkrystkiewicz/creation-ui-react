import { cva, type VariantProps } from 'class-variance-authority'

export const fieldStyles = cva(['f'], {
  variants: {
    type: {
      column: [
        // Base layout
        'flex',
        'flex-col',
        'gap-1',
        // Label layout
        '*:data-[slot=label]:font-medium',
      ],
      row: [
        // Base layout
        // 'grid grid-cols-[1.125rem_1fr] items-center gap-x-2 gap-y-1 sm:grid-cols-[1rem_1fr]',
        'grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-1 sm:gap-x-2',
        // Control layout
        '*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:justify-self-center',
        // Label layout
        '*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2',
        // Error layout
        '*:data-[slot=error]:col-start-2 *:data-[slot=error]:row-start-3',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium',
      ],
    },
  },
  defaultVariants: {
    type: 'column',
  },
})

export type FieldType = VariantProps<typeof fieldStyles>['type']

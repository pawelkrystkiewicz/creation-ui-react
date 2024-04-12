import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import values from 'lodash.values'

export const formClassesMap = {
  // https://github.com/tailwindlabs/tailwindcss-forms
  // input type
  text: 'form-input',
  email: 'form-input',
  url: 'form-input',
  password: 'form-input',
  number: 'form-input',
  date: 'form-input',
  datetime: 'form-input',
  month: 'form-input',
  search: 'form-input',
  tel: 'form-input',
  time: 'form-input',
  week: 'form-input',
  checkbox: 'form-checkbox',
  radio: 'form-radio',
  // other
  textarea: 'form-textarea',
  select: 'form-select',
  multiselect: 'form-multiselect',
  color: 'form-color',
  // cva fallback
  false: null,
}

const getAllValuesFromObject = (obj: Record<string, string[] | string>) =>
  clsx(values(obj))

export const sharedDisabledCVA = {
  true: ['opacity-50', 'pointer-events-none'],
  false: null,
}

export const sharedReadOnlyCVA = {
  true: 'pointer-events-none',
  false: 'pointer-events-auto',
}

export const loaderClasses = cva(
  ['absolute', 'top-0', 'right-0', 'micro-interactions'],
  {
    variants: {
      loading: {
        true: ['opacity-100', 'pointer-events-none'],
        false: ['opacity-0', 'pointer-events-auto'],
      },
    },
    defaultVariants: {
      loading: false,
    },
  }
)

export const invalid = {
  text: ['invalid:text-error'],
  border: ['!invalid:border-error', '!focus:invalid:border-error'],
}
export const errorClasses = {
  text: ['!text-error'],
  border: ['!border-error', '!focus:border-error'],
}

export const sharedErrorClasses = getAllValuesFromObject(errorClasses)

export const classes = {
  required: ["after:content-['*']", 'after:ml-0.5', 'after:text-error'],
  label: ['select-none', 'block'],
  loaderInputPosition: loaderClasses,
  input: [
    // 'micro-interactions',
    'border',
    'bg-background-primary',
    'rounded',
    getAllValuesFromObject(invalid),
  ],
  checkable: [
    'micro-interactions',
    formClassesMap.checkbox,
    'text-primary',
    'checked:border-none',
    'checked:bg-primary',
    'indeterminate:bg-primary',
    'cursor-pointer',
    'peer',
  ],
}

export const inputContainer = cva(['micro-interactions', 'flex'], {
  variants: {
    layout: {
      column: ['flex-col', 'gap-1', 'items-start'],
      row: ['flex-row', 'gap-2', 'items-center'],
    },
    disabled: sharedDisabledCVA,
    error: {
      true: errorClasses.text,
    },
  },
  defaultVariants: {
    layout: 'column',
  },
})

export const label = cva([...classes.label], {
  variants: {
    size: {
      sm: [],
      md: [],
      lg: [],
    },
    required: {
      true: classes.required,
      false: null,
    },
    for: {
      checkbox: ['inline-flex', 'items-center', 'cursor-pointer'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputIcon = cva(
  [
    'micro-interactions',
    'absolute',
    'bottom-1/2',
    'transform',
    'translate-y-1/2',
    'inline-flex',
    'items-center',
    'w-fit',
  ],
  {
    variants: {
      position: {
        left: ['left-3'],
        right: ['right-3'],
      },
      type: {
        select: [],
      },
    },
    compoundVariants: [
      {
        type: 'select',
        position: 'right',
        className: ['right-5'],
      },
    ],
  }
)

export const optionListClasses = cva(
  [
    'bg-background-secondary',
    'shadow-md',
    'w-fit',
    'border',
    'rounded-md',
    'flex',
    'flex-col',
    'gap-1',
    'p-1',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
      placement: {
        top: ['!mb-1'],
        bottom: ['mt-1'],
      },
    },
  }
)

export const selectedOptionClasses = cva(
  [
    'rounded-full',
    'px-1.5',
    'text-sm',
    'inline-flex',
    'gap-1',
    'items-center',
    'select-none',
    'bg-primary',
  ],
  {
    variants: {},
  }
)

export const selectOptionClasses = cva(
  [
    'font-normal',
    'relative',
    'cursor-pointer',
    'select-none',
    'rounded-md',
    'group',
    'w-full',
    'flex',
    'items-center',
    'size',
    'text-size',
  ],
  {
    variants: {
      selected: {
        true: [
          'bg-primary/60',
          'dark:bg-primary/50',
          'hover:bg-primary/10',
          'hover:dark:bg-primary/60',
        ],
        false: [],
      },
      active: {
        true: ['bg-info', 'dark:bg-primary/25'],
        false: [],
      },
      disabled: {
        true: ['!opacity-50', 'cursor-not-allowed'],
        false: [],
      },
      multiple: { true: ['flex', 'gap-2'], false: [] },

      truncate: {
        true: ['truncate', 'whitespace-nowrap'],
      },
    },
    compoundVariants: [
      {
        selected: true,
        active: true,
        className: ['!bg-primary', '!dark:bg-primary/60'],
      },
    ],
  }
)

export const selectOptionIconClasses = cva(['font-extrabold', 'text-xl'], {
  variants: {
    selected: {
      true: ['opacity-100', '!text-primary', '!fill-primary'],
      false: ['opacity-0'],
    },
    active: { true: ['opacity-50'] },
  },
})

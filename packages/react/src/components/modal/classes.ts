export const modalClasses = {
  base: ['relative'],
  layer: {
    1: ['fixed', 'inset-0', 'overflow-y-auto'],
    2: ['flex', 'min-h-full', 'items-center', 'justify-center', 'text-center'],
  },
  title: ['text-lg', 'font-medium', 'leading-6'],
  panel: [
    'align-middle',
    'rounded-lg',
    'shadow-xl',
    'text-left',
    'transform',
    'transition-all',
    'bg-background-portal',
  ],
  children: [],
}

export const transitionProps = {
  modal: {
    enter: 'ease-in-out duration-[350ms]',
    enterFrom: 'opacity-0 scale-75',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in-out duration-[350ms]',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-75',
  },
}

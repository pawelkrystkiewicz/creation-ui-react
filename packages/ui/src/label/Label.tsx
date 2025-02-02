import React, { FC } from 'react';
import { LabelProps } from './types';
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge';

export const Label: FC<LabelProps> = ({className,...props}) => {
  return  <Headless.Label
      data-slot="label"
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white'
      )}
    />
};

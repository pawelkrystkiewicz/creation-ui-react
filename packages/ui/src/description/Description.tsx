import React, { FC } from 'react';
import { DescriptionProps } from './types';
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge';

export const Description: FC<DescriptionProps> = ({className,...props}) => {
  return <Headless.Description
  data-slot="description"
  {...props}
  className={twMerge(className, 'text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400')}
/>;
};

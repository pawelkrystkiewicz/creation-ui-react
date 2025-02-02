import React, { FC } from 'react';
import { FieldProps } from './types';
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge';


export const Field: FC<FieldProps> = ({ className, ...props }) => {
  return <Headless.Field
    {...props}
    className={twMerge(
      className,
      '[&>[data-slot=label]+[data-slot=control]]:mt-1',
      '[&>[data-slot=label]+[data-slot=description]]:mt-1',
      '[&>[data-slot=description]+[data-slot=control]]:mt-3',
      '[&>[data-slot=control]+[data-slot=description]]:mt-3',
      '[&>[data-slot=control]+[data-slot=error]]:mt-3',
      '*:data-[slot=label]:font-medium'
    )}
  />;
};

export const FieldGroup = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  return <div data-slot="control" {...props} className={twMerge(className, 'space-y-8')} />
}


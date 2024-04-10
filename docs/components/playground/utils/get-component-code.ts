import { PlaygroundValues } from '../types'

export const getComponentCode = (name: string, stateAsProps: string, children?: PlaygroundValues): string =>
  `
    import React from 'react';
    import { ${name} } from '@creation-ui/react';

    export const Example = () =>
      <${name} ${stateAsProps}${
    children
      ? `>
            ${children}
          </${name}>`
      : ' />'
  }
  `

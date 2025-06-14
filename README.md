# Creation UI

Creation UI is working with your app's Tailwind CSS and you need to have it installed in your project

```json
  "peerDependencies": {
    "@floating-ui/react": "^0.27.12",
    "@floating-ui/react-dom": "^2.1.3",
    "@headlessui/react": "^2.2",
    "@mona-health/react-input-mask": "^3.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2",
    "react": "^16 | ^17 | ^18 | ^19",
    "react-dom": "^16 | ^17 | ^18 | ^19",
    "tailwind-merge": "^2.6",
    "tailwindcss": "^4.1"
  },
```

## Installation

To install Creation UI, run command below:

> yarn add @creation-ui/react

> npm i @creation-ui/react

> pnpm i @creation-ui/react

> bun add @creation-ui/react

## Configuration

1. In your main .css file where you import tailwindcss v4, also import the creation ui css file.
   Don't forget to add `@source` to the path of the Creation UI package to let tailwindcss know where to also look for it's classes there.

```css copy
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
@import 'tailwindcss';
@import '@creation-ui/react/index.css';
@import '@creation-ui/react/theme.css';

@source "../node_modules/@creation-ui/react/dist";

/* you can extend tour theme config as needed */
@theme {
  --font-sans: 'Manrope', 'sans-serif';
  --font-mono: 'Fira Code', 'monospace';
}

/* use dark theme detection */
@variant dark (&:where(.dark, .dark *));

/* rest of your css */
/* ... */
```

You can extend all properties [as usual](https://tailwindcss.com/docs/configuration).

3. Start using it!

```jsx copy
import { Button } from '@creation-ui/react'

export default function App() {
  return <Button variant='contained'>Click me</Button>
}
```

## Development

To run it locally in dev mode:

> bun install && bun dev

Building:

> bun run build

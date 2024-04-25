# Creation UI

is a design system that lets you build a React powered websites
and apps. It's built on top of <b>React</b> and [Tailwind CSS](https://tailwindcss.com)
and it's fully customizable. It's a great starting point for your next project.

<br />

## Prerequisites

Creation UI is working with your app's Tailwind CSS and you need to have Tailwind CSS installed in your project - [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-postcss).
Also @creation-ui/react package is required for the React packages to work. It contains sharable theme config, styles and utilities.

```
  "peerDependencies": {
    "react": "^16 || ^17 || ^18",
    "react-dom": "^16 || ^17 || ^18",
    "tailwindcss": "^3.0"
  },
```

## Installation

To install Creation UI, run the command below:

    ```bash copy
     yarn add  @creation-ui/react
     ```

    ```bash copy
     npm i  @creation-ui/react
     ```

    ```bash copy
     pnpm i  @creation-ui/react
     ```

## Components

## Form Controls

- [Autocomplete](/docs/components/form-controls/autocomplete)
- [Input](/docs/components/form-controls/input)
- [Input Base](/docs/components/input-form-controls/base)
- [TextArea](/docs/components/form-controls/textarea)
- [Select](/docs/components/form-controls/select)
- [Checkbox](/docs/components/form-controls/checkbox)
- [Radio Group](/docs/components/radio-form-controls/group)
- [Radio](/docs/components/form-controls/radio)
- [Toggle Group](/docs/components/toggle-form-controls/group)
- [Time Picker](/docs/components/date-form-controls/picker)
- [Date Picker](/docs/components/time-form-controls/picker)
- [Switch](/docs/components/form-controls/switch)

## Buttons

- [Button Group](/docs/components/buttons/button-group)
- [Button](/docs/components/buttons/button)
- [Toggle Group](/docs/components/buttons/toggle-group)

## Portals

- [Drawer](/docs/components/portals/drawer)
- [Modal](/docs/components/portals/modal)
- [Popover](/docs/components/portals/popover)
- [Tooltip](/docs/components/portals/tooltip)

## Data display

- [Avatar](/docs/components/data-display/avatar)
- [Breadcrumbs](/docs/components/data-display/breadcrumbs)
- [Card](/docs/components/data-display/card)
- [Chip](/docs/components/data-display/chip)
- [Dark Mode Toggle](/docs/components/data-display/dark-mode-toggle)
- [Table](/docs/components/data-display/table)
- [Tree](/docs/components/data-display/tree)
- [Typography](/docs/components/data-display/typography)

## Feedback & Status

- [Loader](/docs/components/feedback/loader)
- [Loading Overlay](/docs/components/feedback/loading-overlay)
- [Callout](/docs/components/feedback/callout)
- [ProgressBar](/docs/components/feedback/progress-bar)

## Utilities

- [Theme](/docs/components/utilities/theme)
- [Dropdown Chevron](/docs/components/utilities/dropdown-chevron)
- [Clear Button](/docs/components/utilities/clear-button)
- [Error Text](/docs/components/utilities/error-text)
- [Select Option](/docs/components/utilities/select-option)
- [Show](/docs/components/utilities/show)

## Roadmap and future plans

- Accordion
- Menu
- Schedule
- Timeline

## Configuration

1. Add `withTailwindConfig` to your `tailwind.config.js` file:

```js copy
const { withTailwindConfig } = require('@creation-ui/react')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.css',
  ],
  plugins: [require('@tailwindcss/typography')],
})

module.exports = config
```

You can extend all properties [as usual](https://tailwindcss.com/docs/configuration).

2. Import library's CSS file into your app.
If you're using standard config of `Next.js`, you should import it in `pages/_app.js` or similar.
If you're using standard config of `create-react-app` or `Vite`, you should import it in `index.js` or similar.

```js copy
import '@creation-ui/react/index.css'
```

3. Start using it!

```jsx copy
import { Button } from '@creation-ui/react'

export default function App() {
  return <Button>Click me</Button>
}
```

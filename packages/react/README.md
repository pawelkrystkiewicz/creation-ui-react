# Creation UI

is a design system that lets you build a React powered websites
and apps. It's built on top of <b>React</b> and [Tailwind CSS](https://tailwindcss.com)
and it's fully customizable. It's a great starting point for your next project.

<br />

## Prerequisites

Creation UI is working with your app's Tailwind CSS and you need to have Tailwind CSS installed in your project - [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-postcss).

```
  "peerDependencies": {
    "react": "^16 || ^17 || ^18",
    "react-dom": "^16 || ^17 || ^18",
    "tailwindcss": "^3.0"
  },
```

## Installation

To install Creation UI, run command below:

    ```bash copy
     yarn add @creation-ui/react
     ```

    ```bash copy
     npm i @creation-ui/react
     ```

    ```bash copy
     pnpm i @creation-ui/react
     ```

## Components

- [x] [Autocomplete](/docs/components/autocomplete)
- [x] [Avatar](/docs/components/avatar)
- [x] [Button](/docs/components/button)
- [x] [Checkbox](/docs/components/checkbox)
- [x] [Drawer](/docs/components/drawer)
- [x] [Input](/docs/components/input)
- [x] [Box](/docs/components/box)
- [x] [Button Group](/docs/components/button-group)
- [x] [Dark Mode Toggle](/docs/components/dark-mode-toggle) inspired by [This guy](https://chakra-ui.com/)
- [x] [Loader](/docs/components/loader)
- [x] [Loading Overlay](/docs/components/loading-overlay)
- [x] [Modal](/docs/components/modal)
- [x] [Radio](/docs/components/radio)
- [x] [Radio Group](/docs/components/radioGroup)
- [x] [Select](/docs/components/select)
- [x] [Status Badge](/docs/components/statusBadge)
- [x] [Switch](/docs/components/switch)
- [x] [TextArea](/docs/components/textarea)
- [x] [Theme](/docs/components/theme)
- [x] [Toggle Group](/docs/components/toggle-group)
- [x] [Tooltip](/docs/components/tooltip)

Reusable helpers

- [x] [Dropdown Chevron](/docs/components/autocomplete)
- [x] [Clear Button](/docs/components/autocomplete)
- [x] [Error Text](/docs/components/autocomplete)
- [x] [Select Option](/docs/components/SelectOption)

In development

- [x] [Table](/docs/components/Table)
- [ ] [Menu](/docs/components/Menu)
- [ ] [Layout](/docs/components/Layout)
- [ ] [Context Menu](/docs/components/context-menu)
- [ ] [Accordion](/docs/components/Accordion)
- [ ] [Schedule](/docs/components/schedule)
- [ ] [Timeline](/docs/components/timeline)
- [ ] [Breadcrumbs](/docs/components/breadcrumbs)

## Configuration

1. Add `withTailwindConfig` to your `tailwind.config.js` file:

```js copy
const withTailwindConfig = require('@creation-ui/react/utils/withTailwindConfig')

module.exports = withTailwindConfig({
  content: ['!node_modules/**/*', './**/*.{js,ts,jsx,tsx,mdx}', '*.css'],
})
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

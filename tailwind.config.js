const { withTailwindConfig } = require('./packages/react/src/utils/with-tw-config')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '!node_modules',
    './**/*.css',
  ],
  extend: {
    transitionDelay: {
      0: '0ms',
    },
  },
  plugins: [require('@tailwindcss/typography')],
})

module.exports = config

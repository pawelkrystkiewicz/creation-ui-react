const { withTailwindConfig } = require('@creation-ui/core')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '!node_modules',
    'node_modules/@creation-ui/core/**/*.{js,ts,jsx,tsx,mdx}',
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

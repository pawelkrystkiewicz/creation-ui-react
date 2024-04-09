const { withTailwindConfig } = require('./packages/react/src')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    //
    // '!node_modules',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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

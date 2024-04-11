const { withTailwindConfig } = require('@creation-ui/react')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    '!node_modules',
    '../packages/react/dist/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './public/**/*.{js,ts,jsx,tsx,mdx,css}',
    './styles/index.css'
  ],
  theme: {
    extend: {
      transitionDelay: {
        0: '0ms'
      }

    }
  },
  plugins: [require('@tailwindcss/typography')]
})

module.exports = config

import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'

export const formatCode = (code: string) =>
  prettier.format(code, {
    parser: 'babel',
    plugins: [parserBabel],
    semi: false,
    arrowParens: 'avoid',
    printWidth: 80,
    jsxSingleQuote: true,
    trailingComma: 'all',
    tabWidth: 2,
    language: 'jsx',
  })

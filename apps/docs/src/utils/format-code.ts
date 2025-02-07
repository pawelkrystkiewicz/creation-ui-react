import * as prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'

export const formatCode = async (code: string) => {
  try {
    return await prettier.format(code.trim(), {
      parser: 'babel',
      plugins: [parserBabel],
      semi: false,
      arrowParens: 'avoid',
      printWidth: 80,
      jsxSingleQuote: true,
      trailingComma: 'all',
      tabWidth: 2,
    })
  } catch (error) {
    console.error(error)
    return code
  }
}

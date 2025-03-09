import * as prettier from 'prettier/standalone'
import * as prettierPluginEstree from 'prettier/plugins/estree'
import * as parserBabel from 'prettier/parser-babel'

export const formatCode = async (code: string) => {
  try {
    return await prettier.format(code.trim(), {
      parser: 'babel',
      plugins: [
        parserBabel,
        // @ts-expect-error
        prettierPluginEstree,
      ],
      semi: false,
      arrowParens: 'avoid',
      printWidth: 40,
      jsxSingleQuote: true,
      trailingComma: 'all',
      tabWidth: 2,
    })
  } catch (error) {
    console.error(error)
    return code
  }
}

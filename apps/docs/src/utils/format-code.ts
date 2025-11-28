export const formatCode = async (code: string) => {
  try {
    const [{ format }, prettierPluginBabel, prettierPluginEstree] =
      await Promise.all([
        import('prettier/standalone'),
        import('prettier/plugins/babel'),
        import('prettier/plugins/estree'),
      ])

    return await format(code.trim(), {
      parser: 'babel',
      plugins: [prettierPluginBabel.default, prettierPluginEstree.default],
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

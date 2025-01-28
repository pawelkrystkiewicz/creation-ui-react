import { js as beautify } from 'js-beautify'

export const formatCode = (code: string) =>
  beautify(code, {
    indent_size: 2,
    space_in_empty_paren: true,
    end_with_newline: true,
    e4x: true, // Enables JSX formatting
    // jsx: true,
    max_preserve_newlines: 2,
    preserve_newlines: true,
    wrap_line_length: 80,
    // semi: false,
    // arrow_parens: 'avoid',
    // single_quote: true,
    // trailing_comma: 'all',
  })

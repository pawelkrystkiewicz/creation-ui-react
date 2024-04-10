import { CopyBlock, dracula } from 'react-code-blocks'
import { twMerge } from 'tailwind-merge'

interface CodeBoxProps {
  code: string
  language: CodeLang
  wrapperClassName?: string
}

export default function CodeBox({ code, language, wrapperClassName }: CodeBoxProps) {
  return (
    <div className={twMerge('p-10 rounded-lg bg-yellow-400', wrapperClassName)}>
      <div className='code-block'>
        <CopyBlock
          className='p-4 text-sm'
          text={code}
          language={language}
          showLineNumbers={false}
          theme={dracula}
          customStyle={{
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            padding: '1rem',
          }}
        />
      </div>
    </div>
  )
}

type CodeLang =
  | 'abap'
  | 'actionscript'
  | 'ada'
  | 'arduino'
  | 'autoit'
  | 'c'
  | 'clojure'
  | 'cs'
  | 'c'
  | 'cpp'
  | 'coffeescript'
  | 'csharp'
  | 'css'
  | 'cuda'
  | 'd'
  | 'dart'
  | 'delphi'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'fortran'
  | 'foxpro'
  | 'fsharp'
  | 'go'
  | 'graphql'
  | 'gql'
  | 'groovy'
  | 'haskell'
  | 'haxe'
  | 'html'
  | 'java'
  | 'javascript'
  | 'json'
  | 'julia'
  | 'jsx'
  | 'js'
  | 'kotlin'
  | 'latex'
  | 'lisp'
  | 'livescript'
  | 'lua'
  | 'mathematica'
  | 'makefile'
  | 'matlab'
  | 'objectivec'
  | 'objective'
  | 'objective'
  | 'objectpascal'
  | 'ocaml'
  | 'octave'
  | 'perl'
  | 'php'
  | 'powershell'
  | 'prolog'
  | 'puppet'
  | 'python'
  | 'qml'
  | 'r'
  | 'racket'
  | 'restructuredtext'
  | 'rest'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'less'
  | 'scala'
  | 'scheme'
  | 'shell'
  | 'smalltalk'
  | 'sql'
  | 'standardml'
  | 'sml'
  | 'swift'
  | 'tcl'
  | 'tex'
  | 'text'
  | 'tsx'
  | 'ts'
  | 'typescript'
  | 'vala'
  | 'vbnet'
  | 'verilog'
  | 'vhdl'
  | 'xml'
  | 'xquery'
  | 'yaml'

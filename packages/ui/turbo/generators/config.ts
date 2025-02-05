import type { PlopTypes } from '@turbo/gen'

const baseComponentPath = './src/{{kebabCase name}}'
const toPath = (fileName: string) => [baseComponentPath, fileName].join('/')

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('component', {
    description: "Add new react component in it's own folder",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: toPath('{{pascalCase name}}.tsx'),
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: toPath('types.ts'),
        templateFile: 'templates/types.ts.hbs',
      },
      {
        type: 'add',
        path: toPath('classes.ts'),
        templateFile: 'templates/classes.ts.hbs',
      },
      {
        type: 'add',
        path: toPath('index.ts'),
        templateFile: 'templates/index.ts.hbs',
      },
    ],
  })
}

const tsj = require('ts-json-schema-generator')
const fs = require('fs')

const baseConfig = {
  tsconfig: './tsconfig.json',
  type: 'InputBaseProps',
  skipTypeCheck: true,
}

const configurations = [
  {
    config: {
      ...baseConfig,
      path: './packages/react/src/types/index.ts',
    },
    output: './docs/types.json',
  },
]

const generateDocumentation = ({ config, output }) => {
  // start measuring time
  const start = process.hrtime()
  const generator = tsj.createGenerator(config)
  const schema = generator.createSchema(config.type)
  const schemaString = JSON.stringify(schema, null, 2)

  const path = require('path')
  const outputDirectory = path.dirname(output)

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true })
  }

  fs.writeFile(output, schemaString, err => {
    const end = process.hrtime(start)
    console.log(`Error ${output} in ${end[0]}s ${end[1] / 1000000}ms`)
    if (err) throw err
  })
  // end measuring time
  const end = process.hrtime(start)
  console.log(`Generated ${output} in ${end[0]}s ${end[1] / 1000000}ms`)
}

configurations.forEach(generateDocumentation)

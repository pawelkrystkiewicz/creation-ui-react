import { AutocompleteExample, AutocompleteMultipleExample, AutocompleteMultipleExampleAllSelected } from './playgrounds'

export function AutocompleteDocs() {
  return (
    <div className="flex flex-col gap-4">
      <AutocompleteExample />
      <AutocompleteMultipleExample />
      <AutocompleteMultipleExampleAllSelected />
    </div>
  )
}

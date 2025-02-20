import { Show } from '../../'
import { useAutocomplete } from '../context'

export const MultipleSelections = () => {
  const {
    limit = 0,
    selected = [],
    renderTags,
    getLimitTagsText,
    handleRemoveSelected,
  } = useAutocomplete()

  if (!Array.isArray(selected) || !selected.length) {
    return null
  }

  const limitedOptions = selected?.slice(0, limit)
  const more = selected?.length - limit
  return (
    <>
      {renderTags?.(limitedOptions, handleRemoveSelected)}
      <Show when={more > 0}>
        <span>{getLimitTagsText!(more)}</span>
      </Show>
    </>
  )
}

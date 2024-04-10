import clsx from 'clsx'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { PlaygroundControlComponent } from './playground-control'

export const PlaygroundControls = () => {
  const { controls: properties } = usePlayground()

  return (
    <div className={clsx(classes.controls)}>
      {properties?.map((property, index) => (
        <div key={index}>
          <PlaygroundControlComponent property={property} />
        </div>
      ))}
    </div>
  )
}

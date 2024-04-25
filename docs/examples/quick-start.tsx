import { Container } from '@components/container'
import { Button } from '@creation-ui/react'
import { mdiPlus, mdiRestore } from '@mdi/js'
import { Icon } from '@mdi/react'
import { useState } from 'react'

export const QuickStartExample = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => setClicks(c => c + 1)
  const resetCounter = () => setClicks(0)

  return (
    <Container>
      <Button
        //
        onClick={handleClick}
        iconLeft={<Icon path={mdiPlus} size={1} />}
      >
        Clicks counter: {clicks}
      </Button>
      <Button
        //
        variant='outlined'
        onClick={resetCounter}
        disabled={clicks === 0}
        iconLeft={<Icon path={mdiRestore} size={1} />}
      >
        Reset
      </Button>
    </Container>
  )
}

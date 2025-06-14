// @ts-ignore
import { Input } from '@creation-ui/react'
import { IconContext, LockIcon, UserCheckIcon } from '@phosphor-icons/react'
import { AutocompleteDocs } from './examples/autocomplete'

function App() {
  return (
    <IconContext.Provider
      value={{
        color: 'currentColor',
        size: 18,
        mirrored: false,
      }}
    >
      <div className="h-full w-full flex flex-col gap-10 p-10">
        <h1 className="text-2xl font-bold">Creation UI Playground</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Autocomplete</h2>
          <AutocompleteDocs />
          <div className="flex flex-col gap-4 max-w-sm">
            <Input
              type="text"
              placeholder="Text"
              startAdornment={<UserCheckIcon />}
            />
            <Input
              type="text"
              placeholder="Text"
              endAdornment={<LockIcon />}
              defaultValue="Hello"
              value="Hello"
              onClear={() => console.log('clear')}
            />
            <Input
              type="text"
              placeholder="Text"
              startAdornment={<UserCheckIcon />}
              endAdornment={<LockIcon />}
            />
            <Input type="number" placeholder="Number" />
            <Input type="date" placeholder="Date" />
            <Input type="color" placeholder="Color" />
            <Input type="file" placeholder="File" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="search" placeholder="Search" />
            <Input type="tel" placeholder="Tel" />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default App

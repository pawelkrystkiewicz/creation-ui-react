import dynamic from 'next/dynamic'
import React from 'react'

const NonSSRWrapper = (props: any) => <>{props.children}</>
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
})

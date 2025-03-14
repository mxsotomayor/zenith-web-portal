import React from 'react'
import mapper from './mapper'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NewsGridComponent(payload: any) {
  const data = mapper(payload)
  return (
    <div>NewsGridComponent <pre>{JSON.stringify(data) ?? ""}</pre></div>
  )
}

export default NewsGridComponent
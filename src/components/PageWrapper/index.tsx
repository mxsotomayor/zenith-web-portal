import React from 'react'

function PageWrapper({children}:{children:React.ReactNode}) {
  return (
    <main className='mt-[96px]'>{children}</main>
  )
}

export default PageWrapper
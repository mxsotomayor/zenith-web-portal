import React from 'react'

function PageWrapper({children}:{children:React.ReactNode}) {
  return (
    <main data-name="PageWrapper" className='mt-[96px]'>{children}</main>
  )
}

export default PageWrapper
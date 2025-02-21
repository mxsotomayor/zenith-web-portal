import Link from 'next/link'
import React from 'react'

function _404() {
  return (
    <div className='container mx-auto pt-[100px] h-[calc(100vh-100px)]'>
      <h1 className='text-4xl pt-12 mb-4 font-bold'>Opss! Page not found</h1>
      <p>This page probably was changed of place or deleted. Is important to you? Get in touch with us or consult our <Link href="/help" className='text-blue-600 underline'>Help Page</Link> </p>
    </div>
  )
}

export default _404
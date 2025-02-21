"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'

function CookiesNotice() {

  const [show, setShow] = React.useState(false)

  useEffect(() => {
    if(window.localStorage.getItem('cookies-notice') === 'accepted'){
      setShow(false)
    }else{
      setShow(true)
    }
  },[])

  return (
    <div className={`bg-white text-white p-4 w-full fixed ${show ? 'bottom-0':'-bottom-56'} z-50 transition-all ease-in-out duration-300  shadow-2xl`}>
    <div className="container mx-auto text-blue-950">
      <h2 className="">
        We use cookies to improve your browsing experience, analyze site
        traffic, and personalize content. By continuing to use our site,
        you agree to our use of cookies. For more information, see our
        Privacy Policy.
      </h2>

      <div className="flex gap-2 mt-5">
        <Button className="" onClick={() => setShow(!show)}>Accept</Button>
        <Button className="" onClick={() => setShow(!show)} variant="ghost">
          Reject
        </Button>
      </div>
    </div>
  </div>
  )
}

export default CookiesNotice 

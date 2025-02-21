import React from 'react'
import { Button } from '@/components/ui/button'

function CookiesNotice() {
  return (
    <div className="bg-white text-white p-4 w-full fixed bottom-0 z-40  shadow-2xl">
    <div className="container mx-auto text-blue-950">
      <h2 className="">
        We use cookies to improve your browsing experience, analyze site
        traffic, and personalize content. By continuing to use our site,
        you agree to our use of cookies. For more information, see our
        Privacy Policy.
      </h2>

      <div className="flex gap-2 mt-5">
        <Button className="">Accept</Button>
        <Button className="" variant="ghost">
          Reject
        </Button>
      </div>
    </div>
  </div>
  )
}

export default CookiesNotice
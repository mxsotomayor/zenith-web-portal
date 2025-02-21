import FAQBlock from '@/components/FAQs'
import HeroBanner from '@/components/HeroBanner'
import NavBar from '@/components/Navbar'
import React from 'react'

function BusinessLoginPage() {
  return (
    <div className="pt-[100px]">
      <NavBar />
      <HeroBanner />
      <FAQBlock />
    </div>
  )
}

export default BusinessLoginPage
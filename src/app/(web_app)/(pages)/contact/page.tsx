import Banner from '@/components/Banner'
import ContactLocations from '@/components/ContactLocations'
import HorizServicesLinks from '@/components/HorizServicesLinks'
import PromoAlert from '@/components/PromoAlert'
import React from 'react'

function Locations() {
  return (
    <div className="pt-[100px]">
        <Banner title='Do you want to tell us something?' subtitle='Get in touch with us using our common contact and location details'   />
        <ContactLocations />
        <PromoAlert />
        <HorizServicesLinks />
    </div>
  )
}

export default Locations
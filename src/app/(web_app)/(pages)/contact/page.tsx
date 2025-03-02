import Banner from '@/components/Banner'
import ContactLocations from '@/components/ContactLocations'
import HorizServicesLinks from '@/components/HorizServicesLinks'
import PageWrapper from '@/components/PageWrapper'
import PromoAlert from '@/components/PromoAlert'
import React from 'react'

function Locations() {
  return (
    <PageWrapper>
        <Banner title='Do you want to tell us something?' subtitle='Get in touch with us using our common contact and location details'   />
        <ContactLocations />
        <PromoAlert />
        <HorizServicesLinks />
    </PageWrapper>
  )
}

export default Locations
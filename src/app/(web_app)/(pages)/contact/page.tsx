import Banner from "@/components/Banner";
import ContactLocations from "@/components/ContactLocations";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

function Locations() {
  return (
    <PageWrapper>
      <Banner
        title="Do you want to tell us something?"
        subtitle="Get in touch with us using our common contact and location details"
      />
      <ContactLocations /> 
    </PageWrapper>
  );
}

export default Locations;

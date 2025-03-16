import Banner from "@/components/Banner";
import ContactLocations from "@/components/ContactLocations";
import HorizServicesLinks from "@/components/HorizServicesLinks";
import HorizServicesLinksInit from "@/components/HorizServicesLinks/dataInit";
import HotLinkServices from "@/components/HotLinkServices";
import { HotLinkServicesInit } from "@/components/HotLinkServices/dataInit";
import PageWrapper from "@/components/PageWrapper";
import PromoAlert from "@/components/PromoAlert";
import PromoAlertInit from "@/components/PromoAlert/dataInit";
import React from "react";

function Locations() {
  return (
    <PageWrapper>
      <Banner
        title="Do you want to tell us something?"
        subtitle="Get in touch with us using our common contact and location details"
      />
      <ContactLocations />
      <PromoAlert {...PromoAlertInit} />
      <HotLinkServices {...HotLinkServicesInit} />
      <HorizServicesLinks {...HorizServicesLinksInit} />
    </PageWrapper>
  );
}

export default Locations;

import Banner from "@/components/Banner";
import HorizServicesLinks from "@/components/HorizServicesLinks";
import MansoryGrid from "@/components/MansoryGrid";
import PageWrapper from "@/components/PageWrapper";
import PromoAlert from "@/components/PromoAlert";
import TwoColumnBanner from "@/components/TwoColBanner";
import React from "react";

function Locations() {
  return (
    <PageWrapper>
      <Banner
        title="Banca Digital"
        subtitle="Get in touch with us using our common contact and location details"
      />
      <TwoColumnBanner direction="RIGHT_LEFT" />
      <PromoAlert />
      <TwoColumnBanner direction="LEFT_RIGHT" />
      <MansoryGrid direction="LEFT_RIGHT" />
      <TwoColumnBanner direction="RIGHT_LEFT" />
      <HorizServicesLinks />
    </PageWrapper>
  );
}

export default Locations;

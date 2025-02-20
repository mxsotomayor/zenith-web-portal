import HeroBanner from "@/components/HeroBanner";
import HotLinkServices from "@/components/HotLinkServices";
import NavBar from "@/components/Navbar";
import React from "react";

function BusinessPage() {
  return (
    <div className="pt-[100px]">
      <NavBar selectedSite={1}/>
      <HeroBanner />
      <HotLinkServices />
    </div>
  );
}

export default BusinessPage;

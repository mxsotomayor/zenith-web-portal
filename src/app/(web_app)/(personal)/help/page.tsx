import Banner from "@/components/Banner";
import FAQBlock from "@/components/FAQs";
import HelpTopics from "@/components/HelpTopics";
// import HeroBanner from '@/components/HeroBanner'
import NavBar from "@/components/Navbar";
import React from "react";

function BusinessLoginPage() {
  return (
    <div className="pt-[100px]">
      <NavBar />
      <Banner
        title="Compare and switch business services with Bionic"
        subtitle="Find out if you could save on business energy, broadband and phone."
        cta="Try us now!" 
      />
      <HelpTopics />
      <FAQBlock />
    </div>
  );
}

export default BusinessLoginPage;

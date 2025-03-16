import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import HelpTopics from "@/components/HelpTopics";
import PageWrapper from "@/components/PageWrapper";
// import HeroBanner from '@/components/HeroBanner'
// import NavBar from "@/components/Navbar";
import React from "react";

function BusinessLoginPage() {
  return (
    <PageWrapper>
      {/* <NavBar /> */}
      <Banner
        title="Compare and switch business services with Bionic"
        subtitle="Find out if you could save on business energy, broadband and phone."
        cta="Try us now!" 
      />
      <HelpTopics />
      <FAQs
              title="Frequently Asked Questions"
              search={{ placeholder: "Search FAQ" }}
              items={[
                {
                  question: "What is Open Banking?",
                  answer:
                    "Open Banking is a secure way for you to give providers access to your financial information. It allows you to share your data with authorized third-party providers, enabling them to offer you personalized financial products and services.",
                },
                {
                  question: "Is Open Banking safe?",
                  answer:
                    "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
                },
                {
                  question: "Is Open Banking safe?",
                  answer:
                    "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
                },
                {
                  question: "Is Open Banking safe?",
                  answer:
                    "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
                },
              ]}
            />
    </PageWrapper>
  );
}

export default BusinessLoginPage;

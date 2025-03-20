// import BlockSpace from "@/components/BlockSpace";
// import FAQs from "@/components/FAQs";
// import HeroBanner from "@/components/HeroBanner";
// import { HeroBannerInit } from "@/components/HeroBanner/dataInit";
// import HorizServicesLinks from "@/components/HorizServicesLinks";
// import HorizServicesLinksInit from "@/components/HorizServicesLinks/dataInit";
// import HotLinkServices from "@/components/HotLinkServices";
// import { HotLinkServicesInit } from "@/components/HotLinkServices/dataInit";
// import ImportantBlock from "@/components/ImportantBlock";
// import ImportantBlockInitProps from "@/components/ImportantBlock/dataInit";
// import MansoryGrid from "@/components/MansoryGrid";
// import MansoryGridInit from "@/components/MansoryGrid/dataInit";
// import NewsGrid from "@/components/NewsGrid";
// import PageWrapper from "@/components/PageWrapper";
// import PromoAlert from "@/components/PromoAlert";
// import PromoAlertInit from "@/components/PromoAlert/dataInit";
// import TwoColumnBanner from "@/components/TwoColBanner";
// import TwoColumnInit from "@/components/TwoColBanner/dataInit";
import { Metadata } from "next";
import PageBuilder from "@/app/core/page_builder/PageBuilder";
import { ImportProps } from "@/app/core/page_builder/schemas";
import CMSPagesService from "@/app/core/services/CMSPagesService";
import CMSGlobalService from "@/app/core/services/CMSGlobalService";

export async function generateMetadata(): Promise<Metadata> {
  const globalSettings = await CMSGlobalService.get();
  const DEFAULT_PAGE_ID = globalSettings.defaultSite?.page?.documentId ?? "";
  const page = await CMSPagesService.getByID(DEFAULT_PAGE_ID);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function Home() {
  const globalSettings = await CMSGlobalService.get(); 
  const DEFAULT_PAGE_ID = globalSettings.defaultSite?.page?.documentId ?? "";

  const page = await CMSPagesService.getByID(DEFAULT_PAGE_ID);

  const pageBodyContent: ImportProps[] =
    page.body?.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (component: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _component, ...rest } = component;
        return {
          _component: component.__typename,
          props: rest,
        };
      }
    ) ?? [];

    // pageBodyContent.push({
    //   "_component":"TwoColumnBannerFragment",
    //   "props": TwoColumnInit
    // })

  return <PageBuilder items={pageBodyContent} />;
  // return (
  //   <PageWrapper>
  //     <HeroBanner {...HeroBannerInit} />
  //     <HotLinkServices {...HotLinkServicesInit} />
  //     <ImportantBlock {...ImportantBlockInitProps} />
  //     <PromoAlert {...PromoAlertInit} />
  //     <NewsGrid />
  //     <PromoAlert {...PromoAlertInit} />
  //     <MansoryGrid {...MansoryGridInit} />
  //     <TwoColumnBanner {...TwoColumnInit} />
  //     <TwoColumnBanner {...TwoColumnInit} />
  //     <HorizServicesLinks {...HorizServicesLinksInit}/>
  //     <MansoryGrid {...MansoryGridInit} />
  //     <BlockSpace size="lg" />
  //     <FAQs
  //       title="Frequently Asked Questions"
  //       search={{ placeholder: "Search FAQ" }}
  //       items={[
  //         {
  //           question: "What is Open Banking?",
  //           answer:
  //             "Open Banking is a secure way for you to give providers access to your financial information. It allows you to share your data with authorized third-party providers, enabling them to offer you personalized financial products and services.",
  //         },
  //         {
  //           question: "Is Open Banking safe?",
  //           answer:
  //             "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
  //         },
  //         {
  //           question: "Is Open Banking safe?",
  //           answer:
  //             "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
  //         },
  //         {
  //           question: "Is Open Banking safe?",
  //           answer:
  //             "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
  //         },
  //       ]}
  //     />
  //   </PageWrapper>
  // );
}

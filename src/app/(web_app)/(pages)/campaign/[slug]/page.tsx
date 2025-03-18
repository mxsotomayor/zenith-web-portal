import {} from "@/__generated__/graphql";
import PageBuilder from "@/app/core/page_builder/PageBuilder";
import { ImportProps } from "@/app/core/page_builder/schemas";
import CMSCampaignService from "@/app/core/services/CMSCampaignService";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const campaignSlug = (await params).slug;

  const campaign = await CMSCampaignService.getByID(campaignSlug);

  if (!campaign) notFound();

  return {
    title: campaign.title,
    description: campaign.description,
  };
}



export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const campaignSlug = (await params).slug;

  const campaign = await CMSCampaignService.getByID(campaignSlug);

  if (!campaign) notFound();

  const pageBodyContent: ImportProps[] =
    campaign.body?.map(
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

  pageBodyContent.unshift({
    _component: "BlockSpaceFragment",
    props: { size: "lg" },
  });

  pageBodyContent.unshift({
    _component: "CampaignBannerFragment",
    props: campaign,
  });

  return <PageBuilder items={pageBodyContent} />;
}

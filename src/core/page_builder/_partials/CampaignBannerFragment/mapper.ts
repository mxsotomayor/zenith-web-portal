import { Campaign } from "@/__generated__/graphql";
import CampaignBannerProps from "@/components/CampaignBanner/types";

const mapper = (props: Campaign): CampaignBannerProps => {
  return {
    title: props.title ?? "",
    description: props.description ?? "",
    media: {
      type: "img",
      url: (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + (props.bg?.url),
    },
  };
};

export default mapper;

import { ComponentSharedTwoColumnBanner } from "@/__generated__/graphql";
import TwoColBannerProps from "@/components/TwoColBanner/schema";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const mapper = (data: ComponentSharedTwoColumnBanner): TwoColBannerProps => {
  return {
    title: data.title ?? "",
    subTitle: data.description ?? "",
    body: data.twoColumnBody?.body ?? "",
    direction: data.direction ?? "left",
    media: {
      type: "img",
      url: (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + (data.media?.url ?? ""),
    },
    cta: {
      text: extractNavLinkText(data.cta),
      url: extractNavLinkHref(data.cta),
    },
  };
};

export default mapper;

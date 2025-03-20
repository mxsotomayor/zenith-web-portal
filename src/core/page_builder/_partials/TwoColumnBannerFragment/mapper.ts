import { ComponentSharedTwoColumnBanner } from "@/__generated__/graphql";
import TwoColBannerProps from "@/components/TwoColBanner/types";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const buildMedia = (
  mimetype = "",
  url = "",
  videoUrl = ""
): { type: "img" | "video"; url: string } => {


  if(videoUrl){
    return {
      type:"video",
      url: videoUrl
    }
  }

  return {
    type: mimetype.includes("image") ? "img" : "video",
    url : (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + url,
  };
};

const mapper = (data: ComponentSharedTwoColumnBanner): TwoColBannerProps => {

  return {
    title: data.title ?? "",
    subTitle: data.description ?? "",
    body: data.twoColumnBody?.body ?? "",
    direction: data.direction ?? "left",
    media: buildMedia(data.media?.mime, data.media?.url, data.externalYtbUrl ?? ""),
    cta: extractNavLinkText(data.cta) === "[no-text]" ? undefined : {
      text: extractNavLinkText(data.cta),
      url: extractNavLinkHref(data.cta),
    },
  };
};

export default mapper;

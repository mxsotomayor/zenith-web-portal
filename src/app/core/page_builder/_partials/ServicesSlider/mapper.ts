import { ComponentSlidersServicesSlider } from "@/__generated__/graphql";
import HotlinksProps from "@/components/HotLinkServices/schema";
import { extractNavLinkHref, extractNavLinkText } from "../../utils";

const mapper = (data: ComponentSlidersServicesSlider): HotlinksProps => {
  return {
    title: data.title ?? "no title",
    items:
      data.services_items?.map((item) => ({
        text:
          extractNavLinkText(item?.cta),
        href: extractNavLinkHref(item?.cta),
        icon:
          (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + item?.icon?.url,
      })) ?? [],
  };
};

export default mapper;

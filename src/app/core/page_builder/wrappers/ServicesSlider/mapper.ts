import { ComponentSlidersServicesSlider } from "@/__generated__/graphql";
import HotlinksProps from "@/components/HotLinkServices/schema";

const mapper = (data: ComponentSlidersServicesSlider): HotlinksProps => {
  return {
    title: data.title ?? "no title",
    items:
      data.services_items?.map((item) => ({
        text:
          item?.cta?.text ??
          item?.cta?.page?.metaTitle ??
          item?.cta?.campaign?.title ??
          item?.cta?.article?.title ??
          "[no-title]",
        href: item?.cta?.href ?? "",
        icon:
          (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + item?.icon?.url,
      })) ?? [],
  };
};

export default mapper;

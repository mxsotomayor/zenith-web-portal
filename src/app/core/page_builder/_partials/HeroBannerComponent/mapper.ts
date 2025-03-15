import { ComponentSharedHeroBanner } from "@/__generated__/graphql";
import Banner from "@/components/HeroBanner/schema";
import { extractNavLinkHref } from "../../utils";

const mapper = (data: ComponentSharedHeroBanner): Banner[] => {
  return (
    data.items?.map((item) => ({
      title:
        item?.title ??
        item?.cta?.page?.metaTitle ??
        item?.cta?.campaign?.title ??
        item?.cta?.article?.title ??
        "[no-title]",
      cta: {
        text: item?.cta?.text ?? "[add cta]",
        url: extractNavLinkHref(item?.cta),
      },
      media: {
        alt:
          item?.bg?.alternativeText ??
          item?.cta?.page?.sharedImage?.alternativeText ??
          item?.cta?.campaign?.bg?.alternativeText ??
          item?.cta?.article?.cover?.alternativeText ??
          "image",
        type: "img",
        url:
          process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API +
          (item?.bg?.url ??
            item?.cta?.page?.sharedImage?.url ??
            item?.cta?.campaign?.bg?.url ??
            item?.cta?.article?.cover?.url ??
            "/no-image"),
      },
      description:
        item?.description ??
        item?.cta?.page?.metaDescription ??
        item?.cta?.campaign?.description ??
        item?.cta?.article?.description ??
        "[no-description]",
    })) ?? []
  );
};

export default mapper;

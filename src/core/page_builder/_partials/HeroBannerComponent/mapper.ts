import { ComponentSharedHeroBanner } from "@/__generated__/graphql";
import Banner from "@/components/HeroBanner/schema";
import { extractNavLinkHref } from "../../utils";
import { format  } from 'date-fns'

const mapper = (data: ComponentSharedHeroBanner): Banner[] => {
  return (
    data.items?.map((item) => ({
      title:
        item?.title ??
        item?.cta?.page?.metaTitle ??
        item?.cta?.campaign?.title ??
        item?.cta?.article?.title ??
        "[no-title]",
      cta: item?.cta?.text ? {
        text: item?.cta?.text ?? "[no-text]",
        url: extractNavLinkHref(item?.cta),
      }: undefined,
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
      listItems: item?.cta?.campaign
        ? item?.cta?.campaign?.hightlights
          ? item.cta.campaign?.hightlights?.map((item) => item?.highlight ?? "")
          : undefined
        : undefined,
      topPill: item?.cta?.campaign
        ? (item?.cta?.campaign?.start && item?.cta?.campaign?.end)
          ? `Desde: ${format(item?.cta?.campaign?.start, "dd/MMM/yy")} hasta ${format(item?.cta?.campaign?.end, "dd/MMM/yy")}`
          : undefined
        : undefined,
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

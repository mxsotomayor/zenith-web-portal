import { ComponentSharedHeroBannerItem } from "@/__generated__/graphql";
import { MarketingBannerProps } from "@/components/Banner";

const mapper = (props: ComponentSharedHeroBannerItem): MarketingBannerProps => {
  return {
    title:
      props?.title ??
      props?.cta?.page?.metaTitle ??
      props?.cta?.campaign?.title ??
      props?.cta?.article?.title ??
      "[no-title]",
    subtitle:
      props?.description ??
      props?.cta?.page?.metaDescription ??
      props?.cta?.campaign?.description ??
      props?.cta?.article?.description ??
      "[no-description]",
    backgroundImage:
      process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API +
      (props?.bg?.url ??
        props?.cta?.page?.sharedImage?.url ??
        props?.cta?.campaign?.bg?.url ??
        props?.cta?.article?.cover?.url ??
        "/no-image"),
    cta: props.cta?.text ?? "",
    ctaUrl:
      props?.cta?.href ??
      (props?.cta?.page?.slug && `/${props?.cta?.page?.slug}`) ??
      ((props?.cta?.campaign?.externalLink || props?.cta?.campaign?.slug) &&
        `/campaign/${
          props?.cta?.campaign?.externalLink ?? props?.cta?.campaign?.slug
        }`) ??
      (props?.cta?.article?.slug &&
        "/" +
          props?.cta?.article?.category?.slug +
          "/" +
          props?.cta?.article?.slug) ??
      "/not-link-found",
  };
};

export default mapper;

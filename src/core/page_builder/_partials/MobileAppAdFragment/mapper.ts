import { ComponentSlidersMobileAppAd } from "@/__generated__/graphql";
import MobileAppAddProps from "@/components/MobileAppAd/types";

const mapper = (props: ComponentSlidersMobileAppAd): MobileAppAddProps => {
  return {
    title: props.title ?? "",
    subTitle: props.subTitle ?? "",
    images: props.appScreens?.map((screen) => (process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API ?? "") + (screen?.url ?? "")) ?? [],
    googlePlay: props.googlePlayUrl ?? undefined,
    appleStore: props.appleStoreUrl ?? undefined,
  };
};

export default mapper;

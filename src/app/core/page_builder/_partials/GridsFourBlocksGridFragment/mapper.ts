import { ComponentGridsFourBlocksGrid } from "@/__generated__/graphql";
import ImportantBlockInitProps from "@/components/ImportantBlock/dataInit";
import ImportantBlockProps from "@/components/ImportantBlock/schema";
import { extractNavLinkHref } from "../../utils";

const mapper = (props: ComponentGridsFourBlocksGrid): ImportantBlockProps => {
  return {
    ...ImportantBlockInitProps,
    title: props.title ?? "",
    blocks:
      props.blocks_items?.map((item) => ({
        title: item?.title ?? "",
        description: item?.description ?? "",
        href: extractNavLinkHref(item?.cta),
        image: `${process.env.NEXT_PUBLIC_STRAPI_CMS_BASE_API}${
          item?.bg?.url ?? ""
        }`,
      })) ?? [],
  };
};

export default mapper;

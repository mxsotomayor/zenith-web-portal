import { ComponentSharedHeroBannerItem } from "@/__generated__/graphql";
import React from "react";
import mapper from "./mapper";
import Banner, { MarketingBannerProps } from "@/components/Banner";

function BannerItem(props: ComponentSharedHeroBannerItem) {
  const data: MarketingBannerProps = mapper(props);
  return (
    <div>
      <Banner {...data} />
    </div>
  );
}

export default BannerItem;

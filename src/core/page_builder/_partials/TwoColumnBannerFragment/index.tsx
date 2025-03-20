import { ComponentSharedTwoColumnBanner } from "@/__generated__/graphql";
import TwoColumnBanner from "@/components/TwoColBanner";
import React from "react";
import mapper from "./mapper";

function TwoColumnBannerFragment(props: ComponentSharedTwoColumnBanner) {
  const data = mapper(props);
  return (
    <div>
      <TwoColumnBanner {...data} />
    </div>
  );
}

export default TwoColumnBannerFragment;

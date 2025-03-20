import { ComponentSlidersMobileAppAd } from "@/__generated__/graphql";
import MobileAppAdd from "@/components/MobileAppAd";
import React from "react";
import mapper from "./mapper";

function SlidersMobileAppAdFragment(props: ComponentSlidersMobileAppAd) {
  const data = mapper(props);
  return (
    <div>
      <MobileAppAdd {...data} />
    </div>
  );
}

export default SlidersMobileAppAdFragment;

import React from "react";
import mapper from "./mapper";
import { ComponentSlidersServicesSlider } from "@/__generated__/graphql";
import HotlinksProps from "@/components/HotLinkServices/schema";
import HotLinkServices from "@/components/HotLinkServices";

function ServicesSlider(payload: ComponentSlidersServicesSlider) {
  const data: HotlinksProps = mapper(payload);
  return (
    <div>
      <HotLinkServices title={data.title} items={data.items} />
    </div>
  );
}

export default ServicesSlider;

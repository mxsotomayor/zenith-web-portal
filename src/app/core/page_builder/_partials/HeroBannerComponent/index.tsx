import React from "react";
import mapper from "./mapper";
import { ComponentSharedHeroBanner } from "@/__generated__/graphql";
import Banner from "@/components/HeroBanner/schema";
import HeroBanner from "@/components/HeroBanner";

function HeroBannerComponent(payload: ComponentSharedHeroBanner) {
  const data: Banner[] = mapper(payload);
  return (
    <div>
      <HeroBanner items={data} /> 
    </div>
  );
}

export default HeroBannerComponent;

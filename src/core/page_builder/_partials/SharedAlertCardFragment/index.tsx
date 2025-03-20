import { ComponentSharedAlertCard } from "@/__generated__/graphql";
import PromoAlert from "@/components/PromoAlert";
import React from "react";
import mapper from "./mapper";

function SharedAlertCardFragment(props: ComponentSharedAlertCard) {
  const data = mapper(props);
  return (
    <div>
      <PromoAlert {...data} />
    </div>
  );
}

export default SharedAlertCardFragment;

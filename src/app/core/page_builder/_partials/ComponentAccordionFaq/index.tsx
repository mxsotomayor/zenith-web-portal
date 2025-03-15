import { ComponentAccordionFaq } from "@/__generated__/graphql";
import FAQBlock from "@/components/FAQs";
import React from "react";
import mapper from "./mapper";

function ComponentAccordionFaqC(props: ComponentAccordionFaq) {
  const data = mapper(props);
  return (
    <div>
      <FAQBlock {...data} />
    </div>
  );
}

export default ComponentAccordionFaqC;

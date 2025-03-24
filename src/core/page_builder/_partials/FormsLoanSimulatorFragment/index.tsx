import { ComponentFormsLoanSimulator } from "@/__generated__/graphql";
import FormsLoanSimulator from "@/components/FormsLoanSimulator";
import React from "react";
import mapper from "./mapper";

function FormsLoanSimulatorFragment(props: ComponentFormsLoanSimulator) {
  const data = mapper(props);
  return (
    <div>
      <FormsLoanSimulator {...data} />
    </div>
  );
}

export default FormsLoanSimulatorFragment;

import { ComponentFormsLoanSimulator } from "@/__generated__/graphql";
import FormsLoanSimulatorProps from "@/components/FormsLoanSimulator/types";

const mapper = (
  props: ComponentFormsLoanSimulator
): FormsLoanSimulatorProps => {
  return {
    title: props.title ?? "",
    subTitle: props.subtitle ?? "",
  };
};

export default mapper;

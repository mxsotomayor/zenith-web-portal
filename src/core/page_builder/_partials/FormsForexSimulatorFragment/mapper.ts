import { ComponentFormsForexSimulator } from "@/__generated__/graphql";
import ForexSimulatorProps from "@/components/ForexSimulator/types";

const mapper = (props: ComponentFormsForexSimulator): ForexSimulatorProps => {
  return {
    title: props.title ?? "",
    items:
      props.for_ex_items?.map((item) => ({
        name: item?.name ?? "",
        iso: item?.iso2 ?? "",
        buy: item?.buy ?? 0,
        sell: item?.sell ?? 0,
      })) ?? [],
  };
};

export default mapper;

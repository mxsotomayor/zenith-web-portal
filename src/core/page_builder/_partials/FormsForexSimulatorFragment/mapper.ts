import { ComponentFormsForexSimulator } from "@/__generated__/graphql";
import ForexSimulatorProps from "@/components/ForexSimulator/types";

const mapper = (props: ComponentFormsForexSimulator): ForexSimulatorProps => {
  return {
    title: props.title ?? "",
    baseCurrency: {
      name: props.baseCurrency?.name ?? "",
      fullName: props.baseCurrency?.displayName ?? "",
      iso: props.baseCurrency?.iso2 ?? "",
      buy: props.baseCurrency?.buy ?? 0,
      sell: props.baseCurrency?.sell ?? 0,
    },
    items:
      props.for_ex_items?.map((item) => ({
        name: item?.name ?? "",
        fullName: item?.displayName ?? "",
        iso: item?.iso2 ?? "",
        buy: item?.buy ?? 0,
        sell: item?.sell ?? 0,
      })) ?? [],
  };
};

export default mapper;

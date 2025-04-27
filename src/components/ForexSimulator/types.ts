type ForexSimulatorProps = {
  title: string;
  baseCurrency: ForexItem;
  items: ForexItem[];
};

export type ForexItem = {
  fullName: string;
  name: string;
  iso: string;
  buy: number;
  sell: number;
};

export default ForexSimulatorProps;

type ForexSimulatorProps = {
  title: string;
  items: ForexItem[];
};

type ForexItem = {
  name: string;
  iso: string;
  buy: number;
  sell: number;
};

export default ForexSimulatorProps;

type FAQProps = {
  title: string;
  search: {
    placeholder: string;
  };
  items: FAQItem[];
};

type FAQItem = {
  question: string;
  answer: string;
};

export default FAQProps;

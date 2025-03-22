import { ComponentAccordionFaq } from "@/__generated__/graphql";
import FAQProps from "@/components/FAQs/schema";

const mapper = (props: ComponentAccordionFaq): FAQProps => {
  return {
    title: props.title ?? "",
    items: props.faqs.map((item) => ({
      question: item?.question ?? "",
      answer: item?.answer ?? "",
    })),
    search: {
      placeholder: props.searchPlaceholder ?? "",
    },
  };
};

export default mapper;

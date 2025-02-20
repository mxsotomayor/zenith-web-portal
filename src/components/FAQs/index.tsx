"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    question: "What is Open Banking?",
    answer:
      "Open Banking is a secure way for you to give providers access to your financial information. It allows you to share your data with authorized third-party providers, enabling them to offer you personalized financial products and services.",
  },
  {
    question: "Is Open Banking safe?",
    answer:
      "Yes, Open Banking is designed with security as a top priority. It uses strong encryption and authentication methods. Only authorized and regulated providers can access your data, and you always remain in control of what information you share and for how long.",
  },
  {
    question: "What are the benefits of Open Banking?",
    answer:
      "Open Banking offers several benefits, including easier comparison of financial products, personalized financial advice, streamlined loan applications, and the ability to see all your accounts in one place. It can help you make better financial decisions and save time managing your finances.",
  },
  {
    question: "Do I have to pay for Open Banking services?",
    answer:
      "Most Open Banking services are free to use. However, some advanced features or premium services offered by third-party providers might come with a cost. Always check the terms of service before using any Open Banking application.",
  },
  {
    question: "Can I revoke access to my data?",
    answer:
      "Yes, you can revoke access to your data at any time. You have full control over which providers can access your information and for how long. You can usually manage these permissions through your bank's online banking platform or the third-party provider's app.",
  },
  {
    question: "What types of accounts can I use with Open Banking?",
    answer:
      "Open Banking typically works with current accounts, savings accounts, and credit cards. However, the exact types of accounts may vary depending on your bank and the services you're using. Some providers are also expanding Open Banking to include mortgages and pensions.",
  },
];

export default function FAQBlock() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto md:px-0 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-950 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            className="pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No matching questions found. Please try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}

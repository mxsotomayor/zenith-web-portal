import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CardTopicProps {
  title: string;
  items: string[];
}

function CardTopic({ title, items }: CardTopicProps) {
  return (
    <div data-name="TopicCard" className="p-4">
      <h4 className="text-xl lg:text-3xl font-semibold mb-3">{title}</h4>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link href="" className="text-blue-500 flex items-center hover:underline group"><ChevronRight size="14" className="group-hover:mr-3 transition-all ease-in-out" /> <span>{item}</span></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardTopic;

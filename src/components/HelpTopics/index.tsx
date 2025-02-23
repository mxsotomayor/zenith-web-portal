import React from "react";
import CardTopic from "../TopicCard";

function HelpTopics() {
  const items = [
    {
      displayTitle: "Online Banking",
      items:[
        "How to sign up for Mobile Banking",
        "Mobile Banking features",
        "How to sign up for Mobile Banking",
        "Mobile Banking features",
        "How to sign up for Mobile Banking",
        "Mobile Banking features",
      ]
    },
    {
      displayTitle: "Mobile Banking",  
      items:[
        "How to sign up for Mobile Banking",
        "Mobile Banking features", 
        "Mobile Banking features",
      ]
    },
    {
      displayTitle: "Fraud and Scams",
      items:[
        "How to sign up for Mobile Banking", 
        "How to sign up for Mobile Banking",
        "Mobile Banking features",
      ]
    },
    {
        displayTitle: "Fraud and Scams",
        items:[
          "How to sign up for Mobile Banking",
          "Mobile Banking features",
          "How to sign up for Mobile Banking", 
          "Mobile Banking features",
        ]
      },
      {
        displayTitle: "Fraud and Scams",
        items:[
          "How to sign up for Mobile Banking",
          "Mobile Banking features", 
          "Mobile Banking features", 
          "Mobile Banking features",
        ]
      },
  ];
  return (
    <div>
      <div className="container mx-auto xxl:px-0 px-4 overflow-hidden py-8">
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-950 mb-6">
          What do you need help with?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6">
                <CardTopic  title={item.displayTitle} items={item.items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpTopics;

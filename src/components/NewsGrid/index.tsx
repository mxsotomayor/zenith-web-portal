import React from "react";
import NewsCard from "../NewsCard";

function NewsGrid() {
  const newsItem = {
    image:
      "/pareja-bailando-cocina-casa-card.im1616802082927im.avif?height=400&width=600",
    title: "The Future of Artificial Intelligence in Healthcare",
    subtitle: "How AI is revolutionizing medical diagnostics and treatment",
    author: {
      name: "Dr. Jane Smith",
      avatar:
        "/padre-hija-desayunando.im1735665141640im.avif?height=40&width=40",
    },
    date: "May 15, 2023",
    readingTime: "5 min",
    category: "Fintech",
    excerpt:
      "Artificial Intelligence is making significant strides in the healthcare industry, from improving diagnostic accuracy to personalizing treatment plans. This article explores the latest developments and their potential impact on patient care.",
    slug: "ai-in-healthcare",
  };

  return (
    <div className="py-8 bg-slate-50">
      <div className="container mx-auto md:px-0 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-6">
          Top Stories
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4">
        {[1, 2, 3].map((item, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

export default NewsGrid;

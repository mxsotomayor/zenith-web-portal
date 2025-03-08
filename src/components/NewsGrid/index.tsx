"use client";

import React from "react";
import NewsCard from "../NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenSize } from "@/app/core/hooks/useScreenSize";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

function NewsGrid() {
  const newsItem = {
    image:
      "/pareja-bailando-cocina-casa-card.im1616802082927im.avif?height=400&width=600",
    title: "The Future of Artificial Intelligence in Healthcare",
    subtitle: "How AI is revolutionizing medical diagnostics and treatment",
    author: {
      name: "Unibank",
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

  const { screenSize } = useScreenSize();

  return (
    <div data-name="NewsGrid" className="py-8 bg-slate-50">
      <div className="container mx-auto 2xl:px-0 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-6">
          Top Stories
        </h2>
      </div>

      {(screenSize == "sm" || screenSize == "xs") && (
        <div className="overflow-hidden">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <NewsCard key={index} {...newsItem} />
            ))}
          </Slider>
        </div>
      )}

      {screenSize != "sm" && (
        <div className="container mx-auto 2xl:px-0 px-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-4 overflow-hidden hidden">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <NewsCard key={index} {...newsItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsGrid;

"use client";

import React from "react";
import ArticleCard from "../ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenSize } from "@/core/hooks/useScreenSize";
import { ArticleProps } from "./types";

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
 

function ArticleGrid({ title, articles }: ArticleProps) {
  const { screenSize } = useScreenSize();



  return (
    <div data-name="NewsGrid" className="py-12 bg-slate-50">
      <div className="container mx-auto 2xl:px-0 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-12">
          {title}
        </h2>
      </div>

      {(screenSize == "sm" || screenSize == "xs") && (
        <div className="overflow-hidden">
          <Slider {...settings}>
            {articles.map((item, index) => (
              <ArticleCard key={index} {...item} />
            ))}
          </Slider>
        </div>
      )}

      {screenSize != "sm" && (
        <div className="container mx-auto 2xl:px-0 px-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-4 overflow-hidden hidden">
          {articles.map((item, index) => (
            <ArticleCard key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleGrid;

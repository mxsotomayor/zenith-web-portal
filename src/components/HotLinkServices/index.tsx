"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Info } from "lucide-react";
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function HotLinkServices() {
  const texts = [
    "I need credit",
    "I want to signup",
    "Insure",
    "Taxes",
    "How to save money?",
    "I want invest my money",
  ];

  return (
    <div>
      <div className="container mx-auto mx:px-0 overflow-hidden py-8">
      <h2 className="text-5xl font-semibold text-blue-950 mb-6">Our customer are looking for</h2>
        <Slider {...settings}>
          {texts.map((text, index) => (
            <div key={index} className="h-32 user-select-none px-2">
              <Link href="" className="flex flex-col w-full h-full bg-gray-100 hover:bg-orange-500 group transition-all justify-end pb-6 items-center ">
                <Info size="42" className="text-orange-500 min-w-8 min-h-8 group-hover:text-white" />
                <h3 className="mt-2 font-semibold text-ellipsis line-clamp-1 text-xs group-hover:text-white">{text}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HotLinkServices;

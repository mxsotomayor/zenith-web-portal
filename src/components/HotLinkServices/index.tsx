"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import HotlinksProps from "./schema";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
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

function HotLinkServices({ items }: { items: HotlinksProps[] }) { 

  return (
    <div data-name="HotLinksServices" className="py-8">
      <div className="container mx-auto 2xl:px-0 px-4 overflow-hidden py-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-950 mb-6">
          Find a Banking Solution that Fits to You
        </h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="h-32 user-select-none px-2">
              <Link
                href="/login"
                className="flex flex-col w-full h-full px-4 bg-gray-100 hover:bg-orange-500 group transition-all justify-start pt-6 items-center "
              >
                <Image src={item.icon} width="40" height="40" alt={item.text} />
                <h3 className="mt-2 font-semibold text-ellipsis line-clamp-2 text-center text-xs lg:text-sm group-hover:text-white">
                  {item.text}
                </h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HotLinkServices;

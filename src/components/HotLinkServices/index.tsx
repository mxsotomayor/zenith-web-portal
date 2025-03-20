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

function HotLinkServices({ items, title }: HotlinksProps) {
  return (
    <div data-name="HotLinksServices" className="py-8">
      <div className="container mx-auto 2xl:px-0 px-4 overflow-hidden py-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-950 mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-2 lg:hidden">
          {items.map((item, index) => (
            <div key={index} className="user-select-none">
              <Link
                href={item.href}
                className="flex gap-4 w-full h-full px-4 rounded-lg bg-gray-100 hover:bg-blue-500 group transition-all justify-start items-center p-4"
              >
                <div className="w-8 min-w-8 h-8 relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.icon}
                    width="55"
                    height="55"
                    alt={item.text}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-ellipsis line-clamp-2 text-start lg:text-sm group-hover:text-white">
                  {item.text}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Slider
            {...settings}
            autoplay={settings.slidesToShow <= items.length}
            infinite={settings.slidesToShow <= items.length}
          >
            {items.map((item, index) => (
              <div key={index} className="h-40 user-select-none px-2 ">
                <Link
                  href={item.href}
                  className="flex flex-col w-full h-full px-4 rounded-lg bg-gray-100 hover:bg-blue-500 group transition-all justify-start pt-6 items-center "
                >
                  <div className="w-16 h-16 relative overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.icon}
                      width="55"
                      height="55"
                      alt={item.text}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mt-2 font-semibold text-ellipsis line-clamp-2 text-center text-xs lg:text-sm group-hover:text-white">
                    {item.text}
                  </h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HotLinkServices;

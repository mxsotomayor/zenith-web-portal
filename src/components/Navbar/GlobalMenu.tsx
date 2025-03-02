"use client";

import { ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"; 

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function GlobalMenu({ show }: { show: boolean }) {
  const products = [
    {
      name: "Credit Cards",
      url: "/personal",
    },
    {
      name: "Loans",
      url: "/business",
    },
    {
      name: "Accounts",
      url: "/business",
    },
    {
      name: "Investments",
      url: "/business",
    },
    {
      name: "Insurance",
      url: "/business",
    },
    {
      name: "Rewards",
      url: "/business",
    },
    {
      name: "Rewards",
      url: "/business",
    },
  ];

  const texts = [
    "Buy a car",
    "Buy your first house",
    "Keep your own fund and leave ease",
    "Invest and plan your family future",
    "Develop your business",
  ];

 
  return (
    <div
      className={`fixed ${
        show
          ? "top-[96px] opacity-100 "
          : "top-60 opacity-0  pointer-events-none"
      } bottom-0 left-0 w-full h-screen bg-blue-900  z-50 flex flex-col transition-all duration-300 ease-in-out overflow-y-auto`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row  h-[calc(100vh-100px)] lg:h-full ">
        <div className="text-white w-full lg:w-[300px] p-4 overflow-y-auto flex-1 md:h-auto">
          <ul className="border-b border-slate-500 mb-3 pb-3">
            {products.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="flex items-center justify-between py-2 md:py-2 text-lg md:text-sm"
                >
                  <span>{item.name}</span> <ChevronRight />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="">
            {products.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="flex items-center justify-between py-2 md:py-2 text-lg md:text-sm"
                >
                  <span>{item.name}</span> <ChevronRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col p-8  w-full  overflow-hidden border-t lg:border-none border-slate-400 ">
          <h3 className="text-xl md:text-3xl font-semibold text-white mb-2 flex items-center">
            Why choose us?
          </h3>
          <p className="text-white mb-8">
            We are always bringing benefits for you.
          </p>

          <Slider {...settings}>
            {texts.map((text, index) => (
              <div key={index} className="h-52 user-select-none px-2">
                <Link
                  href=""
                  className="flex flex-col lg:h-52  hover:bg-orange-500 group transition-all justify-end p-6 items-center bg-blue-950"
                >
                  <Info size="56" className="hidden" />
                  <h3 className="mt-2 font-semibold text-ellipsis line-clamp-1 group-hover:text-white text-white">
                    {text}
                  </h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </div>
  );
}

export default GlobalMenu;

"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenSize } from "@/app/core/hooks/useScreenSize";
import { ExternalLink, SmilePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MansoryGridProps from "./schema";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

function MansoryGrid({ direction = "left", banner, items }: MansoryGridProps) {
  const { screenSize } = useScreenSize();
  return (
    <div data-name="MansoryGrid" className="py-8">
      <div
        className={`${
          direction == "left" ? " lg:flex-row " : " lg:flex-row-reverse "
        } flex flex-col container mx-auto gap-3 min-h-[750px]`}
      >
        <div className="flex flex-col flex-1">
          <div className="overflow-hidden flex justify-center items-center relative flex-1 min-h-[340px] w-full">
            <Image
              src={banner.url}
              width="220"
              height="180"
              alt=""
              className="object-cover w-full h-full absolute"
            />
          </div>
          <div className="bg-slate-200 flex-1 flex">
            <div className="p-6 flex-1 flex flex-col pb-8">
              <h3 className="font-bold text-xl lg:text-4xl mb-2 text-blue-950">
                {banner.title}
              </h3>
              <p className="text-ellipsis line-clamp-3 lg:line-clamp-4">
                {banner.description}
              </p>
              <Link
                href={banner.cta.url}
                className="font-bold text-blue-900 text-sm mt-auto flex items-center space-x-1"
              >
                <span>{banner.cta.text}</span> <ExternalLink className="" size="14" />
              </Link>
            </div>
          </div>
        </div>
        {(screenSize == "sm" || screenSize == "xs") && (
          <div className="overflow-hidden">
            <Slider {...settings}>
              {items.map((link, index) => (
                <div key={link.description + index}>
                  <div className="bg-slate-200 p-4 flex flex-col justify-end pb-8 mr-3">
                    <SmilePlus className="text-orange-600" />
                    <h3 className="font-semibold my-4 text-blue-950 text-ellipsis line-clamp-2">
                      {link.title}
                    </h3>
                    <p className="mb-4 text-sm lg:text-base text-ellipsis line-clamp-3 lg:line-clamp-4">
                      {link.description}
                    </p>
                    <Link
                      href={link.cta.url}
                      className="font-bold text-blue-900 text-sm mt-auto flex items-center space-x-1"
                    >
                      <span>{link.cta.text}</span>{" "}
                      <ExternalLink className="" size="14" />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
        {screenSize != "sm" && (
          <div className="hidden lg:grid gap-3 grid-cols-2 aspect-square flex-1">
            {items.map((link, index) => (
              <div
                key={link.description + index}
                className="bg-slate-200 p-4 flex flex-col justify-end pb-8"
              >
                <SmilePlus className="text-orange-600" />
                <h3 className="font-semibold my-4 text-blue-950 text-ellipsis line-clamp-2 text-xl">
                  {link.title}
                </h3>
                <p className="mb-4 text-sm lg:text-base text-ellipsis line-clamp-3 lg:line-clamp-4">
                  {link.description}
                </p>
                <Link
                  href={link.cta.url}
                  className="font-bold text-blue-900 text-sm mt-auto flex items-center space-x-1"
                >
                  <span>{link.cta.text}</span>{" "}
                  <ExternalLink className="" size="14" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MansoryGrid;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileAppAddProps from "./types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
};

function MobileAppAdd({
  title,
  images,
  subTitle,
  appleStore,
  googlePlay,
}: MobileAppAddProps) {
  return (
    <div className="bg-blue-700">
      <div className="container mx-auto px-4 2xl:px-0 pt-12 flex">
        <div className="flex-1 h-[630px] min-h-[630px]  overflow-hidden hidden relative lg:block">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="h-[630px] min-h-[630px] relative ">
                <div className="lg:w-[360px] h-[600px] mx-auto mt-10  ">
                  <Image
                    className="object-cover h-full w-full object-top"
                    src={image}
                    width="360"
                    height="560"
                    alt="mobile app"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex-1 flex flex-col justify-center  text-white">
          <h2 className="font-semibold text-3xl lg:text-5xl">{title}</h2>
          <p className="text-lg lg:text-2xl mt-4">{subTitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-6 lg:mb-0">
            {appleStore && (
              <Link href={appleStore}>
                <Image
                  src="/App_Store_Badge.png"
                  width="150"
                  height="60"
                  alt=""
                  className="w-32"
                />
              </Link>
            )}

            {googlePlay && (
              <Link href={googlePlay}>
                <Image
                  src="/GooglePlay_Badge.avif"
                  width="165"
                  height="60"
                  alt=""
                  className="w-32"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppAdd;

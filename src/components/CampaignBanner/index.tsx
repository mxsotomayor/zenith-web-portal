import Image from "next/image";
import React from "react";
import CampaignBannerProps from "./types";

function CampaignBanner({
  title,
  description,
  media: { url },
}: CampaignBannerProps) {
  return (
    <div className="h-[450px] lg:h-[600px] flex relative bg-orange-500 lg:bg-transparent">
      <div className="w-40 h-40 bg-orange-500 absolute -bottom-14 right-1/2 z-40 hidden lg:block"></div>
      <div className="absolute top-0 w-full h-full hidden lg:flex z-0">
        <div className="flex-1 bg-orange-500"></div>
        <div className="flex-1   relative   items-center justify-center flex">
          <div className="w-20 h-20 bg-orange-500 absolute top-0 left-0 hidden lg:block"></div>
          <Image
            src={url}
            width="1200"
            height="560"
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 flex items-center relative z-10">
        <div className="flex flex-1 text-white flex-col gap-3  pl-0 pr-24">
          <h1
            className="text-4xl lg:text-6xl font-semibold text-ellipsis line-clamp-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p
            className="text-2xl text-ellipsis line-clamp-3"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="flex-1 hidden lg:block"></div>
      </div>
    </div>
  );
}

export default CampaignBanner;

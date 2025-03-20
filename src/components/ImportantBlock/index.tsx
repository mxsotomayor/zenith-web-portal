import React from "react";
import Image from "next/image";
import ImportantBlockProps from "./schema";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { colors } from "./constants";

function ImportantBlock({ title, bgColor, blocks }: ImportantBlockProps) {
  return (
    <div
      style={{ backgroundColor: bgColor ? (colors[bgColor].bg as string) : "" }}
      className="py-8 pb-4 lg:pb-8"
    >
      <div className="container mx-auto 2xl:px-0 px-4">
        <h2 className="text-3xl md:text-5xl py-4 font-semibold text-blue-100 lg:mb-6">
          {title}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1   lg:grid-cols-2">
          {blocks.map((item, index) => (
            <Link
              href={item.href ?? "#"}
              key={index}
              style={{
                backgroundColor: bgColor
                  ? (colors[bgColor].colors[index] as string)
                  : "",
              }}
              className={` text-white h-56 lg:h-80 p-8 ${
                index == 0 ? "flex" : "flex"
              } flex-col justify-end relative overflow-hidden group transition-all duration-500 ease-in-out cursor-pointer `}
            >
              <div className="hidden lg:block absolute z-50 top-20 right-20 opacity-0 group-hover:opacity-100 group-hover:top-8 group-hover:right-8 transition-all ease-in-out">
                <ExternalLink size="40" />
              </div>
              <div className="absolute group-hover:top-0 top-[500px] transition-all ease-in-out  left-0 w-full h-full bg-black/50 duration-300 backdrop-blur-sm z-10"></div>
              <h3 className="font-semibold text-2xl z-20 max-w-md group-hover:mb-2 transition-all duration-200 ease-in-out">
                {item.title}
              </h3>
              <p className="max-w-sm z-20 text-sm group-hover:mb-12 transition-all ease-in-out duration-300">
                {item.title}
              </p>
              {item.image && (
                <div className="absolute right-0 bottom-0 z-1 group-hover:scale-110 transition-all ease-in-out z-0 w-28 min-w-28 h-28 lg:w-60 lg:min-w-60 lg:h-60 flex justify-end">
                  <Image
                    src={item.image}
                    width="300"
                    height="300"
                    alt=""
                    className="object-cover w-full h-full mr-4 mb-4"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantBlock;

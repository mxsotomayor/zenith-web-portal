import React from "react";
import Image from "next/image";
import ImportantBlockProps from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = { 
  neutral: {
    bg: "#314158", // 950
    colors: [
      "#7b889b", //500
      "#52637e", //900
      "#566378", //700
      "#7f91b0", //800
    ],
  },
  blue: {
    bg: "#162556", // 950
    colors: [
      "#2b7fff", //500
      "#1c398e", //900
      "#1447e6", //700
      "#193cb8", //800
    ],
  },
  orange: {
    bg: "#441306", // 950
    colors: [
      "#ff6900", //500
      "#7e2a0c", //900
      "#ca3500", //700
      "#9f2d00", //800
    ],
  },
}; 

function ImportantBlock({ title, bgColor, blocks }: ImportantBlockProps) {
  return (
    <div
      data-name="ImportantBlock"
      style={{ backgroundColor: bgColor ? (colors[bgColor].bg as string) : "" }}
      className="py-8 pb-4 lg:pb-8"
    >
      <div className="container mx-auto 2xl:px-0 px-4">
        <h2 className="text-4xl md:text-5xl py-4 font-semibold text-blue-100 mb-6">
          {title}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1   lg:grid-cols-2">
          {blocks.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: bgColor
                  ? (colors[bgColor].colors[index] as string)
                  : "",
              }}
              className={` text-white h-80 p-8 ${
                index == 0 ? "flex" : "hidden lg:flex"
              } flex-col justify-end relative overflow-hidden group transition-all duration-500 ease-in-out cursor-pointer `}
            >
              <div className="absolute group-hover:top-0 top-[500px] transition-all ease-in-out  left-0 w-full h-full bg-black/50 duration-300 backdrop-blur-sm z-10"></div>
              <h3 className="font-semibold text-2xl z-20 max-w-md group-hover:mb-2 transition-all duration-200 ease-in-out">
                {item.title}
              </h3>
              <p className="max-w-sm z-20 text-sm group-hover:mb-12 transition-all ease-in-out duration-300">
                {item.title}
              </p>
              {item.image && (
                <div className="absolute right-0 bottom-0 z-1 group-hover:scale-110 transition-all ease-in-out z-0 w-2/3 flex justify-end">
                  <Image
                    src={item.image}
                    width="300"
                    height="300"
                    alt=""
                    className="object-cover "
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantBlock;

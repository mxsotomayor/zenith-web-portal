import Image from "next/image";
import React from "react";
import LinkButton from "../LinkButton";
import TwoColBannerProps from "./schema";
import RichText from "../RichText";

// type TwoColumBannerProps = {
//   direction: "LEFT_RIGHT" | "RIGHT_LEFT";
// };

function TwoColumnBanner({
  direction,
  media,
  title,
  subTitle,
  cta,
  body,
}: TwoColBannerProps) {
  return (
    <div data-name="TwoColumnBanner" className="py-8">
      <div
        data-direction={direction}
        className={`container mx-auto px-4 2xl:px-0 flex   ${
          direction == "left"
            ? " flex-col-reverse  lg:flex-row"
            : " flex-col-reverse lg:flex-row-reverse"
        }`}
      >
        <div className="flex-1 flex flex-col py-8 px-4 justify-center gap-2">
          <h3 className="font-bold text-4xl text-blue-900">{title}</h3>
          <h6 className="text-xl mb-3 text-slate-900">{subTitle}</h6>
          <div className="grid gap-2">
            <RichText content={body} />
          </div>

          {cta && (
            <div className="mt-3">
              <LinkButton href={cta.url ?? "#"}>{cta.text}</LinkButton>
            </div>
          )}
        </div>
        <div className="flex-1 h-auto lg:min-h-[540px] relative flex justify-end items-end">
          {media.type == "img" ? (
            <Image
              src={media.url}
              width="300"
              height="300"
              alt=""
              className="object-contain w-[calc(90%)] h-[calc(80%)]"
            />
          ) : (
            <iframe
              className="video object-contain w-full h-[300px] lg:h-full flex"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={media.url}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default TwoColumnBanner;

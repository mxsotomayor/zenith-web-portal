import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type TwoColumBannerProps = {
  direction: "LEFT_RIGHT" | "RIGHT_LEFT";
};

function TwoColumnBanner({ direction }: TwoColumBannerProps) {
  return (
    <div className="py-8">
      <div
        className={`container mx-auto px-4 2xl:px-0 flex ${
          direction == "LEFT_RIGHT" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="flex-1 flex flex-col py-8 px-4 justify-center gap-2">
          <h3 className="font-bold text-4xl">UniToken &copy;</h3>
          <p className="max-w-2xl">
            Realiza tus transferencias de forma segura con UniToken, que es el
            código que actúa como segundo factor de autenticación para validar
            tu transacción.
          </p>
          <p className="max-w-2xl">
            Realiza tus transferencias de forma segura con UniToken
          </p>
          <Button className="w-fit mt-3">Descargar</Button>
        </div>
        <div className="flex-1 min-h-[640px] relative flex justify-end items-end">
          <Image
            src="/36.png"
            width="300"
            height="300"
            alt=""
            className="object-contain w-[calc(90%)] h-[calc(80%)]"
          />
        </div>
      </div>
    </div>
  );
}

export default TwoColumnBanner;

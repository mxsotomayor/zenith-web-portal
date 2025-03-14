import Link from "next/link";
import React from "react";
import PromoAlertProps from "./schema";
import Image from "next/image";

function PromoAlert({ title, subTitle, icon, cta, altCta }: PromoAlertProps) {
  return (
    <div data-name="PromoAlert" className="bg-white  py-8">
      <div className="container mx-auto px-4 2xl:px-0">
        <div className="flex gap-4 flex-col items-start lg:flex-row lg:items-center p-8 bg-blue-900">
          <Image src={icon} width="72" height="72" alt={title} />
          <div className="text-white text-sm flex-1">
            <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
            <p className="text-sm mb-2">{subTitle}</p>
            {cta && (
              <Link href={cta.href} className="text-blue-300 font-bold">
                {cta.text}
              </Link>
            )}
          </div>
          {altCta && (
            <div className="text-white text-sm">
              <Link
                href={altCta.href}
                className="underline text-blue-300 font-bold"
              >
                {altCta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PromoAlert;

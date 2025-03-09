import Link from "next/link";
import React from "react";
import ServiceItemProps from "./schema";
import Image from "next/image";

function HorizServicesLinks({ items }: { items: ServiceItemProps[] }) {
  return (
    <div data-name="HorizServicesLinks" className="bg-slate-200 py-8">
      <div className="container mx-auto px-4 2xl:px-0  grid grid-cols-1 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-r [&:not(:last-child)]:border-slate-300"
          >
            <Link
              href="#"
              className="p-8 flex flex-col items-center hover:bg-orange-500 transition-colors ease-in-out duration-300 group"
            >
              <div className="h-40 w-40 bg-white group-hover:shadow-lg group-hover:bg-blue-100 transition-all ease-in-out rounded-full mb-4 flex items-center justify-center group-hover:scale-110">
                <Image src={item.icon} width="90" height="90" alt="" />
              </div>
              <h3 className="text-2xl font-semibold text-center group-hover:text-blue-800">
                {item.displayText}
              </h3>
              <p className="text-blue-500 group-hover:text-blue-100 font-semibold group-hover:underline mt-2">
                {item.cta}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizServicesLinks;

import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

function PromoAlert() {
  return (
    <div className="bg-white  py-8">
      <div className="container mx-auto px-4 xxl:px-0">
        <div className="flex gap-4 flex-col items-start lg:flex-row lg:items-center p-8 bg-blue-900">
          <TriangleAlert className="text-white" size="62" />
          <div className="text-white text-sm flex-1">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Protégete de mensajes fraudulentos
            </h2>
            <p className="text-sm mb-2">
              Revisa de qué se trata este tipo de ataque y mantente a salvo de
              los ciberdelincuentes.
            </p>
            <Link href="" className="text-blue-300 font-bold">
              Conoce nuestros consejos
            </Link>
          </div>
          <div className="text-white text-sm">
            <Link href="#" className="underline text-blue-300 font-bold">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoAlert;

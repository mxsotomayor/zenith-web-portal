import { Info } from "lucide-react";
import React from "react";

interface ImportantBlockProps {
  title: string;
  subtitle: string;
  className: string;
}

function ImportantBlock() {
  const data: ImportantBlockProps[] = [
    {
      title: "Funcionalidades de la app",
      className: "bg-blue-500",
      subtitle:
        "Puedes realizar operaciones bancarias estés donde estés, conectándote con BBVA desde tu celular.",
    },
    {
      title: "title2",
      subtitle: "Conoce más",
      className: "bg-blue-900",
    },
    {
      title: "title3",
      subtitle: "Conoce más",
      className: "bg-blue-700",
    },
    {
      title: "title3",
      subtitle: "Conoce más",
      className: "bg-blue-800",
    },
  ];

  return (
    <div className="bg-blue-950 py-8">
      <div className="container mx-auto md:px-0 px-4">
        <h2 className="text-3xl md:text-5xl py-4 font-bold text-white mb-6">
          Now you have ease access to
        </h2>
      </div>
      <div className="container mx-auto">
        

      <div className="grid grid-cols-1   lg:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.className} text-white h-80 p-8 flex flex-col justify-end relative overflow-hidden group hover:justify-start transition-all duration-500 ease-in-out cursor-pointer`}
            >
              <div className="absolute group-hover:top-0 top-[500px] transition-all ease-in-out  left-0 w-full h-full bg-black/50 duration-300 backdrop-blur-sm z-10"></div>
              <h3 className="font-bold text-2xl z-20">{item.title}</h3>
              <p className="max-w-md z-20">{item.subtitle}</p>
              <div className="absolute -bottom-12 -right-12 z-1 group-hover:scale-110 transition-all ease-in-out z-0">
                <Info size="220" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantBlock;

 import React from "react";
 import Image from "next/image"

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
        "Puedes realizar operaciones bancarias estés donde estés, conectándote con UniBank desde tu celular.",
    },
    {
      title: "Puedes realizar operaciones bancarias",
      subtitle: "Conoce más",
      className: "bg-blue-900",
    },
    {
      title:
        "Operaciones bancarias estés donde estés, conectándote con UniBank desde tu celular.",
      subtitle: "Conoce más",
      className: "bg-blue-700",
    },
    {
      title: "conectándote con UniBank desde tu celular.",
      subtitle: "Conoce más",
      className: "bg-blue-800",
    },
  ];

  return (
    <div className="bg-blue-950 py-8 pb-4 lg:pb-8">
      <div className="container mx-auto xxl:px-0 px-4">
        <h2 className="text-4xl md:text-5xl py-4 font-semibold text-blue-100 mb-6">
          A new world opened to you
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1   lg:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.className} text-white h-80 p-8 ${index == 0 ? 'flex':'hidden lg:flex'} flex-col justify-end relative overflow-hidden group transition-all duration-500 ease-in-out cursor-pointer `}
            >
              <div className="absolute group-hover:top-0 top-[500px] transition-all ease-in-out  left-0 w-full h-full bg-black/50 duration-300 backdrop-blur-sm z-10"></div>
              <h3 className="font-semibold text-2xl z-20 max-w-md group-hover:mb-2 transition-all duration-200 ease-in-out">{item.title}</h3>
              <p className="max-w-sm z-20 text-sm group-hover:mb-12 transition-all ease-in-out duration-300">{item.subtitle}</p>
              <div className="absolute right-0 bottom-0 z-1 group-hover:scale-110 transition-all ease-in-out z-0 w-2/3 flex justify-end">
                <Image src="/hand-phone.png" width="300" height="300" alt="" className="object-cover " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantBlock;

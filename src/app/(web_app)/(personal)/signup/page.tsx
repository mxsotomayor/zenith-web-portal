import NavBar from "@/components/Navbar";
import React from "react";

function BusinessLoginPage() {
  return (
    <div className="pt-[100px] h-screen">
      <NavBar selectedSite={0} />
      <div className="justify-start w-full h-screen -z-10 absolute hidden lg:flex">
        <div className="bg-blue-950 w-1/2 h-screen "></div>
      </div>
      <div className="container mx-auto px-4 xxl:px-0 py-8 flex flex-col lg:flex-row items-center lg:h-full">
        <div className="flex-1">
          <h1 className="text-xl lg:text-4xl font-semibold text-orange-500">
            Unibank
          </h1>
          <p className="text-gray-600 lg:text-blue-200 mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, purus in aliquet varius, lorem lorem mollis nunc, nec
            fermentum sapien nulla sed turpis.
          </p>
        </div>
        <div className="flex-1 p-12 lg:p-0">
          <h2 className="text-2xl lg:text-5xl ">Coming Soon!</h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessLoginPage;

import NavBar from "@/components/Navbar";
import React from "react";

function BusinessLoginPage() {
  return (
    <div className="pt-[100px] h-screen">
      <NavBar selectedSite={1}/>
      <div className="container mx-auto py-8 flex items-center h-full">
        <div className="flex-1">
          <h1 className="text-xl lg:text-4xl font-semibold text-orange-500">
            Register your Business
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, purus in aliquet varius, lorem lorem mollis nunc, nec
            fermentum sapien nulla sed turpis.
          </p>
        </div>
        <div className="flex-1">
            <h2 className="text-5xl">Coming Soon!</h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessLoginPage;

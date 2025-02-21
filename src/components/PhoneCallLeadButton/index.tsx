import { Phone } from "lucide-react";
import React from "react";

function PhoneCallLeadButton() {
  return (
    <div className="w-[100px] h-screen fixed right-0 top-0 z-50 flex items-center justify-end">
      <button>
        <div className="bg-orange-500 w-[92px] h-40 rounded-l-lg flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all ease-in-out relative group">
          <div className="flex-1 bg-orange-500 text-white p-2 uppercase text-xs text-start flex flex-col justify-center font-semibold">
            Need Help?, we got you!
          </div>
          <div
            className="w-0 h-0 
  border-t-[8px] border-t-transparent
  border-l-[14px] border-l-orange-500
  border-b-[8px] border-b-transparent absolute top-16 left-10 rotate-90
  "
          ></div>
          <div className="flex-1 bg-white group-hover:bg-slate-100 transition-all ease-in-out p-2 text-xs flex flex-col items-start justify-center">
            <div className="font-bold mb-1">
              <span className="bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center ">
                <Phone size="12" className="text-orange-950" />
              </span>
            </div>
            <p className="font-semibold text-orange-950 text-start">
              Need a Call?
            </p>
            <p className="text-start">Available 08AM-19PM</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default PhoneCallLeadButton;

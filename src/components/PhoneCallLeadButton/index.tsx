"use client";

import { PhoneCall, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { LeadModal } from "./LeadModal";
import { PhoneCallLeadButtonProps } from "./types";

function PhoneCallLeadButton({title, subTitle,timeOpen }:PhoneCallLeadButtonProps) {
  const [show, setShow] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleLeadOpen = () => {
    setLeadOpen(!leadOpen);
  };

  useEffect(() => {
    setShow(window.localStorage.getItem("show-lead-btn") == "yes");
  }, []);

  useEffect(() => {
    if (!show) {
      window.localStorage.setItem("show-lead-btn", "no");
    } else {
      window.localStorage.setItem("show-lead-btn", "yes");
    }
  }, [show]);

  return (
    <div data-name="PhoneCallLeadButton" className="w-[2px] h-screen fixed right-0 top-0 z-40 flex items-center justify-end">
      <LeadModal open={leadOpen} toggleOpen={toggleLeadOpen} />
      <button
        onClick={toggleLeadOpen}
        className={`${
          show ? "mr-0" : "-mr-60"
        } pointer-events-all relative flex justify-center items-center transition-all ease-in-out duration-300`}
      >
        <div className="bg-orange-500 w-[92px] min-h-40 rounded-l-lg flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all ease-in-out relative group">
          <div className="flex-1 bg-orange-500 text-white p-2 uppercase text-xs text-start flex flex-col justify-center font-semibold relative overflow-visible text-ellipsis line-clamp-3">
           <span className="text-ellipsis line-clamp-3"> {title}</span>
            <Triangle />
          </div>
          <div className="flex-1 bg-white group-hover:bg-slate-100 transition-all ease-in-out p-2 text-xs flex flex-col items-start justify-center">
            <div className="font-bold mb-1"> 
            </div>
            <p className="font-semibold text-orange-950 text-start text-ellipsis line-clamp-2">
              {subTitle}
            </p>
            <p className="text-start text-xs text-ellipsis line-clamp-2">{timeOpen}</p>
          </div>
        </div>
      </button>

      <button
        className={`bg-white absolute z-20 border  ${
          show ? "mt-40 mr-7 w-6 h-6 min-w-6" : "mr-2 w-6 h-6 min-w-6"
        } rounded-full shadow-lg  flex justify-center items-center transition-all ease-in-out duration-300`}
        onClick={toggleShow}
      >
        {show ? <X size="16" /> : <PhoneCall size="16" />}
      </button>
    </div>
  );
}

const Triangle = () => {
  return (
    <div className="w-0 h-0  border-t-[8px] border-t-transparent border-l-[14px] border-l-orange-500 border-b-[8px] border-b-transparent absolute -bottom-3 left-10 rotate-90"></div>
  );
};

export default PhoneCallLeadButton;

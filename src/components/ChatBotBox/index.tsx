"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Bot,  LoaderCircle, Send } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "../ui/textarea";
import { ChatBotBoxProps } from "./types";

function ChatBotBox({title, name, welcomeMessage}:ChatBotBoxProps) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="fixed bottom-2 right-2 lg:bottom-6 lg:right-6 z-40">
      <Button
        className="w-8 h-8 lg:w-10 lg:h-10 max-w-12 rounded-full bg-orange-500 hover:text-white text-black flex justify-center items-center p-0"
        onClick={toggleShow}
      >
        <Bot size="54" className="" />
      </Button>

      <Sheet open={show} onOpenChange={() => toggleShow()}>
        <SheetContent className="flex flex-col p-2 w-full lg:min-w-[560px]">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
          </SheetHeader>
          <div className=" flex-1 flex flex-col">
            {/* Bubbles Chat Area */}
            <div className="flex flex-col flex-1 gap-2">
              <div className="bg-slate-100 rounded-lg rounded-tl-none p-2 text-sm mr-6">
                <span className="text-xs font-bold ">{name}</span>
                <p>
                {welcomeMessage}
                </p>
              </div>
              <div className="bg-slate-300 rounded-lg rounded-tr-none p-2 text-sm ml-6 text-right">
                <span className="text-xs font-bold">Me</span>
                <p>How can I create my {process.env.NEXT_PUBLIC_VENDOR_NAME} Account?</p>
              </div>
              <div className="bg-slate-100 rounded-lg rounded-tl-none p-2 text-sm mr-6">
                <LoaderCircle className="animate-spin repeat-infinite" size="16" /> Wait a second please ...
              </div>
            </div>
            <div className="relative">
              <Textarea className="pe-11" />
              <Button
                className="absolute top-2 right-2 rounded-full w-8 h-8 min-h-8 flex items-center justify-center"
                type="button"
              >
                <Send />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ChatBotBox;

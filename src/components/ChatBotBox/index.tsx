"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Bot, Send } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "../ui/textarea";

function ChatBotBox() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="fixed -bottom-2 -right-2 lg:bottom-6 lg:right-6 z-40">
      <Button
        className="w-12 h-12 max-w-12 rounded-full bg-orange-500 hover:text-white text-black flex justify-center items-center p-0"
        onClick={toggleShow}
      >
        <Bot size="54" className="" />
      </Button>

      <Sheet open={show} onOpenChange={() => toggleShow()}>
        <SheetContent className="flex flex-col p-2 w-full lg:w-auto">
          <SheetHeader>
            <SheetTitle>Unibank Assistant</SheetTitle>
          </SheetHeader>
          <div className=" flex-1 flex flex-col">
            {/* Bubbles Chat Area */}
            <div className="flex flex-col flex-1 gap-2">
              <div className="bg-slate-100 rounded-lg p-2 text-sm mr-6">Hi I&apos;m your <span className="font-semibold text-orange-500">Unibank Digital Assistant</span>, Im here to help you in your journey with us, please feel free to ask anything about our Services, Products and more?</div>
              <div className="bg-slate-300 rounded-lg p-2 text-sm ml-6">How create my Unibank Account?</div>
            </div>
            <div className="relative">
              <Textarea className="pe-11" />
              <Button className="absolute top-2 right-2 rounded-full w-8 h-8 min-h-8 flex items-center justify-center" type="button"><Send /></Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ChatBotBox;

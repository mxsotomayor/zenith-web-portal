import React from "react";
import ForexSimulatorProps from "./types";
import { Label } from "../ui/label";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select } from "../ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { ArrowRightLeft } from "lucide-react";

function ForexSimulator({ title, items }: ForexSimulatorProps) {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 2xl:p-0">
        <h3 className="text-3xl font-semibold mb-6">{title}</h3>
        <div className="flex border rounded-md bg-white shadow-sm">
          <div className="w-32">
            <div className="h-10 border-b flex items-center justify-between px-2 bg-slate-100">
              <Label className="font-bold">Currency</Label>
            </div>

            <div className="p-2  border-b">
              <Label className="font-semibold">Compra</Label>
            </div>

            <div className="p-2 ">
              <Label className="font-semibold">Venta</Label>
            </div>
          </div>

          <div className="flex-1 flex overflow-x-auto">
            {items.map((item, index) => (
              <div className="min-w-32 flex-1 " key={index}>
                <div className="h-10 border-b flex items-center justify-between px-2 border-l  ">
                  <Label>{item.name}</Label>
                  <Image
                    src={`https://flagsapi.com/${item.iso.toUpperCase()}/flat/64.png`}
                    width="28"
                    height="20"
                    alt={item.iso}
                  />
                </div>

                <div className="p-2 border-b border-l">
                  <Label>{item.buy}</Label>
                </div>

                <div className="p-2 border-l">
                  <Label>{item.sell}</Label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* =============================== */}
        <div className="border rounded-md p-8 bg-white mt-8 flex items-end gap-4 w-3/4">
          <div className="w-[480px] grid gap-4">
            <div>
              <Input />
            </div>
            <div>
              <Input />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Select>
                  <SelectTrigger className="w-full h-9 rounded border text-start px-4">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Convertir</Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="w-60 h-60 border rounded-md p-4">
              <Image
                src={`https://flagsapi.com/US/flat/64.png`}
                width="98"
                height="80"
                alt="us"
              />
              <h4 className="font-bold text-md">Base Currency</h4>
              <h6 className="font-semibold text-5xl  mt-3">0.0</h6>
            </div>
            <span className="border w-12 h-12 rounded-full flex items-center justify-center">
              <ArrowRightLeft />
            </span>
            <div className="w-60 h-60 border rounded-md p-4">
              <Image
                src={`https://flagsapi.com/GB/flat/64.png`}
                width="98"
                height="80"
                alt="us"
              />
              <h4 className="font-bold text-md">GBP - Pound Sterling</h4>
              <h6 className="font-semibold text-5xl mt-3">0.0</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForexSimulator;

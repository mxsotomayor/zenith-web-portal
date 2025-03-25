"use client";

import React, { useEffect, useState } from "react";
import ForexSimulatorProps, { ForexItem } from "./types";
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
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { DateHelper } from "@/core/lib/helpers/dateHelper";

function ForexSimulator({ title, baseCurrency, items }: ForexSimulatorProps) {
  const [isoSelected, setIsoSelected] = useState<ForexItem | null>(null);
  const [baseAmount, setBaseAmount] = useState(1);
  const [valueExchaged, setValueEnchanged] = useState(0);


  const computeChanged = () => {
    setValueEnchanged(parseFloat(((isoSelected?.buy ?? 0) * baseAmount).toFixed(4)));
  }

  useEffect(()=>{
    computeChanged()
  },[isoSelected, baseAmount])



  useEffect(() => {
    setIsoSelected(baseCurrency ?? null);
  }, []);



  return (
    <div className="py-12">
      <div className="container mx-auto px-4 2xl:p-0">
        <h3 className="text-xl lg:text-4xl font-semibold mb-6 text-blue-900">{title}</h3>
        <div className="flex border overflow-hidden rounded-md bg-white shadow-sm">
          <div className="w-32 bg-slate-100">
            <div className="h-10 border-b flex items-center justify-between px-2 ">
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
                <div className="h-10 border-b flex items-center gap-3  flex-row px-2 border-l  ">
                  <Image
                    src={`https://flagsapi.com/${item.iso.toUpperCase()}/flat/64.png`}
                    width="28"
                    height="20"
                    alt={item.iso}
                  />
                  <Label>{item.name}</Label>
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
        <div className="border rounded-md p-8 bg-white mt-8 flex flex-col lg:flex-row lg:items-end gap-4">
          <div className="w-full mb-8 lg:mb-0 lg:w-[480px] grid gap-4">
            <div>
              <h4 className="text-3xl font-semibold">Conversor</h4>
            </div>
            <div>
              <Input
                value={baseAmount}
                onChange={(evt) => setBaseAmount(parseFloat(evt.target.value))}
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Select
                  value={isoSelected?.iso}
                  onValueChange={(value) => {
                    setIsoSelected(
                      items.find((item) => item.iso == value) ?? null
                    );
                  }}
                >
                  <SelectTrigger className="w-full h-9 rounded border text-start px-4">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((item, index) => (
                      <SelectItem key={index} value={item.iso}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={`https://flagsapi.com/${item.iso.toUpperCase()}/flat/64.png`}
                            width="26"
                            height="20"
                            alt={item.iso}
                          />
                          {item.name} - {item.fullName}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button>Convertir</Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-72 h-60 border rounded-md p-4  bg-slate-50">
              <Image
                src={`https://flagsapi.com/${baseCurrency.iso.toUpperCase()}/flat/64.png`}
                width="98"
                height="80"
                alt="us"
              />
              <h4 className="font-semibold text-sm">Base Currency</h4>
              <h4 className="font-semibold text-md  text-ellipsis line-clamp-1">{baseCurrency?.name} - {baseCurrency?.fullName}</h4>
              <h6 className="font-semibold text-2xl lg:text-5xl mt-3">{baseAmount}</h6>
            </div>
            <span className="border min-w-12 w-12 h-12 rounded-full flex items-center justify-center  bg-slate-50 m-2">
              <ArrowRightLeft />
            </span>
            <div className="w-72 h-60 border rounded-md p-4 bg-slate-50">
              <Image
                src={`https://flagsapi.com/${
                  isoSelected?.iso.toUpperCase() ?? "US"
                }/flat/64.png`}
                width="98"
                height="80"
                alt={isoSelected?.iso ?? ""}
              />
              <h4 className="font-semibold text-md text-ellipsis line-clamp-1">{isoSelected?.name} - {isoSelected?.fullName}</h4>
              <h5 className="font-light text-sm text-ellipsis line-clamp-1">{DateHelper.formatDate(new Date())}</h5>
              <h6 className="font-semibold text-2xl lg:text-5xl mt-3">{valueExchaged}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForexSimulator;

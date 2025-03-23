"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";
import Banner from "./schema";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function HeroBanner({ items }: { items: Banner[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrent(index);
    }
  };

  useEffect(() => {
    if (!api) return;

    // const interval = setInterval(() => {
    //   api.scrollNext()
    // }, 5000) // Change slide every 5 seconds

    // return () => clearInterval(interval)
  }, [api]);

  return (
    <div data-name="HeroBanner" className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0 relative h-[620px] lg:h-[640px] 2xl:h-[800px] overflow-hidden">
                  <Image
                    src={slide.media.url || "/placeholder.svg"}
                    alt={slide.media.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                  <div className="absolute container mx-auto  inset-0 flex flex-col justify-center px-4  2xl:px-0 text-white">
                    {slide.topPill && (
                      <span className="border w-fit px-3 py-1 rounded-lg text-xs mb-2 bg-white/20 backdrop-blur-lg">
                        {slide.topPill}
                      </span>
                    )}

                    <h2
                      className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl font-semibold mb-2 sm:mb-4  max-w-3xl 2xl:max-w-4xl"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    ></h2>
                    <p
                      className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-6 max-w-2xl"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>

                    {slide.listItems && (
                      <ul className="mb-4 grid gap-2">
                        {slide.listItems.slice(0,3).map((item, index) => (
                          <li key={index} className="flex gap-x-2 items-center">
                            <CheckCircle2 className="text-emerald-400" size="20"/>{" "}
                            <span className="text-sm md:text-md">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {
                      slide.cta && ( 
                        <Link href={slide.cta.url} className="w-fit flex items-center rounded text-sm px-6 h-12 bg-orange-600 hover:bg-orange-500 gap-3">
                          <span>{slide.cta.text}</span>
                         <ChevronRight />
                        </Link> 
                      )
                    }
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" /> */}
      </Carousel>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

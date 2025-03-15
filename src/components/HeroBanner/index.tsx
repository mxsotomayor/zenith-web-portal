"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import Banner from "./schema"

export default function HeroBanner({items}:{items: Banner[]}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
      setCurrent(index)
    }
  }

  useEffect(() => {
    if (!api) return

    // const interval = setInterval(() => {
    //   api.scrollNext()
    // }, 5000) // Change slide every 5 seconds

    // return () => clearInterval(interval)
  }, [api])

 

  return (
    <div data-name="HeroBanner" className="relative">
    <Carousel  setApi={setApi} className="w-full">
      <CarouselContent>
        {items.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="border-0">
              <CardContent className="p-0 relative h-[620px] lg:h-[640px] 2xl:h-[800px] overflow-hidden">
                <Image
                  src={slide.media.url|| "/placeholder.svg"}
                  alt={slide.media.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute container mx-auto  inset-0 flex flex-col justify-center px-4  2xl:px-0 text-white">
                  {/* <span className="border w-fit px-3 py-1 rounded-lg text-xs mb-2 bg-white/20 backdrop-blur-lg">Desde 14/Ene/2025 - 15/Dic/2025</span> */}
                  <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold mb-2 sm:mb-4 max-w-4xl" dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                  <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-2xl" dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                  <Button asChild className="w-fit h-12 bg-orange-600 hover:bg-orange-500" size="lg">
                    <Link href={slide.cta.url}>{slide.cta.text}</Link>
                  </Button>
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
          current === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
        }`}
        onClick={() => handleDotClick(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
  </div>
  )
}


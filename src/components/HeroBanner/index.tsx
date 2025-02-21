"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"

export default function HeroBanner() {
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

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api])

  const slides = [
    {
      image: "/padre-hija-desayunando.im1735665141640im.avif?height=600&width=1600",
      alt: "Hero Image 1",
      title: "Pagar tus impuestos y disfrutar de los que más amas es posible.",
      description: "Discover amazing products and services tailored just for you.",
      cta: "Sign Up Now",
      ctaLink: "/login",
    },
    {
      image: "/GettyImages-1326458117-e72cd6f16ae44bedbd7f3ca90ffb2053.jpg?height=600&width=1600",
      alt: "Hero Image 2",
      title: "Register Your Business Start winning a lot of benefits",
      description: "Get up to 50% off on selected items. Limited time offer!",
      cta: "Get Offer Now!",
      ctaLink: "/business/login",
    },
    {
      image: "/pareja-bailando-cocina-casa-card.im1616802082927im.avif?height=600&width=1600",
      alt: "Hero Image 3",
      title: "Join Our Community",
      description: "Connect with like-minded individuals and grow together.",
      cta: "Sign Up",
      ctaLink: "/business/signup",
    },
  ]

  return (
    <div className="relative">
    <Carousel  setApi={setApi} className="w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="border-0">
              <CardContent className="p-0 relative h-[620px] lg:h-[640px] 2xl:h-[800px] overflow-hidden">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute container mx-auto  inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 text-white">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 max-w-3xl">{slide.title}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-lg">{slide.description}</p>
                  <Button asChild className="w-fit h-12 bg-orange-600 hover:bg-orange-500" size="lg">
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
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
    {slides.map((_, index) => (
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


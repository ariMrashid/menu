"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // Import Next.js Image component

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  // Array of image paths
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-none place-self-center" // Remove max-width restriction
    >
      <CarouselContent className="h-2/6">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            {/* Remove padding and ensure the card takes full width and height */}
            <div className="w-full h-full">
              <Card className="w-full h-full border-none">
                {" "}
                {/* Remove card border and ensure full size */}
                <CardContent className="flex p-0 w-full h-full">
                  {" "}
                  {/* Remove padding and ensure full size */}
                  {/* Use Next.js Image component for optimized images */}
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={1920} // Set the width of the image
                    height={900} // Set the height of the image
                    className="w-full h-full object-cover" // Make the image cover the entire card
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-20 bg-black text-yellow-500" />
      <CarouselNext className="mr-20 bg-black text-yellow-500" />
    </Carousel>
  );
}

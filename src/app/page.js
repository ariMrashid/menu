"use client";
import { CarouselPlugin } from "@/components/myCarousel";
import Image from "next/image";
import RestaurantArticle from "../components/Article";
import { Parallax } from "react-parallax";

export default function Home() {
  return (
    <div
      className="bg-gray-600"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Carousel Section */}
      <div style={{ flex: 1 }}>
        <CarouselPlugin />
      </div>

      {/* Parallax Section
      <Parallax
        bgImage="/images/1.png"
        strength={500}
        className="h-[300px] md:h-[250px] flex items-center justify-center"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }} // Use inline styles for background image
      >
        <div className="parallax-content">
          <h1 className="text-white text-4xl font-bold text-center">
            Parallax with react-parallax
          </h1>
        </div>
      </Parallax> */}

      <RestaurantArticle
        header="About Our Café"
        title="Cozy & Elegant Atmosphere"
        description="Our café offers a warm and inviting space with handcrafted coffee and delightful pastries."
        imageSrc="/images/5.png" // Make sure the image path is correct
      />

      <RestaurantArticle
        header="About Our Café"
        title="Cozy & Elegant Atmosphere"
        description="Our café offers a warm and inviting space with handcrafted coffee and delightful pastries."
        imageSrc="/images/2.png" // Make sure the image path is correct
      />
      <Parallax
        bgImage="/images/1.png"
        strength={500}
        className="h-[300px] md:h-[250px] flex items-center justify-center"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }} // Use inline styles for background image
      >
        <div className="parallax-content">
          <h1 className="text-white text-4xl font-bold text-center">
            Parallax with react-parallax
          </h1>
        </div>
      </Parallax>
      <RestaurantArticle
        header="Discover Fine Dining"
        title="A Culinary Journey Awaits"
        description="Experience a blend of international flavors in a sophisticated and luxurious setting."
        imageSrc="/images/3.png"
      />
    </div>
  );
}

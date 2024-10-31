import React from "react";
import PopButton from "./PopButton";
import Image from "next/image";
import PhotoSlider from "./PhotoSlider";

export default function PhotoSection() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center mb-16">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
        <PhotoSlider />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold mb-4 text-black">Our Atmosphere</h3>
        <p className="text-foreground mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="w-fit">
          <PopButton
            href="/"
            title="View gallery"
            btnStyles="bg-black"
            textStyles="text-white"
          />
        </div>
      </div>
    </div>
  );
}

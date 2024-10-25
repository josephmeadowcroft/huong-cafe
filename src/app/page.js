"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LocationBox from "@/components/LocationBox";
import { Button } from "@/components/ui/button";
import SocialMediaBox from "@/components/InstagramBox";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-secondary">
      <HeroSection />

      <div className="container mx-auto px-4 py-4 pt-2">
        <WelcomeSection />

        <LocationBox />

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Card Image 2"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Our Atmosphere
            </h3>
            <p className="text-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>View Gallery</Button>
          </div>
        </div>

        <SocialMediaBox />
      </div>
    </div>
  );
}

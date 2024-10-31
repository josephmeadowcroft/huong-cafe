"use client";

import HeroSection from "../../src/components/HeroSection";
import PolaroidSection from "../../src/components/PolaroidSection";
import LocationBox from "../../src/components/LocationBox";
import SocialMediaBox from "../../src/components/InstagramBox";
import PhotoSection from "../../src/components/PhotoSection";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-secondary">
      <HeroSection />

      <div className="container mx-auto px-4 py-4 pt-2">
        <PolaroidSection />

        <LocationBox />

        <PhotoSection />

        <SocialMediaBox />
      </div>
    </div>
  );
}

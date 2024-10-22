"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-secondary">
      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Alternating Cards */}
      <div className="container mx-auto px-4 py-4 pt-2">
        <WelcomeSection />

        {/* Interstitial Text Box */}
        <div className="bg-primary text-white p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Where to find us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

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
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Our Atmosphere
            </h3>
            <p className="text-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-accent-yellow transition-colors duration-200">
              View Gallery
            </button>
          </div>
        </div>

        {/* Interstitial Text Box */}
        <div className="bg-accent-yellow text-primary p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Special Events</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Card Image 3"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Visit Us</h3>
            <p className="text-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-accent-yellow transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

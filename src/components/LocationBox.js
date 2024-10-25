"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Emoji from "./Emoji";

const position = [51.54382, -0.04697];

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function LocationBox() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-primary shadow-lg mx-auto p-4 md:p-10 rounded-lg relative mb-16 flex flex-col md:flex-row">
      <div className="bg-white shadow-lg w-full z-0 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row text-black">
          <div className="hidden md:block w-full md:w-2/5 h-[350px]">
            {isMounted && <Map position={position} />}
          </div>
          <div className="w-full md:w-3/5 p-6">
            <h3 className="text-3xl font-bold mb-4">Where to find us</h3>
            <div className="mb-4 text-lg">
              <p>
                <Emoji symbol="📍" />
                190 Well Street
              </p>
              <p>Hackney</p>
              <p>London</p>
              <p>E9 6QT</p>
            </div>
            <div className="mb-4 text-lg">
              <h4 className="font-semibold">Opening Hours:</h4>
              <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
            </div>
            <div className="md:hidden">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors duration-200"
              >
                View on Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

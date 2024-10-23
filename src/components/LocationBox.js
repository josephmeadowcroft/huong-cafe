"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [51.54382, -0.04697];

const customIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LocationBox() {
  useEffect(() => {
    // This is needed to re-render the map when the component mounts
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center py-4 bg-primary text-white">
        Where to Find Us
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[400px]">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Huong Cafe <br /> Contemporary Vietnamese Cuisine
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="w-full md:w-1/2 p-6 text-black">
          <h3 className="text-xl font-semibold mb-4">Huong Cafe</h3>
          <p className="mb-4">
            Experience the rich flavors of contemporary Vietnamese cuisine in
            the heart of the city. Our cafe offers a unique blend of traditional
            recipes with a modern twist.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold">Address:</h4>
            <p>123 Example Street</p>
            <p>City, State 12345</p>
          </div>
          <div>
            <h4 className="font-semibold">Opening Hours:</h4>
            <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

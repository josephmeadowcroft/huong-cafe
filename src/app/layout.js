import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Lexend_Deca } from "next/font/google";
import NavBar from "@/components/NavBar";

const lexened_deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata = {
  title: "Huong Cafe",
  description: "Contemporary Vietnamese cuisine in your neighborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexened_deca.className} bg-primary`}>
        <NavBar />
        <main className="container py-8 text-foreground pt-28">{children}</main>
        <footer className="bg-primary p-4 mt-8">
          <div className="container mx-auto text-center text-white">
            © 2024 Huong Cafe. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

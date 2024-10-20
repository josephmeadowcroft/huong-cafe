import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huong Cafe",
  description: "Contemporary Vietnamese cuisine in your neighborhood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <NavBar />
        <main className="container mx-auto py-8 text-foreground pt-32">
          {children}
        </main>
        <footer className="bg-white text-hred p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2023 Huong Cafe. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

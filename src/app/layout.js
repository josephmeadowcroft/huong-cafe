import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { metadata } from "./metadata";
import dynamic from 'next/dynamic';
import ClientProvider from './ClientProvider';

const lexend_deca = Lexend_Deca({ 
  subsets: ["latin"], 
  display: "swap",
  adjustFontFallback: false // Add this to prevent font flashing
});

// Move Leaflet CSS import to a client component
const LeafletStyles = dynamic(() => import('./LeafletStyles'), {
  ssr: false
});

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend_deca.className} bg-primary`}>
        <ClientProvider>
          <LeafletStyles />
          <NavBar />
        </ClientProvider>
        <main className="container py-8 text-foreground pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
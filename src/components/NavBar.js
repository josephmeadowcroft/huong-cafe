"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PopButton from "./PopButton";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 bg-primary z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "py-2 shadow-md" : "py-6"}
      `}
    >
      <nav className="container mx-auto px-4">
        <div
          className={`
          flex items-center justify-between transition-all duration-300 ease-in-out
          ${isScrolled ? "h-12" : "h-14"}
        `}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold flex items-center transition-all duration-300 ease-in-out origin-left ${
              isScrolled ? "scale-100" : "scale-125 opacity-0"
            }`}
          >
            <div className="relative">
              <Image
                src="/huong-logo-rect.png"
                alt="Huong Cafe Logo"
                width={120}
                height={50}
                className="transition-transform duration-300 ease-in-out"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-semibold text-white hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li key="order-button">
              <PopButton href="/order" title="Order Now" />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary absolute top-full left-0 right-0 z-50"
          >
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-white font-semibold hover:text-accent-yellow transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/order"
                  className="block text-white font-semibold hover:text-accent-yellow transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;

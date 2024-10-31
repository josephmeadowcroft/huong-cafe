"use client";

import Link from "next/link";
import GithubIcon from "../../public/icons/GithubIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-2 pb-4 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 text-gray-300">
            <p>&copy; {currentYear} Huong Cafe. All rights reserved.</p>
            <p>Created by Joseph Meadowcroft</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/josephmeadowcroft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

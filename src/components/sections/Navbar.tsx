"use client";

import { useEffect, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import NavbarIcons from "./widgets/NavbarIcons";
import NavbarLinks from "./widgets/NavbarLinks";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [closing, setClosing] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 50);

      if (isOpen && Math.abs(currentScrollY - lastScrollY) > 10) {
        handleCloseMenu();
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        hasScrolled && !isMobile
          ? "bg-gradient-to-b from-black via-gray-900 to-transparent"
          : isMobile
          ? "bg-black/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/gocricket-dark.svg"
              alt="Go Cricket"
              width={200}
              height={200}
              style={{ height: "auto", width: "auto" }}
            />
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <NavbarLinks />
          </div>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <NavbarIcons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              onClick={() => (isOpen ? handleCloseMenu() : setIsOpen(true))}
              className="hamburger-button"
            >
              <svg
                className="w-8 h-8 active:bg-transparent"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Smooth Dropdown Animation */}
      <div
        className={`hamburger-dropdown
          ${
            isOpen && !closing
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className="flex flex-col space-y-6 pb-4 text-center text-lg font-semibold">
          <NavbarLinks />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pb-6 mt-6">
          <NavbarIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

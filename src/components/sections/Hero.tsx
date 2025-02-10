"use client";

import Navbar from "../sections/Navbar";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  const heroImage = isMobile
    ? "/images/cricket-hero-mobile.webp"
    : "/images/cricket-hero-desktop.webp";

  return (
    <div
      id="download"
      className="relative md:min-h-screen w-full flex flex-col bg-[#00001B] text-white overflow-y-auto"
    >
      <Navbar />

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-[#00001b]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mt-[90%] md:mt-auto mb-16 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mt-4">
          <span className="text-highlight">Predict</span> Match Winners and
          <br /> win from <span className="text-highlight">₹1 Crore</span> Prize
          Pool
        </h1>
        {/* Download buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on Google Play"
          >
            <Image
              src="/images/googleplay.svg"
              alt="Google Play"
              width={150}
              className="download-button"
              height={50}
            />
          </a>

          {/* ✅ Corrected */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on App Store"
          >
            <Image
              src="/images/appstore.svg"
              className="download-button"
              alt="App Store"
              width={150}
              height={50}
            />
          </a>

          {/* ✅ Corrected */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

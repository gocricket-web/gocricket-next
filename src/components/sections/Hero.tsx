"use client";

import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

const Navbar = dynamic(() => import("../sections/Navbar"), { ssr: false });

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  const heroImage = isMobile
    ? "/images/mob-homepage-final.webp"
    : "/images/desktop-banner.webp";

  return (
    <div
      id="download"
      className="relative md:min-h-screen w-full flex flex-col bg-[#00001B] text-white overflow-hidden"
    >
      <Navbar />

      {/* ✅ Optimized Hero Image for LCP */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-[#00001b]" />
      </div>

      <div className="absolute top-[25%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 md:w-80 lg:w-96">
      <Image
          src="/images/2025_ICC.svg"
          alt="Champions Trophy 2025"
          width={500}
          height={200}
          className="w-full object-contain"
          priority
        />
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 mt-[90%] md:mt-auto mb-16 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mt-4">
          <span className="text-highlight">Predict</span> Match Winners and
          <br /> win from <span className="text-highlight">₹1 Crore</span> Prize
          Pool
        </h1>

        {/* ✅ Optimized Download Buttons */}
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
              height={50}
              className="download-button"
              priority
            />
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on App Store"
          >
            <Image
              src="/images/appstore.svg"
              alt="App Store"
              width={150}
              height={50}
              className="download-button"
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

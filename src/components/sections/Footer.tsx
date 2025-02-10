"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { SHARE_URL } from "@/constants";
import Image from "next/image";
import ShareButtons from "./widgets/Socials";

const Footer = () => {
  const isMobile = useIsMobile();

  const FooterBg = isMobile
    ? "url('/images/footer-bg-mobile.png')"
    : "url('/images/footer-bg.png')";

  return (
    <footer className="relative pt-10 mt-20 pb-20 xl:pt-60 md:pt-40 text-white md:px-10">
      {/* Footer Background Figures */}
      <div
        className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat z-10"
        style={{ backgroundImage: FooterBg }}
      ></div>

      {/* Footer Eclipse Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-1">
        {isMobile ? (
          <Image
            src={"images/footer-eclipse-mobile.svg"}
            className="w-full h-full"
            width={100}
            height={100}
            alt="Footer Eclipse Mobile"
          />
        ) : (
          <Image
            src={"images/footer-eclipse.svg"}
            className="w-full h-full"
            width={100}
            height={100}
            alt="Footer Eclipse"
          />
        )}
      </div>

      {/* Footer Content */}
      <div className="relative xl:-top-40 flex flex-col items-center text-center z-20">
        {/* Circle Background Around Icon */}
        <div className="flex items-center justify-center">
          <div className="footer-icon"></div>
          <Image
            src="/images/footer-icon.png"
            alt="Share Icon"
            className="w-32 top-0 relative animate-float"
            loading="lazy"
            width={100}
            height={100}
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl xl:text-6xl font-bold mt-10 xl:mt-16">
          Share the Fun With Friends
        </h2>

        {/* Social Share Buttons */}
        <div className="flex gap-3 mt-10 xl:mt-16 items-center">
          <ShareButtons />

          {/* Instagram - Copy to Clipboard */}
          <button
            aria-label="Copy Website Link to clipboard"
            onClick={() => {
              navigator.clipboard.writeText(SHARE_URL);
              alert(
                "Link copied to clipboard! Paste it in your Instagram bio or message."
              );
            }}
            className="social-icon"
          >
            <Image
              className="w-full h-full object-cover"
              src={"images/instagram.svg"}
              width={50}
              height={50}
              alt="Instagram Icon"
            />
          </button>
        </div>

        {/* Navigation Links */}
        {!isMobile && (
          <nav className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 mt-10 xl:mt-20 text-sm md:text-base text-gray-400">
            {[
              { name: "How to play", link: "#how-to-play" },
              { name: "FAQs", link: "#testimonials" },
              { name: "Terms of Services", link: "#" },
              { name: "Privacy", link: "#" },
            ].map((item, index, arr) => (
              <div
                key={item.name}
                className="flex font-semibold items-center justify-center"
              >
                <a
                  href={item.link}
                  className="hover:text-white text-sm md:text-xl"
                >
                  {item.name}
                </a>
                {index < arr.length - 1 && (
                  <span className="pl-10 text-gray-500">|</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Copyright and Logos */}
        <div className="xl:absolute mt-10 xl:-bottom-40 xl:mt-0 w-full max-w-6xl">
          {/* Separator Line */}
          <hr className="border-t border-gray-600 opacity-50 w-full mb-10" />

          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            {/* Left: Copyright Text */}
            <p className="text-xs md:text-xl text-gray-500 text-center md:text-left mt-5">
              © 2025 GOCricket. All rights reserved.
            </p>

            {/* Right: League Logos */}
            <div className="flex gap-6 mt-4 md:mt-0">
              <Image
                src="/images/champions-logo.png"
                alt="Champions Trophy"
                className="h-6 md:h-8"
                loading="lazy"
                width={100}
                height={100}
              />
              <Image
                src="/images/ipl-logo.png"
                alt="Indian Premier League"
                className="h-6 md:h-8"
                loading="lazy"
                width={100}
                height={100}
              />
              <Image
                src="/images/icc-logo.png"
                alt="ICC World Cup"
                className="h-6 md:h-8"
                loading="lazy"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Example team logos from /public/images/logo1.png to logo10.png
const teamLogos = Array.from(
  { length: 8 },
  (_, i) => `/images/country${i + 1}.png`
);

const TeamCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full bg-[#00001B] flex justify-center relative">
      <div className="w-full">
        <Slider {...settings} className="overflow-hidden">
          {teamLogos.map((logo, index) => (
            <div key={index} className="px-1">
              {/* Gradient box with rounded corners */}
              <div className="team-carousel-card">
                {/* Circle behind the team logo */}
                <div className="w-24 h-24 rounded-full bg-[#1C1C46] flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Team ${index + 1}`}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;

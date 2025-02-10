"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import benefits from "@/data/benefits-data";
import BenefitCard from "./widgets/BenefitCard";
import useIsMobile from "@/hooks/useIsMobile";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Benefits = () => {
  const isMobile = useIsMobile();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-16 px-6 md:px-10 text-white text-center">
      <div className="max-w-7xl mx-auto w-full relative">
        <Slider {...settings}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="px-3 slider-container">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Benefits;

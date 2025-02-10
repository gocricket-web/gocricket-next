"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "@/data/customer-review-data";
import Image from "next/image";

import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center text-center py-20 px-10"
    >
      <h2 className="text-center text-2xl font-bold mb-12">Testimonials</h2>
      <div className="max-w-7xl w-full relative">
        <Slider {...settings}>
          {reviews.map((review: any) => (
            <div key={review.id} className="px-3">
              <div className="rounded-[19px] bg-gradient-to-b from-[#00001B00] to-[#1E1E49] p-6 h-[230px] flex flex-col">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full object-cover aspect-square mr-4"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-white m-0 pl-0.5">
                      {review.name}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(Math.floor(review.rating))].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 flex-1 text-start overflow-y-auto">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
